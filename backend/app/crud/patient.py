from sqlalchemy.orm import Session
from sqlalchemy import or_
from typing import List, Optional
from uuid import UUID

from app.models.patient import Patient
from app.schemas.patient import PatientCreate, PatientUpdate

def get_patient(db: Session, patient_id: UUID, user_id: UUID) -> Optional[Patient]:
    return db.query(Patient).filter(
        Patient.id == patient_id, 
        Patient.created_by == user_id,
        Patient.is_deleted == False
    ).first()

def get_patients(
    db: Session, 
    user_id: UUID, 
    skip: int = 0, 
    limit: int = 10,
    search: Optional[str] = None
) -> List[Patient]:
    query = db.query(Patient).filter(
        Patient.created_by == user_id,
        Patient.is_deleted == False
    )
    
    if search:
        search_term = f"%{search}%"
        query = query.filter(
            or_(
                Patient.first_name.ilike(search_term),
                Patient.last_name.ilike(search_term),
                Patient.email.ilike(search_term)
            )
        )
        
    return query.offset(skip).limit(limit).all()

def create_patient(db: Session, patient: PatientCreate, user_id: UUID) -> Patient:
    db_patient = Patient(**patient.model_dump(), created_by=user_id)
    db.add(db_patient)
    db.commit()
    db.refresh(db_patient)
    return db_patient

def update_patient(
    db: Session, 
    db_patient: Patient, 
    patient_update: PatientUpdate
) -> Patient:
    update_data = patient_update.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_patient, key, value)
        
    db.add(db_patient)
    db.commit()
    db.refresh(db_patient)
    return db_patient

def delete_patient(db: Session, db_patient: Patient) -> Patient:
    # Soft delete implementation
    db_patient.is_deleted = True
    db.add(db_patient)
    db.commit()
    return db_patient
