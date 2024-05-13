import React from 'react';

const CheckOutButton = ({onClick}) => {
    return (
        <div className='mt-5 md:mt-7'>
            <button onClick={onClick} type='submit' className='bg-purple-700 text-white block w-full md:w-32 py-3 rounded focus:ring-2 hover:bg-purple-900 transition duration-200'>Check Out</button>
        </div>
    );
};

export default CheckOutButton;