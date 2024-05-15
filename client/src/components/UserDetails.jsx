import React, { useState } from 'react';
import InputField from './InputField';

const UserDetails = () => {
    const [formData,setFormData]=useState({
        name:"",
        phone:"",
        email:"",
        zipCode:"",
        city:"",
        addres:"",

        shipName:"",
        shipAddress:"",
        shipZipCode:"",
        shipCity:""
    })

    const [sameInfo,setSameInfo] =useState({
        shipName:"",
        shipAddress:"",
        shipZipCode:"",
        shipCity:""
    })

    const handleOnChange = (event)=>{
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        })
    }

    const handleCheckboxChange = (event)=>{
        if(event.target.checked){
            setSameInfo({
                shipName: formData.name,
                shipAddress: formData.addres,
                shipZipCode: formData.zipCode,
                shipCity: formData.city
            })
        }else{
            setSameInfo({
                shipName:"",
                shipAddress:"",
                shipZipCode:"",
                shipCity:""
            });
        }
    }
    const submitHandle = ()=>{
        const formDataWithShipping = {
            ...formData,
            ...sameInfo
        }
        alert(JSON.stringify(formDataWithShipping))
    }
    return (
        <div >
            <div className='bg-white shadow rounded p-7 divide-y'>
            <div>
                <h1 className='text-2xl text-slate-700'>Checkout Information</h1>
            </div>

            {/* User input fields start  */}
            <div className='pt-5 md:pt-10 '>
                <div className='md:flex'>
                    <InputField onChange={handleOnChange} name="name" type="text" label="Full Name" placeholder="Enter full name"/>
                </div>

                <div className='md:flex'>
                    <InputField onChange={handleOnChange} name="phone" type="text" label="Phone Number" placeholder="Enter Number"/>
                    <InputField onChange={handleOnChange} name="email" type="text" label="email" placeholder="Enter valid email"/>
                </div>

                <div className='md:flex'>
                    <InputField onChange={handleOnChange} name="zipCode" type="text" label="Zip code" placeholder="Enter zip code"/>
                    <InputField onChange={handleOnChange} name="city" type="text" label="City" placeholder="Enter city"/>
                </div>

                <div className='md:flex'>
                    <InputField onChange={handleOnChange} name="addres" type="text" label="Addres" placeholder="Enter Addres"/>
                </div>

                <div className='py-4 flex items-center gap-10 '>
                    <h1 className='text-2xl text-slate-700'>Shipping Addres</h1>
                    <label>
                        <input type="checkbox" onChange={handleCheckboxChange} className="accent-purple-600"/> Same Info
                    </label>
                </div>
                <div className='md:flex'>
                    <InputField onChange={handleOnChange} value={sameInfo.shipName} name="shipName" type="text" label="Ship Name" placeholder="Enter ship Name"/>
                    <InputField onChange={handleOnChange} value={sameInfo.shipAddress} name="shipAddress" type="text" label="Ship Address" placeholder="Enter shipAddress"/>
                </div>
                <div className='md:flex'>
                    <InputField onChange={handleOnChange} value={sameInfo.shipZipCode} name="shipZipCode" type="text" label="Ship Zip code" placeholder="Enter ship zip code"/>
                    <InputField onChange={handleOnChange} value={sameInfo.shipCity} name="shipCity" type="text" label="Ship City" placeholder="Enter Ship City"/>
                </div>
            </div>
            {/* User input fields end  */}
            </div>

            <div className='mt-5 md:mt-7 flex justify-center md:justify-end'>
                <button onClick={submitHandle} type='submit' className='bg-purple-700 text-white block w-full md:w-32 py-3 rounded focus:ring-2 hover:bg-purple-900 transition duration-200'>Check Out</button>
            </div>
        </div>
    );
};

export default UserDetails;
