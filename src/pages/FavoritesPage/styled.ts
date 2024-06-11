import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

const FavoritePage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 120px;

	@media ${baseTheme.media.laptop} {
		gap: 80px;
	}

	@media ${baseTheme.media.tablet} {
		gap: 40px;
	}
`

const PageTitle = styled.h1`
	font-size: 64px;
	font-weight: 700;
	color: ${baseTheme.colors.primary};
	text-align: center;

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4px;
		color: ${baseTheme.colors.brightHiglight};
	}

	@media ${baseTheme.media.laptop} {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${baseTheme.media.tablet} {
		grid-template-columns: repeat(1, 1fr);
		font-size: 32px;
	}

	@media ${baseTheme.media.mobile} {
		font-size: 24px;
	}
`

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	width: 100%;
	max-width: 1280px;

	@media ${baseTheme.media.laptop} {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${baseTheme.media.tablet} {
		grid-template-columns: repeat(1, 1fr);
	}
`

export { FavoritePage, GridContainer, PageTitle }
