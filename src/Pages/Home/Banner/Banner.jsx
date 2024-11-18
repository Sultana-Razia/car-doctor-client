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
                <div className="absolute left-5 right-5 bottom-0 flex justify-end -translate-y-1/2 transform">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={image2}
                    className="w-full rounded h-[600px]" />
                <div className="absolute left-5 right-5 bottom-0 flex justify-end -translate-y-1/2 transform">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={image3}
                    className="w-full rounded h-[600px]" />
                <div className="absolute left-5 right-5 bottom-0 flex justify-end -translate-y-1/2 transform">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={image4}
                    className="w-full rounded h-[600px]" />
                <div className="absolute left-5 right-5 bottom-0 flex justify-end -translate-y-1/2 transform">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img
                    src={image5}
                    className="w-full rounded h-[600px]" />
                <div className="absolute left-5 right-5 bottom-0 flex justify-end -translate-y-1/2 transform">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img
                    src={image6}
                    className="w-full rounded h-[600px]" />
                <div className="absolute left-5 right-5 bottom-0 flex justify-end -translate-y-1/2 transform">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;