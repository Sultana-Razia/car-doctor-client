import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, img, title, price } = service;

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
                    <Link to={`/book/${_id}`}>
                        <button className="btn bg-[#FF3811] text-white">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;