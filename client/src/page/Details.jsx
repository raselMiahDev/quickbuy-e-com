
import MasterLayout from "../layout/MasterLayout";
import { useParams } from "react-router-dom";
import Image from "../assets/features.png";
import axios from "axios";
import React, { useEffect, useState } from "react";
const Details = () => {
  const { id } = useParams();
  const [info,setInfo]=useState([])

  useEffect(()=>{
    (async()=>{
      let result = await axios.get(`https://fakestoreapi.com/products/${id}`)

      setInfo(result.data)
    })()
  },[])
  console.log(info)
  return (
    <MasterLayout>
      <div className="px-10 md:px-20 py-10 bg-slate-100">
        <div className="bg-white md:flex gap-6 border p-5">
          <div className="">
            <img src={info.image} width={600} alt="" className="border"/>
            <div className="flex gap-3 md:gap-1 pt-2">
              <img src={info.image}  className="border w-20 md:w-[6rem] h-14 md:h-20"/>
              <img src={info.image} alt="" className="border w-20 md:w-[6rem] h-14 md:h-20"/>
              <img src={info.image} alt="" className="border w-20 md:w-[6rem] h-14 md:h-20"/>
              <img src={info.image} alt="" className="border w-20 md:w-[6rem] h-14 md:h-20"/>
            </div>
          </div>
          <div className="">
            <span className="text-green-600">In Stock</span>
            <h1 className="text-2xl">{info.title}</h1>
            <p>{info.description}</p>
            <span className="text-purple-500">Price : {info.price}</span>

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
