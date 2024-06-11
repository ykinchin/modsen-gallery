import { baseTheme } from '@styles/theme'
import styled from 'styled-components'

const Layout = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`

const Content = styled.main`
	flex-grow: 1;
	padding: 120px 320px;
	gap: 120px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${baseTheme.colors.default};

	@media ${baseTheme.media.laptop} {
		padding: 80px 80px;
	}

	@media ${baseTheme.media.tablet} {
		padding: 40px 40px;
		gap: 80px;
	}
`

export { Content, Layout }
