import React from "react";
import { BsX } from "react-icons/bs";

const CartSidebar = ({ isVisible, hideSidebar, cartItems }) => {
  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-white shadow-lg transform ${
        isVisible ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      {/* Close Button */}
      <button
        onClick={hideSidebar}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
      >
        <BsX size={24} />
      </button>

      {/* Cart Header */}
      <div className="p-5 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-purple-600">Your Cart</h2>
      </div>

      {/* Cart Items List */}
      <div className="p-5 space-y-4 overflow-y-auto max-h-[70vh]">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 bg-gray-100 rounded-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-md font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">Qty: {item.quantity}</p>
                <p className="text-gray-900 font-bold">${item.price}</p>
              </div>
              <p className="text-gray-900 font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Total Price & Place Order Button */}
      <div className="p-5 border-t border-gray-200">
        <div className="flex justify-between text-lg font-semibold text-gray-800">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <button
          className="w-full mt-4 bg-purple-500 hover:bg-purple-700 text-white py-3 rounded-md font-bold text-lg transition-all duration-300"
          disabled={cartItems.length === 0}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
