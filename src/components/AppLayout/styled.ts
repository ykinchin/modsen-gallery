import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

const Layout = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`

const Content = styled.main`
	flex-grow: 1;
	padding: 120px 320px;
	gap: ${baseTheme.gap.xxl};
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${baseTheme.colors.default};

	@media ${baseTheme.media.laptop} {
		padding: 80px;
	}

	@media ${baseTheme.media.tablet} {
		padding: 40px;
		margin-top: 127px;
		gap: ${baseTheme.gap.xl};
	}

	@media ${baseTheme.media.mobile} {
		margin-top: 95px;
	}
`

export { Content, Layout }
