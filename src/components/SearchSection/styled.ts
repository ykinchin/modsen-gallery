import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

const InputSectionWrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: ${baseTheme.gap.l};

	@media ${baseTheme.media.tablet} {
		gap: ${baseTheme.gap.normal};
	}
`

const InputTitle = styled.h1`
	font-size: ${baseTheme.fontSize.xl};
	font-weight: 700;
	color: ${baseTheme.colors.primary};
	text-align: center;

	span {
		color: ${baseTheme.colors.brightHiglight};
	}

	@media ${baseTheme.media.tablet} {
		font-size: ${baseTheme.fontSize.l};
	}

	@media ${baseTheme.media.mobile} {
		font-size: ${baseTheme.fontSize.m};
	}
`

export { InputSectionWrapper, InputTitle }
