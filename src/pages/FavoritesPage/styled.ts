import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

const FavoritePage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${baseTheme.gap.xxl};

	@media ${baseTheme.media.laptop} {
		gap: ${baseTheme.gap.xl};
	}

	@media ${baseTheme.media.tablet} {
		gap: ${baseTheme.gap.md};
	}
`

const PageTitle = styled.h1`
	font-size: ${baseTheme.fontSize.xl};
	font-weight: 700;
	color: ${baseTheme.colors.primary};
	text-align: center;

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: ${baseTheme.gap.xs};
		color: ${baseTheme.colors.brightHiglight};
	}

	@media ${baseTheme.media.laptop} {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${baseTheme.media.tablet} {
		grid-template-columns: repeat(1, 1fr);
		font-size: ${baseTheme.fontSize.l};
	}

	@media ${baseTheme.media.mobile} {
		font-size: ${baseTheme.fontSize.m};
	}
`

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: ${baseTheme.gap.m};
	width: ${baseTheme.width.full};
	max-width: 1280px;

	@media ${baseTheme.media.laptop} {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${baseTheme.media.tablet} {
		grid-template-columns: repeat(1, 1fr);
	}
`

export { FavoritePage, GridContainer, PageTitle }
