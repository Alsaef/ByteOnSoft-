import PageIttle from '@/components/PageItile/PageIttle';
import Image from 'next/image';
import React from 'react';
// image import
import feature1 from '../../assets/image2/feature-icon-1.jpg';
import feature2 from '../../assets/image2/feature-icon-2.jpg';
import feature3 from '../../assets/image2/feature-icon-3.jpg';

// working image import
import workprocess1 from '../../assets/image2/workprocess-icon-1.jpg';
import workprocess2 from '../../assets/image2/workprocess-icon-2.jpg';
import workprocess3 from '../../assets/image2/workprocess-icon-3.jpg';
import workprocess4 from '../../assets/image2/workprocess-icon-4.jpg';

import Card from '@/components/Card/Card';
import Performance from '@/components/UI/Performance/Performance';
import TeamMember from '@/components/UI/TeamMember/TeamMember';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import WorkingCard from '@/components/Card/WorkingCard';
import OurClient from '@/components/UI/OurClient/OurClient';

export const metadata = {
  title: "ABOUT US | IT PORI",
  description: "IT PORI specializes in web development, UX/UI design, and software development, delivering innovative digital solutions tailored to client needs. Our team focuses on creating seamless user experiences and high-performing applications to enhance business growth.",
};

const AboutPage = () => {
  return (
    <div>
      <PageIttle pageTitle={'About Us'} pageSubTitle={'about'}></PageIttle>

      <div className='mt-28'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8'>
          <Card title={'Flexibility & Responsive'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam'} image={feature1} />
          <Card title={'Dedicated Teams'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam'} image={feature2} />
          <Card title={'Focusing on Business'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam'} image={feature3} />
        </div>
      </div>
      <div className='mt-28'>
        <Performance></Performance>
      </div>
      <div className='mt-28'>
        <TeamMember></TeamMember>
      </div>
      <div className='mt-28'>
        <SectionTitle
          heading={'4 Step Work Process'}
          subHeading={'Working Process'}
        />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 py-3'>
          <WorkingCard title={'Discover'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam'} image={workprocess1} />
          <WorkingCard title={'Design & Development'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam'} image={workprocess2} />
          <WorkingCard title={'Install & Testing'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam'} image={workprocess3} />
          <WorkingCard title={'Project Delivery'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam'} image={workprocess4} />
        </div>

      </div>
      <div className='mt-28'>
        
        <OurClient></OurClient>

      </div>
    </div>
  );
};

export default AboutPage;