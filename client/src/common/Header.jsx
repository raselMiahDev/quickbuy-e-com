import React, { useState } from 'react';
import CartSideBar from '../components/CartSideBar';
import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    const showSidebar = () => {
        setIsVisible(true);
    };

    const hideSidebar = () => {
        setIsVisible(false);
    };

    return (
        <nav className='bg-slate-100 px-10 md:px-20 py-5 flex justify-between items-center'>
            <div className='text-purple-600 font-semibold text-2xl'>
                <Link to="/">
                QuickBuy
                </Link>
            </div>
            <div className='relative'>
                <button onClick={showSidebar} className=" py-2 px-4 rounded">
                    <BsCart2 size={25}/>
                </button>
                <span className='absolute top-0 right-0 text-purple-500'>5</span>
            </div>
            {isVisible && (
                <CartSideBar hideSidebar={hideSidebar} isVisible={isVisible}/>
            )}
        </nav>
    );
};

export default Header;
