import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import img from '../../assets/images/checkout/checkout.png';

const Checkout = () => {

    const service = useLoaderData();
    const { title, _id } = service;

    return (
        <div>
            <div className='relative'>
                <img className='w-full' src={img} alt="" />
                <div className='absolute bottom-0 flex items-center pl-20 h-full w-full bg-gradient-to-r from-[rgba(21,21,21,1.00)] to-[rgba(21,21,21,0)] rounded text-white'>
                    <h2 className='text-4xl font-bold'>Check Out</h2>
                </div>
                <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center bg-[#FF3811] w-[300px] h-[50px] text-white'>
                    <Link to='/' className='text-2xl'>Home</Link>
                </div>
            </div>
            <h2>Service: {title}</h2>
        </div>
    );
};

export default Checkout;