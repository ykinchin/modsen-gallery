import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { Tab } from './styled'

type Props = {
	tabIcon?: ReactNode
	tabText: string
	path: string
}

export const HeaderTab = ({ tabText, tabIcon, path }: Props) => {
	return (
		<NavLink to={path}>
			<Tab>
				{tabIcon}
				{tabText}
			</Tab>
		</NavLink>
	)
}
