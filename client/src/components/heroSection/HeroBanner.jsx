import React from 'react';
import {Link} from "react-router-dom"
import Banner from "../../assets/bannerImage.png"

const HeroBanner = () => {
    return (
        <div className='bg-[#efe0ff] px-10 md:px-20'>
            <div className='md:flex items-center justify-center pt-16'>
                <div>
                    <p className='text-xl'>Smart Products</p>
                    <h1 className='text-5xl md:text-7xl pb-6'>
                        <span>Winter Offer </span> <br /> <span>2024 collection</span>
                    </h1>

                    <div className='text-center md:text-left'>
                        <Link to={"/all-products"}>
                        <button className="relative px-8 py-4 border border-black text-black font-semibold overflow-hidden group transition-all duration-300 ease-in-out">
                        <span className="absolute inset-0 bg-[#a655f9] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"></span>
                        <span className="relative z-10 group-hover:text-white">Shop Now</span>
                    </button>
                        </Link>
                    </div>
                </div>
                <div className='mt-5 md:mt-0'>
                    <img src={Banner} alt="banner" />
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;