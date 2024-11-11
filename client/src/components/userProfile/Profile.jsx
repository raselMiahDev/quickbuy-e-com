import React from "react";
import { BsCart2, BsBagCheckFill } from "react-icons/bs";

const Profile = () => {
  // Sample data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    photo: "https://banner2.cleanpng.com/20180623/iqh/aazrdy8gb.webp", // Replace with user photo URL
  };

  const cartItems = [
    { id: 1, name: "Product 1", price: "$50", quantity: 2 },
    { id: 2, name: "Product 2", price: "$30", quantity: 1 },
  ];

  const orders = [
    { id: 1, product: "Product 1", date: "2024-10-01", status: "Delivered" },
    { id: 2, product: "Product 2", date: "2024-09-25", status: "Processing" },
  ];

  return (
    <div className="bg-gray-100 p-6 md:p-12 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
        {/* User Information */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          {/* User Photo */}
          <div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500">
            <img src={user.photo} alt="User" className="w-full h-full object-cover" />
          </div>
          {/* User Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-purple-600">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        {/* Cart List */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-purple-700 flex items-center space-x-2">
            <BsCart2 />
            <span>Cart List</span>
          </h3>
          <div className="mt-4 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-4 bg-purple-50 rounded-lg"
              >
                <div>
                  <p className="text-gray-700 font-semibold">{item.name}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <p className="text-gray-900 font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Order Information */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-purple-700 flex items-center space-x-2">
            <BsBagCheckFill />
            <span>Order Information</span>
          </h3>
          <div className="mt-4 space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="text-gray-700 font-semibold">{order.product}</p>
                  <p className="text-gray-500 text-sm">Order Date: {order.date}</p>
                </div>
                <span
                  className={`py-1 px-3 rounded-full text-sm ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
