import React from "react";
import ProductCard from "../components/product/ProductCard";
import MasterLayout from "../layout/MasterLayout";
import FilterSideBar from "../components/product/FilterSideBar";
import NewsLetter from "../common/NewsLetter";
import Category from "../components/product/Category";

const Home = () => {
  return (
    <MasterLayout>
      <div className="px-10 md:px-20 py-10 grid md:grid-cols-12 gap-5">
        <div className="col-span-1">
          <FilterSideBar />
        </div>
        <div className="col-span-11">
          <ProductCard />
        </div>
      </div>
      <Category/>
      <NewsLetter/>
    </MasterLayout>
  );
};

export default Home;
