import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';
import { AuthLayout } from '../layouts/AuthLayout';
import { LoadingScreen } from '../components/common/LoadingScreen';
import { ErrorBoundary } from '../components/common/ErrorBoundary';
import { ROUTES } from '../constants';

// Lazy load all pages for code splitting
const DashboardPage        = lazy(() => import('../pages/DashboardPage').then(m => ({ default: m.DashboardPage })));
const PatientsPage         = lazy(() => import('../pages/PatientsPage').then(m => ({ default: m.PatientsPage })));
const PatientProfilePage   = lazy(() => import('../pages/PatientProfilePage').then(m => ({ default: m.PatientProfilePage })));
const AddPatientPage       = lazy(() => import('../pages/AddPatientPage').then(m => ({ default: m.AddPatientPage })));
const EditPatientPage      = lazy(() => import('../pages/EditPatientPage').then(m => ({ default: m.EditPatientPage })));
const PredictionPage       = lazy(() => import('../pages/PredictionPage').then(m => ({ default: m.PredictionPage })));
const PredictionHistoryPage= lazy(() => import('../pages/PredictionHistoryPage').then(m => ({ default: m.PredictionHistoryPage })));
const AnalyticsPage        = lazy(() => import('../pages/AnalyticsPage').then(m => ({ default: m.AnalyticsPage })));
const ModelPerformancePage = lazy(() => import('../pages/ModelPerformancePage').then(m => ({ default: m.ModelPerformancePage })));
const SettingsPage         = lazy(() => import('../pages/SettingsPage').then(m => ({ default: m.SettingsPage })));
const ProfilePage          = lazy(() => import('../pages/ProfilePage').then(m => ({ default: m.ProfilePage })));
const LoginPage            = lazy(() => import('../pages/LoginPage').then(m => ({ default: m.LoginPage })));
const RegisterPage         = lazy(() => import('../pages/RegisterPage').then(m => ({ default: m.RegisterPage })));
const ForgotPasswordPage   = lazy(() => import('../pages/ForgotPasswordPage').then(m => ({ default: m.ForgotPasswordPage })));
const NotFoundPage         = lazy(() => import('../pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<LoadingScreen />}>
    <ErrorBoundary>{children}</ErrorBoundary>
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={ROUTES.DASHBOARD} replace />,
  },
  {
    element: <AppLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: ROUTES.DASHBOARD,
        element: <PageWrapper><DashboardPage /></PageWrapper>,
      },
      {
        path: ROUTES.PATIENTS,
        element: <PageWrapper><PatientsPage /></PageWrapper>,
      },
      {
        path: ROUTES.PATIENT_NEW,
        element: <PageWrapper><AddPatientPage /></PageWrapper>,
      },
      {
        path: ROUTES.PATIENT_DETAIL,
        element: <PageWrapper><PatientProfilePage /></PageWrapper>,
      },
      {
        path: ROUTES.PATIENT_EDIT,
        element: <PageWrapper><EditPatientPage /></PageWrapper>,
      },
      {
        path: ROUTES.PREDICTION,
        element: <PageWrapper><PredictionPage /></PageWrapper>,
      },
      {
        path: ROUTES.PREDICTION_HISTORY,
        element: <PageWrapper><PredictionHistoryPage /></PageWrapper>,
      },
      {
        path: ROUTES.ANALYTICS,
        element: <PageWrapper><AnalyticsPage /></PageWrapper>,
      },
      {
        path: ROUTES.MODEL_PERFORMANCE,
        element: <PageWrapper><ModelPerformancePage /></PageWrapper>,
      },
      {
        path: ROUTES.SETTINGS,
        element: <PageWrapper><SettingsPage /></PageWrapper>,
      },
      {
        path: ROUTES.PROFILE,
        element: <PageWrapper><ProfilePage /></PageWrapper>,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <PageWrapper><LoginPage /></PageWrapper>,
      },
      {
        path: ROUTES.REGISTER,
        element: <PageWrapper><RegisterPage /></PageWrapper>,
      },
      {
        path: ROUTES.FORGOT_PASSWORD,
        element: <PageWrapper><ForgotPasswordPage /></PageWrapper>,
      },
    ],
  },
  {
    path: '*',
    element: <PageWrapper><NotFoundPage /></PageWrapper>,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
