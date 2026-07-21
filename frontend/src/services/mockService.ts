import type { Patient, PaginatedResponse, ApiResponse } from '../types';
import {
  mockPatients,
  mockDashboardStats,
  mockPredictions,
  mockRecentActivity,
  mockNotifications,
  mockModelMetrics,
  mockPredictionTrend,
  mockPatientGrowth,
  mockDiseaseDistribution,
  mockRiskDistribution,
  mockAccuracyTrend,
  mockAgeDistribution,
} from '../mock';

// Simulate network delay
const delay = (ms = 400) => new Promise(resolve => setTimeout(resolve, ms));

// ============================================================
// Patient Service
// ============================================================
export const patientService = {
  async getAll(params?: { page?: number; pageSize?: number; search?: string; status?: string }) {
    await delay();
    let filtered = [...mockPatients];

    if (params?.search) {
      const term = params.search.toLowerCase();
      filtered = filtered.filter(
        p =>
          p.firstName.toLowerCase().includes(term) ||
          p.lastName.toLowerCase().includes(term) ||
          p.patientId.toLowerCase().includes(term) ||
          p.conditions.some(c => c.toLowerCase().includes(term))
      );
    }

    if (params?.status && params.status !== 'all') {
      filtered = filtered.filter(p => p.status === params.status);
    }

    const page = params?.page ?? 1;
    const pageSize = params?.pageSize ?? 10;
    const total = filtered.length;
    const totalPages = Math.ceil(total / pageSize);
    const start = (page - 1) * pageSize;
    const data = filtered.slice(start, start + pageSize);

    const response: PaginatedResponse<Patient> = {
      data,
      pagination: { page, pageSize, total, totalPages },
      message: 'Patients retrieved successfully',
      success: true,
    };
    return response;
  },

  async getById(id: string) {
    await delay(200);
    const patient = mockPatients.find(p => p.id === id);
    if (!patient) throw new Error('Patient not found');
    return { data: patient, message: 'Success', success: true } as ApiResponse<Patient>;
  },
};

// ============================================================
// Dashboard Service
// ============================================================
export const dashboardService = {
  async getStats() {
    await delay(300);
    return { data: mockDashboardStats, message: 'Success', success: true };
  },

  async getRecentActivity(limit = 8) {
    await delay(250);
    return {
      data: mockRecentActivity.slice(0, limit),
      message: 'Success',
      success: true,
    };
  },

  async getNotifications() {
    await delay(200);
    return { data: mockNotifications, message: 'Success', success: true };
  },
};

// ============================================================
// Prediction Service
// ============================================================
export const predictionService = {
  async getAll(params?: { page?: number; pageSize?: number; search?: string; status?: string }) {
    await delay(400);
    let filtered = [...mockPredictions];

    if (params?.search) {
      const term = params.search.toLowerCase();
      filtered = filtered.filter(
        p =>
          p.patientName.toLowerCase().includes(term) ||
          p.diseaseType.toLowerCase().includes(term) ||
          p.patientId.toLowerCase().includes(term)
      );
    }

    if (params?.status && params.status !== 'all') {
      filtered = filtered.filter(p => p.status === params.status);
    }

    const page = params?.page ?? 1;
    const pageSize = params?.pageSize ?? 10;
    const total = filtered.length;
    const totalPages = Math.ceil(total / pageSize);
    const start = (page - 1) * pageSize;
    const data = filtered.slice(start, start + pageSize);

    return {
      data,
      pagination: { page, pageSize, total, totalPages },
      message: 'Success',
      success: true,
    };
  },

  async getById(id: string) {
    await delay(200);
    const prediction = mockPredictions.find(p => p.id === id);
    if (!prediction) throw new Error('Prediction not found');
    return { data: prediction, message: 'Success', success: true };
  },

  async runPrediction(features: Record<string, unknown>) {
    // Simulate AI processing delay
    await delay(2500);
    const probability = Math.random() * 0.6 + 0.3;
    const confidence = Math.random() * 0.15 + 0.8;
    return {
      data: {
        probability,
        confidence,
        riskLevel: probability > 0.7 ? 'high' : probability > 0.4 ? 'moderate' : 'low',
        diagnosis: `Predicted risk assessment: ${(probability * 100).toFixed(1)}%`,
        features,
      },
      message: 'Prediction completed',
      success: true,
    };
  },
};

// ============================================================
// Analytics Service
// ============================================================
export const analyticsService = {
  async getPredictionTrend() {
    await delay(300);
    return { data: mockPredictionTrend, message: 'Success', success: true };
  },

  async getPatientGrowth() {
    await delay(300);
    return { data: mockPatientGrowth, message: 'Success', success: true };
  },

  async getDiseaseDistribution() {
    await delay(250);
    return { data: mockDiseaseDistribution, message: 'Success', success: true };
  },

  async getRiskDistribution() {
    await delay(250);
    return { data: mockRiskDistribution, message: 'Success', success: true };
  },

  async getAccuracyTrend() {
    await delay(300);
    return { data: mockAccuracyTrend, message: 'Success', success: true };
  },

  async getAgeDistribution() {
    await delay(200);
    return { data: mockAgeDistribution, message: 'Success', success: true };
  },
};

// ============================================================
// Model Service
// ============================================================
export const modelService = {
  async getAll() {
    await delay(400);
    return { data: mockModelMetrics, message: 'Success', success: true };
  },

  async getById(id: string) {
    await delay(200);
    const model = mockModelMetrics.find(m => m.modelId === id);
    if (!model) throw new Error('Model not found');
    return { data: model, message: 'Success', success: true };
  },
};
