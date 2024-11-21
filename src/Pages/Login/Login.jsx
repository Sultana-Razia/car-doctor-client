import React, { useContext } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import img from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
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