import React from 'react';
import {
    Carousel,
    CarouselButtons,
    CarouselControl,
    CarouselItem,
    CarouselNextButton,
    CarouselPrevButton,
    CarouselSlides,
} from 'keep-react';
import Image from 'next/image';

import image1 from '../../../assets/client-review-image/c87497aa55_M.rony_.png';
import image2 from '../../../assets/client-review-image/Frame-39970.png';
import image3 from '../../../assets/client-review-image/Frame-39971.png';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    return (
        <div className="mt-10">
            {/* Heading Section */}
            <div className="my-5 text-center">
                <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl py-2 relative uppercase">
                    Testimonials From Our Clients
                    <span className="block w-14 h-1 bg-[#4a3989] absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-1"></span>
                </h2>
                <p className="lg:text-xl md:text-xl sm:text-xs text-xs text-[#4a3989] mt-3">
                    GET IN TOUCH
                </p>
            </div>

            {/* Carousel Section */}
            <Carousel options={{ slidesToScroll: 1, slidesToShow: 2 }}>
                <CarouselSlides className="flex gap-5">
                    {/* Slider 1 */}
                    <CarouselItem className="flex-[0_0 100%] lg:flex-[0_0_33%]">
                        <div className="rounded-lg overflow-hidden shadow-lg h-full cursor-pointer p-5">
                            <div className="flex items-center justify-center mb-4">
                                <Image
                                    src={image1}
                                    alt="Web Development"
                                    className="rounded-full shadow-lg"
                                    width={120}
                                    height={120}
                                />
                            </div>
                            <div className="px-4 text-center">
                             <div className='flex justify-center my-2'>
                             <Rating
                                    style={{ maxWidth: 180 }}
                                    value={5}
                                    readOnly
                                />
                             </div>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    Monezsoft is a Marketing Agency. We are outsourcing and collaborating with workspace infotech limited.
                                </p>
                            </div>
                        </div>
                    </CarouselItem>

                    {/* Slider 2 */}
                    <CarouselItem className="flex-[0_0 100%] lg:flex-[0_0_33%]">
                        <div className="rounded-lg overflow-hidden shadow-lg h-full cursor-pointer p-5">
                            <div className="flex items-center justify-center mb-4">
                                <Image
                                    src={image2}
                                    alt="WordPress Development"
                                    className="rounded-full shadow-lg"
                                    width={120}
                                    height={120}
                                />
                            </div>
                            <div className="px-4 text-center">
                            <div className='flex justify-center my-2'>
                             <Rating
                                    style={{ maxWidth: 180 }}
                                    value={4}
                                    readOnly
                                />
                             </div>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    I remember, I found WSIT five years back with the skills and experience I needed to build Flowcite. Since then they have been working on this project as they own it.
                                </p>
                            </div>
                        </div>
                    </CarouselItem>

                    {/* Slider 3 */}
                    <CarouselItem className="flex-[0_0 100%] lg:flex-[0_0_33%]">
                        <div className="rounded-lg overflow-hidden shadow-lg h-full cursor-pointer p-5">
                            <div className="flex items-center justify-center mb-4">
                                <Image
                                    src={image3}
                                    alt="E-Commerce Development"
                                    className="rounded-full shadow-lg"
                                    width={120}
                                    height={120}
                                />
                            </div>
                            <div className="px-4 text-center">
                            <div className='flex justify-center my-2'>
                             <Rating
                                    style={{ maxWidth: 180 }}
                                    value={4.5}
                                    readOnly
                                />
                             </div>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    Tbh I enjoyed working with WorskapceIT and Tahsin. Best wishes for them.
                                </p>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselSlides>

                
             
            </Carousel>
        </div>
    );
};

export default Testimonials;
