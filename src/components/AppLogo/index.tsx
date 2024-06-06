import { LogoHighlight, LogoText, LogoWrapper } from './styled'

const AppLogo = () => {
	return (
		<LogoWrapper>
			<svg
				width='64'
				height='63'
				viewBox='0 0 64 63'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M8 58H56'
					stroke='#E0A449'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M16 47V29'
					stroke='#E0A449'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M27 47V29'
					stroke='#E0A449'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M37 47V29'
					stroke='#E0A449'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M48 47V29'
					stroke='#E0A449'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M32.4999 5L54 18H11L32.4999 5Z'
					stroke='#E0A449'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
			<LogoText>
				Museum of <LogoHighlight>Art</LogoHighlight>
			</LogoText>
		</LogoWrapper>
	)
}

export default AppLogo
