import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

type Props = {
	url: string | null
}

const ArtworkSection = styled.section`
	display: flex;
	gap: ${baseTheme.gap.xl};
	width: ${baseTheme.width.full};
	max-width: 1280px;
	font-family: ${baseTheme.fonts.secondary};
	justify-content: start;

	@media ${baseTheme.media.laptop} {
		gap: ${baseTheme.gap.md};
		justify-content: center;
	}

	@media ${baseTheme.media.tablet} {
		gap: ${baseTheme.gap.m};
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
		gap: ${baseTheme.gap.m};
	}
`

const BlockWrapper = styled.div``
const BlockTitle = styled.h2`
	margin-bottom: ${baseTheme.marginBottom.l};
	font-weight: 400;
	font-size: ${baseTheme.fontSize.l};

	@media ${baseTheme.media.tablet} {
		font-size: ${baseTheme.fontSize.m};
		margin-bottom: ${baseTheme.marginBottom.m};
	}
`
const AuthorTitle = styled.h3`
	margin-bottom: ${baseTheme.marginBottom.m};
	font-weight: 400;
	color: ${baseTheme.colors.higlight};
	font-size: ${baseTheme.fontSize.m};

	@media ${baseTheme.media.tablet} {
		font-size: ${baseTheme.fontSize.s};
		margin-bottom: ${baseTheme.marginBottom.s};
	}
`
const YearTitle = styled.p`
	font-weight: 700;
`

const RowWrapper = styled.p`
	margin-bottom: ${baseTheme.marginBottom.m};
	display: flex;
	gap: ${baseTheme.gap.xs};

	span {
		color: ${baseTheme.colors.higlight};
	}

	@media ${baseTheme.media.tablet} {
		max-width: 768px;
		margin-bottom: ${baseTheme.marginBottom.s};
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
