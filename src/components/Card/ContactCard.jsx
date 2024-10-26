"use client";

import { handleWhatsApp } from '@/utils';
import React from 'react';

const ContactCard = ({ title, btnTxt }) => {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents form from reloading the page

        const form = e.target;

        // Fetching form data
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phoneNumber.value;
        const needs = form.needs.value;
        const budget = form.projectBudget.value; // Correct name for budget field
        const message = form.message.value;

        // Preparing the data object
        const messageData = `
        Name: ${name}, 
        Email: ${email},
        Phone: ${phone},
        Needs: ${needs},
        Budget: ${budget},
        Message: ${message}
        `

        handleWhatsApp(messageData)

        // Logging the data
        // console.log(messageData);
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-full md:w-5/12 bg-white rounded-lg p-3 md:p-5' style={{ boxShadow: '6px 6px 6px 0px rgba(0, 0, 0, 0.2)' }}>
            <h2 className='text-lg md:text-xl lg:text-2xl font-semibold text-[var(--color-primary)] mb-3'>{title}</h2>
            <div className='w-full flex flex-col justify-start items-start space-y-3 mb-3'>
                <label  className='text-base md:text-lg font-semibold'>Full Name*</label>
                <input type="text" placeholder='Exe: Jhon Doe' name='name' className='p-3 border-2 rounded-md border-gray-500 focus:outline-none w-full' required />
            </div>
            <div className='w-full flex flex-col justify-start items-start space-y-3 mb-3'>
                <label  className='text-base md:text-lg font-semibold'>Email*</label>
                <input type="email" placeholder='Exe: Jhon@Doe.com' name='email' className='p-3 border-2 rounded-md border-gray-500 focus:outline-none w-full' required />
            </div>
            <div className='w-full flex flex-col justify-start items-start space-y-3 mb-3'>
                <label  className='text-base md:text-lg font-semibold'>Phone Number*</label>
                <input type="text" placeholder='Exe: +880 12345 67899' name='phoneNumber' className='p-3 border-2 rounded-md border-gray-500 focus:outline-none w-full' required />
            </div>
            <div className='w-full flex flex-col justify-start items-start space-y-3 mb-3'>
                <label  className='text-base md:text-lg font-semibold'>Your Needs*</label>
                <select name="needs" className='p-3 border-2 rounded-md border-gray-500 focus:outline-none w-full' required>
                    <option  disabled selected>Select one</option>
                    <option value="Web Design and Development">Web Design and Development</option>
                    <option value="WordPress Development">WordPress Development</option>
                    <option value="E-Commerce Development">E-Commerce Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                </select>
            </div>
            <div className='w-full flex flex-col justify-start items-start space-y-3 mb-3'>
                <label  className='text-base md:text-lg font-semibold'>Your Project Budget*</label>
                <input type="text" placeholder='Exe: 99,000 BDT' name='projectBudget' className='p-3 border-2 rounded-md border-gray-500 focus:outline-none w-full' required />
            </div>
            <div className='w-full flex flex-col justify-start items-start space-y-3 mb-3'>
                <label  className='text-base md:text-lg font-semibold'>Message*</label>
                <textarea placeholder='Exe: I want to......' name='message' className='p-3 border-2 rounded-md border-gray-500 focus:outline-none w-full h-28' required />
            </div>
            <button type='submit' className='text-white text-lg md:text-xl font-semibold px-4 py-3 rounded-lg bg-[var(--color-primary)] w-full'>{btnTxt}</button>
        </form>
    );
};

export default ContactCard;
