import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  name?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`[ErrorBoundary - ${this.props.name || 'Component'}] caught error:`, error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="p-6 my-4 rounded-xl border border-amber-500/30 bg-[#1A1613] text-amber-100 text-center">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">
            {this.props.name || 'Interactive Element'}
          </p>
          <p className="text-sm text-neutral-400 font-light">
            Component temporarily paused or WebGL unavailable.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
