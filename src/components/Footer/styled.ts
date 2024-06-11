import { baseTheme } from '@styles/theme'
import styled from 'styled-components'

export const FooterWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 32px 320px;

	@media ${baseTheme.media.laptop} {
		padding: 40px 40px;
	}

	@media ${baseTheme.media.tablet} {
		padding: 20px 20px;
	}
`
