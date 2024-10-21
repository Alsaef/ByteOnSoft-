import PageIttle from '@/components/PageItile/PageIttle';
import React from 'react';
export const metadata = {
    title: "CAREER | ByteOnSoft",
    description: "ByteOnSoft specializes in web development, UX/UI design, and software development, delivering innovative digital solutions tailored to client needs. Our team focuses on creating seamless user experiences and high-performing applications to enhance business growth.",
  };
  
const page = () => {
    return (
        <div>
           <PageIttle pageTitle={'Career'} pageSubTitle={'Career'}></PageIttle> 
        </div>
    );
};

export default page;