import { styled } from 'styled-components'

const GalleryWrapper = styled.section``
const GalleryGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	width: 100%;
	max-width: 1280px;
`

const ErrorWrapper = styled.div`
	width: 416px;
	padding: 16px 13px;
	display: flex;
	gap: 16px;
`

const ItemWrapper = styled.div`
	width: 416px;
	height: 112px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
`

export { ErrorWrapper, GalleryGrid, GalleryWrapper, ItemWrapper }
