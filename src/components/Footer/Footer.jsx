import React from 'react';
import Link from 'next/link'; // Importing Link from Next.js
import Image from 'next/image'; // Importing Image from Next.js
import Logo from '../../assets/logo/logo.jpg';
import { FaLocationDot } from 'react-icons/fa6'
import { MdCall, MdMail } from 'react-icons/md'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="mt-10">
            <footer className="bg-gray-900 shadow p-4">
                <div className="w-full p-4 md:py-8">
                    <div className="flex items-start justify-evenly">
                        <div className='flex flex-col justify-start items-start space-y-3 text-white'>
                            <Link href="/" className="flex items-center space-x-3">
                                <Image src={Logo} width={50} height={50} className="rounded-full" alt="Logo" /> {/* Using Image from Next.js */}
                                <span className="self-center text-2xl font-semibold text-white">IT PORI</span>
                            </Link>
                            <div className='flex flex-row justify-center items-center space-x-3 cursor-pointer pt-5'>
                                <FaLocationDot className='w-5 h-5 text-white' />
                                <p>Rampura, Banasree, Dhaka</p>
                            </div>
                            <div className='flex flex-row justify-center items-center space-x-3 cursor-pointer'>
                                <MdCall className='w-5 h-5 text-white' />
                                <p>+880 12345 12345</p>
                            </div>
                            <div className='flex flex-row justify-center items-center space-x-3 cursor-pointer'>
                                <MdMail className='w-5 h-5 text-white' />
                                <p>hello@itpori.com</p>
                            </div>
                        </div>

                        <div className='text-white flex flex-col justify-start items-start'>
                            <h2 className='uppercase text-lg md:text-xl font-semibold'>Services</h2>
                            <ul className='list-disc pl-5 mt-3'>
                                <li>Web Design & Development</li>
                                <li>WordPress Development</li>
                                <li>E-Commerce Development</li>
                                <li>Mobile App Development</li>
                                <li>UI/UX Design</li>
                                <li>Custom Software Development</li>
                            </ul>
                        </div>
                        <div className='text-white flex flex-col justify-start items-start'>
                            <h2 className='uppercase text-lg md:text-xl font-semibold'>Company</h2>
                            <ul className='list-disc pl-5 mt-3'>
                                <li className='cursor-pointer hover:underline hover:text-lg transition ease-in duration-500'>Home</li>
                                <li className='cursor-pointer hover:underline hover:text-lg transition ease-in duration-500'>Services</li>
                                <li className='cursor-pointer hover:underline hover:text-lg transition ease-in duration-500'>Career</li>
                                <li className='cursor-pointer hover:underline hover:text-lg transition ease-in duration-500'>About us</li>
                                <li className='cursor-pointer hover:underline hover:text-lg transition ease-in duration-500'>Contact</li>
                            </ul>
                        </div>
                        <div className='text-white flex flex-col justify-start items-start'>
                            <h2 className='uppercase text-lg md:text-xl font-semibold mb-3'>Social Links</h2>
                            <div className='flex flex-row justify-start items-center space-x-3'>
                                <div className='bg-[#4a3989] p-2 rounded-md flex m-auto cursor-pointer'>
                                    <FaFacebook className='w-6 h-6 text-white' />
                                </div>
                                <div className='bg-[#4a3989] p-2 rounded-md flex m-auto cursor-pointer'>
                                    <FaTwitter className='w-6 h-6 text-white' />
                                </div>
                                <div className='bg-[#4a3989] p-2 rounded-md flex m-auto cursor-pointer'>
                                    <FaLinkedin className='w-6 h-6 text-white' />
                                </div>
                                <div className='bg-[#4a3989] p-2 rounded-md flex m-auto cursor-pointer'>
                                    <FaInstagram className='w-6 h-6 text-white' />
                                </div>
                                <div className='bg-[#4a3989] p-2 rounded-md flex m-auto cursor-pointer'>
                                    <FaWhatsapp className='w-6 h-6 text-white' />
                                </div>
                            </div>
                        </div>
                        {/* <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
                            <li>
                                <Link href="/" className="hover:underline me-4 md:me-6 text-gray-400 hover:text-white">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:underline me-4 md:me-6 text-gray-400 hover:text-white">About</Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:underline me-4 md:me-6 text-gray-400 hover:text-white">Services</Link>
                            </li>
                            <li>
                                <Link href="/clients" className="hover:underline me-4 md:me-6 text-gray-400 hover:text-white">Clients</Link>
                            </li>
                            <li>
                                <Link href="/career" className="hover:underline me-4 md:me-6 text-gray-400 hover:text-white">Career</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline text-gray-400 hover:text-white">Contact</Link>
                            </li>
                        </ul> */}
                    </div>
                    <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
                    <span className="block text-sm text-gray-400 sm:text-center">
                        © 2024 <Link href="/" className="hover:underline text-white">IT PORI</Link>. All Rights Reserved.
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
