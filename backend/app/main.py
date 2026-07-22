from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from app.api.endpoints import auth, patients, predictions, analytics
from app.ml.service import ml_service
from app.core.logging import setup_logging
import logging

logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    setup_logging()
    logger.info("Application starting up...")
    ml_service.load_models()
    yield
    logger.info("Application shutting down...")

app = FastAPI(
    title="Predictive Healthcare AI API",
    description="Backend API for the Predictive Healthcare AI platform",
    version="1.0.0",
    lifespan=lifespan,
    docs_url="/api/docs",
    redoc_url="/api/redoc",
    openapi_url="/api/openapi.json",
)

# Configure CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:5173",
        "http://localhost:4173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

API_V1_PREFIX = "/api/v1"

app.include_router(auth.router, prefix=API_V1_PREFIX)
app.include_router(patients.router, prefix=API_V1_PREFIX)
app.include_router(predictions.router, prefix=API_V1_PREFIX)
app.include_router(analytics.router, prefix=API_V1_PREFIX)

@app.get("/api/health")
async def health_check():
    return {
        "status": "ok",
        "service": "Predictive Healthcare AI Backend",
        "version": "1.0.0",
        "ml_models": {
            "diabetes": ml_service.diabetes_model is not None,
            "heart_disease": ml_service.heart_disease_model is not None,
        }
    }
