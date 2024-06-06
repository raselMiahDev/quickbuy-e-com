import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSetIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleChange =(e)=>{
  setSelectedOption(e.target.value)
  }

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
              {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </button>
          {activeIndex === index && (
            <div className="py-3">
              {
                item.content.map((ele)=>{
                  return(
                    <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-purple-600 transition duration-150 ease-in-out"
                      label={ele}
                      value={ele}
                      onChange={handleChange}
                      checked={selectedOption === ele}
                    />
                    <span className="ml-2">{ele}</span>
                  </label>
                  )
                })
              }
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
