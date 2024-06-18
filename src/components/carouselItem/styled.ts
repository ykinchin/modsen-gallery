import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

type Props = {
	url: string
}

const Background = styled.div<Props>`
	width: ${baseTheme.width.full};
	height: 444px;
	background-image: url(${props => props.url});
	background-size: cover;
	background-position: top;
	background-repeat: no-repeat;
`

const ErrorContainter = styled.div`
	height: 444px;
	width: ${baseTheme.width.full};
	display: flex;
	align-items: center;
	justify-content: center;
`

const FlexContainer = styled.div`
	width: 334px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: white;
	padding: 17px 24px;
	gap: ${baseTheme.gap.s};
	transform: translateY(-50%);
`

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${baseTheme.gap.s};
`

const TitleWrapper = styled.div`
	max-width: 219px;
	padding: 4px 0px;
`

const Title = styled.h3`
	font-size: ${baseTheme.fontSize.xs};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-weight: 400;
	line-height: 150%;
	letter-spacing: -0.03em;
	color: ${baseTheme.colors.primary};
	font-weight: 600;
`

const Author = styled.p`
	color: ${baseTheme.colors.higlight};
	font-weight: 400;
`

const Description = styled.p`
	font-weight: 700;
`

export {
	Author,
	Background,
	ContentContainer,
	Description,
	ErrorContainter,
	FlexContainer,
	Title,
	TitleWrapper
}
