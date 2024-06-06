import AppLogo from '@components/AppLogo'
import HeaderTab from '@components/HeaderTab'
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
						tabIcon={
							<BiHomeAlt
								size={24}
								color={`${baseTheme.colors.higlight}`}
							/>
						}
						tabText='Home'
					/>
					<HeaderTab
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
