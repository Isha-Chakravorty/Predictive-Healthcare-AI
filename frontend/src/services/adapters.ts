/**
 * adapters.ts
 *
 * Normalizes backend API response shapes to frontend TypeScript types.
 * Keeps components decoupled from raw backend field names.
 */

import type { User, Patient, DiseasePrediction, RiskLevel, AnalyticsMetrics } from '../types';
import type { BackendUser } from './authService';
import type { BackendPatient } from './patientService';
import type { BackendPrediction } from './predictionService';
import type { DashboardStats, DiseaseAnalytics, TrendAnalytics, PatientAnalytics } from './analyticsService';

// ============================================================
// User Adapter
// ============================================================
export function adaptUser(backendUser: BackendUser): User {
  const nameParts = backendUser.full_name.trim().split(' ');
  const firstName = nameParts[0] ?? '';
  const lastName = nameParts.slice(1).join(' ') || '';

  return {
    id: backendUser.id,
    firstName,
    lastName,
    email: backendUser.email,
    role: (backendUser.role as User['role']) ?? 'doctor',
    department: 'Healthcare',
    createdAt: backendUser.created_at,
    lastActive: new Date().toISOString(),
    isVerified: backendUser.is_active,
    preferences: {
      theme: 'light',
      language: 'en',
      notifications: {
        email: true,
        push: true,
        sms: false,
        criticalAlerts: true,
        weeklyReport: true,
      },
      dashboardLayout: 'comfortable',
    },
  };
}

// ============================================================
// Patient Adapter
// ============================================================
export function adaptPatient(p: BackendPatient): Patient {
  const bmi = p.height && p.weight
    ? parseFloat((p.weight / Math.pow((p.height > 3 ? p.height / 100 : p.height), 2)).toFixed(1))
    : 22;

  return {
    id: p.id,
    patientId: `PT-${p.id.slice(0, 8).toUpperCase()}`,
    firstName: p.first_name,
    lastName: p.last_name,
    age: p.age,
    gender: (p.gender?.toLowerCase() as Patient['gender']) ?? 'other',
    bloodType: (p.blood_group as Patient['bloodType']) ?? 'O+',
    dateOfBirth: p.date_of_birth ?? '',
    email: p.email ?? undefined,
    phone: p.phone ?? '',
    address: {
      street: p.address ?? '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
    },
    status: 'active',
    riskLevel: 'low',
    assignedDoctor: 'Unassigned',
    conditions: p.medical_history
      ? p.medical_history.split(',').map((s) => s.trim()).filter(Boolean)
      : [],
    medications: [],
    lastVisit: p.updated_at,
    predictionCount: 0,
    createdAt: p.created_at,
    updatedAt: p.updated_at,
    vitalSigns: {
      heartRate: 72,
      bloodPressureSystolic: 120,
      bloodPressureDiastolic: 80,
      temperature: 98.6,
      oxygenSaturation: 98,
      respiratoryRate: 16,
      weight: p.weight ?? 70,
      height: p.height ?? 170,
      bmi,
      glucoseLevel: 90,
    },
    lifestyle: {
      smokingStatus:
        (p.smoking_status as any) ?? 'never',
      alcoholConsumption:
        (p.alcohol_consumption as any) ?? 'none',
      physicalActivity: 'moderate',
      diet: 'balanced',
    },
    medicalHistory: {
      pastSurgeries: [],
      chronicDiseases: p.medical_history
        ? p.medical_history.split(',').map((s) => s.trim()).filter(Boolean)
        : [],
      allergies: p.allergies
        ? p.allergies.split(',').map((s) => s.trim()).filter(Boolean)
        : [],
    },
  };
}

export function adaptPatients(patients: BackendPatient[]): Patient[] {
  return patients.map(adaptPatient);
}

// ============================================================
// Prediction Adapter
// ============================================================
function mapRiskLevel(level: string): RiskLevel {
  const map: Record<string, RiskLevel> = {
    low: 'low',
    Low: 'low',
    medium: 'moderate',
    Medium: 'moderate',
    high: 'high',
    High: 'high',
    critical: 'critical',
    Critical: 'critical',
  };
  return map[level] ?? 'low';
}

export function adaptPrediction(p: BackendPrediction): DiseasePrediction {
  return {
    id: p.id,
    patientId: p.patient_id,
    patientName: `Patient ${p.patient_id.slice(0, 8)}`,
    diseaseType: p.predicted_disease.toLowerCase().replace(/ /g, '_') as DiseasePrediction['diseaseType'],
    probability: p.prediction_probability,
    riskLevel: mapRiskLevel(p.risk_level),
    confidence: p.confidence_score,
    status: p.prediction_status.toLowerCase() as DiseasePrediction['status'],
    features: {} as DiseasePrediction['features'],
    result: {
      diagnosis: p.predicted_disease,
      probability: p.prediction_probability,
      confidence: p.confidence_score,
      riskFactors: (p.explanation.key_factors ?? []).map((factor) => ({
        factor,
        impact: 'medium' as const,
        value: '',
        normalRange: '',
      })),
      followUpRequired: mapRiskLevel(p.risk_level) === 'high' || mapRiskLevel(p.risk_level) === 'critical',
    },
    modelVersion: '1.0.0',
    createdAt: p.created_at,
    requestedBy: p.created_by,
    notes: p.explanation.summary,
  };
}

export function adaptPredictions(predictions: BackendPrediction[]): DiseasePrediction[] {
  return predictions.map(adaptPrediction);
}

// ============================================================
// Analytics Adapter
// ============================================================
export function adaptAnalytics(raw: {
  dashboard: DashboardStats;
  diseases: DiseaseAnalytics;
  trends: TrendAnalytics;
  patients: PatientAnalytics;
}): AnalyticsMetrics {
  return {
    monthlyTrends: raw.trends.monthly.map(t => ({
      month: t.date,
      predictions: t.count,
      highRisk: Math.floor(t.count * 0.1), // Mock high risk based on count for now
    })),
    diseaseDistribution: raw.diseases.distribution.map(d => ({
      disease: d.disease,
      count: d.count,
    })),
    demographics: {
      ageGroups: raw.patients.age_distribution.map(a => ({
        group: a.category,
        count: a.count,
      })),
      gender: raw.patients.gender_distribution.map(g => ({
        gender: g.category,
        count: g.count,
      })),
    },
    insights: [
      { text: "Increase in High Risk Predictions this month", trend: "up", type: "warning" },
      { text: "Patient activity is stable", trend: "neutral", type: "info" }
    ],
  };
}
