import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

type Props = {
	url: string | null
}

const ArtworkSection = styled.section`
	display: flex;
	gap: 80px;
	width: 100%;
	max-width: 1280px;
	font-family: ${baseTheme.fonts.secondary};
	justify-content: start;

	@media ${baseTheme.media.laptop} {
		gap: 40px;
		justify-content: center;
	}

	@media ${baseTheme.media.tablet} {
		gap: 20px;
		flex-direction: column;
	}
`

const ImageWrapper = styled.div`
	position: relative;
	width: max-content;
`

const ButtonWrapper = styled.div`
	width: max-content;
	position: absolute;
	z-index: 10;
	top: 16px;
	right: 16px;
`

const ArtworkImg = styled.div<Props>`
	width: 497px;
	height: 570px;
	background-image: url(${props => props.url});
	background-size: cover;
	background-position: top;
	background-repeat: no-repeat;

	@media ${baseTheme.media.laptop} {
		width: 330px;
		height: 420px;
	}
`

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media ${baseTheme.media.tablet} {
		gap: 20px;
	}
`

const BlockWrapper = styled.div``
const BlockTitle = styled.h2`
	margin-bottom: 32px;
	font-weight: 400;
	font-size: 32px;

	@media ${baseTheme.media.tablet} {
		font-size: 24px;
		margin-bottom: 16px;
	}
`
const AuthorTitle = styled.h3`
	margin-bottom: 16px;
	font-weight: 400;
	color: ${baseTheme.colors.higlight};
	font-size: 24px;

	@media ${baseTheme.media.tablet} {
		font-size: 18px;
		margin-bottom: 8px;
	}
`
const YearTitle = styled.p`
	font-weight: 700;
`

const RowWrapper = styled.p`
	margin-bottom: 16px;
	display: flex;
	gap: 4px;

	span {
		color: ${baseTheme.colors.higlight};
	}

	@media ${baseTheme.media.tablet} {
		max-width: 768px;
		margin-bottom: 8px;
		flex-direction: column;
	}

	@media ${baseTheme.media.mobile} {
		max-width: 390px;
		word-break: break-all;
	}
`

export {
	ArtworkImg,
	ArtworkSection,
	AuthorTitle,
	BlockTitle,
	BlockWrapper,
	ButtonWrapper,
	ContentWrapper,
	ImageWrapper,
	RowWrapper,
	YearTitle
}
