import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: ${baseTheme.marginBottom.xl};
`

const Title = styled.h2`
	font-family: var(--second-family);
	font-weight: 400;
	font-size: ${baseTheme.fontSize.default};
	color: ${baseTheme.colors.higlight};
`

const Subtitle = styled.h3`
	font-weight: 400;
	font-size: ${baseTheme.fontSize.l};
	color: ${baseTheme.colors.primary};

	@media ${baseTheme.media.mobile} {
		font-size: ${baseTheme.fontSize.m};
	}
`

export { Subtitle, Title, TitleWrapper }
