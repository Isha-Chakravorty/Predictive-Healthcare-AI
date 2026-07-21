# Architecture Documentation

This document outlines the architectural decisions, design patterns, and structure of the Predictive Healthcare AI frontend.

## Frontend Architecture

The frontend is a Single Page Application (SPA) built with React and Vite. It is designed around modularity, separation of concerns, and performance.

### Component Hierarchy
- **Layouts (`src/layouts/`)**: High-level structural components (e.g., `AppLayout`, `AuthLayout`) that define the shell of the application (Sidebar, Header, Content Area).
- **Pages (`src/pages/`)**: Route-level components that compose features together. These components are lazy-loaded to enable route-based code splitting.
- **UI Components (`src/components/ui/`)**: Reusable, dumb components (Buttons, Inputs, Badges, Tables) that are stateless and highly customizable via props.
- **Common Components (`src/components/common/`)**: Shared components that possess some domain logic or state, such as `ErrorBoundary` or `LoadingScreen`.

### Routing Overview
Routing is managed by `react-router-dom` (v7) using the `createBrowserRouter` API.
- **Routes Definition**: Centralized in `src/routes/index.tsx`.
- **Code Splitting**: All page components are imported dynamically via `React.lazy()` and wrapped in a `<Suspense>` boundary.
- **Auth Flow**: The router utilizes layout wrappers to differentiate between authenticated (Dashboard, Patients) and unauthenticated (Login, Register) views.

### State Management
- **Local State**: Managed via `useState` and `useReducer` for UI-specific logic (e.g., modals, form data).
- **Global State**: Managed via React Context API.
  - `AuthContext`: Manages user authentication and permissions.
  - `ThemeContext`: Manages dark/light mode preferences.
  - `ToastContext`: Manages system-wide notifications and alerts.
- **Form State**: Managed by `react-hook-form` integrated with `zod` for robust, type-safe validation.

### UI Design System
The application utilizes Tailwind CSS for styling.
- **Utility-First**: Rapid styling without context switching.
- **Theming**: Integrated dark mode support via Tailwind's `dark:` modifier.
- **Accessibility**: UI components are built with ARIA attributes and keyboard navigation support.
- **Animations**: `framer-motion` is used for fluid transitions, page enter/exit animations, and interactive feedback.

### Build and Optimization
- **Vite Configuration**: Customized `vite.config.ts` extracts large dependencies (React, UI libs, Charts, Forms) into specific vendor chunks (`react-vendor`, `ui-vendor`, etc.) to optimize browser caching.
- **Linting & Typing**: Strict TypeScript configurations and ESLint rules ensure code quality and prevent regressions.
