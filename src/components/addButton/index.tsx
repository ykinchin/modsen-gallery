import { AppIcon } from '@components/appIcon'
import { BiBookmark } from 'react-icons/bi'
import { Button } from './styled'

type Props = {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
	isFavorite: boolean
}

export const AddButton = ({ onClick, isFavorite }: Props) => {
	return (
		<Button
			onClick={onClick}
			$isFavorite={isFavorite}
		>
			<AppIcon Icon={BiBookmark} />
		</Button>
	)
}
