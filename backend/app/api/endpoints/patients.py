from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session
from uuid import UUID

from app.api.dependencies import get_db, get_current_user
from app.models.user import User
from app.schemas.patient import PatientCreate, PatientUpdate, PatientResponse
from app.schemas.prediction import PredictionResponse
from app.crud import patient as crud_patient
from app.crud import prediction as crud_prediction

router = APIRouter(prefix="/patients", tags=["patients"])

@router.post("", response_model=PatientResponse, status_code=status.HTTP_201_CREATED)
def create_patient(
    patient_in: PatientCreate, 
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return crud_patient.create_patient(db=db, patient=patient_in, user_id=current_user.id)

@router.get("", response_model=List[PatientResponse])
def read_patients(
    skip: int = Query(0, ge=0),
    limit: int = Query(10, ge=1, le=100),
    search: Optional[str] = None,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return crud_patient.get_patients(
        db=db, user_id=current_user.id, skip=skip, limit=limit, search=search
    )

@router.get("/{patient_id}", response_model=PatientResponse)
def read_patient(
    patient_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    patient = crud_patient.get_patient(db=db, patient_id=patient_id, user_id=current_user.id)
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    return patient

@router.put("/{patient_id}", response_model=PatientResponse)
def update_patient(
    patient_id: UUID,
    patient_in: PatientUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    patient = crud_patient.get_patient(db=db, patient_id=patient_id, user_id=current_user.id)
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    return crud_patient.update_patient(db=db, db_patient=patient, patient_update=patient_in)

@router.delete("/{patient_id}", response_model=PatientResponse)
def delete_patient(
    patient_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    patient = crud_patient.get_patient(db=db, patient_id=patient_id, user_id=current_user.id)
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    return crud_patient.delete_patient(db=db, db_patient=patient)

@router.get("/{patient_id}/predictions", response_model=List[PredictionResponse])
def read_patient_predictions(
    patient_id: UUID,
    skip: int = Query(0, ge=0),
    limit: int = Query(10, ge=1, le=100),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    # Verify patient ownership first
    patient = crud_patient.get_patient(db=db, patient_id=patient_id, user_id=current_user.id)
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
        
    return crud_prediction.get_predictions(
        db=db, user_id=current_user.id, patient_id=patient_id, skip=skip, limit=limit
    )
