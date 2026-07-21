import os
import urllib.request
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Raw URLs for standard educational datasets
DIABETES_URL = "https://raw.githubusercontent.com/jbrownlee/Datasets/master/pima-indians-diabetes.data.csv"
HEART_DISEASE_URL = "https://archive.ics.uci.edu/ml/machine-learning-databases/heart-disease/processed.cleveland.data"

def download_dataset(url, filename, columns=None):
    filepath = os.path.join(os.path.dirname(__file__), filename)
    if os.path.exists(filepath):
        logger.info(f"{filename} already exists. Skipping download.")
        return
        
    logger.info(f"Downloading {filename} from {url}...")
    try:
        urllib.request.urlretrieve(url, filepath)
        
        # Add headers if they are missing
        if columns:
            with open(filepath, 'r') as original:
                data = original.read()
            with open(filepath, 'w') as modified:
                modified.write(",".join(columns) + "\n" + data)
                
        logger.info(f"Successfully downloaded {filename}.")
    except Exception as e:
        logger.error(f"Failed to download {filename}: {e}")

if __name__ == "__main__":
    # Pima Indians Diabetes dataset doesn't have a header in the raw file
    diabetes_cols = [
        "Pregnancies", "Glucose", "BloodPressure", "SkinThickness", 
        "Insulin", "BMI", "DiabetesPedigreeFunction", "Age", "Outcome"
    ]
    download_dataset(DIABETES_URL, "diabetes.csv", columns=diabetes_cols)
    
    # UCI Heart Disease dataset (processed cleveland) doesn't have a header
    heart_cols = [
        "age", "sex", "cp", "trestbps", "chol", "fbs", "restecg", 
        "thalach", "exang", "oldpeak", "slope", "ca", "thal", "target"
    ]
    download_dataset(HEART_DISEASE_URL, "heart.csv", columns=heart_cols)
