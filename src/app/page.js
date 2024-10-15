import DoProjects from '@/components/UI/DoProjects/DoProjects';
import Hero from '@/components/UI/Hero/Hero';
import OurClient from '@/components/UI/OurClient/OurClient';
import OurService from '@/components/UI/OurService/OurService';
import Performance from '@/components/UI/Performance/Performance';

export default function Home() {
  return (
    <div>
     <Hero></Hero>
     <OurService></OurService>
     <DoProjects></DoProjects>
     <Performance></Performance>
     <OurClient></OurClient>
    </div>
  );
}
