export const metadata = {
    title: "CONTACT | ByteOnSoft",
    description: " ByteOnSoft specializes in web development, UX/UI design, and  software development, delivering innovative digital solutions tailored to client needs. Our team focuses on creating seamless user experiences and high-performing applications to enhance business growth.",
}


import PageIttle from '@/components/PageItile/PageIttle';
import dynamic from 'next/dynamic';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa'

const page = () => {
    const ContactCard = dynamic(() => import('@/components/Card/ContactCard'), { ssr: false })
    return (
        <>
            <PageIttle pageTitle={"Contact Us"} pageSubTitle={'Contact'}></PageIttle>
            <div className='w-full py-16 px-3 md:p-10 flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center w-full mt-10'>
                    <h1 className='w-full text-2xl md:text-3xl lg:text-4xl font-bold mb-5 md:mb-7 lg:mb-10 text-center text-[var(--color-secondary)] uppercase'>Schedule a free 30 minute meeting</h1>
                    <div className='flex flex-col md:flex-row justify-center md:justify-evenly items-center w-full space-y-5 md:space-y-0'>
                        <ContactCard title={"Send message via email"} btnTxt={"SEND MESSAGE"} />
                        <ContactCard title={"Send message via whatsapp"} btnTxt={"SEND MESSAGE"} />
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center mt-5 md:mt-10 w-full'>
                    <h1 className='w-full text-2xl md:text-3xl lg:text-4xl font-bold mb-7 md:mb-10 lg:mb-10 text-center text-[var(--color-secondary)]  uppercase'>Get in Touch</h1>
                    <div className='flex flex-col md:flex-row justify-center md:justify-evenly items-center'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                            <div className='flex flex-col justify-start items-start p-5 rounded-lg' style={{ boxShadow: "6px 6px 6px 0px rgb(0,0,0,0.2)" }}>
                                <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-[var(--color-primary)]'>Location</h2>
                                <h4 className='mt-3 md:text-lg'> House #12 (Lift 5), Road-12,</h4>
                                <h4 className='md:text-lg'>DIT Project, Merul Badda, Dhaka, </h4>
                                <h4 className='md:text-lg'>Bangladesh</h4>
                            </div>
                            <div className='flex flex-col justify-start items-start p-5 rounded-lg' style={{ boxShadow: "6px 6px 6px 0px rgb(0,0,0,0.2)" }}>
                                <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-[var(--color-primary)]'>Contact Us</h2>
                                <h4 className='mt-3 md:text-lg'>Phone: +880 15336 33913</h4>
                                <h4 className='md:text-lg'>Email:     <a href='mailto:byteonsoft@gmail.com'>byteonsoft@gmail.com</a></h4>
                            </div>
                            <div className='flex flex-col justify-start items-start p-5 rounded-lg' style={{ boxShadow: "6px 6px 6px 0px rgb(0,0,0,0.2)" }}>
                                <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-[var(--color-primary)]'>Our Hours</h2>
                                <h4 className='mt-3 md:text-lg'>We are open</h4>
                                <h4 className='md:text-lg'>SUN - THUR 9:00 AM - 6:00 PM</h4>
                                <h4 className='md:text-lg'>(GMT 6+)</h4>
                            </div>
                            <div className='flex flex-col justify-start items-start p-5 rounded-lg' style={{ boxShadow: "6px 6px 6px 0px rgb(0,0,0,0.2)" }}>
                                <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-[var(--color-primary)]'>Social Links</h2>
                                <div className='flex flex-row justify-between items-center space-x-3 mt-5'>
                                    <div className='bg-[var(--color-primary)] p-2 rounded-md flex m-auto cursor-pointer'>
                                        <a target='_blank' href="https://www.facebook.com/byteonsoft"><FaFacebook className='w-6 h-6 text-white' /></a>
                                    </div>
                                    <div className='bg-[var(--color-primary)] p-2 rounded-md flex m-auto cursor-pointer'>
                                        <a href=""><FaTwitter className='w-6 h-6 text-white' /></a>
                                    </div>
                                    <div className='bg-[var(--color-primary)] p-2 rounded-md flex m-auto cursor-pointer'>
                                        <a target='_blank' href="https://www.linkedin.com/company/byte-on-soft"><FaLinkedin className='w-6 h-6 text-white' /></a>
                                    </div>
                                    <div className='bg-[var(--color-primary)] p-2 rounded-md flex m-auto cursor-pointer'>
                                        <a target='_blank' href="https://www.youtube.com/@ByteOnSoft"><FaYoutube className='w-6 h-6 text-white' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*TODO: pin real location in Map */}
                        <div className='p-3 md:p-5'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.342549758574!2d90.42249473135682!3d23.762151297377944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b80a03c8e22f%3A0xd52685f4a2fe003c!2sBanasree%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1729071621642!5m2!1sen!2sbd"
                                className='100% md:w-[600px] lg:w-[600px]'
                                height="450"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen=""
                                referrerPolicy="no-referrer-when-downgrade"
                                title="DIT Project, Merul Badda, Dhaka Map"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default page;