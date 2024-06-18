import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

const LogoWrapper = styled.div`
	display: flex;
	align-items: end;
	font-size: ${baseTheme.fontSize.s};
`

const LogoText = styled.p`
	word-spacing: 2px;
`

const LogoHighlight = styled.span`
	color: ${baseTheme.colors.higlight};
	font-weight: 600;
`

export { LogoHighlight, LogoText, LogoWrapper }
