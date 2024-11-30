import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import image from '../../assets/images/checkout/checkout.png';
import { AuthContext } from '../../providers/AuthProvider';

const BookService = () => {

    const service = useLoaderData();
    const { title, _id, price, img } = service;

    const { user } = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            img,
            email,
            date,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);


        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Your service has been booked successfully');
                }
            })
    }

    return (
        <div>
            <div className='relative'>
                <img className='w-full' src={image} alt="" />
                <div className='absolute bottom-0 flex items-center pl-20 h-full w-full bg-gradient-to-r from-[rgba(21,21,21,1.00)] to-[rgba(21,21,21,0)] rounded text-white'>
                    <h2 className='text-4xl font-bold'>Check Out</h2>
                </div>
                <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center bg-[#FF3811] w-[300px] h-[50px] text-white'>
                    <Link to='/' className='text-2xl'>Home</Link>
                </div>
            </div>
            <h2 className='text-4xl text-center font-semibold text-[#FF3811] pt-8'>Book Service: {title}</h2>
            <form onSubmit={handleBookService} className="card-body">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' placeholder="Date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <input className="input input-bordered py-10 mt-5" type="text" name="message" placeholder='Your Message' id="" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#FF3811] text-white text-xl font-semibold">Order Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default BookService;