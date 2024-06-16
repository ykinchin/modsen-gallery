import { LoaderRing, LoaderWrapper } from './styled'

export const Loader = () => {
	return (
		<LoaderWrapper>
			<LoaderRing />
			<LoaderRing />
			<LoaderRing />
			<LoaderRing />
		</LoaderWrapper>
	)
}
