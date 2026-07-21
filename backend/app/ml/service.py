import os
import joblib
import pandas as pd
import numpy as np
import logging
from typing import Dict, Any

logger = logging.getLogger(__name__)

class MLService:
    _instance = None
    
    diabetes_model = None
    heart_disease_model = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(MLService, cls).__new__(cls)
        return cls._instance

    def load_models(self):
        logger.info("Loading ML Models...")
        models_dir = os.path.join(os.path.dirname(__file__), "..", "..", "ml", "models")
        
        diabetes_path = os.path.join(models_dir, "diabetes_model.joblib")
        heart_path = os.path.join(models_dir, "heart_disease_model.joblib")
        
        if os.path.exists(diabetes_path):
            self.diabetes_model = joblib.load(diabetes_path)
            logger.info("Loaded Diabetes model.")
        else:
            logger.warning(f"Diabetes model not found at {diabetes_path}")
            
        if os.path.exists(heart_path):
            self.heart_disease_model = joblib.load(heart_path)
            logger.info("Loaded Heart Disease model.")
        else:
            logger.warning(f"Heart Disease model not found at {heart_path}")

    def predict(self, input_features: Dict[str, Any]) -> Dict[str, Any]:
        keys = set(k.lower() for k in input_features.keys())
        
        # Heuristic to determine which model to use
        # Diabetes: Glucose, BMI, Insulin, Pregnancies, etc.
        # Heart Disease: cp, thalach, chol, trestbps, etc.
        diabetes_keywords = {"glucose", "bmi", "insulin", "pregnancies", "skinthickness", "diabetespedigreefunction"}
        heart_keywords = {"cp", "thalach", "chol", "trestbps", "fbs", "restecg", "exang", "oldpeak", "slope", "ca", "thal"}
        
        # Normalize keys for matching
        normalized_inputs = {k.lower(): v for k, v in input_features.items()}
        
        is_diabetes = len(keys.intersection(diabetes_keywords)) > 0
        is_heart = len(keys.intersection(heart_keywords)) > 0
        
        if is_diabetes and not is_heart:
            return self._predict_diabetes(normalized_inputs)
        elif is_heart and not is_diabetes:
            return self._predict_heart_disease(normalized_inputs)
        else:
            raise ValueError("Ambiguous or missing features. Cannot determine target disease.")

    def _get_risk_level(self, probability: float) -> str:
        if probability <= 0.30:
            return "Low"
        elif probability <= 0.70:
            return "Medium"
        else:
            return "High"

    def _predict_diabetes(self, features: Dict[str, Any]) -> Dict[str, Any]:
        if not self.diabetes_model:
            raise RuntimeError("Diabetes model is not loaded.")
            
        pipeline = self.diabetes_model["pipeline"]
        feature_names = self.diabetes_model["feature_names"]
        model_type = self.diabetes_model["model_type"]
        
        # Case insensitive mapping to feature names
        feature_mapping = {fn.lower(): fn for fn in feature_names}
        
        # Construct DataFrame in the exact order required
        input_data = {}
        for fn in feature_names:
            val = features.get(fn.lower())
            if val is None:
                raise ValueError(f"Missing required feature: {fn}")
            input_data[fn] = [val]
            
        df = pd.DataFrame(input_data)
        
        # Predict
        probability = float(pipeline.predict_proba(df)[0][1])
        risk_level = self._get_risk_level(probability)
        
        # Confidence score derived from margin (distance from 0.5 decision boundary)
        confidence = float(0.5 + abs(probability - 0.5))
        
        # Explainability: Extract global feature importances for Decision Tree
        explanation = {"summary": f"The model predicts a {risk_level.lower()} risk of Diabetes."}
        factors = []
        
        try:
            classifier = pipeline.named_steps['classifier']
            if hasattr(classifier, 'feature_importances_'):
                importances = classifier.feature_importances_
                # Combine feature importance with actual input values being high
                # E.g., if feature is Glucose, we just note the highest importance features
                top_indices = np.argsort(importances)[::-1][:3]
                for idx in top_indices:
                    fname = feature_names[idx]
                    factors.append(f"Model relied on {fname} ({importances[idx]:.2f} weight)")
        except Exception as e:
            logger.warning(f"Failed to extract explainability: {e}")
            factors = ["General risk factors"]
            
        explanation["key_factors"] = factors
        
        return {
            "predicted_disease": "Diabetes",
            "prediction_probability": round(probability, 4),
            "risk_level": risk_level,
            "confidence_score": round(confidence, 4),
            "explanation": explanation
        }

    def _predict_heart_disease(self, features: Dict[str, Any]) -> Dict[str, Any]:
        if not self.heart_disease_model:
            raise RuntimeError("Heart Disease model is not loaded.")
            
        pipeline = self.heart_disease_model["pipeline"]
        feature_names = self.heart_disease_model["feature_names"]
        model_type = self.heart_disease_model["model_type"]
        
        input_data = {}
        for fn in feature_names:
            val = features.get(fn.lower())
            if val is None:
                raise ValueError(f"Missing required feature: {fn}")
            input_data[fn] = [val]
            
        df = pd.DataFrame(input_data)
        
        # Predict
        probability = float(pipeline.predict_proba(df)[0][1])
        risk_level = self._get_risk_level(probability)
        confidence = float(0.5 + abs(probability - 0.5))
        
        explanation = {"summary": f"The model predicts a {risk_level.lower()} risk of Heart Disease."}
        factors = []
        
        try:
            classifier = pipeline.named_steps['classifier']
            preprocessor = pipeline.named_steps['preprocessor']
            if hasattr(classifier, 'coef_'):
                # Logistic Regression coefficients
                coefs = classifier.coef_[0]
                scaled_inputs = preprocessor.transform(df)[0]
                # Contribution = coef * scaled_input
                contributions = coefs * scaled_inputs
                
                top_indices = np.argsort(np.abs(contributions))[::-1][:3]
                for idx in top_indices:
                    fname = feature_names[idx]
                    direction = "increased" if contributions[idx] > 0 else "decreased"
                    factors.append(f"Value of {fname} {direction} risk prediction")
        except Exception as e:
            logger.warning(f"Failed to extract explainability: {e}")
            factors = ["General risk factors"]
            
        explanation["key_factors"] = factors
        
        return {
            "predicted_disease": "Heart Disease",
            "prediction_probability": round(probability, 4),
            "risk_level": risk_level,
            "confidence_score": round(confidence, 4),
            "explanation": explanation
        }

ml_service = MLService()
