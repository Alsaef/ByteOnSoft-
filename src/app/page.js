import ContactHome from '@/components/UI/Contact-Home/ContactHome';
import DoProjects from '@/components/UI/DoProjects/DoProjects';
import FinalHero from '@/components/UI/Hero/FinalHero';
import OurClient from '@/components/UI/OurClient/OurClient';
import OurService from '@/components/UI/OurService/OurService';
import Performance from '@/components/UI/Performance/Performance';
import Testimonials from '@/components/UI/Testimonials/Testimonials';

export default function Home() {
  return (
    <div>
     <FinalHero></FinalHero>
     <OurService></OurService>
     <DoProjects></DoProjects>
     <Performance></Performance>
     <OurClient></OurClient>
     <ContactHome></ContactHome>
     <Testimonials></Testimonials>
    </div>
  );
}
