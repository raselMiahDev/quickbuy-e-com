import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsCart2, BsPerson, BsSearch } from "react-icons/bs";
import CartSideBar from "../components/CartSideBar";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const showSidebar = () => {
    setIsVisible(true);
  };

  const hideSidebar = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`px-5 md:px-20 py-3 md:py-5 transition-all duration-300 ease-in-out z-50 ${
        isScrolled ? "fixed top-0 left-0 w-full bg-white shadow-lg" : "relative"
      }`}
    >
      <div className="flex items-center justify-between">

        {/* Brand Logo */}
        <div className="text-purple-500 font-semibold text-xl md:text-2xl flex items-center">
          <span className="bg-purple-500 text-white p-1 md:p-2 rounded">
            <BsCart2 size={20} />
          </span>
          <Link to="/" className="ml-2">
            Brand
          </Link>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex ml-5 flex-none items-center border rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="border-none px-3 py-2 focus:outline-none"
          />
          <select className="border-l px-3 py-2 focus:outline-none">
            <option>All category</option>
            <option>Category 1</option>
            <option>Category 2</option>
          </select>
          <button className="bg-purple-500 text-white px-3 py-2">Search</button>
        </div>

        {/* Icons and Cart Sidebar Trigger */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link
            to="/user-profile"
            className="flex items-center space-x-2 hover:text-purple-700"
          >
            <BsPerson size={20} />
            <span className="hidden md:inline">
              <Link to="/user-profile">Profile</Link>
            </span>
          </Link>

          <div
            onClick={showSidebar}
            className="flex space-x-2 hover:text-purple-700 cursor-pointer"
          >
            <button className="flex">
              <BsCart2 size={25} />
            </button>
            <span className="hidden md:inline">Cart List</span>
          </div>
          {isVisible && (
            <CartSideBar hideSidebar={hideSidebar} isVisible={isVisible} />
          )}
        </div>

        {/* Search Icon for Mobile */}
        <div
          className="md:hidden cursor-pointer text-purple-500"
          onClick={() => setShowMobileSearch(!showMobileSearch)}
        >
          <BsSearch size={20} />
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div
        className={`${
          showMobileSearch ? "max-h-40" : "max-h-0"
        } overflow-hidden transition-max-height duration-300 ease-in-out mt-3`}
      >
        <div className="flex items-center border border-purple-300 rounded-md p-2 bg-purple-100">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-2 focus:outline-none rounded-md bg-white text-gray-700"
          />
          <button className="bg-purple-500 text-white px-5 py-2 rounded-md ml-2">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
