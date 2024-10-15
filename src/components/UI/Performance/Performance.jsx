'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import image1 from '../../../assets/image/bdmap-150x150.png';
import image2 from '../../../assets/image/statistics-150x150.png';
import image3 from '../../../assets/image/connection-150x150.png';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Performance = () => {
    const [startCounting, setStartCounting] = useState(false);
    const { ref, inView } = useInView({
      threshold: 0.1,
      triggerOnce: true, 
    });
    
    useEffect(() => {
        if (inView) {
            setStartCounting(true);
        }
    }, [inView]);

    return (
        <div className='my-16'>
            <div className="overflow-hidden">
                <div
                    className="lg:h-[540px] h-full py-6 bg-fixed bg-cover bg-center flex flex-col items-center justify-center"
                    style={{ backgroundImage: `url('https://i.ibb.co/t2JqCvD/1350-Converted.png')` }}
                >
                    <div className="p-8">
                        <p className="text-lg text-white mb-6 leading-3">
                            PERFORMANCE : 1 YEARS OF WSIT
                        </p>
                        <p className="text-xs text-white mb-6 leading-relaxed text-center">
                            MORE TO GO
                        </p>
                    </div>

                    <div ref={ref} className='flex lg:flex-row md:flex-col sm:flex-col flex-col lg:items-start items-center gap-5'>
                        <div className='flex flex-col items-center gap-2'>
                            <Image src={image1} alt="Government Projects" width={150} height={150} />
                            <h3 className='mt-2 text-center text-white text-2xl'>
                                {startCounting ? <CountUp duration={2.75} end={1250} /> : 0}+
                            </h3>
                            <p className='text-white text-center'>
                                Government and <br /> Local Projects <br /> Implemented
                            </p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <Image src={image2} alt="Freelancing Projects" width={150} height={150} />
                            <h3 className='mt-2 text-center text-white text-2xl'>
                                {startCounting ? <CountUp duration={2.75} end={340} /> : 0}++
                            </h3>
                            <p className='text-white text-center'>
                                Freelancing and <br /> Other Projects
                            </p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <Image src={image3} alt="Clients" width={150} height={150} />
                            <h3 className='mt-2 text-center text-white text-2xl'>
                                {startCounting ? <CountUp duration={2.75} end={95} /> : 0}++
                            </h3>
                            <p className='text-white text-center'>
                                National and <br /> International <br /> Clients
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Performance;
