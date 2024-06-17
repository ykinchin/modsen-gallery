import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { Tab } from './styled'

type Props = {
	tabIcon?: ReactNode
	tabText: string
	path: string
	onClick?: () => void
}

export const HeaderTab = ({ tabText, tabIcon, path, onClick }: Props) => {
	return (
		<NavLink
			to={path}
			onClick={onClick}
		>
			<Tab>
				{tabIcon}
				{tabText}
			</Tab>
		</NavLink>
	)
}
