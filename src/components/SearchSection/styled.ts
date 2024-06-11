import { baseTheme } from '@styles/theme'
import styled from 'styled-components'

const InputSectionWrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: 72px;

	@media ${baseTheme.media.tablet} {
		gap: 18px;
	}
`

const InputTitle = styled.h1`
	font-size: 64px;
	font-weight: 700;
	color: ${baseTheme.colors.primary};
	text-align: center;

	span {
		color: ${baseTheme.colors.brightHiglight};
	}

	@media ${baseTheme.media.tablet} {
		font-size: 32px;
	}

	@media ${baseTheme.media.mobile} {
		font-size: 24px;
	}
`

export { InputSectionWrapper, InputTitle }
