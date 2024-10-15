import ContactCard from '@/components/Card/ContactCard';

const page = () => {
    return (
        <div className='flex flex-col justify-center items-center my-5 px-3 md:p-10 w-full'>
            <h1 className='w-full text-2xl md:text-3xl lg:text-4xl font-bold mb-5 md:mb-7 lg:mb-10 text-center text-[#4a3989] uppercase'>Schedule a free 30 minute meeting</h1>
            <div className='flex flex-col md:flex-row justify-center md:justify-evenly items-center w-full space-y-5 md:space-y-0'>
                <ContactCard title={"Send message via email"} btnTxt={"SEND MESSAGE"} />
                <ContactCard title={"Send message via whatsapp"} btnTxt={"SEND MESSAGE"} />
            </div>
        </div>
    );
};

export default page;