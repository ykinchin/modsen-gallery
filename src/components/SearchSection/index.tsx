import SearchForm from '@components/SearchForm'
import { InputSectionWrapper, InputTitle } from './styled'

const SearchSection = () => {
	return (
		<InputSectionWrapper>
			<InputTitle>
				Let's Find Some <span>Art</span> <br /> Here!
			</InputTitle>
			<SearchForm />
		</InputSectionWrapper>
	)
}

export default SearchSection
