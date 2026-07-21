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

## Project Architecture Overview

The application follows a modular, component-driven architecture. 
- **Routing:** Handled by React Router with lazy-loaded components for optimal code splitting.
- **State Management:** Local component state paired with React Context for global state (Authentication, Theming, Notifications).
- **Styling Strategy:** Tailwind CSS utility classes ensure consistent, responsive designs without external CSS files.
- **Build Pipeline:** Vite provides blazing-fast builds and bundles vendor libraries separately to maximize caching efficiency.

For more detailed architectural insights, please refer to the [Architecture Documentation](docs/architecture.md).

## Future Enhancements

- Integration with a live Python backend (FastAPI/Flask) for real-time model inference.
- Authentication integration (OAuth/JWT) with role-based access control (RBAC).
- Comprehensive unit and integration testing suite (Vitest/Cypress).
- Multi-language localization (i18n).

## License

This project is licensed under the MIT License.

## Author

Developed by Isha Chakravorty.
