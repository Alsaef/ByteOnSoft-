import React from 'react';
import image1 from '../../../assets/image/Layer-1.png';
import image2 from '../../../assets/image/Layer-2.png';
import image3 from '../../../assets/image/Layer-3.png';
import image4 from '../../../assets/image/Layer-4.png';
import image5 from '../../../assets/image/Layer-5.png';
import image6 from '../../../assets/image/Layer-6.png';
import Card from '@/components/Card/Card';

const DoProjects = () => {
    return (
        <div className='mt-10'>
            <div className='my-5'>
                <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center py-2 relative ">
                    WE CAN DO IT
                    <span className="block w-14 h-1 bg-[#4a3989] absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-1"></span>
                </h2>
                <p className='lg:text-xl md:text-xl sm:text-xs text-xs text-[#4a3989] text-center mt-3'>GET IN TOUCH</p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-[95%]'>
                <Card title={'Hotel or Restaurant Management'} image={image1} description={'Hotel or Restaurant management is not an easy task. But we can help you get the most efficient way to manage your hotels or restaurants. All maintenance will be done in one app to conduct the procedures of your restaurant or hotel.'} height={300} />
                <Card title={'Hospital Management System'} image={image2} description={'Hotel management system is an obvious need for the health industry. Maintaining medical records, contact details of patients, keeping track of patients’ appointments, and bill payment methods can be associated with one management system. The organized features of the Hospital Management System (HSM) will give a great advantage in operating hospitals.'} height={300} />
                <Card title={'Inventory Management System'} image={image3} description={'Inventory Management System is a smarter solution for running a business smoothly. A complete package is delivered that evolves into a cloud inventory management solution. Starting any venture with an innovative inventory management system can achieve the goal of a business. You must choose the inventory management solution that we agree to provide after getting a trial of the software.'} height={300} />
                <Card title={'POS software'} image={image4} description={'We are one of the largest POS software providers in Bangladesh. Easily manageable and customizable POS software can up to date your business strategies with quick-moving technologies. We also ensure a budget-friendly POS system to increase the sales or revenue of your business.'} height={300} />
                <Card title={'E-Commerce'} image={image5} description={'eCommerce development dramatically in Bangladesh. A prospective growth of the emerging eCommerce business has been observed since 2000. ICT division of Bangladesh is enacted to facilitate B2B, B2C, C2C'} height={300} />
                <Card title={'School Management Software'} image={image6} description={'school management software is developed to support a robust capability of educational tools. We provide the software that enables an educational institution to keep data secure for maintaining all reports online accurately. We offer the simplest way of individual enrollment for having easy access to communication among students, teachers, and others.'} height={300} />
            </div>
        </div>
    );
};

export default DoProjects;
