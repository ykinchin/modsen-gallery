import Footer from '@components/Footer'
import Header from '@components/Header'
import { Outlet } from 'react-router-dom'
import { Content, Layout } from './styled'

const AppLayout = () => {
	return (
		<Layout>
			<Header />
			<Content>
				<Outlet />
			</Content>
			<Footer />
		</Layout>
	)
}

export default AppLayout
