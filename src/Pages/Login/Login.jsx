import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import img from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';


const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
        console.log("login")
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col gap-12 lg:flex-row">
                <div className="w-1/2 mr-8">
                    <img src={img} alt="image" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-[#444444] text-center text-4xl mb-8 font-semibold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white text-xl font-semibold">Sign In</button>
                        </div>
                    </form>
                    <div className='text-center'>
                        <p>Or Sign in with</p>
                        <div className='flex gap-3 justify-center mt-8'>
                            <FaFacebookF />
                            <FaLinkedinIn />
                            <FcGoogle />
                        </div>
                        <p className='text-[#737373] text-lg mb-8 mt-8'>New to cars doctor <Link to='/signUp' className='text-[#FF3811] font-semibold'>Sign Ip</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;