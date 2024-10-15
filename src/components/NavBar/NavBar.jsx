import React from 'react';
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
    const navItem = <>
        <NavbarItem className="hover:text-blue-500 cursor-pointer uppercase"><Link href='/'>Home</Link></NavbarItem>
        <NavbarItem className="hover:text-blue-500 cursor-pointer uppercase"><Link href='/about'>About</Link></NavbarItem>
        <NavbarItem className="hover:text-blue-500 cursor-pointer uppercase"><Link href='/services'>Services</Link></NavbarItem>
        <NavbarItem className="hover:text-blue-500 cursor-pointer uppercase"><Link href='/clients'>Clients</Link></NavbarItem>
        <NavbarItem className="hover:text-blue-500 cursor-pointer uppercase"><Link href='/career'>Career</Link></NavbarItem>
        <NavbarItem className="hover:text-blue-500 cursor-pointer uppercase"><Link href='/contact'>Contact</Link></NavbarItem>
    </>
    return (
        <nav className="bg-white shadow-sm">
            <Navbar>
                <NavbarContainer className="flex items-center justify-between w-[95.5%] mx-auto">
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
                        {navItem}
                    </NavbarList>

                    {/* Mobile Menu Button */}
                    <NavbarCollapseBtn />

                    {/* Mobile Menu */}
                    <NavbarCollapse className="md:hidden">
                        <NavbarList className="flex flex-col space-y-3 text-base mt-3">
                            {navItem}
                        </NavbarList>
                    </NavbarCollapse>
                </NavbarContainer>
            </Navbar>
        </nav>
    );
};

export default NavBar;