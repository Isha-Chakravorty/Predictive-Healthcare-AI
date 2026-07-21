import os
import pandas as pd
import numpy as np
import joblib
import logging
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, roc_auc_score, confusion_matrix, classification_report

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

DATA_DIR = os.path.join(os.path.dirname(__file__), "..", "datasets")
MODELS_DIR = os.path.join(os.path.dirname(__file__), "..", "models")
EVAL_DIR = os.path.join(os.path.dirname(__file__), "..", "evaluation")

# Ensure directories exist
os.makedirs(MODELS_DIR, exist_ok=True)
os.makedirs(EVAL_DIR, exist_ok=True)

def train_and_evaluate(df, target_col, dataset_name, feature_handling="standard"):
    logger.info(f"--- Training models for {dataset_name} ---")
    
    # In some datasets (like heart disease), missing values are marked as '?'
    df.replace('?', np.nan, inplace=True)
    df = df.dropna()
    
    X = df.drop(columns=[target_col])
    # Heart disease target is 0 (no presence) to 4. We want binary classification (0 vs 1-4)
    if dataset_name == "Heart Disease":
        y = (df[target_col].astype(int) > 0).astype(int)
    else:
        y = df[target_col].astype(int)
        
    feature_names = list(X.columns)
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)
    
    # Preprocessing
    numeric_features = X.columns
    numeric_transformer = Pipeline(steps=[
        ('imputer', SimpleImputer(strategy='median')),
        ('scaler', StandardScaler())
    ])
    
    preprocessor = ColumnTransformer(
        transformers=[
            ('num', numeric_transformer, numeric_features)
        ])
    
    # Models to try
    models = {
        "Logistic Regression": LogisticRegression(random_state=42, max_iter=1000),
        "Decision Tree": DecisionTreeClassifier(random_state=42, max_depth=5)
    }
    
    best_model = None
    best_f1 = 0
    best_name = ""
    
    eval_report = f"# Evaluation Report: {dataset_name}\n\n"
    
    for name, model in models.items():
        logger.info(f"Training {name}...")
        clf = Pipeline(steps=[('preprocessor', preprocessor),
                              ('classifier', model)])
        
        clf.fit(X_train, y_train)
        y_pred = clf.predict(X_test)
        
        # In case of binary classification, if predict_proba is not available we catch it
        if hasattr(clf, "predict_proba"):
            y_prob = clf.predict_proba(X_test)[:, 1]
            roc_auc = roc_auc_score(y_test, y_prob)
        else:
            roc_auc = "N/A"
            
        acc = accuracy_score(y_test, y_pred)
        prec = precision_score(y_test, y_pred, zero_division=0)
        rec = recall_score(y_test, y_pred, zero_division=0)
        f1 = f1_score(y_test, y_pred, zero_division=0)
        cm = confusion_matrix(y_test, y_pred)
        
        eval_report += f"## Model: {name}\n"
        eval_report += f"- **Accuracy**: {acc:.4f}\n"
        eval_report += f"- **Precision**: {prec:.4f}\n"
        eval_report += f"- **Recall**: {rec:.4f}\n"
        eval_report += f"- **F1-Score**: {f1:.4f}\n"
        if roc_auc != "N/A":
            eval_report += f"- **ROC-AUC**: {roc_auc:.4f}\n"
            
        eval_report += f"### Confusion Matrix\n```text\n{cm}\n```\n\n"
        eval_report += f"### Classification Report\n```text\n{classification_report(y_test, y_pred, zero_division=0)}\n```\n\n"
        
        if f1 > best_f1:
            best_f1 = f1
            best_model = clf
            best_name = name
            
    logger.info(f"Best model for {dataset_name} is {best_name} with F1: {best_f1:.4f}")
    
    # Save the evaluation report
    eval_path = os.path.join(EVAL_DIR, f"{dataset_name.lower().replace(' ', '_')}_report.md")
    with open(eval_path, "w") as f:
        f.write(eval_report)
        
    # Save the best model and feature names
    model_data = {
        "pipeline": best_model,
        "feature_names": feature_names,
        "model_type": best_name
    }
    
    model_path = os.path.join(MODELS_DIR, f"{dataset_name.lower().replace(' ', '_')}_model.joblib")
    joblib.dump(model_data, model_path)
    logger.info(f"Saved best model to {model_path}")

def main():
    diabetes_path = os.path.join(DATA_DIR, "diabetes.csv")
    heart_path = os.path.join(DATA_DIR, "heart.csv")
    
    if os.path.exists(diabetes_path):
        df_diabetes = pd.read_csv(diabetes_path)
        train_and_evaluate(df_diabetes, "Outcome", "Diabetes")
    else:
        logger.error(f"Dataset not found: {diabetes_path}. Run download_data.py first.")
        
    if os.path.exists(heart_path):
        df_heart = pd.read_csv(heart_path)
        train_and_evaluate(df_heart, "target", "Heart Disease")
    else:
        logger.error(f"Dataset not found: {heart_path}. Run download_data.py first.")

if __name__ == "__main__":
    main()
