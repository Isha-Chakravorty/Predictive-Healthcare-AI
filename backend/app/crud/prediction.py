from sqlalchemy.orm import Session
from sqlalchemy import desc
from typing import List, Optional
from uuid import UUID

from app.models.prediction import Prediction
from app.models.patient import Patient
from app.schemas.prediction import PredictionCreate
from fastapi import HTTPException
from app.ml.service import ml_service

def get_prediction(db: Session, prediction_id: UUID, user_id: UUID) -> Optional[Prediction]:
    return db.query(Prediction).filter(
        Prediction.id == prediction_id,
        Prediction.created_by == user_id
    ).first()

def get_predictions(
    db: Session, 
    user_id: UUID, 
    skip: int = 0, 
    limit: int = 10,
    patient_id: Optional[UUID] = None,
    disease: Optional[str] = None,
    risk_level: Optional[str] = None
) -> List[Prediction]:
    query = db.query(Prediction).filter(Prediction.created_by == user_id)
    
    if patient_id:
        query = query.filter(Prediction.patient_id == patient_id)
    if disease:
        query = query.filter(Prediction.predicted_disease.ilike(f"%{disease}%"))
    if risk_level:
        query = query.filter(Prediction.risk_level.ilike(risk_level))
        
    return query.order_by(desc(Prediction.created_at)).offset(skip).limit(limit).all()

def create_prediction(db: Session, prediction_in: PredictionCreate, user_id: UUID) -> Prediction:
    # 1. Run real ML prediction
    try:
        result = ml_service.predict(prediction_in.input_features)
    except ValueError as e:
        raise HTTPException(status_code=422, detail=str(e))
    except RuntimeError as e:
        raise HTTPException(status_code=503, detail=str(e))
    
    # 2. Save to database
    db_prediction = Prediction(
        patient_id=prediction_in.patient_id,
        created_by=user_id,
        input_features=prediction_in.input_features,
        predicted_disease=result["predicted_disease"],
        prediction_probability=result["prediction_probability"],
        risk_level=result["risk_level"],
        confidence_score=result["confidence_score"],
        explanation=result["explanation"],
        prediction_status="COMPLETED"
    )
    db.add(db_prediction)
    db.commit()
    db.refresh(db_prediction)
    return db_prediction

def delete_prediction(db: Session, db_prediction: Prediction) -> Prediction:
    db.delete(db_prediction)
    db.commit()
    return db_prediction
