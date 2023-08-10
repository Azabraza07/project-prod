import { Component, type ErrorInfo, type ReactNode, Suspense } from 'react'
import { PageError } from 'widgets/PageError'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    logErrorToMyService(error, errorInfo)
  }

  render () {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      return (
        <Suspense fallback="">
          <PageError />
        </Suspense>
      )
    }

    return children
  }
}

export default ErrorBoundary

function logErrorToMyService (_error: Error, errorInfo: ErrorInfo) {
  // Implement your error logging logic here
}
