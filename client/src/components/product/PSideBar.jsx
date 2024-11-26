import React from 'react';

const PSideBar = () => {
    const categories = [
        { name: "All categories", count: 6946 },
        { name: "eCommerce", count: 2006 },
        { name: "WordPress", count: 1995 },
        { name: "Site Templates", count: 1555 },
        { name: "UI Templates", count: 942 },
        { name: "Template Kits", count: 202 },
        { name: "CMS Themes", count: 136 },
        { name: "Marketing", count: 74 },
        { name: "Muse Templates", count: 17 },
        { name: "Jamstack", count: 12 },
        { name: "Blogging", count: 5 },
        { name: "Courses", count: 2 },
      ];
    
      return (
        <div className="w-64 bg-white p-4 border border-gray-200 rounded">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Filter & Refine</h2>
          <div className="text-gray-900">
            <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">Category</h3>
            <ul>
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-2 hover:text-purple-500 cursor-pointer"
                >
                  <span className="text-sm">{category.name}</span>
                  <span className="text-sm text-gray-500">{category.count}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
};

export default PSideBar;