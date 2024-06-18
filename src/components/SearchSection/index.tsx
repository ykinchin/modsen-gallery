import { SearchForm } from '@components/searchForm'
import { InputSectionWrapper, InputTitle } from './styled'

export const SearchSection = () => {
	return (
		<InputSectionWrapper>
			<InputTitle>
				Let's Find Some <span>Art</span> <br /> Here!
			</InputTitle>
			<SearchForm />
		</InputSectionWrapper>
	)
}
