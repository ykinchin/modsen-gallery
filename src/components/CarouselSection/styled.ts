import { baseTheme } from '@styles/theme'
import { styled } from 'styled-components'

type Props = {
	$current: boolean
}

const CarouselWrapper = styled.section`
	display: flex;
	flex-direction: column;
`

const CarouselContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 1280px;

	@media ${baseTheme.media.laptop} {
		width: max-content;
		justify-content: center;
	}
`

const ErrorWrapper = styled.div`
	display: flex;
	gap: 16px;
`

const ItemWrapper = styled.div`
	cursor: pointer;
	width: 387px;
	height: 514px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	@media ${baseTheme.media.mobile} {
		width: 287px;
		height: 414px;
	}
`

const PaginationWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 18px;
	align-self: flex-end;

	@media ${baseTheme.media.laptop} {
		align-self: center;
	}

	@media ${baseTheme.media.mobile} {
		align-self: center;
		gap: 4px;
	}
`

const Page = styled.div<Props>`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	font-size: 18px;
	line-height: 128%;
	width: 30px;
	height: 30px;
	background-color: ${({ $current }) =>
		$current && baseTheme.colors.brightHiglight};
	font-weight: ${({ $current }) => $current && 600};
	color: ${({ $current }) => $current && 'white'};
	border-radius: 4px;
`

const Arrow = styled.div`
	cursor: pointer;
`

export {
	Arrow,
	CarouselContainer,
	CarouselWrapper,
	ErrorWrapper,
	ItemWrapper,
	Page,
	PaginationWrapper
}
