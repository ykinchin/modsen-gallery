import { baseTheme } from '@styles/theme'
import React from 'react'

type Props = {
	Icon: React.ComponentType<{ size?: number; color?: string }>
	size?: number
	color?: string
}

export const AppIcon = ({
	Icon,
	size = 24,
	color = baseTheme.colors.higlight
}: Props) => {
	return (
		<Icon
			size={size}
			color={color}
		/>
	)
}
