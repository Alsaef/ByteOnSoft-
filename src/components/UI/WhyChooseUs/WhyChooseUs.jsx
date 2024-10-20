import React from 'react';
import chose1 from '../../../assets/image2/choose-1.png';
import chose2 from '../../../assets/image2/choose-2.png';
import Image from 'next/image';

const WhyChooseUs = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-center md:justify-between lg:justify-between w-full md:w-4/5 p-5 md:p-10 lg:p-16 mx-auto'>
            <div className='justify-center'>
                <Image src={chose1} width={500} height={500} alt='work image' />
            </div>
            <div className='text-left md:px-3 px-4'>
                <p className='uppercase  text-[var(--color-secondary)] py-2 text-xl font-semibold'>Why Choose Us?</p>
                <h2 className='text-2xl md:text-3xl font-semibold text-[#404040]'>Safeguard Your Brand with Cyber Security <br /> and IT Solutions</h2>
                <p className='py-7  font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
                <ul className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3">
                    <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)] before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
                        Remote IT Assistance
                    </li>
                    <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)]  before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
                        Managed IT Service
                    </li>
                    <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)]  before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
                        Cloud Services
                    </li>
                    <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)]  before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
                        IT Security Services
                    </li>
                    <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)]  before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
                        Practice IT Management
                    </li>
                    <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)]  before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
                        Solving IT Problems
                    </li>
                </ul>

            </div>

        </div>
    );
};

export default WhyChooseUs;
