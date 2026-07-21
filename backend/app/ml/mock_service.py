import random

def predict_disease(input_features: dict) -> dict:
    """
    Mock prediction service that generates realistic predictions
    based on the input features. This will be replaced by a real
    ML model inference function later.
    """
    diseases = ["Diabetes", "Hypertension", "Heart Disease", "Asthma", "Kidney Disease"]
    predicted_disease = random.choice(diseases)
    
    probability = round(random.uniform(0.65, 0.98), 2)
    
    if probability > 0.85:
        risk_level = "High"
    elif probability > 0.75:
        risk_level = "Medium"
    else:
        risk_level = "Low"
        
    confidence_score = round(random.uniform(0.80, 0.99), 2)
    
    # Generate a dummy explanation based on input keys
    explanation_factors = []
    for key in input_features.keys():
        if key in ["glucose", "blood_pressure", "bmi", "age", "cholesterol"]:
            explanation_factors.append(f"Elevated {key.replace('_', ' ')}")
            
    if not explanation_factors:
        explanation_factors = ["General risk factors present", "Family history"]
        
    explanation = {
        "summary": f"The model predicts a {risk_level.lower()} risk of {predicted_disease}.",
        "key_factors": explanation_factors[:3] # top 3 factors
    }
    
    return {
        "predicted_disease": predicted_disease,
        "prediction_probability": probability,
        "risk_level": risk_level,
        "confidence_score": confidence_score,
        "explanation": explanation
    }
