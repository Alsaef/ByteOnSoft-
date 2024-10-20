import React from 'react';

import Image from 'next/image';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import image1 from '../../../assets/client-review-image/c87497aa55_M.rony_.png';
import image2 from '../../../assets/client-review-image/Frame-39970.png';
import image3 from '../../../assets/client-review-image/Frame-39971.png';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    return (
        <div className="mt-10 w-full md:w-4/5 mx-auto">
            {/* Heading Section */}
            <div className="my-5 text-center">
                <h2 className="text-[var(--color-secondary)] font-semibold text-lg py-2 relative uppercase">
                    our reviews
                </h2>
                <p className="text-xl  text-[#4a3989] mt-3">
                    Client Feedback
                </p>
            </div>

            {/* Carousel Section */}
            {/* <Carousel>
                <div>
                    <img src={image1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
        </div>
    );
};

export default Testimonials;
