import React, { Component } from 'react';
import type { ReactNode, ErrorInfo } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '../ui/Button';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-6">
            <AlertTriangle className="text-red-500" size={32} />
          </div>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Something went wrong
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-2 max-w-md">
            An unexpected error occurred in this section. Please try refreshing.
          </p>
          {this.state.error && (
            <code className="text-xs text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-lg px-3 py-2 mb-6 max-w-md block truncate">
              {this.state.error.message}
            </code>
          )}
          <div className="flex gap-3">
            <Button
              onClick={this.handleReset}
              leftIcon={<RefreshCw size={14} />}
            >
              Try Again
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.reload()}
            >
              Reload Page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
