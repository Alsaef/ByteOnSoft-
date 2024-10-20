"use client"

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
import { useEffect, useState } from 'react';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // const navItem = <>
    //     <NavbarItem className={`hover:border-b-2 border-primary cursor-pointer uppercase ${isScrolled ? 'bg-white text-[var(--color-primary)]' : 'bg-transparent text-white'}`}><Link href='/'>Home</Link></NavbarItem>
    //     <NavbarItem className={`hover:border-b-2 border-primary cursor-pointer uppercase ${isScrolled ? 'bg-white text-[var(--color-primary)]' : 'bg-transparent text-white'}`}><Link href='/about'>About Us</Link></NavbarItem>
    //     <NavbarItem className={`hover:border-b-2 border-primary cursor-pointer uppercase ${isScrolled ? 'bg-white text-[var(--color-primary)]' : 'bg-transparent text-white'}`}><Link href='/services'>Services</Link></NavbarItem>
    //     <NavbarItem className={`hover:border-b-2 border-primary cursor-pointer uppercase ${isScrolled ? 'bg-white text-[var(--color-primary)]' : 'bg-transparent text-white'}`}><Link href='/career'>Career</Link></NavbarItem>
    //     <NavbarItem className={`hover:border-b-2 border-primary cursor-pointer uppercase ${isScrolled ? 'bg-white text-[var(--color-primary)]' : 'bg-transparent text-white'}`}><Link href='/contact'>Contact</Link></NavbarItem>
    // </>;

    const navItemDesktop = <ul className='flex flex-col justify-start items-start md:flex-row md:justify-center md:items-center space-x-8 lg:space-x-10'>
        <li className={`hover:border-b-2 border-primary cursor-pointer uppercase ${isScrolled ? 'bg-white text-[var(--color-primary)]' : 'bg-transparent text-white'}`}><Link href='/'>Home</Link></li>
        <li className={`hover:border-b-2 border-primary cursor-pointer uppercase ${isScrolled ? 'bg-white text-[var(--color-primary)]' : 'bg-transparent text-white'}`}><Link href='/about'>About Us</Link></li>
        <li className={`hover:border-b-2 border-primary cursor-pointer uppercase ${isScrolled ? 'bg-white text-[var(--color-primary)]' : 'bg-transparent text-white'}`}><Link href='/services'>Services</Link></li>
        <li className={`hover:border-b-2 border-primary cursor-pointer uppercase ${isScrolled ? 'bg-white text-[var(--color-primary)]' : 'bg-transparent text-white'}`}><Link href='/career'>Career</Link></li>
        <li className={`hover:border-b-2 border-primary cursor-pointer uppercase ${isScrolled ? 'bg-white text-[var(--color-primary)]' : 'bg-transparent text-white'}`}><Link href='/contact'>Contact</Link></li>
    </ul>;

    const navItemMobile = <ul className='flex flex-col justify-start items-start md:flex-row md:justify-center md:items-center space-x-0 md:space-x-8 lg:space-x-10 w-full'>
        <li className={`pb-3 border-b-[1px] border-black w-full uppercase bg-white text-[var(--color-primary)]`}><Link href='/'>Home</Link></li>
        <li className={`py-3 border-b-[1px] border-black w-full uppercase bg-white text-[var(--color-primary)]`}><Link href='/about'>About Us</Link></li>
        <li className={`py-3 border-b-[1px] border-black w-full uppercase bg-white text-[var(--color-primary)]`}><Link href='/services'>Services</Link></li>
        <li className={`py-3 border-b-[1px] border-black w-full uppercase bg-white text-[var(--color-primary)]`}><Link href='/career'>Career</Link></li>
        <li className={`py-3 border-b-[1px] border-black w-full uppercase bg-white text-[var(--color-primary)]`}><Link href='/contact'>Contact</Link></li>
    </ul>;
    return (
        <nav className="">
            <Navbar className={`fixed shadow-xl z-50 border-none w-full px-5 transition-colors duration-500 font-semibold ${isScrolled ? 'bg-white text-[var(--color-primary)]' : 'bg-transparent text-white'}`}>
                <NavbarContainer className="flex items-center justify-between w-full mx-auto">
                    <NavbarBrand>
                        <Image
                            src={logo}
                            width={45}
                            height={0}
                            alt="Logo"
                            loading="lazy"
                            className="h-auto"
                        />
                    </NavbarBrand>

                    {/* Desktop Menu */}
                    <NavbarList className="hidden md:flex space-x-6 text-base">
                        {navItemDesktop}
                    </NavbarList>

                    {/* Mobile Menu Button */}
                    <NavbarCollapseBtn />

                    {/* Mobile Menu */}
                    <NavbarCollapse className="md:hidden w-full">
                        <NavbarList className="flex flex-col space-y-3 w-full text-base mt-3">
                            {navItemMobile}
                        </NavbarList>
                    </NavbarCollapse>
                </NavbarContainer>
            </Navbar>
        </nav>
    );
};

export default NavBar;
