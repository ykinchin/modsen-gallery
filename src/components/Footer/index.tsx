import Modsen from '@assets/modsen.png'
import AppLogo from '@components/AppLogo'
import { FooterWrapper } from './styled'

const Footer = () => {
	return (
		<FooterWrapper>
			<AppLogo />
			<img
				src={Modsen}
				alt='Modsen'
			/>
		</FooterWrapper>
	)
}

export default Footer
