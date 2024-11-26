import React from 'react';
import MasterLayout from './../layout/MasterLayout';
import PSideBar from '../components/product/PSideBar';
import ShortingTabs from '../components/product/ShortingTabs';

const AllProduct = () => {
    return (
        <MasterLayout>
            <div className='px-10 md:px-20 py-5 md:py-10'>
                <div className='flex gap-5'>
                    <PSideBar/>
                    <div>
                        <ShortingTabs/>
                    </div>
                </div>
            </div>
        </MasterLayout>
    );
};

export default AllProduct;