import React, { useState } from "react";

const ProductDetails = () => {
  // Sample product data
  const product = {
    title: "Elegant Product Name",
    price: 120,
    description: "This is a detailed description of the product with all the features and benefits.",
    images: [
      "https://via.placeholder.com/600", // Main image
      "https://via.placeholder.com/150", // Thumbnail 1
      "https://via.placeholder.com/150", // Thumbnail 2
      "https://via.placeholder.com/150", // Thumbnail 3
      "https://via.placeholder.com/150", // Thumbnail 4
    ],
    sizes: ["S", "M", "L", "XL"],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1); // New quantity state

  // Handlers for incrementing and decrementing quantity
  const handleIncrement = () => setQuantity((prevQty) => prevQty + 1);
  const handleDecrement = () => setQuantity((prevQty) => Math.max(1, prevQty - 1));

  return (
    <div className="bg-gray-100 p-6 md:p-12 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row">
        
        {/* Left section: Images */}
        <div className="flex flex-col space-y-4 md:w-1/2">
          <img
            src={selectedImage}
            alt="Product"
            className="w-full h-96 object-cover rounded-lg border-2 border-purple-500"
          />
          <div className="flex space-x-3">
            {product.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(image)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                  selectedImage === image ? "border-purple-500" : "border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right section: Product Details */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          {/* Product Title */}
          <h1 className="text-3xl font-semibold text-purple-700">{product.title}</h1>
          {/* Price */}
          <p className="text-2xl font-bold text-gray-900 mt-4">${product.price}</p>
          {/* Description */}
          <p className="text-gray-600 mt-4">{product.description}</p>

          {/* Size Selection */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700">Select Size</h3>
            <div className="flex space-x-4 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md text-gray-700 ${
                    selectedSize === size
                      ? "bg-purple-500 text-white"
                      : "border-gray-300 hover:border-purple-500 hover:text-purple-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700">Quantity</h3>
            <div className="flex items-center mt-2 space-x-4">
              <button
                onClick={handleDecrement}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                -
              </button>
              <span className="text-xl font-semibold">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="mt-8 w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 rounded-md transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
