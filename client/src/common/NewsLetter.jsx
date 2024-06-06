import React from 'react';

const NewsLetter = () => {
    return (
        <div className='bg-slate-100 flex justify-center text-center py-10 px-5'>
            <div>
                <h1 className='text-xl py-2'>Subscribe on our newsletter</h1>
                <span className='text-slate-500'>Get daily news on upcoming offers from many suppliers all over the world</span>
                <div className='pt-5 space-x-2'>
                    <input type="email" className='p-2' placeholder='Email' />
                    <button className='bg-purple-500 text-white p-2'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;