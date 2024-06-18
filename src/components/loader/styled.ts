import { baseTheme } from '@styles/theme'
import { keyframes, styled } from 'styled-components'

const ldsRing = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const LoaderWrapper = styled.div`
	color: ${baseTheme.colors.higlight};
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
`

const LoaderRing = styled.div`
	box-sizing: border-box;
	display: block;
	position: absolute;
	width: 64px;
	height: 64px;
	margin: 8px;
	border: 8px solid currentColor;
	border-radius: 50%;
	animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
	border-color: currentColor transparent transparent transparent;

	&:nth-child(1) {
		animation-delay: -0.45s;
	}

	&:nth-child(2) {
		animation-delay: -0.3s;
	}

	&:nth-child(3) {
		animation-delay: -0.15s;
	}
`

export { LoaderRing, LoaderWrapper }
