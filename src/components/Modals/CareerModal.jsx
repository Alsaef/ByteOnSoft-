'use client'
import { CloudArrowUp } from 'phosphor-react'
import {
    Button,
    Modal,
    ModalAction,
    ModalContent,
    ModalDescription,
    ModalFooter,
    ModalHeader,
    ModalTitle,
} from 'keep-react'
import { HiOutlineBriefcase } from 'react-icons/hi'
import Apply from '../Apply/Apply'
import { useState } from 'react'


const CareerModal = ({ title, salary, jobType, jobCategory, location }) => {

    const [iseOpen, setIsOpen] = useState(false)

    return (
        <Modal>
            <ModalAction asChild>
                <div className='p-3 md:p-5 bg-white text-gray-700 font-rubik rounded-lg w-full flex flex-col cursor-pointer' style={{ boxShadow: '6px 6px 6px 0px rgba(0, 0, 0, 0.2)' }}>
                    <div className='flex flex-row justify-between items-center w-full'>
                        <div className='flex flex-row justify-start items-center w-2/3 space-x-5'>
                            <div className='bg-gray-100 p-3 rounded-lg'>
                                <HiOutlineBriefcase className='w-5 h-5 ' />
                            </div>
                            <h1 className='text-lg md:text-xl font-semibold'>{title} </h1>
                        </div>

                        <div className='flex flex-row justify-center items-center space-x-3 w-1/3'>
                            <div className="border-2 border-[var(--color-primary)] rounded-full py-1 px-2 font-semibold text-[var(--color-primary)]">
                                ৳
                            </div>
                            <h2 className='font-semibold'>{salary}</h2>
                        </div>

                    </div>

                    <div className='flex flex-row justify-between items-center w-full mt-3'>
                        <div className='flex flex-row justify-start items-center space-x-4 w-2/3'>
                            <div className='bg-gray-100 p-3 rounded-lg font-semibold'>
                                {jobType}
                            </div>
                            <div className='bg-gray-100 p-3 rounded-lg font-semibold'>
                                {jobCategory}
                            </div>
                            <div className='bg-gray-100 p-3 rounded-lg font-semibold'>
                                {location}
                            </div>
                        </div>

                        <div className='w-1/3 flex mx-auto justify-center'>
                            <Apply
                                jobTitle='Remote Internship: Graphic Designer (3 Months, Unpaid)'
                                id={1}
                            />
                        </div>
                    </div>
                </div>
            </ModalAction>
            <ModalContent className='w-11/12 md:w-4/5'>
                <ModalHeader className="mb-6 space-y-3">
                    <div className="space-y-1">
                        <ModalTitle>{title}</ModalTitle>
                        <div className='font-rubik flex flex-col justify-start items-start full mx-auto'>
                            <p className='mb-3'><span className='font-semibold text-lg'>Remote Internship:</span> Graphic Designer (3 Months, Unpaid)</p>
                            <p className='mb-3 font-semibold'> We are looking for a creative and motivated Graphic Design Intern to join our remote team for a 3-month internship. This is a fantastic opportunity to gain hands-on experience in graphic design while working from the comfort of your home. The ideal candidate should be passionate about design, eager to learn, and ready to collaborate with our team virtually.</p>

                            <p className='font-semibold text-lg'>Key Responsibilities:</p>

                            <ul className='pl-8 md:pl-10 list-decimal mt-1 mb-3'>
                                <li> Develop and execute sales strategies to meet company goals.</li>
                                <li> Conduct market research to identify trends and potential clients.</li>
                                <li>Collaborate with the design team to create promotional materials and campaigns.</li>
                                <li>
                                    Assist in creating visual content for marketing materials, social media, and websites.
                                </li>
                                <li>
                                    Collaborate with the design team to brainstorm and develop new ideas.
                                </li>
                                <li>

                                    Participate in virtual team meetings and provide input on design strategies.
                                </li>
                            </ul>

                            <p className='font-semibold text-lg'> Requirements:</p>
                            <ul className='pl-8 md:pl-10 list-decimal mt-1 mb-3'>
                                <li> Basic knowledge of graphic design software (Adobe Photoshop, Illustrator, etc.).</li>
                                <li>Proven experience in sales or marketing.</li>
                                <li> Strong analytical skills and a results-driven mindset.</li>
                                <li>Excellent communication and interpersonal abilities.</li>
                                <li>A portfolio showcasing your design work is a plus.</li>
                                <li>Strong communication and teamwork skills.</li>
                            </ul>

                            <p className='mb-3'><span className='text-lg font-semibold'>Remote Paid Position:</span> Sales & Marketing Professional</p>
                            <p className='mb-3'>We are also seeking a dedicated Sales & Marketing professional to enhance our team’s productivity in a remote capacity. This role involves developing and implementing effective sales strategies to promote our services and drive growth.</p>
                            <p className='text-lg font-semibold'> Education is not a requirement; we value experience and results over formal qualifications.</p>
                        </div>
                    </div>
                </ModalHeader>
                <ModalFooter>
                    <ModalAction asChild><Button variant="outline">Cancel</Button></ModalAction>
                    <ModalAction asChild={false}><Apply /></ModalAction>
                    {/* <Button>Confirm</Button> */}
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
};

export default CareerModal;
