// ProductCard.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      let result = await axios.get("https://fakestoreapi.com/products");

      setProducts(result.data);
    })();
  }, []);
  return (
<div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-5">
  {products.map((product) => {
    return (
      <div key={product.id} className="bg-[#f6f6f6] overflow-hidden relative transition-transform duration-300 ease-in-out group">
        <Link to={`/details/${product.id}`} className="block">
          <img
            className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            src={product.image}
            alt={product.title}
          />
        </Link>

        {/* Button Section */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 bg-purple-200 bg-opacity-90 transition-transform duration-300 ease-in-out flex justify-between p-4">
          <button className="bg-purple-500 hover:bg-purple-700 text-white text-sm py-2 px-4">
            Add to Cart
          </button>
          <div>
            <p>৳ : {product.price}</p>
          </div>
          <Link
            to={`/details/${product.id}`}
            className="bg-purple-500 hover:bg-purple-700 text-white text-sm py-2 px-4"
          >
            Details
          </Link>
        </div>

        {/* Product info section with spaced title */}
        <div className="px-6 py-4 text-center">
          <Link to={`/details/${product.id}`}>
            <div className="text-md mb-2 tracking-wider">{product.title}</div>
          </Link>
          <p className="text-gray-700 text-base">Rating</p>
          <p className="text-gray-900 font-bold">৳ : {product.price}</p>
        </div>
      </div>
    );
  })}
</div>


  );
};

export default ProductCard;
