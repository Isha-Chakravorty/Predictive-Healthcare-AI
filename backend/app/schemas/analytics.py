from pydantic import BaseModel
from typing import List, Dict, Any, Optional
from datetime import datetime
from uuid import UUID
from app.schemas.patient import PatientResponse
from app.schemas.prediction import PredictionResponse

class DashboardStatsResponse(BaseModel):
    total_patients: int
    active_patients: int
    total_predictions: int
    high_risk_predictions: int
    medium_risk_predictions: int
    low_risk_predictions: int

class DiseaseDistribution(BaseModel):
    disease: str
    count: int
    average_probability: float
    average_confidence: float

class DiseaseAnalyticsResponse(BaseModel):
    distribution: List[DiseaseDistribution]
    risk_distribution: Dict[str, int]

class TrendDataPoint(BaseModel):
    date: str
    count: int

class TrendAnalyticsResponse(BaseModel):
    daily: List[TrendDataPoint]
    weekly: List[TrendDataPoint]
    monthly: List[TrendDataPoint]

class DemographicDistribution(BaseModel):
    category: str
    count: int

class PatientAnalyticsResponse(BaseModel):
    age_distribution: List[DemographicDistribution]
    gender_distribution: List[DemographicDistribution]
    bmi_distribution: List[DemographicDistribution]

class RecentActivityResponse(BaseModel):
    recent_patients: List[PatientResponse]
    recent_predictions: List[PredictionResponse]
