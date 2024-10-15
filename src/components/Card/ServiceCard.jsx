import React from 'react';
import Image from 'next/image';

const ServiceCard = ({ title, image, description }) => {
    return (
        <div className='w-full p-3 md:p-5 rounded-lg flex flex-col justify-center items-center hover:scale-105 transition ease-in-out' style={{ boxShadow: '6px 6px 6px 0px rgba(0, 0, 0, 0.2)' }}>
            <h2 className='text-lg md:text-xl font-semibold mb-3'>{title}</h2>
            <Image className='w-1/2 py-3' src={image} alt={title} width={300} height={200}  />
            <p className='px-3 text-gray-500 mt-3'>{description}</p>
        </div>
    );
};

export default ServiceCard;
