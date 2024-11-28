import React from "react";
import Image from "../../assets/winter-c.png";

const CategoryCard = () => {
  const categories = [
    {
      id: 1,
      name: "Nokia",
      title: "This is title",
      buttonLabel: "Buy Now",
      backgroundImage: Image,
    },
    {
      id: 2,
      name: "Samsung",
      title: "Explore the Galaxy",
      buttonLabel: "Shop Now",
      backgroundImage: Image,
    },
    {
      id: 3,
      name: "Apple",
      title: "Think Different",
      buttonLabel: "Learn More",
      backgroundImage: Image,
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 px-10 md:px-20 py-5 md:py-10 justify-center ">
      {categories.map((item) => (
        <div
          key={item.id}
          className="relative group w-96 h-64 rounded-lg overflow-hidden shadow-md transform transition duration-500 hover:scale-105"
          style={{
            backgroundImage: `url(${item.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Hover Stripe Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-start justify-center h-full p-6">
            {/* Category */}
            <h3 className="text-red-500 text-sm font-semibold mb-2">{item.name}</h3>

            {/* Title */}
            <h2 className="text-black text-2xl font-bold mb-4">{item.title}</h2>

            {/* Button */}
            <button className="px-6 py-2 bg-black text-white text-sm font-semibold rounded hover:bg-gray-800 transition">
              {item.buttonLabel}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
