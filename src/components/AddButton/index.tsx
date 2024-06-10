import { baseTheme } from '@styles/theme'
import { BiBookmark } from 'react-icons/bi'
import { Button } from './styled'

const AddButton = () => {
	return (
		<Button>
			<BiBookmark
				size={24}
				color={baseTheme.colors.higlight}
			/>
		</Button>
	)
}

export default AddButton
