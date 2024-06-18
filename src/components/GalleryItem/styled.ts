import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

type Props = {
	$hovered: boolean
}

const ItemWrapper = styled.div`
	cursor: pointer;
	width: ${baseTheme.width.full};
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16px 13px;
	background-color: white;
	gap: ${baseTheme.gap.normal};
`

const FlexContainer = styled.div`
	display: flex;
	gap: ${baseTheme.gap.normal};
`

const ImageContainer = styled.div`
	width: 80px;
	height: 80px;
	position: relative;
`

const Images = styled.img<Props>`
	width: ${baseTheme.width.full};
	height: 100%;
	background-size: cover;
	background-position: center;
	transition: transform 0.6s;
	backface-visibility: hidden;
	transform: ${({ $hovered }) =>
		$hovered ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`

const LogoContainer = styled.div<Props>`
	width: ${baseTheme.width.full};
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	border: 1px solid ${baseTheme.colors.higlight};
	display: flex;
	justify-content: center;
	align-items: center;
	transition: transform 0.6s;
	backface-visibility: hidden;
	transform: ${({ $hovered }) =>
		$hovered ? 'rotateY(0deg)' : 'rotateY(-180deg)'};
`

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${baseTheme.gap.s};
`

const TitleWrapper = styled.div`
	max-width: 219px;

	@media ${baseTheme.media.desktop} {
		max-width: 159px;
	}
`

const Title = styled.h3`
	font-size: ${baseTheme.fontSize.xs};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	line-height: 150%;
	letter-spacing: -0.03em;
	color: ${baseTheme.colors.primary};
	font-weight: 600;
`

const Author = styled.p`
	color: ${baseTheme.colors.higlight};
`

const Description = styled.p`
	font-weight: 700;
`

export {
	Author,
	ContentContainer,
	Description,
	FlexContainer,
	ImageContainer,
	Images,
	ItemWrapper,
	LogoContainer,
	Title,
	TitleWrapper
}
