import React, { type ErrorInfo, type ReactNode } from 'react'
import { ErrorMessagePage } from 'widgets/ErrorMessage'

interface ErrorBoundaryProps {
    children: ReactNode
}
interface ErrorBoundaryState {
    hasError: boolean
    errorMessage: string
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    private static _error: Error
    constructor (props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false, errorMessage: '' }
    }

    static getDerivedStateFromError (error: Error) {
        ErrorBoundary._error = error
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch (error: Error, info: ErrorInfo) {
        console.log('error', error.message)
        console.log('info', info.componentStack)
        this.setState({ errorMessage: error.message })
    }

    render () {
        const { hasError, errorMessage } = this.state
        const { children } = this.props
        if (hasError) {
            // You can render any custom fallback UI
            return <ErrorMessagePage text={errorMessage}/>
        }

        return children
    }
}
