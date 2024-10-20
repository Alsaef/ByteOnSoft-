import React from 'react';
import choose2 from '../../assets/image2/choose-2.png';
import Image from 'next/image';
const Chose2 = () => {
    return (
        <div className='mt-14'>
                <div className='flex flex-col-reverse md:flex-row-reverse items-center md:justify-center lg:justify-center gap-2'>
        


        <div className='justify-center'>
         
         <Image src={choose2} width={500} height={500} alt='work image'/>


        </div>
        <div className='text-left md:px-3 px-4'>
          <p className='uppercase  text-[var(--color-secondary)] py-2 text-xl font-semibold'>WHY TRUST US?</p>
          <h2 className='text-3xl font-semibold text-[#404040]'>Achieve Digital Transformation For <br /> Your Retail Business Services</h2>
          <p className='py-7  font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
          <ul className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3">
  <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)] before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
  Protect your Business
  </li>
  <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)]  before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
  Network Security
  </li>
  <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)]  before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
  Data Security
  </li>
  <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)]  before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
  Small Business Owners
  </li>
  <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)]  before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
  Running your Business
  </li>
  <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)]  before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
  Network Monitoring
  </li>
</ul>

        </div>

      </div>
        </div>
    );
};

export default Chose2;