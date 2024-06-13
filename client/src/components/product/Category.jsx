import React from "react";
import Image from "../../assets/features.png";

const Category = () => {
  return (
    <div className="px-10 md:px-20 py-5 md:py-10 bg-white hidden md:block">
      <div className="flex gap-6  text-center">
        <div className="border p-3">
          <img src={Image} className="w-20" alt="" />
          <h1>Samart Watch</h1>
          <span className="bg-purple-300 text-red-500 rounded-xl text-sm p-1">
            -25%
          </span>
        </div>
        <div className="border p-3">
          <img src={Image} className="w-20" alt="" />
          <h1>Samart Watch</h1>
          <span className="bg-purple-300 text-red-500 rounded-xl text-sm p-1">
            -25%
          </span>
        </div>
        <div className="border p-3">
          <img src={Image} className="w-20" alt="" />
          <h1>Samart Watch</h1>
          <span className="bg-purple-300 text-red-500 rounded-xl text-sm p-1">
            -25%
          </span>
        </div>
        <div className="border p-3">
          <img src={Image} className="w-20" alt="" />
          <h1>Samart Watch</h1>
          <span className="bg-purple-300 text-red-500 rounded-xl text-sm p-1">
            -25%
          </span>
        </div>
        <div className="border p-3">
          <img src={Image} className="w-20" alt="" />
          <h1>Samart Watch</h1>
          <span className="bg-purple-300 text-red-500 rounded-xl text-sm p-1">
            -25%
          </span>
        </div>
        <div className="border p-3">
          <img src={Image} className="w-20" alt="" />
          <h1>Samart Watch</h1>
          <span className="bg-purple-300 text-red-500 rounded-xl text-sm p-1">
            -25%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Category;
