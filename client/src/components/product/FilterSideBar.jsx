import React from "react";
import Accordion from "../Accordion";

const FilterSideBar = () => {
  const items = [
    {
      title: "Category",
      content: ["Mobile", "Accessories", "Geget"],
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default FilterSideBar;
