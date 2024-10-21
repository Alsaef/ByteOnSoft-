import React from 'react';
import webDevelopmentImage from '../../assets/service image/website-codes (2).png'
import wordPressDevelopmentImage from '../../assets/service image/social.png'
import ECommerceDevelopmentImage from '../../assets/service image/ecommerce.png'
import mobileAppDevelopmentImage from '../../assets/service image/mobile-app (2).png'
import UIUXDesignImage from '../../assets/service image/ui.png'
import customSoftwareDevelopmentImage from '../../assets/service image/coding (1).png'
import ServiceCard from '@/components/Card/ServiceCard';
import PageIttle from '@/components/PageItile/PageIttle';




export const metadata = {
    title: "SERVICES | IT PORI",
    description: " IT PORI specializes in web development, UX/UI design, and  software development, delivering innovative digital solutions tailored to client needs. Our team focuses on creating seamless user experiences and high-performing applications to enhance business growth.",
  };


const Services = () => {
    return (
        <div>
            <PageIttle pageTitle={"Services"} pageSubTitle={'Services'}></PageIttle>
            <div className='text-center mx-auto w-full md:w-4/5 p-5 md:p-10 lg:p-16'>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <ServiceCard title={'Web Design and Development'} image={webDevelopmentImage} description={'Website design and development combine aesthetics and functionality to create engaging, user-friendly websites. Design focuses on layout, color, and user experience, while development involves coding to ensure responsiveness, performance, and accessibility. Together, they build websites that work seamlessly across devices and meet user and business needs.'} />
              <ServiceCard title={'WordPress Development'} image={wordPressDevelopmentImage} description={'WordPress development involves building and customizing websites using the WordPress platform. It includes creating themes, plugins, and integrating features to enhance functionality. WordPress development allows for flexible, user-friendly, and scalable websites, making it ideal for blogs, e-commerce, and various business websites, all with minimal coding required.'} />
              <ServiceCard title={'E-Commerce Development'} image={ECommerceDevelopmentImage} description={'Website design and development combine aesthetics and functionality to create engaging, user-friendly websites. Design focuses on layout, color, and user experience, while development involves coding to ensure responsiveness, performance, and accessibility. Together, they build websites that work seamlessly across devices and meet user and business needs.'} />
              <ServiceCard title={'Mobile App Development'} image={mobileAppDevelopmentImage} description={'Mobile app development involves creating software applications for mobile devices like smartphones and tablets. It includes designing user-friendly interfaces and coding for platforms such as iOS and Android. Mobile apps provide interactive, on-the-go solutions for users, enhancing accessibility, engagement, and functionality for businesses and consumers alike.'} />
              <ServiceCard title={'UI/UX Design'} image={UIUXDesignImage} description={'UI/UX design focuses on creating intuitive and engaging user experiences. UI (User Interface) design emphasizes the look and feel of a product, while UX (User Experience) design ensures ease of use and functionality. Together, they enhance user satisfaction by making digital products visually appealing and user-friendly.'} />
              <ServiceCard title={'Custom Software Development'} image={customSoftwareDevelopmentImage} description={'Custom software development involves creating tailored software solutions to meet specific business needs. Unlike off-the-shelf software, custom solutions are designed to address unique requirements, offering greater flexibility, scalability, and integration with existing systems. This approach ensures optimized performance and functionality, helping businesses improve efficiency and achieve their goals.'} />
          </div>
      </div>
        </div>
    );
};

export default Services;