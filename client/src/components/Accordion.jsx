import React, { useState } from 'react';
import { IoIosArrowDown ,IoIosArrowUp } from "react-icons/io";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSetIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-md">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => handleSetIndex(index)}
            className="w-full text-left  flex justify-between items-center focus:outline-none"
          >
            <span className="font-semibold">{item.title}</span>
            <span className="text-xl">
              {activeIndex === index ? <IoIosArrowUp/> : <IoIosArrowDown/>}
            </span>
          </button>
          {activeIndex === index && (
            <div className="py-2 px-5 bg-gray-100">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
