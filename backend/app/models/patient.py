import uuid
from datetime import datetime
from sqlalchemy import Column, String, Boolean, DateTime, Float, Integer, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.types import Uuid
from app.core.database import Base

class Patient(Base):
    __tablename__ = "patients"

    id = Column(Uuid, primary_key=True, default=uuid.uuid4, index=True)
    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)
    gender = Column(String(20))
    age = Column(Integer)
    date_of_birth = Column(String(50))
    phone = Column(String(20))
    email = Column(String(255), index=True)
    address = Column(String(500))
    
    height = Column(Float)
    weight = Column(Float)
    blood_group = Column(String(10))
    medical_history = Column(String)
    allergies = Column(String)
    smoking_status = Column(String(50))
    alcohol_consumption = Column(String(50))
    
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    is_deleted = Column(Boolean, default=False, index=True)
    
    created_by = Column(Uuid, ForeignKey("users.id"))
    
    creator = relationship("User", back_populates="patients")
