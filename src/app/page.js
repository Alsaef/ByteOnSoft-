import ContactHome from '@/components/UI/Contact-Home/ContactHome';

import Hero from '@/components/UI/Hero/Hero';

import OurClient from '@/components/UI/OurClient/OurClient';
import OurService from '@/components/UI/OurService/OurService';
import Performance from '@/components/UI/Performance/Performance';
import Testimonials from '@/components/UI/Testimonials/Testimonials';
import WhyChooseUs from '@/components/UI/WhyChooseUs/WhyChooseUs';
import WhyTrustUs from '@/components/UI/WhyTrustUs/WhyTrustUs';

export default function Home() {
  return (
    <div>
     <FinalHero></FinalHero>
     <OurService></OurService>
     <WhyChooseUs></WhyChooseUs>
     <WhyTrustUs/>
     <Performance></Performance>
     <OurClient></OurClient>
     <ContactHome></ContactHome>
     <Testimonials></Testimonials>
    </div>
  );
}
