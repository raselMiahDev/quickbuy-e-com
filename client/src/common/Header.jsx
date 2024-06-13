import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart2, BsPerson, BsEnvelope, BsHeart } from "react-icons/bs";
import CartSideBar from "../components/CartSideBar";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showSidebar = () => {
    setIsVisible(true);
  };

  const hideSidebar = () => {
    setIsVisible(false);
  };

  return (
    <nav className="border-b px-10 md:px-20 py-5">
      <div className="flex items-center justify-between">

        <div className="text-purple-500 font-semibold text-2xl flex items-center">
          <span className="bg-purple-500 text-white p-2 rounded">
            <BsCart2 size={25} />
          </span>
          <Link to="/" className="ml-2">
            Brand
          </Link>
        </div>

        <div className="md:block hidden ml-5 flex-none items-center border rounded overflow-hidden">
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

        <div className="flex items-center space-x-6">
          <Link
            to="/profile"
            className="flex items-center space-x-2 hover:text-purple-700"
          >
            <BsPerson size={20} />
            <span>Profile</span>
          </Link>

          <div
            onClick={showSidebar}
            className="flex space-x-2 hover:text-purple-700 cursor-pointer"
          >
            <button className="flex">
              <BsCart2 size={25} />
            </button>
            <span>Cart List</span>
          </div>
          {isVisible && (
        <CartSideBar hideSidebar={hideSidebar} isVisible={isVisible} />
      )}
        </div>
      </div>


    </nav>
  );
};

export default Header;
