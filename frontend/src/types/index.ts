// ============================================================
// Core Application Types & Interfaces
// ============================================================

export type Theme = 'light' | 'dark';

export type UserRole = 'admin' | 'doctor' | 'analyst' | 'nurse';

export type PredictionStatus = 'pending' | 'completed' | 'failed' | 'processing';

export type RiskLevel = 'low' | 'moderate' | 'high' | 'critical';

export type PatientStatus = 'active' | 'inactive' | 'critical' | 'recovered' | 'monitoring';

export type Gender = 'male' | 'female' | 'other' | 'prefer_not_to_say';

export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

// ============================================================
// User & Auth Types
// ============================================================

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  avatar?: string;
  department: string;
  specialization?: string;
  phone?: string;
  createdAt: string;
  lastActive: string;
  isVerified: boolean;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: Theme;
  language: string;
  notifications: NotificationPreferences;
  dashboardLayout: 'compact' | 'comfortable' | 'spacious';
}

export interface NotificationPreferences {
  email: boolean;
  push: boolean;
  sms: boolean;
  criticalAlerts: boolean;
  weeklyReport: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
  department: string;
  agreeToTerms: boolean;
}

// ============================================================
// Patient Types
// ============================================================

export interface Patient {
  id: string;
  patientId: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
  bloodType: BloodType;
  dateOfBirth: string;
  email?: string;
  phone: string;
  address: PatientAddress;
  status: PatientStatus;
  riskLevel: RiskLevel;
  assignedDoctor: string;
  admissionDate?: string;
  dischargeDate?: string;
  conditions: string[];
  medications: string[];
  lastVisit: string;
  nextAppointment?: string;
  predictionCount: number;
  createdAt: string;
  updatedAt: string;
  vitalSigns: VitalSigns;
  labReports?: LabReport[];
  lifestyle?: LifestyleData;
  medicalHistory?: MedicalHistory;
  familyHistory?: string[];
  healthScore?: number;
  doctorNotes?: DoctorNote[];
  documents?: Document[];
  notes?: string;
}

export interface LabReport {
  id: string;
  testName: string;
  date: string;
  result: string;
  status: 'normal' | 'abnormal' | 'critical';
  unit: string;
  referenceRange: string;
}

export interface LifestyleData {
  smokingStatus: 'never' | 'former' | 'current';
  alcoholConsumption: 'none' | 'light' | 'moderate' | 'heavy';
  physicalActivity: 'sedentary' | 'light' | 'moderate' | 'active';
  diet: string;
}

export interface MedicalHistory {
  pastSurgeries: string[];
  chronicDiseases: string[];
  allergies: string[];
}

export interface DoctorNote {
  id: string;
  date: string;
  doctorName: string;
  note: string;
}

export interface Document {
  id: string;
  title: string;
  type: string;
  uploadDate: string;
  url: string;
}

export interface PatientAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface VitalSigns {
  heartRate: number;
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
  temperature: number;
  oxygenSaturation: number;
  respiratoryRate: number;
  weight: number;
  height: number;
  bmi: number;
  glucoseLevel: number;
}

// ============================================================
// Prediction Types
// ============================================================

export interface DiseasePrediction {
  id: string;
  patientId: string;
  patientName: string;
  diseaseType: DiseaseType;
  probability: number;
  riskLevel: RiskLevel;
  confidence: number;
  status: PredictionStatus;
  features: PredictionFeatures;
  result: PredictionResult;
  modelVersion: string;
  createdAt: string;
  completedAt?: string;
  requestedBy: string;
  notes?: string;
}

export type DiseaseType =
  | 'diabetes'
  | 'heart_disease'
  | 'hypertension'
  | 'stroke'
  | 'kidney_disease'
  | 'liver_disease'
  | 'cancer_risk'
  | 'pneumonia'
  | 'alzheimers';

export interface PredictionFeatures {
  age: number;
  gender: string;
  bmi: number;
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
  glucoseLevel: number;
  cholesterol: number;
  heartRate: number;
  smokingStatus: 'never' | 'former' | 'current';
  familyHistory: boolean;
  physicalActivity: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
  alcoholConsumption: 'none' | 'light' | 'moderate' | 'heavy';
  [key: string]: string | number | boolean;
}

export interface PredictionResult {
  diagnosis: string;
  probability: number;
  confidence: number;
  riskFactors: RiskFactor[];
  recommendations: string[];
  followUpRequired: boolean;
  urgency: 'routine' | 'soon' | 'urgent' | 'emergency';
}

export interface RiskFactor {
  factor: string;
  impact: 'high' | 'medium' | 'low';
  value: string;
  normalRange?: string;
}

// ============================================================
// Dashboard Types
// ============================================================

export interface DashboardStats {
  totalPatients: number;
  activePredictions: number;
  modelAccuracy: number;
  criticalAlerts: number;
  predictionsToday: number;
  newPatientsThisWeek: number;
  avgConfidenceScore: number;
  tasksCompleted: number;
  highRiskPatients?: number;
  diabetesPredictions?: number;
  heartDiseasePredictions?: number;
  avgRiskScore?: number;
  monthlyPredictions?: number;
}

export interface StatCard {
  id: string;
  title: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease' | 'neutral';
  icon: string;
  color: string;
  subtitle?: string;
}

export interface RecentActivity {
  id: string;
  type: 'prediction' | 'patient_added' | 'alert' | 'report' | 'model_update';
  title: string;
  description: string;
  timestamp: string;
  userId?: string;
  userName?: string;
  patientId?: string;
  severity?: 'info' | 'warning' | 'error' | 'success';
}

export interface Notification {
  id: string;
  type: 'alert' | 'info' | 'success' | 'warning';
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  actionUrl?: string;
  patientId?: string;
}

// ============================================================
// Chart Types
// ============================================================

export interface ChartDataPoint {
  label: string;
  value: number;
}

export interface TimeSeriesData {
  date: string;
  value: number;
  category?: string;
}

export interface DiseaseDistribution {
  disease: string;
  count: number;
  percentage: number;
  color: string;
}

// ============================================================
// Model Performance Types
// ============================================================

export interface ModelMetrics {
  modelId: string;
  modelName: string;
  version: string;
  disease: DiseaseType;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  auc: number;
  lastTrained: string;
  trainingDataSize: number;
  status: 'active' | 'training' | 'deprecated' | 'testing';
}

export interface ConfusionMatrix {
  truePositive: number;
  trueNegative: number;
  falsePositive: number;
  falseNegative: number;
}

// ============================================================
// Table & Pagination Types
// ============================================================

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Column<T = any> {
  key: keyof T | string;
  title: string;
  sortable?: boolean;
  width?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (value: any, record: T) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

export interface PaginationState {
  page: number;
  pageSize: number;
  total: number;
}

export interface SortState {
  key: string;
  direction: 'asc' | 'desc';
}

export interface FilterState {
  search: string;
  status?: string;
  riskLevel?: string;
  dateFrom?: string;
  dateTo?: string;
  [key: string]: string | undefined;
}

// ============================================================
// API Response Types
// ============================================================

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
  message: string;
  success: boolean;
}

// ============================================================
// Form Types
// ============================================================

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// ============================================================
// Route Types
// ============================================================

export interface AppRoute {
  path: string;
  label: string;
  icon?: string;
  children?: AppRoute[];
  requiredRole?: UserRole[];
}

export interface BreadcrumbItem {
  label: string;
  path?: string;
  isActive?: boolean;
}
