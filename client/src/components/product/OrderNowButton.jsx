import React from 'react';
import { useEffect, useState } from 'react';

const OrderNowButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500); // Delay for smooth entry
    return () => clearTimeout(timer);
  }, []);

  return (
    show && (
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 sm:hidden">
        <button
          className="w-96 py-3 text-white bg-purple-500 uppercase shadow-lg transition-all duration-300 ease-in-out hover:bg-purple-700 focus:ring focus:ring-blue-300 scale-95 hover:scale-100"
        >
          Order Now
        </button>
      </div>
    )
  );
};

export default OrderNowButton;
