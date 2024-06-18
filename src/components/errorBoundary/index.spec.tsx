import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { AppErrorBoundary } from '.'

jest.mock('@components/sectionTitle', () => ({
	SectionTitle: jest.fn(() => <div>An Error occured</div>)
}))

describe('AppErrorBoundary', () => {
	it('Render children', () => {
		render(
			<AppErrorBoundary>
				<div>Test Content</div>
			</AppErrorBoundary>
		)

		expect(screen.getByText('Test Content')).toBeInTheDocument()
	})

	it('Render error', () => {
		const ThrowError = () => {
			throw new Error('Test error')
		}

		const originalConsoleError = console.error
		console.error = jest.fn()

		render(
			<AppErrorBoundary>
				<ThrowError />
			</AppErrorBoundary>
		)

		expect(screen.getByText('An Error occured')).toBeInTheDocument()
		console.error = originalConsoleError
	})
})
