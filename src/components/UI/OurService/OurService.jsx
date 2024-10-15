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

import webDevelopmentImage from '../../../assets/service image/web-development.png';
import wordPressDevelopmentImage from '../../../assets/service image/WordPress-development.png';
import ECommerceDevelopmentImage from '../../../assets/service image/E-Commerce_Development.png';
import mobileAppDevelopmentImage from '../../../assets/service image/Mobile_App_Development.png';
import UIUXDesignImage from '../../../assets/service image/UI_UX_Design.png';
import customSoftwareDevelopmentImage from '../../../assets/service image/Custom_Software_development.png';

const OurService = () => {
  return (
    <div className="mt-10">
      <div className="my-5">
        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center py-2 relative">
          OUR SERVICE
          <span className="block w-14 h-1 bg-blue-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-1"></span>
        </h2>
        <p className="lg:text-xl md:text-xl sm:text-xs text-xs text-blue-500 text-center mt-3">
          GET IN TOUCH
        </p>
      </div>

      <Carousel options={{ slidesToScroll: 1, slidesToShow: 3 }}>
        <CarouselSlides className="flex gap-3">
          {/* Slider 1 */}
          <CarouselItem className="flex-[0_0 100%] lg:flex-[0_0_50%]">
            <div className="rounded-lg overflow-hidden shadow-lg h-full cursor-pointer">
              <div className="flex items-center justify-center">
                <Image
                  src={webDevelopmentImage}
                  alt="Web Development"
                  className="h-[300px]"
                  width={300}
                  height={300}
                />
              </div>
              <div className="px-6 py-4 flex-grow">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">Web Development</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Website design and development combine aesthetics and functionality to create engaging, user-friendly websites.
                </p>
              </div>
            </div>
          </CarouselItem>

          {/* Slider 2 */}
          <CarouselItem className="flex-[0_0 100%] lg:flex-[0_0_50%]">
            <div className="rounded-lg overflow-hidden shadow-lg h-full cursor-pointer">
              <div className="flex items-center justify-center">
                <Image
                  src={wordPressDevelopmentImage}
                  alt="WordPress Development"
                  className="h-[300px]"
                  width={300}
                  height={300}
                />
              </div>
              <div className="px-6 py-4 flex-grow">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">WordPress Development</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  WordPress development involves building and customizing websites using the WordPress platform.
                </p>
              </div>
            </div>
          </CarouselItem>

          {/* Slider 3 */}
          <CarouselItem className="flex-[0_0 100%] lg:flex-[0_0_50%]">
            <div className="rounded-lg overflow-hidden shadow-lg h-full cursor-pointer">
              <div className="flex items-center justify-center">
                <Image
                  src={ECommerceDevelopmentImage}
                  alt="E-Commerce Development"
                  className="h-[300px]"
                  width={300}
                  height={300}
                />
              </div>
              <div className="px-6 py-4 flex-grow">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">E-Commerce Development</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  E-commerce development ensures that online stores are optimized for user experience and performance.
                </p>
              </div>
            </div>
          </CarouselItem>

          {/* Slider 4 */}
          <CarouselItem className="flex-[0_0 100%] lg:flex-[0_0_50%]">
            <div className="rounded-lg overflow-hidden shadow-lg h-full cursor-pointer">
              <div className="flex items-center justify-center">
                <Image
                  src={mobileAppDevelopmentImage}
                  alt="Mobile App Development"
                  className="h-[300px]"
                  width={300}
                  height={300}
                />
              </div>
              <div className="px-6 py-4 flex-grow">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">Mobile App Development</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Mobile app development involves creating software applications for mobile devices.
                </p>
              </div>
            </div>
          </CarouselItem>

          {/* Slider 5 */}
          <CarouselItem className="flex-[0_0 100%] lg:flex-[0_0_50%]">
            <div className="rounded-lg overflow-hidden shadow-lg h-full cursor-pointer">
              <div className="flex items-center justify-center">
                <Image
                  src={UIUXDesignImage}
                  alt="UI/UX Design"
                  className="h-[300px]"
                  width={300}
                  height={300}
                />
              </div>
              <div className="px-6 py-4 flex-grow">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">UI/UX Design</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  UI/UX design focuses on creating intuitive and engaging user experiences.
                </p>
              </div>
            </div>
          </CarouselItem>

          {/* Slider 6 */}
          <CarouselItem className="flex-[0_0 100%] lg:flex-[0_0_50%]">
            <div className="rounded-lg overflow-hidden shadow-lg h-full cursor-pointer">
              <div className="flex items-center justify-center">
                <Image
                  src={customSoftwareDevelopmentImage}
                  alt="Custom Software Development"
                  className="h-[300px]"
                  width={300}
                  height={300}
                />
              </div>
              <div className="px-6 py-4 flex-grow">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">Custom Software Development</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Custom software development involves creating software solutions tailored to specific business needs.
                </p>
              </div>
            </div>
          </CarouselItem>
        </CarouselSlides>

        <CarouselControl className="mx-auto w-full flex flex-row justify-center items-center">
          <CarouselButtons>
            <CarouselPrevButton/>
            <CarouselNextButton />
          </CarouselButtons>
        </CarouselControl>
      </Carousel>
    </div>
  );
};

export default OurService;
