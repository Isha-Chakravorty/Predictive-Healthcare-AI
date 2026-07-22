// ============================================================
// Application Constants
// ============================================================

export const APP_NAME = 'Predictive Healthcare AI';
export const APP_VERSION = '1.0.0';
export const APP_DESCRIPTION = 'Enterprise-grade AI-powered healthcare analytics platform';

// Navigation
export const SIDEBAR_WIDTH = 256;
export const SIDEBAR_COLLAPSED_WIDTH = 72;
export const NAVBAR_HEIGHT = 64;

// Pagination
export const DEFAULT_PAGE_SIZE = 10;
export const PAGE_SIZE_OPTIONS = [5, 10, 20, 50];

// Toast durations (ms)
export const TOAST_DURATION = {
  SHORT: 2000,
  MEDIUM: 3500,
  LONG: 6000,
  PERSISTENT: Infinity,
};

// Risk level colors
export const RISK_COLORS: Record<string, string> = {
  low:      '#22c55e',
  moderate: '#f59e0b',
  high:     '#ef4444',
  critical: '#9f1239',
};

export const RISK_BG_COLORS: Record<string, string> = {
  low:      'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300',
  moderate: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300',
  high:     'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300',
  critical: 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300',
};

// Status colors
export const STATUS_COLORS: Record<string, string> = {
  active:     'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300',
  inactive:   'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
  critical:   'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300',
  recovered:  'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
  monitoring: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300',
  completed:  'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300',
  pending:    'bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300',
  processing: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
  failed:     'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300',
};

// Disease types display names
export const DISEASE_LABELS: Record<string, string> = {
  diabetes:       'Diabetes',
  heart_disease:  'Heart Disease',
  hypertension:   'Hypertension',
  stroke:         'Stroke',
  kidney_disease: 'Kidney Disease',
  liver_disease:  'Liver Disease',
  cancer_risk:    'Cancer Risk',
  pneumonia:      'Pneumonia',
  alzheimers:     'Alzheimer\'s',
};

// Chart colors
export const CHART_COLORS = {
  primary:   '#3b82f6',
  secondary: '#06b6d4',
  success:   '#22c55e',
  warning:   '#f59e0b',
  danger:    '#ef4444',
  purple:    '#8b5cf6',
  pink:      '#ec4899',
  indigo:    '#6366f1',
  teal:      '#14b8a6',
  orange:    '#f97316',
};

export const CHART_COLORS_ARRAY = Object.values(CHART_COLORS);

// Chart gradient configs
export const CHART_GRADIENT_COLORS = [
  ['#3b82f6', '#1d4ed8'],
  ['#06b6d4', '#0e7490'],
  ['#22c55e', '#15803d'],
  ['#f59e0b', '#b45309'],
  ['#ef4444', '#b91c1c'],
  ['#8b5cf6', '#6d28d9'],
];

// Navigation routes
export const ROUTES = {
  HOME:               '/',
  DASHBOARD:          '/dashboard',
  PATIENTS:           '/patients',
  PATIENT_NEW:        '/patients/new',
  PATIENT_DETAIL:     '/patients/:id',
  PATIENT_EDIT:       '/patients/:id/edit',
  PREDICTION:         '/prediction',
  PREDICTION_NEW:     '/prediction/new/:type',
  PREDICTION_RESULT:  '/prediction/result/:id',
  PREDICTION_HISTORY: '/prediction/history',
  ANALYTICS:          '/analytics',
  MODEL_PERFORMANCE:  '/model-performance',
  SETTINGS:           '/settings',
  PROFILE:            '/profile',
  LOGIN:              '/login',
  REGISTER:           '/register',
  FORGOT_PASSWORD:    '/forgot-password',
  RESET_PASSWORD:     '/reset-password',
  VERIFY_EMAIL:       '/verify-email',
  TWO_FACTOR_AUTH:    '/2fa',
  SESSION_EXPIRED:    '/session-expired',
  HELP_CENTER:        '/help',
  NOT_FOUND:          '/404',
  UNAUTHORIZED:       '/403',
  SERVER_ERROR:       '/500',
  MAINTENANCE:        '/maintenance',
  OFFLINE:            '/offline',
};

// Date formats
export const DATE_FORMATS = {
  DISPLAY:   'MMM dd, yyyy',
  SHORT:     'MM/dd/yyyy',
  FULL:      'MMMM dd, yyyy',
  WITH_TIME: 'MMM dd, yyyy HH:mm',
  ISO:       'yyyy-MM-dd',
  TIME_AGO:  'relative',
};

// Local storage keys
export const STORAGE_KEYS = {
  THEME:             'healthcare-ai-theme',
  SIDEBAR_COLLAPSED: 'healthcare-ai-sidebar-collapsed',
  USER:              'healthcare-ai-user',
  TOKEN:             'healthcare-ai-token',
  REFRESH_TOKEN:     'healthcare-ai-refresh-token',
};

// Validation constants
export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
  PHONE_REGEX: /^\+?[\d\s\-()]{10,}$/,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

// Breakpoints (matches Tailwind)
export const BREAKPOINTS = {
  SM:  640,
  MD:  768,
  LG:  1024,
  XL:  1280,
  XXL: 1536,
};
