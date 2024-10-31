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
    <div className="grid grid-cols-1 md:grid-cols-4  justify-center items-center gap-5">
      {products.map((product) => {
        return (
          <div>
            <div className="p-20 bg-[#f6f6f6] overflow-hidden transition-shadow duration-300 ease-in-out group relative">
              <Link to={`/details/${product.id}`}>
                <img
                  className="w-full h-48 object-cover"
                  src={product.image}
                  alt={product.title}
                />
              </Link>
              <div className="absolute inset-0 flex items-center justify-center bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 ease-in-out">
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                  Add to Cart
                </button>
                <Link
                  to={`/details/${product.id}`}
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
                >
                  Details
                </Link>
              </div>
            </div>
            <div className="px-6 py-4 text-center">
              <Link to={`/details/${product.id}`}>
                <div className="text-md mb-2">{product.title}</div>
              </Link>
              <p className="text-gray-700 text-base">Ratting</p>
              <p className="text-gray-900 font-bold">${product.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
