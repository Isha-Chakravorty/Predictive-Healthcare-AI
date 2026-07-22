# Predictive Healthcare AI

An advanced, AI-powered healthcare analytics platform designed to predict diabetes and heart disease risk using sophisticated machine learning models. It features an interactive clinical dashboard, comprehensive patient management, predictive risk analysis, and explainable AI insights.

## Project Overview

Predictive Healthcare AI aims to empower clinicians and medical professionals with actionable, data-driven insights. By analyzing patient demographics, vital signs, and lifestyle factors, the platform provides real-time risk assessments, enabling early intervention and personalized care plans. 

## Key Features

- **Clinical Dashboard:** A comprehensive overview of patient populations, risk distributions, and system-wide analytics.
- **Patient Management:** Securely store and manage patient records with detailed medical histories and demographics.
- **AI Risk Prediction:** Utilize pre-trained machine learning models to assess the probability of chronic conditions like Diabetes and Heart Disease.
- **Explainable AI (XAI):** Transparent breakdown of risk factors (e.g., BMI, Glucose levels) contributing to the model's predictions.
- **Bulk Operations & Export:** Manage large cohorts with bulk actions and CSV exports for external analysis.
- **Responsive & Accessible Design:** A modern, accessible interface built for desktop and mobile environments.

## Technology Stack

### Frontend
- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v7
- **Forms & Validation:** React Hook Form + Zod
- **Data Visualization:** Chart.js + react-chartjs-2
- **Icons & Animations:** Lucide React, Framer Motion

### Backend
- **Framework:** FastAPI (Python)
- **Database:** SQLite (Development) / PostgreSQL (Production)
- **ORM & Migrations:** SQLAlchemy 2.0 & Alembic
- **Authentication:** JWT (python-jose) & bcrypt (passlib)

## Folder Structure

```
├── docs/                   # Project documentation
├── frontend/
│   ├── src/
│   │   ├── assets/         # Static assets and branding
│   │   ├── components/     # Reusable UI components (buttons, tables, cards)
│   │   ├── constants/      # App-wide constants and configuration
│   │   ├── context/        # React context providers (Auth, Theme, Toast)
│   │   ├── hooks/          # Custom React hooks
│   │   ├── layouts/        # Application layout wrappers
│   │   ├── mock/           # Mock data and services for development
│   │   ├── pages/          # Route-level page components
│   │   ├── routes/         # Application routing logic
│   │   ├── services/       # API integration services
│   │   ├── types/          # TypeScript interface definitions
│   │   └── utils/          # Helper functions and formatters
│   ├── vite.config.ts      # Vite build configuration
│   └── package.json        # Frontend dependencies
└── README.md
```

## Screenshots

*(Screenshots will be added here once available)*

## Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Isha-Chakravorty/Predictive-Healthcare-AI.git
   cd Predictive-Healthcare-AI
   ```

2. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

## Running Locally

To start the development server with hot-module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Production Build

To create an optimized production build:

```bash
npm run build
```

This will generate the built assets in the `frontend/dist` directory. You can preview the production build locally using:

```bash
npm run preview
```

### Backend API Endpoints

The backend provides a secure, token-based (JWT) API.

**Authentication:**
- `POST /auth/register` - Create a new user account (Doctor/Admin).
- `POST /auth/login` - Authenticate and retrieve access/refresh tokens.
- `POST /auth/refresh` - Refresh an expired access token.
- `GET /auth/me` - Retrieve current authenticated user profile.

**Patient Management:**
- `POST /patients` - Create a new patient record.
- `GET /patients` - List all patients (supports `search`, `skip`, and `limit`).
- `GET /patients/{id}` - Retrieve a specific patient record.
- `PUT /patients/{id}` - Update a specific patient's details.
- `DELETE /patients/{id}` - Soft delete a patient record.
- `GET /patients/{id}/predictions` - Retrieve all predictions associated with a specific patient.

**Disease Prediction:**
- `POST /predictions` - Trigger a disease prediction for a patient.
- `GET /predictions` - Retrieve prediction history (supports filtering by `disease`, `risk_level`, `patient_id`).
- `GET /predictions/{id}` - Retrieve detailed prediction results and AI explanations.
- `DELETE /predictions/{id}` - Remove a prediction record.

**Analytics Dashboard:**
- `GET /analytics/dashboard` - Retrieve high-level KPI metrics (total patients, risk aggregations).
- `GET /analytics/diseases` - Retrieve prediction distribution and average confidence statistics by disease.
- `GET /analytics/trends` - Retrieve daily, weekly, and monthly time-series prediction counts.
- `GET /analytics/patients` - Retrieve demographic distribution (Age, Gender, BMI).
- `GET /analytics/recent` - Fetch the most recently registered patients and latest predictions.

**Machine Learning Pipeline & Integration:**
Located in `backend/ml/`, the offline ML pipeline trains and exports predictive algorithms (Logistic Regression, Decision Trees) using clinical datasets. These `.joblib` models are actively integrated into the FastAPI application via an `MLService` singleton loaded exactly once during the application lifespan. 

When a client hits `POST /predictions`, the application automatically:
1. Detects the target disease (Diabetes vs Heart Disease) dynamically by inspecting the provided `input_features` keys.
2. Formats and scales the input using the serialized `sklearn` pipeline.
3. Computes the probability and categorizes it into a discrete **Risk Level** (Low: 0-0.3, Medium: 0.31-0.70, High: 0.71-1.0).
4. Derives native, zero-latency **Explainability** by tracing the model coefficients (for Linear models) or feature importances (for Trees) to inform the user exactly which factors influenced the prediction.

## Project Architecture Overview

The application follows a modular, component-driven full-stack architecture. 
- **Frontend Routing:** Handled by React Router with lazy-loaded components for optimal code splitting.
- **State Management:** Local component state paired with React Context for global state (Authentication, Theming, Notifications).
- **Styling Strategy:** Tailwind CSS utility classes ensure consistent, responsive designs without external CSS files.
- **Build Pipeline:** Vite provides blazing-fast builds and bundles vendor libraries separately to maximize caching efficiency.
- **Backend & ML Integration:** FastAPI powers a high-performance REST API. The machine learning pipeline is natively integrated using scikit-learn and joblib for real-time, low-latency disease prediction scoring.

## Future Enhancements

- Multi-language localization (i18n).
- Comprehensive unit and integration testing suite (Vitest/pytest).
- Real-time websockets for system notifications.

## License

This project is licensed under the MIT License.

## Author

Developed by Isha Chakravorty.
