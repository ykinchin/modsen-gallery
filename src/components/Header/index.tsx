import { AppIcon } from '@components/appIcon'
import { AppLogo } from '@components/appLogo'
import { BurgerMenu } from '@components/burgerMenu'
import { HeaderTab } from '@components/headerTab'
import { PATHS } from '@constants/routes'
import { useCallback, useRef, useState } from 'react'
import { BiBookmark, BiHomeAlt } from 'react-icons/bi'
import { useClickOutside } from 'src/hooks/useClickOutside'
import { useMediaQuery } from 'src/hooks/useMediaQuery'
import { FlexContainer, HeaderWrapper, Tabs } from './styled'

export const Header = () => {
	const outsideRef = useRef(null)
	const [isMenuOpened, setIsMenuOpened] = useState(false)
	const isAboveMediumScreens = useMediaQuery('(min-width:768px)')

	const handleMenuToggle = () => {
		setIsMenuOpened(!isMenuOpened)
	}

	const handleMenuClose = useCallback(() => {
		setIsMenuOpened(false)
	}, [])

	useClickOutside(outsideRef, handleMenuClose)

	return (
		<HeaderWrapper
			ref={outsideRef}
			$isOpened={isMenuOpened && !isAboveMediumScreens}
		>
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
