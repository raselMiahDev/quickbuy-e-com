import React from "react";
import ProductCard from "../components/product/ProductCard";
import MasterLayout from "../layout/MasterLayout";
import NewsLetter from "../common/NewsLetter";
import CategoryCard from "../components/category/CategoryCard";
import HeroBanner from "../components/heroSection/HeroBanner";
import CustomerBenifit from "../components/heroSection/CustomerBenifit";
import Title from "../common/Title";

const Home = () => {
  return (
    <MasterLayout>
      <HeroBanner/>
      <CategoryCard/>
      <div className="px-10 md:px-40">
          <Title title="New Arrival" description="lorem inspute the change"/>
          <ProductCard />
      </div>
      <CustomerBenifit/>
      <NewsLetter/>
    </MasterLayout>
  );
};

export default Home;
