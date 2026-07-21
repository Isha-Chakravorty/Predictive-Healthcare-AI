# Contributing Guidelines

Thank you for your interest in contributing to Predictive Healthcare AI! We welcome contributions from the community.

## How to Contribute

1. **Fork the Repository**: Start by forking the project to your own GitHub account.
2. **Clone the Fork**: Clone your fork locally to your machine.
3. **Create a Branch**: Create a descriptive branch for your feature or bug fix (e.g., `feature/patient-filtering`, `fix/login-crash`).
4. **Make Changes**: Follow the coding standards outlined in the [Developer Guide](developer-guide.md).
5. **Verify Changes**: Run `npm run lint` and `npm run build` to ensure your code is clean and production-ready.
6. **Commit**: Write clear, logical commit messages.
7. **Push & Pull Request**: Push your branch to GitHub and open a Pull Request (PR) against the `main` branch.

## Code Standards

- **Formatting**: We use Prettier. Please ensure your editor is configured to format on save, or run `npm run format` manually.
- **Linting**: No PR will be merged if there are existing ESLint warnings or errors.
- **TypeScript**: We enforce strict typing. Type errors will cause the build pipeline to fail.
- **Accessibility**: Ensure new UI components are accessible (semantic HTML, ARIA attributes, keyboard support).

## Reporting Bugs

If you find a bug, please create an Issue on GitHub with:
- A clear, descriptive title.
- Steps to reproduce the issue.
- Expected vs. actual behavior.
- Screenshots (if applicable).

We appreciate your help in making this project better!
