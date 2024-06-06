import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

const MasterLayout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default MasterLayout;