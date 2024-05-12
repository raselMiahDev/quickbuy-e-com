import React from 'react';
import InputField from './InputField';

const UserDetails = () => {
    return (
        <div className='bg-white shadow rounded p-7 divide-y'>
            <div>
                <h1 className='text-2xl text-slate-700'>Checkout Information</h1>
            </div>

            {/* User input fields start  */}
            <div className='pt-5 md:pt-10 '>
                <div className='md:flex'>
                <InputField type="text" label="Your Name" placeholder="First Name"/>
                <InputField type="text" placeholder="Last Name"/>
                </div>

                <div className='md:flex'>
                <InputField type="text" label="Phone Number" placeholder="Enter Number"/>
                <InputField type="text" label="email" placeholder="Enter valid email"/>
                </div>

                <div className='md:flex'>
                <InputField type="text" label="Zip code" placeholder="Enter zip code"/>
                <InputField type="text" label="Division" placeholder="Enter valid email"/>
                </div>

                <div className=''>
                <InputField type="text" label="Zip code" placeholder="Enter zip code"/>
                <InputField type="text" label="Division" placeholder="Enter valid email"/>
                </div>


            </div>
            {/* User input fields end  */}
        </div>
    );
};

export default UserDetails;