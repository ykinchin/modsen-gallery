import Modsen from '@assets/modsen.png'
import { AppLogo } from '@components/appLogo'
import { FooterWrapper } from './styled'

export const Footer = () => {
	return (
		<FooterWrapper>
			<AppLogo withText />
			<img
				src={Modsen}
				alt='Modsen'
			/>
		</FooterWrapper>
	)
}
