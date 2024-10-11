import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout: FunctionComponent = () => {
    return (
        <div id="layout">
            <Header />
            <div className='content'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;