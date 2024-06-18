import { baseTheme } from '@styles/theme'
import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import { AppIcon } from '.'

type Props = {
	size?: number
	color?: string
}

const MockIcon = ({ size, color }: Props) => (
	<svg
		width={size}
		height={size}
		style={{ color }}
		data-testid='mock-icon'
	/>
)

describe('AppIcon', () => {
	test('Render icon with size and color from theme', () => {
		render(<AppIcon Icon={MockIcon} />)

		const iconElement = screen.getByTestId('mock-icon')

		expect(iconElement).toBeInTheDocument()
		expect(iconElement).toHaveAttribute('width', '24')
		expect(iconElement).toHaveAttribute('height', '24')
		expect(iconElement).toHaveStyle(`color: ${baseTheme.colors.higlight}`)
	})

	test('Render icon with custom size and color', () => {
		const customSize = 32
		const customColor = '#ff0000'

		render(
			<AppIcon
				Icon={MockIcon}
				size={customSize}
				color={customColor}
			/>
		)

		const iconElement = screen.getByTestId('mock-icon')

		expect(iconElement).toBeInTheDocument()
		expect(iconElement).toHaveAttribute('width', customSize.toString())
		expect(iconElement).toHaveAttribute('height', customSize.toString())
		expect(iconElement).toHaveStyle(`color: ${customColor}`)
	})
})
