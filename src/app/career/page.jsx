// "use client"

import PageIttle from '@/components/PageItile/PageIttle';
import { HiOutlineBriefcase } from "react-icons/hi";

import React from 'react';
import CareerCard from '@/components/Card/CareerCard';
import CareerModal from '@/components/Modals/CareerModal';
export const metadata = {
    title: "CAREER | ByteOnSoft",
    description: "ByteOnSoft specializes in web development, UX/UI design, and software development, delivering innovative digital solutions tailored to client needs. Our team focuses on creating seamless user experiences and high-performing applications to enhance business growth.",
};

const page = () => {
    return (
        <div className='w-full'>
            <PageIttle pageTitle={'Career'} pageSubTitle={'Career'}></PageIttle>

            {/* <h1 className='text-center text-gray-300 text-2xl font-bold md:text-3xl lg:text-4xl my-20'>CAREER OPPORTUNITY IS UNAVAILABLE NOW!!</h1>
            */}

            <div className='w-11/12 md:w-4/5 mx-auto flex flex-col justify-center items-center mt-8 md:mt-10 space-y-8'>
                {/* 
                <CareerCard

                title={'Graphic Design Intern'}
                salary={'Unpaid'}
                jobType={'Internship'}
                jobCategory={'Designer'}
                location={'Remote'}
                />
                 */}
                <CareerModal
                    title={'Graphic Design Intern'}
                    salary={'Unpaid'}
                    jobType={'Internship'}
                    jobCategory={'Designer'}
                    location={'Remote'}
                />

            </div>
            {/* <h1 className='text-center text-gray-700 text-2xl font-bold md:text-3xl lg:text-4xl my-5 md:my-10'>Career Opportunity</h1>
            <div className='font-rubik flex flex-col justify-start items-start w-11/12 md:w-2/3 mx-auto'>
                <p className='mb-3'><span className='font-semibold text-lg'>Remote Internship:</span> Graphic Designer (3 Months, Unpaid)</p>
                <p className='mb-3 font-semibold'> We are looking for a creative and motivated Graphic Design Intern to join our remote team for a 3-month internship. This is a fantastic opportunity to gain hands-on experience in graphic design while working from the comfort of your home. The ideal candidate should be passionate about design, eager to learn, and ready to collaborate with our team virtually.</p>

                <p className='font-semibold text-lg'>Key Responsibilities:</p>

                <ul className='pl-8 md:pl-10 list-decimal mt-1 mb-3'>
                    <li> Develop and execute sales strategies to meet company goals.</li>
                    <li> Conduct market research to identify trends and potential clients.</li>
                    <li>Collaborate with the design team to create promotional materials and campaigns.</li>
                    <li>
                        Assist in creating visual content for marketing materials, social media, and websites.
                    </li>
                    <li>
                        Collaborate with the design team to brainstorm and develop new ideas.
                    </li>
                    <li>

                        Participate in virtual team meetings and provide input on design strategies.
                    </li>
                </ul>

                <p className='font-semibold text-lg'> Requirements:</p>
                <ul className='pl-8 md:pl-10 list-decimal mt-1 mb-3'>
                    <li> Basic knowledge of graphic design software (Adobe Photoshop, Illustrator, etc.).</li>
                    <li>Proven experience in sales or marketing.</li>
                    <li> Strong analytical skills and a results-driven mindset.</li>
                    <li>Excellent communication and interpersonal abilities.</li>
                    <li>A portfolio showcasing your design work is a plus.</li>
                    <li>Strong communication and teamwork skills.</li>
                </ul>

                <p className='mb-3'><span className='text-lg font-semibold'>Remote Paid Position:</span> Sales & Marketing Professional</p>
                <p className='mb-3'>We are also seeking a dedicated Sales & Marketing professional to enhance our team’s productivity in a remote capacity. This role involves developing and implementing effective sales strategies to promote our services and drive growth.</p>
               <p className='text-lg font-semibold'> Education is not a requirement; we value experience and results over formal qualifications.</p>
            
            <Apply
            jobTitle='Remote Internship: Graphic Designer (3 Months, Unpaid)'
            id={1}
            />
            
            </div> */}

        </div>
    );
};

export default page;