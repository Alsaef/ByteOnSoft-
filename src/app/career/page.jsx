import PageIttle from '@/components/PageItile/PageIttle';
import React from 'react';
export const metadata = {
    title: "CAREER | ByteOnSoft",
    description: "ByteOnSoft specializes in web development, UX/UI design, and software development, delivering innovative digital solutions tailored to client needs. Our team focuses on creating seamless user experiences and high-performing applications to enhance business growth.",
  };
  
const page = () => {
    return (
        <div className='w-full'>
           <PageIttle pageTitle={'Career'} pageSubTitle={'Career'}></PageIttle> 

           <h1 className='text-center text-gray-300 text-2xl font-bold md:text-3xl lg:text-4xl my-20'>CAREER OPPORTUNITY IS UNAVAILABLE NOW!!</h1>
        </div>
    );
};

export default page;