import { baseTheme } from '@styles/theme'
import styled from 'styled-components'

type Props = {
	isOpened: boolean
}

const HeaderWrapper = styled.header<Props>`
	background: ${baseTheme.colors.headerGradient};
	padding: 32px 320px;
	z-index: 30;
	width: 100%;
	position: ${({ isOpened }) => (isOpened ? 'fixed' : 'relative')};

	@media ${baseTheme.media.laptop} {
		padding: 32px 160px;
	}

	@media ${baseTheme.media.tablet} {
		padding: 32px 80px;
	}

	@media ${baseTheme.media.mobile} {
		padding: 16px 40px;
	}
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

	@media ${baseTheme.media.mobile} {
		flex-direction: column;
		gap: 8px;
	}
`

export { FlexContainer, HeaderWrapper, Tabs }
