import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import img from '../../assets/images/login/login.svg';


const SignUp = () => {

    const handleSignUp = event => {
        event.preventDefault();
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col gap-12 lg:flex-row">
                <div className="w-1/2 mr-8">
                    <img src={img} alt="image" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-[#444444] text-center text-4xl mb-8 font-semibold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Confirm Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white text-xl font-semibold">Sign Up</button>
                        </div>
                    </form>
                    <div className='text-center'>
                        <p>Or Sign up with</p>
                        <div className='flex gap-3 justify-center mt-8'>
                            <FaFacebookF />
                            <FaLinkedinIn />
                            <FcGoogle />
                        </div>
                        <p className='text-[#737373] text-lg mb-8 mt-8'>Already have an account? <Link to='/login' className='text-[#FF3811] font-semibold'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;