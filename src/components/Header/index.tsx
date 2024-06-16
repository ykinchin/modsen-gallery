import { AppIcon } from '@components/appIcon'
import { AppLogo } from '@components/appLogo'
import { BurgerMenu } from '@components/burgerMenu'
import { HeaderTab } from '@components/headerTab'
import { PATHS } from '@constants/routes'
import { useState } from 'react'
import { BiBookmark, BiHomeAlt } from 'react-icons/bi'
import { useMediaQuery } from 'src/hooks/useMediaQuery'
import { FlexContainer, HeaderWrapper, Tabs } from './styled'

export const Header = () => {
	const [isMenuOpened, setIsMenuOpened] = useState(false)
	const isAboveMediumScreens = useMediaQuery('(min-width:768px)')

	const handleMenuToggle = () => {
		setIsMenuOpened(!isMenuOpened)
	}

	return (
		<HeaderWrapper $isOpened={isMenuOpened && !isAboveMediumScreens}>
			<FlexContainer>
				<AppLogo withText />

				{isAboveMediumScreens ? (
					<Tabs>
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
					</Tabs>
				) : (
					<BurgerMenu
						onClick={handleMenuToggle}
						isOpened={isMenuOpened}
					/>
				)}
			</FlexContainer>
		</HeaderWrapper>
	)
}
