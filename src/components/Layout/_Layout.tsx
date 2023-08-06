import React from 'react';
import Header from './Header';

const Layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className=" ">
            <Header />
            <div className=" min-h-screen mt-24">
                {children}
            </div>
            <footer>
                <p>© 2021</p>
            </footer>
        </div>
    );
};

export default Layout;