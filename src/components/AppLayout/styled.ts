import { baseTheme } from '@styles/theme'
import styled from 'styled-components'

const Layout = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`

const Content = styled.main`
	flex-grow: 1;
	background-color: ${baseTheme.colors.default};
`

export { Content, Layout }
