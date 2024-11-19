import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col gap-10 lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img
                        src={person}
                        className="rounded-lg shadow-2xl w-3/4" />
                    <img
                        src={parts}
                        className="rounded-lg shadow-2xl border-8 border-white w-1/2 absolute left-1/2 top-1/2" />
                </div>
                <div className='lg:w-1/2 pr-28'>
                    <h3 className='text-[#FF3811] text-xl font-bold'>About Us</h3>
                    <h1 className="text-5xl text-[#151515] mt-5 font-bold">We are qualified <br />  & of experience in this field</h1>
                    <p className="pt-6 pb-3 text-[#737373]">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p className="pb-6 text-[#737373]">
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn bg-[#FF3811] text-white" >Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;