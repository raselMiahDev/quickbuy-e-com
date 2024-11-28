import React, { useState } from "react";

const SortingTabs = () => {
  const [activeTab, setActiveTab] = useState("Best match");

  const tabs = [
    { name: "Best match" },
    { name: "Best sellers" },
    { name: "Newest" },
    { name: "Best rated" },
    { name: "Trending" },
    { name: "Price" },
  ];

  return (
    <div className="flex justify-between">
      <div>
          <p className="text-slate-500 font-light uppercase">Sorting for get your targated products</p>
      </div>
      <div className="flex items-center space-x-4 bg-white p-2 border border-gray-300 rounded shadow-md">
      {/* View Mode Icons */}
      <div className="flex space-x-1">
        <button className="p-2 border border-gray-300 rounded hover:bg-gray-200">
          <div className="w-4 h-4 bg-gray-700"></div>
        </button>
        <button className="p-2 border border-gray-300 rounded hover:bg-gray-200">
          <div className="w-4 h-4 bg-gray-700"></div>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex-1 flex items-center space-x-2 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`py-2 px-4 text-sm rounded border ${
              activeTab === tab.name
                ? "bg-purple-500 text-white"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Sort Icon */}
      <button className="p-2 border border-gray-300 rounded hover:bg-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
    </div>
  );
};

export default SortingTabs;
