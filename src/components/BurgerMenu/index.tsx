import { AppIcon } from '@components/appIcon'
import { HeaderTab } from '@components/headerTab'
import { PATHS } from '@constants/routes'
import { BiBookmark, BiHomeAlt, BiMenu, BiX } from 'react-icons/bi'
import { MenuContent, SlideMenuWrapper, ToggleWrapper } from './styled'

type Props = {
	onClick: () => void
	isOpened: boolean
}

export const BurgerMenu = ({ onClick, isOpened }: Props) => {
	return (
		<>
			<ToggleWrapper onClick={onClick}>
				{isOpened ? <AppIcon Icon={BiX} /> : <AppIcon Icon={BiMenu} />}
			</ToggleWrapper>
			<SlideMenuWrapper $isOpened={isOpened}>
				<MenuContent>
					<HeaderTab
						path={PATHS.main}
						tabIcon={<AppIcon Icon={BiHomeAlt} />}
						tabText='Home'
					/>
					<HeaderTab
						path={PATHS.favorites}
						tabIcon={<AppIcon Icon={BiBookmark} />}
						tabText='Your favorites'
					/>
				</MenuContent>
			</SlideMenuWrapper>
		</>
	)
}
