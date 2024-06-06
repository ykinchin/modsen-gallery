import { ReactNode } from 'react'
import { Tab } from './styled'

type Props = {
	tabIcon: ReactNode
	tabText: string
}

const HeaderTab = ({ tabText, tabIcon }: Props) => {
	return (
		<Tab>
			{tabIcon}
			{tabText}
		</Tab>
	)
}

export default HeaderTab
