import api from './api';

// ============================================================
// Types matching backend PredictionResponse schema
// ============================================================
export interface BackendPrediction {
  id: string;
  patient_id: string;
  created_by: string;
  predicted_disease: string;
  prediction_probability: number;
  risk_level: string;
  confidence_score: number;
  input_features: Record<string, unknown>;
  explanation: {
    summary: string;
    key_factors: string[];
  };
  prediction_status: string;
  created_at: string;
}

export interface PredictionCreatePayload {
  patient_id: string;
  input_features: Record<string, number | string>;
}

// ============================================================
// Prediction Service
// ============================================================
const predictionService = {
  async create(payload: PredictionCreatePayload): Promise<BackendPrediction> {
    const { data } = await api.post<BackendPrediction>('/predictions', payload);
    return data;
  },

  async getAll(params?: {
    skip?: number;
    limit?: number;
    disease?: string;
    risk_level?: string;
  }): Promise<BackendPrediction[]> {
    const { data } = await api.get<BackendPrediction[]>('/predictions', { params });
    return data;
  },

  async getById(id: string): Promise<BackendPrediction> {
    const { data } = await api.get<BackendPrediction>(`/predictions/${id}`);
    return data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/predictions/${id}`);
  },
};

export default predictionService;
