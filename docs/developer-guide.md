# Developer Guide

Welcome to the Developer Guide for Predictive Healthcare AI. This document will help you get set up and understand our daily development workflow.

## Environment Setup

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+)

### Installation
1. Clone the repository.
2. Run `npm install` in the `frontend` directory.

## Development Workflow

### Starting the Dev Server
Run the following command to start the Vite development server:
```bash
npm run dev
```
The server supports Hot Module Replacement (HMR) out of the box.

### Code Organization Guidelines
- **New Pages**: Add them to `src/pages/` and register them in `src/routes/index.tsx` using `React.lazy()`.
- **New Components**: If it's a generic UI element (like a custom switch), put it in `src/components/ui/`. If it's specific to a feature, create a new folder under `src/components/`.
- **Forms**: Always use `react-hook-form` and define a schema with `zod` for validation.
- **Icons**: We use `lucide-react`.

### Linting and Formatting
Code quality is enforced via ESLint and Prettier. Before committing, ensure you run:
```bash
npm run lint
```
To automatically fix linting and formatting issues:
```bash
npm run lint:fix
npm run format
```

### TypeScript Usage
- Avoid using `any` types. Utilize proper interfaces and types defined in `src/types/`.
- Define prop types explicitly for all components.

## Building for Production
To generate a production-ready bundle:
```bash
npm run build
```
This command runs `tsc -b` to verify types before executing `vite build`. Inspect the terminal output for chunk size warnings and ensure that `vendor` chunks are split correctly.
