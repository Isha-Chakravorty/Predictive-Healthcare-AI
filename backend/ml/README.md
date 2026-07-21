# Machine Learning Training Pipeline

This directory contains the offline machine learning pipeline for the Predictive Healthcare AI platform. The pipeline acquires educational datasets, pre-processes the data, trains multiple classification algorithms, and evaluates their predictive performance before serializing the models for API integration.

## Directory Structure
- `datasets/`: Storage for raw tabular data (`diabetes.csv`, `heart.csv`).
- `preprocessing/`: Modular components (Imputers, Scalers) attached to the `sklearn` Pipeline.
- `training/`: Core training logic executing model comparison.
- `evaluation/`: Output classification reports and confusion matrices for the trained models.
- `models/`: The serialized `.joblib` pipelines containing the best models.

## Datasets
1. **Pima Indians Diabetes Dataset**: Used for predicting the onset of diabetes based on clinical measures (e.g., glucose, BMI, insulin).
2. **UCI Heart Disease Dataset (Cleveland)**: Used for predicting the presence of heart disease based on physiological attributes.

## Model Selection
During training, the pipeline evaluates:
- **Logistic Regression**: Serves as a strong linear baseline.
- **Decision Tree**: Captures non-linear feature interactions (substituted for Random Forest to maintain compliance with Windows Application Control DLL load policies).

The pipeline automatically saves the model boasting the highest F1-Score to the `models/` directory for consumption by the FastAPI backend.
