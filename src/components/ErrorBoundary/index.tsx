import SectionTitle from '@components/SectionTitle'
import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
	children?: ReactNode
}

interface State {
	hasError: boolean
}

class AppErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false
	}

	public static getDerivedStateFromError(): State {
		return { hasError: true }
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Uncaught error:', error, errorInfo)
	}

	public render() {
		if (this.state.hasError) {
			return (
				<SectionTitle
					title='An Error occured'
					subtitle='Sorry.. there was an error. Try ty refresh the page or follow next
						button'
				/>
			)
		}

		return this.props.children
	}
}

export default AppErrorBoundary
