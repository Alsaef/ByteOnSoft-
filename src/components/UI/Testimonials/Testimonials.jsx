"use client"

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import image1 from '../../../assets/client-review-image/person-1.webp';
import SwiperCard from '@/components/Card/SwiperCard';

const Testimonials = () => {
    return (
        <div className="mt-10 w-11/12 md:w-4/5 mx-auto">
            {/* Heading Section */}
            <div className="my-5 text-center">
                <h2 className="text-[var(--color-secondary)] font-semibold text-lg py-2 relative uppercase">
                    our reviews
                </h2>
                <p className="text-xl  text-[#4a3989] mt-3">
                    Client Feedback
                </p>
            </div>

            {/* Swiper Section */}
            <Swiper
            modules={[Autoplay,Parallax]}
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{ 
                    delay: 3000, // delay between slides
                    pauseOnMouseEnter: true, // pause on hover
                }}
                parallax
                breakpoints={{
                    // when the window width is >= 640px
                    350: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    // when the window width is >= 768px
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    // when the window width is >= 1024px
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
            >
                <SwiperSlide>
                    <SwiperCard 
                    image={image1} 
                    name={'Jhon Doe'} 
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet nemo veritatis, possimus quam aliquid voluptates sunt voluptatibus veniam. Suscipit dicta debitis ea quisquam neque reprehenderit porro libero harum. Eos?'}
                    location={'Baridhara, Dhaka'}
                    rating={4}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard 
                    image={image1} 
                    name={'Jhon Doe'} 
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet nemo veritatis, possimus quam aliquid voluptates sunt voluptatibus veniam. Suscipit dicta debitis ea quisquam neque reprehenderit porro libero harum. Eos?'}
                    location={'Baridhara, Dhaka'}
                    rating={4}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard 
                    image={image1} 
                    name={'Jhon Doe'} 
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet nemo veritatis, possimus quam aliquid voluptates sunt voluptatibus veniam. Suscipit dicta debitis ea quisquam neque reprehenderit porro libero harum. Eos?'}
                    location={'Baridhara, Dhaka'}
                    rating={4}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard 
                    image={image1} 
                    name={'Jhon Doe'} 
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet nemo veritatis, possimus quam aliquid voluptates sunt voluptatibus veniam. Suscipit dicta debitis ea quisquam neque reprehenderit porro libero harum. Eos?'}
                    location={'Baridhara, Dhaka'}
                    rating={4}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard 
                    image={image1} 
                    name={'Jhon Doe'} 
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet nemo veritatis, possimus quam aliquid voluptates sunt voluptatibus veniam. Suscipit dicta debitis ea quisquam neque reprehenderit porro libero harum. Eos?'}
                    location={'Baridhara, Dhaka'}
                    rating={4}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard 
                    image={image1} 
                    name={'Jhon Doe'} 
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet nemo veritatis, possimus quam aliquid voluptates sunt voluptatibus veniam. Suscipit dicta debitis ea quisquam neque reprehenderit porro libero harum. Eos?'}
                    location={'Baridhara, Dhaka'}
                    rating={4}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonials;
