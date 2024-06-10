import { baseTheme } from '@styles/theme'
import { BiBookmark } from 'react-icons/bi'
import { Button } from './styled'

type Props = {
	onClick: () => void
	isFavorite: boolean
}

const AddButton = ({ onClick, isFavorite }: Props) => {
	return (
		<Button
			onClick={onClick}
			isFavorite={isFavorite}
		>
			<BiBookmark
				size={24}
				color={baseTheme.colors.higlight}
			/>
		</Button>
	)
}

export default AddButton
