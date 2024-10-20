'use client'
import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo/logo.jpg';
import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarCollapseBtn,
    NavbarContainer,
    NavbarItem,
    NavbarList,
} from 'keep-react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Check if 'window' is available and add scroll listener
        const handleScroll = () => {
            if (window.scrollY > 50) {  // Adjust the scroll threshold if needed
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Ensure that the scroll detection is client-side
        if (typeof window !== "undefined") {
            window.addEventListener('scroll', handleScroll);
        }

        // Cleanup function to remove the listener when the component unmounts
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const navItem = (
        <>
            <NavbarItem className={`cursor-pointer uppercase  ${isScrolled ? ' text-black' : ' text-white'}text-black`}>
                <Link href='/'>Home</Link>
            </NavbarItem>
            <NavbarItem className={`cursor-pointer uppercase  ${isScrolled ? ' text-black' : ' text-white'}text-black`}>
                <Link href='/about'>About Us</Link>
            </NavbarItem>
            <NavbarItem className={`cursor-pointer uppercase  ${isScrolled ? ' text-black' : ' text-white'}text-black`}>
                <Link href='/services'>Services</Link>
            </NavbarItem>
            <NavbarItem className={`cursor-pointer uppercase  ${isScrolled ? ' text-black' : ' text-white'}text-black`}>
                <Link href='/career'>Career</Link>
            </NavbarItem>
            <NavbarItem className={`cursor-pointer uppercase  ${isScrolled ? ' text-black' : ' text-white'}text-black`}>
                <Link href='/contact'>Contact</Link>
            </NavbarItem>
        </>
    );

    return (
      
            <Navbar className={` sticky top-0 z-20 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg border-0 text-black' : 'bg-[#063D97] border-0 text-white'}`}>
                <NavbarContainer className="flex items-center justify-between w-[95.5%] mx-auto">
                    <NavbarBrand>
                        <Image
                            src={logo}
                            width={45}
                            height={0}
                            alt="Logo"
                            loading="lazy"
                            className="h-auto rounded-full"
                        />
                    </NavbarBrand>

                    {/* Desktop Menu */}
                    <NavbarList className="hidden md:flex space-x-6 text-base">
                        {navItem}
                    </NavbarList>

                   
                    <NavbarCollapseBtn />

                  
                    <NavbarCollapse className="md:hidden">
                        <NavbarList className="flex flex-col space-y-3 text-black  mt-3">
                            {navItem}
                        </NavbarList>
                    </NavbarCollapse>
                </NavbarContainer>
            </Navbar>
       
    );
};

export default NavBar;
