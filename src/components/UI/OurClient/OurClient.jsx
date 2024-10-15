import React from 'react';
import Image from 'next/image';
import image1 from '../../../assets/client image/image-1.png';
import image2 from '../../../assets/client image/image-2.png';
import image3 from '../../../assets/client image/image-3.png';
import image4 from '../../../assets/client image/image-4.png';
import image5 from '../../../assets/client image/image-5.png';
import image6 from '../../../assets/client image/image6.gif';

const OurClient = () => {
    return (
        <div className='mt-10'>
            {/* Title Section */}
            <div className='my-5'>
                <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center py-2 relative">
                    OUR CLIENTS
                    <span className="block w-14 h-1 bg-blue-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-1"></span>
                </h2>
                <p className='lg:text-xl md:text-xl sm:text-xs text-xs text-blue-500 text-center mt-3'>
                    GET IN TOUCH
                </p>
            </div>

            {/* Image Grid Section */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-2">
                {/* Image 1 */}
                <div className="flex justify-center items-center">
                    <Image 
                        src={image1} 
                        alt="Client 1" 
                        width={200}          
                        height={200}         
                        className="rounded-lg transition-transform transform hover:scale-105" 
                    />
                </div>

                {/* Image 2 */}

                <div className="flex justify-center items-center">
                    <Image 
                        src={image5} 
                        alt="Client 5" 
                        width={200}
                        height={200}
                        className="rounded-lg transition-transform transform hover:scale-105" 
                    />
                </div>

                {/* Image 3 */}
                <div className="flex justify-center items-center">
                    <Image 
                        src={image3} 
                        alt="Client 3" 
                        width={200}
                        height={200}
                        className="rounded-lg transition-transform transform hover:scale-105" 
                    />
                </div>

                {/* Image 4 */}
                <div className="flex justify-center items-center">
                    <Image 
                        src={image4} 
                        alt="Client 4" 
                        width={200}
                        height={200}
                        className="rounded-lg transition-transform transform hover:scale-105" 
                    />
                </div>

                {/* Image 5 */}
                <div className="flex justify-center items-center">
                    <Image 
                        src={image2} 
                        alt="Client 2" 
                        width={200}
                        height={200}
                        className="rounded-lg transition-transform transform hover:scale-105" 
                    />
                </div>

                {/* Image 6 */}
                <div className="flex justify-center items-center">
                    <Image 
                        src={image6} 
                        alt="Client 6" 
                        width={150}
                        height={150}
                        className="rounded-lg transition-transform transform hover:scale-105" 
                    />
                </div>
            </div>
        </div>
    );
};

export default OurClient;
