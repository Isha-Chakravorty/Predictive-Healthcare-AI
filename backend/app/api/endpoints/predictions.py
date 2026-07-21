from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session
from uuid import UUID

from app.api.dependencies import get_db, get_current_user
from app.models.user import User
from app.schemas.prediction import PredictionCreate, PredictionResponse
from app.crud import prediction as crud_prediction
from app.crud import patient as crud_patient

router = APIRouter(prefix="/predictions", tags=["predictions"])

@router.post("", response_model=PredictionResponse, status_code=status.HTTP_201_CREATED)
def create_prediction(
    prediction_in: PredictionCreate, 
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    # Verify patient belongs to user and is not soft deleted
    patient = crud_patient.get_patient(db=db, patient_id=prediction_in.patient_id, user_id=current_user.id)
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found or unauthorized")
        
    return crud_prediction.create_prediction(db=db, prediction_in=prediction_in, user_id=current_user.id)

@router.get("", response_model=List[PredictionResponse])
def read_predictions(
    skip: int = Query(0, ge=0),
    limit: int = Query(10, ge=1, le=100),
    disease: Optional[str] = None,
    risk_level: Optional[str] = None,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return crud_prediction.get_predictions(
        db=db, user_id=current_user.id, skip=skip, limit=limit, disease=disease, risk_level=risk_level
    )

@router.get("/{prediction_id}", response_model=PredictionResponse)
def read_prediction(
    prediction_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    prediction = crud_prediction.get_prediction(db=db, prediction_id=prediction_id, user_id=current_user.id)
    if not prediction:
        raise HTTPException(status_code=404, detail="Prediction not found")
    return prediction

@router.delete("/{prediction_id}", response_model=PredictionResponse)
def delete_prediction(
    prediction_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    prediction = crud_prediction.get_prediction(db=db, prediction_id=prediction_id, user_id=current_user.id)
    if not prediction:
        raise HTTPException(status_code=404, detail="Prediction not found")
    return crud_prediction.delete_prediction(db=db, db_prediction=prediction)
