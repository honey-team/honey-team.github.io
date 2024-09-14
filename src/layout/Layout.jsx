import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export function Layout() {
	return <div id="layout">
		<Header />
		<div className='content'>
		<Outlet />
		</div>
		<Footer />
	</div>
}