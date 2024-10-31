import React from "react";
import ProductCard from "../components/product/ProductCard";
import MasterLayout from "../layout/MasterLayout";
import NewsLetter from "../common/NewsLetter";
import Category from "../components/product/Category";
import HeroBanner from "../components/heroSection/HeroBanner";
import CustomerBenifit from "../components/heroSection/CustomerBenifit";
import Title from "../common/Title";

const Home = () => {
  return (
    <MasterLayout>
      <HeroBanner/>
      <CustomerBenifit/>
      <div className="px-10 md:px-40">
          <Title title="New Arrival" description="lorem inspute the change"/>
          <ProductCard />
      </div>
      <Category/>
      <NewsLetter/>
    </MasterLayout>
  );
};

export default Home;
