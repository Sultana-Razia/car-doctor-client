import React from 'react';
import image1 from '../../../assets/images/banner/1.jpg'
import image2 from '../../../assets/images/banner/2.jpg'
import image3 from '../../../assets/images/banner/3.jpg'
import image4 from '../../../assets/images/banner/4.jpg'
import image5 from '../../../assets/images/banner/5.jpg'
import image6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full mt-2">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={image1}
                    className="w-full rounded h-[600px]" />
                <div className="absolute bottom-0 flex items-center h-full w-full bg-gradient-to-r from-[rgba(21,21,21,1.00)] to-[rgba(21,21,21,0)] rounded text-white">
                    <div className='w-1/2 pl-20'>
                        <h2 className='text-6xl mb-10'>Affordable Price For Car Servicing</h2>
                        <p className='mb-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className='btn btn-error text-white'>Discover More</button>
                            <button className='btn btn-outline text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex justify-end -translate-y-1/2 transform">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={image2}
                    className="w-full rounded h-[600px]" />
                <div className="absolute bottom-0 flex items-center h-full w-full bg-gradient-to-r from-[rgba(21,21,21,1.00)] to-[rgba(21,21,21,0)] rounded text-white">
                    <div className='w-1/2 pl-20'>
                        <h2 className='text-6xl mb-10'>Affordable Price For Car Servicing</h2>
                        <p className='mb-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className='btn btn-error text-white'>Discover More</button>
                            <button className='btn btn-outline text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex justify-end -translate-y-1/2 transform">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={image3}
                    className="w-full rounded h-[600px]" />
                <div className="absolute bottom-0 flex items-center h-full w-full bg-gradient-to-r from-[rgba(21,21,21,1.00)] to-[rgba(21,21,21,0)] rounded text-white">
                    <div className='w-1/2 pl-20'>
                        <h2 className='text-6xl mb-10'>Affordable Price For Car Servicing</h2>
                        <p className='mb-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className='btn btn-error text-white'>Discover More</button>
                            <button className='btn btn-outline text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex justify-end -translate-y-1/2 transform">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={image4}
                    className="w-full rounded h-[600px]" />
                <div className="absolute bottom-0 flex items-center h-full w-full bg-gradient-to-r from-[rgba(21,21,21,1.00)] to-[rgba(21,21,21,0)] rounded text-white">
                    <div className='w-1/2 pl-20'>
                        <h2 className='text-6xl mb-10'>Affordable Price For Car Servicing</h2>
                        <p className='mb-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className='btn btn-error text-white'>Discover More</button>
                            <button className='btn btn-outline text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex justify-end -translate-y-1/2 transform">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img
                    src={image5}
                    className="w-full rounded h-[600px]" />
                <div className="absolute bottom-0 flex items-center h-full w-full bg-gradient-to-r from-[rgba(21,21,21,1.00)] to-[rgba(21,21,21,0)] rounded text-white">
                    <div className='w-1/2 pl-20'>
                        <h2 className='text-6xl mb-10'>Affordable Price For Car Servicing</h2>
                        <p className='mb-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className='btn btn-error text-white'>Discover More</button>
                            <button className='btn btn-outline text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex justify-end -translate-y-1/2 transform">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img
                    src={image6}
                    className="w-full rounded h-[600px]" />
                <div className="absolute bottom-0 flex items-center h-full w-full bg-gradient-to-r from-[rgba(21,21,21,1.00)] to-[rgba(21,21,21,0)] rounded text-white">
                    <div className='w-1/2 pl-20'>
                        <h2 className='text-6xl mb-10'>Affordable Price For Car Servicing</h2>
                        <p className='mb-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className='btn btn-error text-white'>Discover More</button>
                            <button className='btn btn-outline text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex justify-end -translate-y-1/2 transform">
                    <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;