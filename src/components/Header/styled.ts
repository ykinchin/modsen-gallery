import { baseTheme } from '@styles/theme'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
	background: ${baseTheme.colors.headerGradient};
	padding: 32px 320px;
`
const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #ffffff;
`

const Tabs = styled.div`
	display: flex;
	gap: 16px;
`

export { FlexContainer, HeaderWrapper, Tabs }
