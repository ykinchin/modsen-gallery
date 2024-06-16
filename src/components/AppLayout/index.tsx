import { Footer } from '@components/footer'
import { Header } from '@components/header'
import { Outlet } from 'react-router-dom'
import { Content, Layout } from './styled'

export const AppLayout = () => {
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
