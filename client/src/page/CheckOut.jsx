import React from "react";
import UserDetails from "../components/UserDetails";
import CartList from "../components/CartList";
import Price from "../components/Price";

const CheckOut = () => {
  return (
    <div className="bg-slate-50 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-10 py-5 md:py-10 gap-5 md:gap-10">
        <UserDetails />
        <div>
          <CartList />
          <Price />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
