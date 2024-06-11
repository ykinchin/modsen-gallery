import AppLogo from '@components/AppLogo'
import BurgerMenu from '@components/BurgerMenu'
import HeaderTab from '@components/HeaderTab'
import { PATHS } from '@constants/routes'
import { baseTheme } from '@styles/theme'
import { useState } from 'react'
import { BiBookmark, BiHomeAlt } from 'react-icons/bi'
import useMediaQuery from 'src/hooks/useMediaQuery'
import { FlexContainer, HeaderWrapper, Tabs } from './styled'

const Header = () => {
	const [isMenuOpened, setIsMenuOpened] = useState(false)
	const isAboveMediumScreens = useMediaQuery('(min-width:768px)')

	const handleMenuToggle = () => {
		setIsMenuOpened(!isMenuOpened)
	}

	return (
		<HeaderWrapper isOpened={isMenuOpened && !isAboveMediumScreens}>
			<FlexContainer>
				<AppLogo />
				{isAboveMediumScreens ? (
					<Tabs>
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

export default Header
