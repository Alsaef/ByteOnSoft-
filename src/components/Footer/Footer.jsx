import React from 'react';
import Link from 'next/link'; // Importing Link from Next.js
import Image from 'next/image'; // Importing Image from Next.js
import Logo from '../../assets/logo/logo.jpg';

const Footer = () => {
    return (
        <div className="mt-10">
            <footer className="bg-gray-900 shadow p-4">
                <div className="w-full p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3">
                            <Image src={Logo} width={50} height={50} className="rounded-full" alt="Logo" /> {/* Using Image from Next.js */}
                            <span className="self-center text-2xl font-semibold text-white">IT PORI</span>
                        </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
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
                        </ul>
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
