import React, { ErrorInfo, Suspense } from 'react';
import { PageError } from 'widgets/PageError/ui/PageError';

interface Props {
    children?: React.ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // logger(error, info)
    }

    render() {
        const { state, props } = this;
        if (state.hasError) {
            return (
                <Suspense fallback="">
                    <PageError />
                </Suspense>
            );
        }

        return props.children;
    }
}

export default ErrorBoundary;
