export const metadata = {
    title: "CONTACT | IT PORI",
    description: " IT PORI specializes in web development, UX/UI design, and  software development, delivering innovative digital solutions tailored to client needs. Our team focuses on creating seamless user experiences and high-performing applications to enhance business growth.",
}

import ContactCard from '@/components/Card/ContactCard';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const page = () => {
    return (
        <div className='w-full my-5 px-3 md:p-10 flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center w-full'>
                <h1 className='w-full text-2xl md:text-3xl lg:text-4xl font-bold mb-5 md:mb-7 lg:mb-10 text-center text-[#4a3989] uppercase'>Schedule a free 30 minute meeting</h1>
                <div className='flex flex-col md:flex-row justify-center md:justify-evenly items-center w-full space-y-5 md:space-y-0'>
                    <ContactCard title={"Send message via email"} btnTxt={"SEND MESSAGE"} />
                    <ContactCard title={"Send message via whatsapp"} btnTxt={"SEND MESSAGE"} />
                </div>
            </div>

            <div className='flex flex-col justify-center items-center mt-5 md:mt-10 w-full'>
                <h1 className='w-full text-2xl md:text-3xl lg:text-4xl font-bold mb-5 md:mb-7 lg:mb-10 text-center text-[#4a3989] uppercase'>Get in Touch</h1>
                <div className='flex flex-col md:flex-row justify-center md:justify-evenly items-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                        <div className='flex flex-col justify-start items-start p-5 rounded-lg' style={{ boxShadow: "6px 6px 6px 0px rgb(0,0,0,0.2)" }}>
                            <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-[#4a3989]'>Location</h2>
                            <h4 className='mt-3 md:text-lg'>Level 4 and 5 Nadian Tower</h4>
                            <h4 className='md:text-lg'>89/7 Gopibag, Dhaka 1203, </h4>
                            <h4 className='md:text-lg'>Bangladesh</h4>
                        </div>
                        <div className='flex flex-col justify-start items-start p-5 rounded-lg' style={{ boxShadow: "6px 6px 6px 0px rgb(0,0,0,0.2)" }}>
                            <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-[#4a3989]'>Contact Us</h2>
                            <h4 className='mt-3 md:text-lg'>Phone: +880 12345 12345</h4>
                            <h4 className='md:text-lg'>Email: support@itpori.com</h4>
                        </div>
                        <div className='flex flex-col justify-start items-start p-5 rounded-lg' style={{ boxShadow: "6px 6px 6px 0px rgb(0,0,0,0.2)" }}>
                            <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-[#4a3989]'>Our Hours</h2>
                            <h4 className='mt-3 md:text-lg'>We are open</h4>
                            <h4 className='md:text-lg'>SUN - THUR 9:30 AM - 6:00 PM</h4>
                            <h4 className='md:text-lg'>(GMT 6+)</h4>
                        </div>
                        <div className='flex flex-col justify-start items-start p-5 rounded-lg' style={{ boxShadow: "6px 6px 6px 0px rgb(0,0,0,0.2)" }}>
                            <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-[#4a3989]'>Social Links</h2>
                            <div className='flex flex-row justify-between items-center space-x-3 mt-5'>
                                <div className='bg-[#4a3989] p-2 rounded-md flex m-auto'>
                                    <FaFacebook className='w-6 h-6 text-white' />
                                </div>
                                <div className='bg-[#4a3989] p-2 rounded-md flex m-auto'>
                                    <FaTwitter className='w-6 h-6 text-white' />
                                </div>
                                <div className='bg-[#4a3989] p-2 rounded-md flex m-auto'>
                                    <FaLinkedin className='w-6 h-6 text-white' />
                                </div>
                                <div className='bg-[#4a3989] p-2 rounded-md flex m-auto'>
                                    <FaInstagram className='w-6 h-6 text-white' />
                                </div>
                                <div className='bg-[#4a3989] p-2 rounded-md flex m-auto cursor-pointer'>
                                    <FaWhatsapp className='w-6 h-6 text-white' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*TODO: insert Map */}
                    <div className='p-3 md:p-5'>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default page;