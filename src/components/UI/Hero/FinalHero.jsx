import React from 'react';
import HeroImage from '../../../assets/image2/home-font.png';
import HomeBottom from '../../../assets/image2/home-bottom-shape.png';
import Image from 'next/image';

const FinalHero = () => {
    return (
        <div className='bg-custom-gradient h-full py-14 relative'>
            {/* Main Content Section */}
            <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col items-center justify-around px-5 gap-3 relative z-10'>
                {/* Text Section */}
                <div className='text-white'>
                    <h2 className='lg:text-6xl md:text-4xl sm:text-2xl text-2xl lg:text-left md:text-left sm:text-left text-center font-semibold'>
                        IT Solutions & <br /> Business Services <br /> Company
                    </h2>
                    <p className='py-6 lg:text-left md:text-left sm:text-left text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        <br /> magna aliqua, magna aliqua. ipsum is simply dummy text of the printing.
                    </p>
                    <div className='flex items-center justify-center lg:justify-start gap-3'>
                        <button className='bg-white py-3 px-3 text-[var(--color-primary)] rounded-lg font-semibold hover:bg-[var(--color-primary)] hover:text-white'>
                            Our Service
                        </button>
                        <button className='bg-[var(--color-primary)] py-3 px-3 text-white rounded-lg font-semibold hover:text-[var(--color-primary)] hover:bg-white'>
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className='relative z-10'>
                    <Image 
                        src={HeroImage}
                        width={600}
                        height={600}
                        alt="Hero image"
                    />
                </div>
            </div>

            {/* Bottom Image */}
            <div className='absolute lg:top-[4.5in] md:top-[4.5in] sm:bottom-0 bottom-0 w-full z-0'>
                <Image 
                    src={HomeBottom}
                    width={600}
                    height={600}
                    className='w-screen'
                    alt="Bottom shape image"
                />
            </div>
        </div>
    );
};

export default FinalHero;
