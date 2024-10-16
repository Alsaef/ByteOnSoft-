import ContactCard from '@/components/Card/ContactCard';
import React from 'react';

const ContactHome = () => {
    return (
        <div className='mt-16'>
             <div className='my-5'>
                <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center py-2 relative uppercase">
                Schedule a free 30 minute meeting
                    <span className="block w-14 h-1 bg-[#4a3989] absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-1"></span>
                </h2>
                <p className='lg:text-xl md:text-xl sm:text-xs text-xs text-[#4a3989] text-center mt-3'>
                    GET IN TOUCH
                </p>
            </div>
            <div className='flex flex-col md:flex-row justify-center md:justify-evenly items-center w-full space-y-5 md:space-y-0'>
                <ContactCard title={"Send message via email"} btnTxt={"SEND MESSAGE"} />
                <ContactCard title={"Send message via whatsapp"} btnTxt={"SEND MESSAGE"} />
            </div>
        </div>
    );
};

export default ContactHome;