import React from 'react';
import TeamMemberCard from '@/components/Card/TeamMemberCard';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import image1 from "../../../assets/Team-Image/team-1.jpg"
import image2 from "../../../assets/Team-Image/team-2.jpg"
import image3 from "../../../assets/Team-Image/team-3.jpg"
import image4 from "../../../assets/Team-Image/team-4.jpg"

const TeamMember = () => {
    return (
        <div className='mt-16 w-11/12 md:w-4/5 mx-auto'>

            <SectionTitle
                heading={'our team members'}
                subHeading={'Those are Experts'}
            />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto w-full'>
                <TeamMemberCard
                    image={image1}
                    name={'Ava Farrington'}
                    position={'Founder, CEO'}
                />
                <TeamMemberCard
                    image={image2}
                    name={'Kevin Haley'}
                    position={'Co-Founder, CTO'}
                />
                <TeamMemberCard
                    image={image3}
                    name={'Alishia Fulton'}
                    position={'Chief Creative Officer'}
                />
                <TeamMemberCard
                    image={image4}
                    name={'Lucas Martinez'}
                    position={'Creative Director'}
                />

            </div>
        </div>
    );
};

export default TeamMember;