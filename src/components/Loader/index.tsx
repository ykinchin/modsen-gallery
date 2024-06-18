import { LoaderRing, LoaderWrapper } from './styled'

export const Loader = () => {
	return (
		<LoaderWrapper data-testid='loader'>
			<LoaderRing />
			<LoaderRing />
			<LoaderRing />
			<LoaderRing />
		</LoaderWrapper>
	)
}
