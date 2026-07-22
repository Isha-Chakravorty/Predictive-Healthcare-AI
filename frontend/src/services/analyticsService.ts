import api from './api';

// ============================================================
// Types matching backend analytics schemas
// ============================================================
export interface DashboardStats {
  total_patients: number;
  active_patients: number;
  total_predictions: number;
  high_risk_predictions: number;
  medium_risk_predictions: number;
  low_risk_predictions: number;
}

export interface DiseaseDistributionItem {
  disease: string;
  count: number;
  average_probability: number;
  average_confidence: number;
}

export interface DiseaseAnalytics {
  distribution: DiseaseDistributionItem[];
  risk_distribution: Record<string, number>;
}

export interface TrendDataPoint {
  date: string;
  count: number;
}

export interface TrendAnalytics {
  daily: TrendDataPoint[];
  weekly: TrendDataPoint[];
  monthly: TrendDataPoint[];
}

export interface DemographicItem {
  category: string;
  count: number;
}

export interface PatientAnalytics {
  age_distribution: DemographicItem[];
  gender_distribution: DemographicItem[];
  bmi_distribution: DemographicItem[];
}

export interface RecentActivity {
  recent_patients: unknown[];
  recent_predictions: unknown[];
}

// ============================================================
// Analytics Service
// ============================================================
const analyticsService = {
  async getDashboard(): Promise<DashboardStats> {
    const { data } = await api.get<DashboardStats>('/analytics/dashboard');
    return data;
  },

  async getDiseaseAnalytics(): Promise<DiseaseAnalytics> {
    const { data } = await api.get<DiseaseAnalytics>('/analytics/diseases');
    return data;
  },

  async getTrends(): Promise<TrendAnalytics> {
    const { data } = await api.get<TrendAnalytics>('/analytics/trends');
    return data;
  },

  async getPatientAnalytics(): Promise<PatientAnalytics> {
    const { data } = await api.get<PatientAnalytics>('/analytics/patients');
    return data;
  },

  async getRecentActivity(): Promise<RecentActivity> {
    const { data } = await api.get<RecentActivity>('/analytics/recent');
    return data;
  },

  async getAnalytics() {
    const [dashboard, diseases, trends, patients] = await Promise.all([
      this.getDashboard(),
      this.getDiseaseAnalytics(),
      this.getTrends(),
      this.getPatientAnalytics(),
    ]);
    return { dashboard, diseases, trends, patients };
  }
};

export default analyticsService;
