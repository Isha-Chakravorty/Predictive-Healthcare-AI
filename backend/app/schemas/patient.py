from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from uuid import UUID
from datetime import datetime
import re

class PatientBase(BaseModel):
    first_name: str = Field(..., min_length=2, max_length=100)
    last_name: str = Field(..., min_length=2, max_length=100)
    gender: Optional[str] = None
    age: int = Field(..., ge=0, le=120)
    date_of_birth: Optional[str] = None
    phone: Optional[str] = Field(None, pattern=r"^\+?[1-9]\d{1,14}$")
    email: Optional[EmailStr] = None
    address: Optional[str] = None
    
    height: Optional[float] = Field(None, ge=0)
    weight: Optional[float] = Field(None, ge=0)
    blood_group: Optional[str] = None
    medical_history: Optional[str] = None
    allergies: Optional[str] = None
    smoking_status: Optional[str] = None
    alcohol_consumption: Optional[str] = None

class PatientCreate(PatientBase):
    pass

class PatientUpdate(BaseModel):
    first_name: Optional[str] = Field(None, min_length=2, max_length=100)
    last_name: Optional[str] = Field(None, min_length=2, max_length=100)
    gender: Optional[str] = None
    age: Optional[int] = Field(None, ge=0, le=120)
    date_of_birth: Optional[str] = None
    phone: Optional[str] = Field(None, pattern=r"^\+?[1-9]\d{1,14}$")
    email: Optional[EmailStr] = None
    address: Optional[str] = None
    
    height: Optional[float] = Field(None, ge=0)
    weight: Optional[float] = Field(None, ge=0)
    blood_group: Optional[str] = None
    medical_history: Optional[str] = None
    allergies: Optional[str] = None
    smoking_status: Optional[str] = None
    alcohol_consumption: Optional[str] = None

class PatientResponse(PatientBase):
    id: UUID
    created_at: datetime
    updated_at: datetime
    created_by: UUID
    is_deleted: bool

    model_config = {"from_attributes": True}
