"use client"

import React, { useState } from 'react';
import HeroImage from '../../../assets/image2/home-font.png';
import HomeBottom from '../../../assets/image2/home-bottom-shape.png';
import Image from 'next/image';

const FinalHero = () => {
    const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

    const handleMouseMove = (e) => {
        // Get the size and position of the element
        const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left; // Get the X position within the element
        const y = e.clientY - top;  // Get the Y position within the element

        // Calculate the rotation angles
        const rotateY = ((x / width) * 30) - 15; // Rotate between -15deg to 15deg on Y axis
        const rotateX = -((y / height) * 30) + 15; // Rotate between -15deg to 15deg on X axis

        setRotation({ rotateX, rotateY });
    };

    return (
        <div className='bg-custom-gradient lg:bg-none h-full pb-10 md:pb-4 lg:pb-14 pt-24 relative mb-16'>

            <div className='hidden lg:block absolute  w-full h-full top-0'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" version="1.1">
                    <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: 'rgba(0,0,36,1)', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: 'rgba(0,212,255,1)', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#gradient1)"
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                        fillOpacity="1"
                        d="M0 437L25 419.5C50 402 100 367 150 358C200 349 250 366 300 373.2C350 380.3 400 377.7 450 339C500 300.3 550 225.7 600 207.2C650 188.7 700 226.3 750 236.3C800 246.3 850 228.7 875 219.8L900 211L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z"
                    />
                </svg>
            </div>



            {/* Main Content Section */}
            <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col items-center justify-around px-5 gap-3 relative z-10'>
                {/* Text Section */}
                <div className='text-white w-11/12 md:w-1/2 xl:w-1/3'>
                    <h2 className='lg:text-6xl md:text-4xl sm:text-2xl text-2xl lg:text-left md:text-left sm:text-left text-center font-semibold'>
                        Leading Software  <br /> Development & <br /> IT Consulting Firm
                    </h2>
                    <p className='py-6 lg:text-left md:text-left sm:text-left text-center'>
                        We provide innovative software, website development, UI/UX design, and IT consulting. Our solutions are designed to help your business thrive with reliable and scalable technology.
                    </p>
                    <div className='flex items-center justify-center lg:justify-start gap-3'>
                        <button className='bg-white py-3 px-3 text-[var(--color-secondary)] rounded-lg font-semibold hover:bg-[var(--color-secondary)] hover:text-white transition duration-500'>
                            Our Service
                        </button>
                        <button className='bg-[var(--color-secondary)] py-3 px-3 text-white rounded-lg font-semibold hover:text-[var(--color-secondary)] hover:bg-white transition duration-500'>
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
                <div
                    className=""
                    style={{
                        willChange: 'transform',
                        transform: `perspective(1000px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg) scale3d(1, 1, 1)`,
                        transition: '300ms cubic-bezier(0.03, 0.98, 0.52, 0.99) '
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => {
                        setRotation({ rotateX: 0, rotateY: 0 });
                    }}
                >
                    <Image
                        src={HeroImage}
                        width={600}
                        height={600}
                        alt="Hero image"
                    />
                </div>
            </div>

            {/* Bottom Image */}
            <div className='absolute block lg:hidden -bottom-1'>
                <Image
                    src={HomeBottom}
                    width={500}
                    height={500}
                    className='w-screen'
                    alt="Bottom shape image"
                />
            </div>
        </div>
    );
};

export default FinalHero;