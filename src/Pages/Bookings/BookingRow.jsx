import React from 'react';

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {

    const { _id, img, customerName, email, date, service, price, status } = booking;


    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-square">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            {img && <img
                                src={img}
                                alt={service} />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                        <div className="text-sm opacity-50">{service}</div>
                    </div>
                </div>
            </td>
            <td>
                ${price}
            </td>
            <td>{date}</td>
            <th>
                {
                    status === 'confirm' ?
                        <span className='font-bold text-primary'>Confirmed</span>
                        :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn bg-[#FF3811] text-xl font-semibold text-white">Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingRow;