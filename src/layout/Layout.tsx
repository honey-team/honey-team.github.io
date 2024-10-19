import { FunctionComponent, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';
import MobileHeader from '../components/MobileHeader/MobileHeader';
import Footer from '../components/Footer/Footer';

const Layout: FunctionComponent = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id="layout">
            {isMobile ? <MobileHeader /> : <Header />}
            <div className='content'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
