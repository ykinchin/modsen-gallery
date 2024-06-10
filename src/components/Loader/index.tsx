import { LoaderRing, LoaderWrapper } from './styled'

const Loader = () => {
	return (
		<LoaderWrapper>
			<LoaderRing />
			<LoaderRing />
			<LoaderRing />
			<LoaderRing />
		</LoaderWrapper>
	)
}

export default Loader
