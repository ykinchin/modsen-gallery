import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 40px;
`

const Title = styled.h2`
	font-family: var(--second-family);
	font-weight: 400;
	font-size: 16px;
	color: ${baseTheme.colors.higlight};
`

const Subtitle = styled.h3`
	font-weight: 400;
	font-size: 32px;
	color: ${baseTheme.colors.primary};
`

export { Subtitle, Title, TitleWrapper }
