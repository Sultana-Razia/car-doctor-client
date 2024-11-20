import React from 'react';

const ServiceCard = ({ service }) => {

    const { img, title, price } = service;

    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl mt-12">
            <figure>
                <img
                    src={img}
                    alt="car" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-[#FF3811] font-semibold text-xl'>Price: {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-[#FF3811] text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;