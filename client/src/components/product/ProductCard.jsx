// ProductCard.js
import React from "react";
import { Link} from "react-router-dom";

const ProductCard = () => {
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/400",
      title: "Material Product",
      category: "Materials",
      price: 29.99,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400",
      title: "Material Product",
      category: "Materials",
      price: 29.99,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400",
      title: "Material Product",
      category: "Materials",
      price: 29.99,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400",
      title: "Material Product",
      category: "Materials",
      price: 29.99,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400",
      title: "Material Product",
      category: "Materials",
      price: 29.99,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400",
      title: "Material Product",
      category: "Materials",
      price: 29.99,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400",
      title: "Material Product",
      category: "Materials",
      price: 29.99,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/400",
      title: "Material Product",
      category: "Materials",
      price: 29.99,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4  justify-center items-center gap-5">
      {products.map((product) => {
        return (
          <div className="rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out group relative">
            <Link to={`/details/${product.id}`}>
              <img
                className="w-full h-48 object-cover"
                src={product.image}
                alt={product.title}
              />
            </Link>
            <div className="px-6 py-4">
              <Link to={`/details/${product.id}`}>
                <div className="font-bold text-xl mb-2">{product.title}</div>
              </Link>
              <p className="text-gray-700 text-base">{product.category}</p>
              <p className="text-gray-900 font-semibold text-lg">
                ${product.price}
              </p>
            </div>
            <div className="absolute inset-0 flex gap-3 items-center justify-center bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 ease-in-out bg-white">
              <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                Add to Cart
              </button>
              <Link to={`/details/${product.id}`} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
