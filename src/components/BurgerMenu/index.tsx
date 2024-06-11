import HeaderTab from '@components/HeaderTab'
import { PATHS } from '@constants/routes'
import { baseTheme } from '@styles/theme'
import { BiBookmark, BiHomeAlt, BiMenu, BiX } from 'react-icons/bi'
import { MenuContent, SlideMenuWrapper, ToggleWrapper } from './styled'

type Props = {
	onClick: () => void
	isOpened: boolean
}

const BurgerMenu = ({ onClick, isOpened }: Props) => {
	return (
		<>
			<ToggleWrapper onClick={onClick}>
				{isOpened ? (
					<BiX
						size={32}
						color={baseTheme.colors.higlight}
					/>
				) : (
					<BiMenu
						size={32}
						color={baseTheme.colors.higlight}
					/>
				)}
			</ToggleWrapper>
			<SlideMenuWrapper isOpened={isOpened}>
				<MenuContent>
					<HeaderTab
						path={PATHS.main}
						tabIcon={
							<BiHomeAlt
								size={24}
								color={baseTheme.colors.higlight}
							/>
						}
						tabText='Home'
					/>
					<HeaderTab
						path={PATHS.favorites}
						tabIcon={
							<BiBookmark
								size={24}
								color={baseTheme.colors.higlight}
							/>
						}
						tabText='Your favorites'
					/>
				</MenuContent>
			</SlideMenuWrapper>
		</>
	)
}

export default BurgerMenu
