from pydantic import BaseModel, Field
from typing import Dict, Any, Optional
from uuid import UUID
from datetime import datetime

class PredictionCreate(BaseModel):
    patient_id: UUID
    input_features: Dict[str, Any] = Field(..., description="JSON object containing medical input features")

class PredictionResponse(BaseModel):
    id: UUID
    patient_id: UUID
    created_by: UUID
    
    predicted_disease: str
    prediction_probability: float
    risk_level: str
    confidence_score: float
    
    input_features: Dict[str, Any]
    explanation: Dict[str, Any]
    prediction_status: str
    
    created_at: datetime

    model_config = {"from_attributes": True}
