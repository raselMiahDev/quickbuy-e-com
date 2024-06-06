import React from "react";
import MasterLayout from "../layout/MasterLayout";
import { useParams } from "react-router-dom";
import Image from "../assets/features.png";

const Details = () => {
  const { id } = useParams();
  return (
    <MasterLayout>
      <div className="px-10 md:px-20 py-10 bg-slate-100">
        <div className="bg-white md:flex gap-6 border p-5">
          <div className="">
            <img src={Image} width={400} alt="" className="border"/>
            <div className="flex gap-3 md:gap-1 pt-2">
              <img src={Image}  className="border w-20 md:w-[6rem] h-14 md:h-20"/>
              <img src={Image} alt="" className="border w-20 md:w-[6rem] h-14 md:h-20"/>
              <img src={Image} alt="" className="border w-20 md:w-[6rem] h-14 md:h-20"/>
              <img src={Image} alt="" className="border w-20 md:w-[6rem] h-14 md:h-20"/>
            </div>
          </div>
          <div className="">
            <span className="text-green-600">In Stock</span>
            <h1 className="text-2xl">Product title</h1>
            <p>Product description</p>
            <span className="text-purple-500">price</span>

            <div className="py-5">
              <button className="bg-purple-500 px-5 py-2 text-white hover:text-purple-500 transition duration-300 hover:bg-transparent border hover:border-purple-500">
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default Details;
