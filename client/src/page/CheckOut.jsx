import React from "react";
import UserDetails from "../components/UserDetails";
import CartList from "../components/CartList";
import OrderSummary from "../components/OrderSummary";

const CheckOut = () => {
  return (
    <div className="bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-3  px-5 md:px-10 py-5 md:py-10 gap-5 md:gap-10">
        <div className="col-span-2">
        <UserDetails />
        </div>
        <div className="col-span-1">
          <CartList />
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
