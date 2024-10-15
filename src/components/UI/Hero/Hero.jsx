import React from 'react';
import banner from '../../../assets/image/banner-2.jpg';
import Link from 'next/link';

const Hero = () => {
    return (
        <div>
            <div className="overflow-hidden">
                <div
                    className="h-[540px] bg-fixed bg-cover bg-center flex flex-col items-center justify-center"
                    style={{ backgroundImage: `url('https://i.ibb.co.com/D4kW6LZ/banner-2.jpg')` }}
                >
                    <div className="p-8">
                    <h1 className="text-5xl text-white font-bold my-4 text-center">
                            <span className="relative inline-block group">
                                IT PORI
                                <span className="absolute top-14 left-1/2 w-0 h-[2px] bg-white transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
                            </span>
                        </h1>
                        <p className="text-lg text-white mb-6 leading-relaxed text-center">
                            IT PORI specializes in web development, UX/UI design, and  software development, delivering innovative digital solutions tailored to client needs. Our team focuses on creating seamless user experiences and high-performing applications to enhance business growth.
                        </p>
                       <div className='flex flex-col items-center'>
                       <Link href='/services'><button className='bg-white rounded-xl px-3 py-3 font-semibold'>Services</button></Link>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;