from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.dependencies import get_db, get_current_user
from app.models.user import User
from app.schemas.analytics import (
    DashboardStatsResponse,
    DiseaseAnalyticsResponse,
    TrendAnalyticsResponse,
    PatientAnalyticsResponse,
    RecentActivityResponse
)
from app.crud import analytics as crud_analytics

router = APIRouter(prefix="/analytics", tags=["analytics"])

@router.get("/dashboard", response_model=DashboardStatsResponse)
def get_dashboard_stats(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return crud_analytics.get_dashboard_stats(db=db, user_id=current_user.id)

@router.get("/diseases", response_model=DiseaseAnalyticsResponse)
def get_disease_analytics(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return crud_analytics.get_disease_analytics(db=db, user_id=current_user.id)

@router.get("/trends", response_model=TrendAnalyticsResponse)
def get_trend_analytics(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return crud_analytics.get_trend_analytics(db=db, user_id=current_user.id)

@router.get("/patients", response_model=PatientAnalyticsResponse)
def get_patient_analytics(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return crud_analytics.get_patient_analytics(db=db, user_id=current_user.id)

@router.get("/recent", response_model=RecentActivityResponse)
def get_recent_activity(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return crud_analytics.get_recent_activity(db=db, user_id=current_user.id)
