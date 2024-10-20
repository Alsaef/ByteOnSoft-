import React from 'react';
const Performance = () => {
    return (
        <div className='my-16'>
            <div className="overflow-hidden">
                <div
                    className="lg:h-[280px] h-full py-6 bg-fixed bg-cover bg-center flex flex-col items-center justify-center bg-[#3B5189]"
                    style={{ backgroundImage: `url('https://i.ibb.co.com/JCMzWJb/banner-bg.jpg')` }}
                >


                    <div className='flex lg:flex-row md:flex-col sm:flex-col flex-col lg:items-start items-center gap-5 justify-around'>
                        <div className='flex flex-col items-center gap-2'>
                            <h2 className='text-4xl text-white font-bold'>23+</h2>
                            <p className='text-xl text-white font-bold'>Years Helping Business</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                        <h2 className='text-4xl text-white font-bold'>250+</h2>
                        <p className='text-xl text-white font-bold'>YWorking Employees</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>

                             <h2 className='text-4xl text-white font-bold'>4500+</h2>
                            <p className='text-xl text-white font-bold'>Complete Projects </p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                          
                        <h2 className='text-4xl text-white font-bold'>3000+</h2>
                        <p className='text-xl text-white font-bold'>Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Performance;
