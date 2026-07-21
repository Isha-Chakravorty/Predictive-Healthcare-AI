from sqlalchemy.orm import Session
from sqlalchemy import func, desc
from collections import Counter
from datetime import datetime
from uuid import UUID
from typing import Dict, Any

from app.models.patient import Patient
from app.models.prediction import Prediction

def get_dashboard_stats(db: Session, user_id: UUID) -> Dict[str, Any]:
    total_patients = db.query(Patient).filter(Patient.created_by == user_id).count()
    active_patients = db.query(Patient).filter(Patient.created_by == user_id, Patient.is_deleted == False).count()
    
    predictions = db.query(Prediction.risk_level).filter(Prediction.created_by == user_id).all()
    
    high = sum(1 for p in predictions if p[0] == "High")
    medium = sum(1 for p in predictions if p[0] == "Medium")
    low = sum(1 for p in predictions if p[0] == "Low")
    
    return {
        "total_patients": total_patients,
        "active_patients": active_patients,
        "total_predictions": len(predictions),
        "high_risk_predictions": high,
        "medium_risk_predictions": medium,
        "low_risk_predictions": low
    }

def get_disease_analytics(db: Session, user_id: UUID) -> Dict[str, Any]:
    stats = db.query(
        Prediction.predicted_disease,
        func.count(Prediction.id).label("count"),
        func.avg(Prediction.prediction_probability).label("avg_prob"),
        func.avg(Prediction.confidence_score).label("avg_conf")
    ).filter(Prediction.created_by == user_id).group_by(Prediction.predicted_disease).all()
    
    distribution = [
        {
            "disease": s[0],
            "count": s[1],
            "average_probability": round(s[2] or 0.0, 2),
            "average_confidence": round(s[3] or 0.0, 2)
        } for s in stats
    ]
    
    risks = db.query(Prediction.risk_level, func.count(Prediction.id)).filter(Prediction.created_by == user_id).group_by(Prediction.risk_level).all()
    risk_distribution = {r[0]: r[1] for r in risks}
    
    return {
        "distribution": distribution,
        "risk_distribution": risk_distribution
    }

def get_trend_analytics(db: Session, user_id: UUID) -> Dict[str, Any]:
    dates = db.query(Prediction.created_at).filter(Prediction.created_by == user_id).all()
    
    daily = Counter()
    weekly = Counter()
    monthly = Counter()
    
    for (d,) in dates:
        if not d: continue
        daily[d.strftime("%Y-%m-%d")] += 1
        # Year-Week format
        weekly[d.strftime("%Y-W%W")] += 1
        # Year-Month format
        monthly[d.strftime("%Y-%m")] += 1
        
    return {
        "daily": [{"date": k, "count": v} for k, v in sorted(daily.items())],
        "weekly": [{"date": k, "count": v} for k, v in sorted(weekly.items())],
        "monthly": [{"date": k, "count": v} for k, v in sorted(monthly.items())]
    }

def get_patient_analytics(db: Session, user_id: UUID) -> Dict[str, Any]:
    patients = db.query(Patient.age, Patient.gender, Patient.height, Patient.weight).filter(
        Patient.created_by == user_id, 
        Patient.is_deleted == False
    ).all()
    
    age_groups = Counter()
    gender_dist = Counter()
    bmi_dist = Counter()
    
    for age, gender, height, weight in patients:
        # Age
        if age is not None:
            if age <= 18: age_groups["0-18"] += 1
            elif age <= 35: age_groups["19-35"] += 1
            elif age <= 50: age_groups["36-50"] += 1
            else: age_groups["51+"] += 1
            
        # Gender
        if gender:
            gender_dist[gender] += 1
            
        # BMI = weight (kg) / height (m)^2
        if weight and height and height > 0:
            # Assuming height is in cm for most medical records if > 3, else meters.
            h_m = height / 100.0 if height > 3 else height
            bmi = weight / (h_m ** 2)
            if bmi < 18.5: bmi_dist["Underweight"] += 1
            elif bmi < 25: bmi_dist["Normal"] += 1
            elif bmi < 30: bmi_dist["Overweight"] += 1
            else: bmi_dist["Obese"] += 1
            
    return {
        "age_distribution": [{"category": k, "count": v} for k, v in age_groups.items()],
        "gender_distribution": [{"category": k, "count": v} for k, v in gender_dist.items()],
        "bmi_distribution": [{"category": k, "count": v} for k, v in bmi_dist.items()]
    }

def get_recent_activity(db: Session, user_id: UUID, limit: int = 5) -> Dict[str, Any]:
    recent_patients = db.query(Patient).filter(
        Patient.created_by == user_id,
        Patient.is_deleted == False
    ).order_by(desc(Patient.created_at)).limit(limit).all()
    
    recent_predictions = db.query(Prediction).filter(
        Prediction.created_by == user_id
    ).order_by(desc(Prediction.created_at)).limit(limit).all()
    
    return {
        "recent_patients": recent_patients,
        "recent_predictions": recent_predictions
    }
