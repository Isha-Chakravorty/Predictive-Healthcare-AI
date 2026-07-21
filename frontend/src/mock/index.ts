import type {
  Patient,
  DiseasePrediction,
  DashboardStats,
  RecentActivity,
  Notification,
  ModelMetrics,
  TimeSeriesData,
  DiseaseDistribution,
  User,
} from '../types';
import { generatedPatients, generatedPredictions, generatedCheckups, generatedDashboardStats } from './generated';

// ============================================================
// Mock User Data
// ============================================================
export const mockUser: User = {
  id: 'usr_001',
  firstName: 'Dr. Sarah',
  lastName: 'Mitchell',
  email: 'sarah.mitchell@healthcare-ai.com',
  role: 'admin',
  avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=sarah&backgroundColor=b6e3f4',
  department: 'Cardiology & AI Research',
  specialization: 'Cardiologist, AI Medicine',
  phone: '+1 (555) 234-5678',
  createdAt: '2023-01-15T00:00:00Z',
  lastActive: new Date().toISOString(),
  isVerified: true,
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

// ============================================================
// Mock Patients Data
// ============================================================
export const mockPatients: Patient[] = generatedPatients;

// ============================================================
// Mock Dashboard Stats
// ============================================================
export const mockDashboardStats: DashboardStats = generatedDashboardStats;


// ============================================================
// Mock Recent Activity
// ============================================================
export const mockRecentActivity: RecentActivity[] = [
  {
    id: 'act_001',
    type: 'prediction',
    title: 'Heart Disease Risk Prediction Completed',
    description: 'High risk (87%) detected for patient James Anderson. Immediate review recommended.',
    timestamp: '2024-07-21T09:45:00Z',
    userName: 'Dr. Sarah Mitchell',
    patientId: 'pat_001',
    severity: 'warning',
  },
  {
    id: 'act_002',
    type: 'patient_added',
    title: 'New Patient Registered',
    description: 'Thomas Walker (HCA-2024-009) added to the system.',
    timestamp: '2024-07-21T09:15:00Z',
    userName: 'Nurse Kelly Adams',
    severity: 'info',
  },
  {
    id: 'act_003',
    type: 'alert',
    title: 'Critical Glucose Level Alert',
    description: 'Patient Robert Williams glucose level spiked to 312 mg/dL. Intervention required.',
    timestamp: '2024-07-21T08:55:00Z',
    userName: 'System AI Monitor',
    patientId: 'pat_005',
    severity: 'error',
  },
  {
    id: 'act_004',
    type: 'model_update',
    title: 'Diabetes Prediction Model Updated',
    description: 'Model v2.4.1 deployed with improved accuracy (94.7% → 96.2%).',
    timestamp: '2024-07-21T07:30:00Z',
    userName: 'AI Engine',
    severity: 'success',
  },
  {
    id: 'act_005',
    type: 'prediction',
    title: 'Stroke Risk Assessment Completed',
    description: 'Low risk (12%) for patient Maria Rodriguez.',
    timestamp: '2024-07-21T07:00:00Z',
    userName: 'Dr. James Chen',
    patientId: 'pat_002',
    severity: 'success',
  },
  {
    id: 'act_006',
    type: 'report',
    title: 'Weekly Analytics Report Generated',
    description: 'Summary report for week of July 14–21 is ready.',
    timestamp: '2024-07-21T06:00:00Z',
    userName: 'Reporting Engine',
    severity: 'info',
  },
  {
    id: 'act_007',
    type: 'prediction',
    title: 'Kidney Disease Risk Analysis',
    description: 'Moderate risk (56%) for patient David Thompson. Follow-up scheduled.',
    timestamp: '2024-07-20T16:30:00Z',
    userName: 'Dr. Sarah Mitchell',
    patientId: 'pat_003',
    severity: 'warning',
  },
  {
    id: 'act_008',
    type: 'alert',
    title: 'Blood Pressure Alert Resolved',
    description: 'Patient Linda Garcia blood pressure returned to acceptable range.',
    timestamp: '2024-07-20T14:20:00Z',
    userName: 'Dr. James Chen',
    patientId: 'pat_008',
    severity: 'success',
  },
];

// ============================================================
// Mock Notifications
// ============================================================
export const mockNotifications: Notification[] = [
  {
    id: 'notif_001',
    type: 'alert',
    title: 'Critical Patient Alert',
    message: 'Patient James Anderson requires immediate attention. Blood pressure: 158/96.',
    timestamp: '2024-07-21T09:45:00Z',
    isRead: false,
    patientId: 'pat_001',
  },
  {
    id: 'notif_002',
    type: 'warning',
    title: 'High Risk Prediction',
    message: 'New diabetes prediction shows 78% risk for patient #HCA-2024-010.',
    timestamp: '2024-07-21T08:30:00Z',
    isRead: false,
  },
  {
    id: 'notif_003',
    type: 'success',
    title: 'Model Performance Update',
    message: 'Heart disease model accuracy improved to 96.2% after latest training.',
    timestamp: '2024-07-21T07:00:00Z',
    isRead: false,
  },
  {
    id: 'notif_004',
    type: 'info',
    title: 'Weekly Report Ready',
    message: 'Your weekly analytics report for July 14–21 has been generated.',
    timestamp: '2024-07-21T06:00:00Z',
    isRead: true,
    actionUrl: '/analytics',
  },
  {
    id: 'notif_005',
    type: 'warning',
    title: 'Scheduled Maintenance',
    message: 'System maintenance scheduled for July 22, 2:00–4:00 AM EST.',
    timestamp: '2024-07-20T18:00:00Z',
    isRead: true,
  },
];

// ============================================================
// Mock Predictions
// ============================================================
export const mockPredictions: DiseasePrediction[] = generatedPredictions;



// ============================================================
// Mock Model Metrics
// ============================================================
export const mockModelMetrics: ModelMetrics[] = [
  {
    modelId: 'mdl_001',
    modelName: 'DiabetesNet v2',
    version: 'v2.4.1',
    disease: 'diabetes',
    accuracy: 0.947,
    precision: 0.938,
    recall: 0.961,
    f1Score: 0.949,
    auc: 0.978,
    lastTrained: '2024-07-20T02:00:00Z',
    trainingDataSize: 125420,
    status: 'active',
  },
  {
    modelId: 'mdl_002',
    modelName: 'CardioRisk AI',
    version: 'v3.1.0',
    disease: 'heart_disease',
    accuracy: 0.962,
    precision: 0.954,
    recall: 0.971,
    f1Score: 0.962,
    auc: 0.989,
    lastTrained: '2024-07-18T03:00:00Z',
    trainingDataSize: 98750,
    status: 'active',
  },
  {
    modelId: 'mdl_003',
    modelName: 'StrokeGuard',
    version: 'v2.1.0',
    disease: 'stroke',
    accuracy: 0.891,
    precision: 0.876,
    recall: 0.908,
    f1Score: 0.892,
    auc: 0.941,
    lastTrained: '2024-07-10T04:00:00Z',
    trainingDataSize: 67340,
    status: 'active',
  },
  {
    modelId: 'mdl_004',
    modelName: 'NephroCheck',
    version: 'v1.8.2',
    disease: 'kidney_disease',
    accuracy: 0.874,
    precision: 0.863,
    recall: 0.889,
    f1Score: 0.876,
    auc: 0.927,
    lastTrained: '2024-06-28T05:00:00Z',
    trainingDataSize: 54210,
    status: 'active',
  },
  {
    modelId: 'mdl_005',
    modelName: 'HyperPredict',
    version: 'v1.5.0',
    disease: 'hypertension',
    accuracy: 0.923,
    precision: 0.914,
    recall: 0.934,
    f1Score: 0.924,
    auc: 0.965,
    lastTrained: '2024-07-05T06:00:00Z',
    trainingDataSize: 89650,
    status: 'active',
  },
  {
    modelId: 'mdl_006',
    modelName: 'OncoRisk v1',
    version: 'v1.2.0',
    disease: 'cancer_risk',
    accuracy: 0.836,
    precision: 0.821,
    recall: 0.854,
    f1Score: 0.837,
    auc: 0.901,
    lastTrained: '2024-06-15T07:00:00Z',
    trainingDataSize: 43120,
    status: 'testing',
  },
];

// ============================================================
// Mock Chart Data
// ============================================================

// Monthly predictions trend
export const mockPredictionTrend: TimeSeriesData[] = [
  { date: 'Jan', value: 320 },
  { date: 'Feb', value: 445 },
  { date: 'Mar', value: 398 },
  { date: 'Apr', value: 512 },
  { date: 'May', value: 578 },
  { date: 'Jun', value: 634 },
  { date: 'Jul', value: 701 },
];

// Patients registered per month
export const mockPatientGrowth: TimeSeriesData[] = [
  { date: 'Jan', value: 85 },
  { date: 'Feb', value: 112 },
  { date: 'Mar', value: 134 },
  { date: 'Apr', value: 156 },
  { date: 'May', value: 188 },
  { date: 'Jun', value: 210 },
  { date: 'Jul', value: 245 },
];

// Weekly prediction accuracy
export const mockAccuracyTrend: TimeSeriesData[] = [
  { date: 'W1 Jun', value: 91.2 },
  { date: 'W2 Jun', value: 92.5 },
  { date: 'W3 Jun', value: 91.8 },
  { date: 'W4 Jun', value: 93.1 },
  { date: 'W1 Jul', value: 94.0 },
  { date: 'W2 Jul', value: 93.7 },
  { date: 'W3 Jul', value: 94.7 },
];

// Disease distribution
export const mockDiseaseDistribution: DiseaseDistribution[] = [
  { disease: 'Diabetes',       count: 423, percentage: 32.9, color: '#3b82f6' },
  { disease: 'Heart Disease',  count: 312, percentage: 24.3, color: '#ef4444' },
  { disease: 'Hypertension',   count: 256, percentage: 19.9, color: '#f59e0b' },
  { disease: 'Stroke',         count: 124, percentage: 9.7,  color: '#8b5cf6' },
  { disease: 'Kidney Disease', count: 98,  percentage: 7.6,  color: '#06b6d4' },
  { disease: 'Other',          count: 71,  percentage: 5.5,  color: '#94a3b8' },
];

// Risk level distribution
export const mockRiskDistribution = [
  { label: 'Low Risk',      value: 486, color: '#22c55e' },
  { label: 'Moderate Risk', value: 367, color: '#f59e0b' },
  { label: 'High Risk',     value: 287, color: '#ef4444' },
  { label: 'Critical',      value: 144, color: '#9f1239' },
];

// Age group distribution
export const mockAgeDistribution = [
  { label: '18–30', value: 87  },
  { label: '31–45', value: 214 },
  { label: '46–60', value: 389 },
  { label: '61–75', value: 412 },
  { label: '75+',   value: 182 },
];
export const mockCheckups = generatedCheckups; 
