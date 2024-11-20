import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='mt-20 mb-20'>
            <div className='text-center'>
                <h3 className='text-[#FF3811] text-xl font-bold'>Services</h3>
                <h1 className='text-[#151515] text-5xl font-bold py-5'>Our Service Area</h1>
                <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which don't look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;