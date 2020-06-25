import React from 'react'

interface ErrorBoundaryProps {
  children: JSX.Element
}

interface ErrorBoundaryState {
  hasError: Boolean;
  errorMessage: string | Error;
}


class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error: Error) => {
    this.setState({hasError: true, errorMessage: error})
  }

  render() {
    if (this.state.hasError) {
    return <h1>{this.state.errorMessage}</h1>
    } else {
      return this.props.children;
    }
  }

}

export default ErrorBoundary