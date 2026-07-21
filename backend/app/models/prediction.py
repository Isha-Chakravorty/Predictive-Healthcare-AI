import uuid
from datetime import datetime
from sqlalchemy import Column, String, Float, DateTime, ForeignKey, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.types import Uuid
from app.core.database import Base

class Prediction(Base):
    __tablename__ = "predictions"

    id = Column(Uuid, primary_key=True, default=uuid.uuid4, index=True)
    patient_id = Column(Uuid, ForeignKey("patients.id"), nullable=False, index=True)
    created_by = Column(Uuid, ForeignKey("users.id"), nullable=False)
    
    predicted_disease = Column(String(100), nullable=False)
    prediction_probability = Column(Float, nullable=False)
    risk_level = Column(String(50), nullable=False)
    confidence_score = Column(Float, nullable=False)
    
    input_features = Column(JSON, nullable=False)
    explanation = Column(JSON, nullable=False)
    prediction_status = Column(String(50), default="COMPLETED")
    
    created_at = Column(DateTime, default=datetime.utcnow)
    
    patient = relationship("Patient", back_populates="predictions")
    creator = relationship("User", back_populates="predictions")
