import Image from 'next/image';
import React from 'react';
import Logo from '../../assets/logo/logo.jpg';



export const metadata = {
    title: "ABOUT | IT PORI",
    description: " IT PORI specializes in web development, UX/UI design, and  software development, delivering innovative digital solutions tailored to client needs. Our team focuses on creating seamless user experiences and high-performing applications to enhance business growth.",
  };


const AboutPage = () => {
    return (
        <div className='text-center mx-auto w-full md:w-4/5 p-5 md:p-10 lg:p-16'>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-5 md:mb-14'>About</h1>

            <div className='flex flex-col md:flex-row items-center md:justify-center lg:justify-center gap-8'>
                
                {/* Text Section */}
                <div className='flex-grow md:w-1/2 text-left'>
                    <h2 className='font-bold text-xl md:text-2xl lg:text-4xl mb-5 md:mb-6'>IT PORI</h2>
                    <p className='text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptates voluptatum, temporibus aut, earum molestiae sapiente voluptas architecto magnam facilis quam quo maiores natus perspiciatis! Laborum, est deserunt! Earum, eius.
                    </p>
                </div>

                {/* Image Section */}
                <div className='md:w-1/2 flex justify-center'>
                    <Image src={Logo} alt='Logo' height={300} width={300} className='rounded-lg' />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
