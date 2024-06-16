import { CarouselSection } from '@components/carouselSection'
import { GallerySection } from '@components/gallerySection'
import { SearchSection } from '@components/searchSection'

export const HomePage = () => {
	return (
		<>
			<SearchSection />
			<CarouselSection />
			<GallerySection />
		</>
	)
}
