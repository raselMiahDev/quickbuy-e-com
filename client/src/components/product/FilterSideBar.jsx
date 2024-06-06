import React from 'react';
import Accordion from '../Accordion';

const FilterSideBar = () => {
    const items = [
        {
          title: 'Category',
          content: 'Content for item 1. This is some more detailed information.',
        },
      ];
    return (
        <div>

                <Accordion items={items}/>
        </div>
    );
};

export default FilterSideBar;