import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can log the error to an error reporting service
    console.error('Error:', error);
    console.error('Error Info:', info);
  }

  render() {
    if (this.state.hasError) {
      // You can render a custom error message or UI here
      return (
        <div>
          <h2>Something went wrong.</h2>
          {/* You can customize the error message */}
        </div>
      );
    }

    // If there's no error, render the child components
    return this.props.children;
  }
}

export default ErrorBoundary;
