import React from 'react';
import Image from 'next/image';

const Card = ({ title, image, description,height }) => {
    return (
        <div>
            <div className='w-full h-full p-3 md:p-5 rounded-lg flex flex-col  items-center' style={{ boxShadow: '6px 6px 6px 0px rgba(0, 0, 0, 0.2)' }}>
                <h2 className='text-lg md:text-xl font-semibold text-center'>{title}</h2>
              <div className='flex items-center'>
              <Image 
                    className='py-3' 
                    src={image} 
                    alt={title} 
                    width={200} 
                    height={height} 
                />
              </div>
                <p className='px-3 text-gray-500 text-center'>{description}</p>
            </div>
        </div>
    );
};

export default Card;
