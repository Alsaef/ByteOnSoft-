"use client"
import React, { useState } from 'react';

const ChatBoxCard = ({ toggleChatbox }) => {
    const [user, setUser] = useState(null)

    const handelsubmit = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value

        const userData = {
            name: name,
            email: email
        }
        setUser(userData)
    }

    return (
        <>
            <div className="fixed bottom-16 right-4 w-80 bg-white p-4 rounded-lg shadow-lg border border-gray-200 ">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Chat with Admin</h2>
                    <button
                        onClick={toggleChatbox}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        &times;
                    </button>
                </div>
                {
                    !user ? <>
                        <div className='h-64 overflow-y-auto p-2 border-t mt-2'>
                            <form onSubmit={handelsubmit} className=' flex flex-col items-center space-y-3'>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder="Type a Youull Name"
                                    className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                                    required
                                />
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Type a Youull Email"
                                    className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                                    required
                                />

                                <button className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-r-md  transition duration-300">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </> : <>

                        <div className="h-64 overflow-y-auto p-2 border-t mt-2">
                            {/* Chat messages */}
                            <p>Welcome! How can I assist you today?</p>
                        </div>
                        <div className="flex mt-4">
                            <input
                                type="text"
                                placeholder="Type a message"
                                className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                            />
                            <button className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-r-md  transition duration-300">
                                Send
                            </button>
                        </div>
                    </>
                }
            </div>
        </>
    );
};

export default ChatBoxCard;