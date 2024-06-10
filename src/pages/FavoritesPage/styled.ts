import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

const FavoritePage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 120px;
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
`

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	width: 100%;
	max-width: 1280px;
`

export { FavoritePage, GridContainer, PageTitle }
