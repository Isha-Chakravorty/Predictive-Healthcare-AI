from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from app.api.endpoints import auth, patients, predictions, analytics
from app.ml.service import ml_service

@asynccontextmanager
async def lifespan(app: FastAPI):
    ml_service.load_models()
    yield

app = FastAPI(
    title="Predictive Healthcare AI API",
    description="Backend API for the Predictive Healthcare AI platform",
    version="1.0.0",
    lifespan=lifespan
)

# Configure CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"], # Vite default ports
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(patients.router)
app.include_router(predictions.router)
app.include_router(analytics.router)

@app.get("/api/health")
async def health_check():
    return {"status": "ok", "service": "Predictive Healthcare AI Backend", "version": "1.0.0"}
