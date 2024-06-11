import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

type Props = {
	isOpened: boolean
}

const ToggleWrapper = styled.div`
	cursor: pointer;
`

const SlideMenuWrapper = styled.div<Props>`
	position: fixed;
	top: 124px;
	right: 0;
	height: max-content;
	width: 100%;
	background: ${baseTheme.colors.headerGradient};
	transform: ${({ isOpened }) =>
		isOpened ? 'translateX(0)' : 'translateX(100%)'};
	transition: transform 0.3s ease-in-out;
	z-index: 30;
	padding: 32px 80px;

	@media ${baseTheme.media.mobile} {
		top: 90px;
	}
`

const MenuContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	color: #ffffff;
`
export { MenuContent, SlideMenuWrapper, ToggleWrapper }
