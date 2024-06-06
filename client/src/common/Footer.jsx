import { FaFacebookF,FaWhatsapp ,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import PlayStore from "../assets/google-play-badge.png"
const Footer = () => {
    return (
        <footer >
            <div className='px-10 md:px-20 py-10'>
                <div className='grid md:grid-cols-12 gap-10'>
                    <div className='col-span-3'>
                        <h1 className='text-2xl text-purple-500'>Brand</h1>
                        <p>Best information about the company gies here but now lorem ipsum is</p>
                        <div className='space-x-2 flex pt-3'>
                            <span className="bg-slate-500 p-2 rounded-full hover:bg-purple-500 transition duration-300 text-white">
                                <FaFacebookF/>
                            </span>
                            <span className="bg-slate-500 p-2 rounded-full hover:bg-purple-500 transition duration-300 text-white">
                            <FaWhatsapp />
                            </span>
                            <span className="bg-slate-500 p-2 rounded-full hover:bg-purple-500 transition duration-300 text-white">
                            <FaLinkedinIn/>
                            </span>
                            <span className="bg-slate-500 p-2 rounded-full hover:bg-purple-500 transition duration-300 text-white">
                            <FaYoutube/>
                            </span>
                        </div>
                    </div>
                    <div className='col-span-9'>
                        <div className='grid grid-cols-2 md:grid-cols-5 md:gap-10 gap-3'>
                            <div>
                                <h1 className="text-xl">About</h1>
                                <ul className="text-slate-600">
                                    <li>About Us</li>
                                    <li>Find Store</li>
                                    <li>Categories</li>
                                    <li>Blogs</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="text-xl">Partnership</h1>
                                <ul className="text-slate-600">
                                    <li>About Us</li>
                                    <li>Find Store</li>
                                    <li>Categories</li>
                                    <li>Blogs</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="text-xl">Information</h1>
                                <ul className="text-slate-600">
                                    <li>Help Center</li>
                                    <li>Money Refund</li>
                                    <li>Shipping</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="text-xl">For users</h1>
                                <ul className="text-slate-600">
                                    <li>Help Center</li>
                                    <li>Money Refund</li>
                                    <li>Shipping</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="text-xl">Get app</h1>
                                <img src={PlayStore} width={170} alt="play store" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-100 flex justify-between px-10 md:px-20 py-5">
                <h1>@ 2024 Ecommerce</h1>
                <div>
                    <h1>English</h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;