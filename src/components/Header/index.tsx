import AppLogo from '@components/AppLogo'
import HeaderTab from '@components/HeaderTab'
import { PATHS } from '@constants/routes'
import { baseTheme } from '@styles/theme'
import { BiBookmark, BiHomeAlt } from 'react-icons/bi'
import { FlexContainer, HeaderWrapper, Tabs } from './styled'

const Header = () => {
	return (
		<HeaderWrapper>
			<FlexContainer>
				<AppLogo />
				<Tabs>
					<HeaderTab
						path={PATHS.main}
						tabIcon={
							<BiHomeAlt
								size={24}
								color={`${baseTheme.colors.higlight}`}
							/>
						}
						tabText='Home'
					/>
					<HeaderTab
						path={PATHS.favorites}
						tabIcon={
							<BiBookmark
								size={24}
								color={`${baseTheme.colors.higlight}`}
							/>
						}
						tabText='Your favorites'
					/>
				</Tabs>
			</FlexContainer>
		</HeaderWrapper>
	)
}

export default Header
