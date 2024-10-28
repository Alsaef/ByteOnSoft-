"use client"
import React, { useState } from 'react';

const ChatBoxCard = ({ toggleChatbox }) => {
    const [user, setUser] = useState(()=>{
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    })
    const [messages, setMessages] = useState([])

    const handelsubmit = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value

        const userData = {
            name: name,
            email: email
        }
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData));
    }

    const handelMessage = (e) => {
        e.preventDefault()
        const message = e.target.message.value
        const messageData = {
            message: message,
            email: user?.email
        }
        console.log(messageData);
        setMessages((preMessage)=>[...preMessage,messageData])

        e.target.reset()
    }



    console.log(user);
    console.log(messages);
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
                                    placeholder="Type Your Name"
                                    className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                                    required
                                />
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Type Your Email"
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

                           {
                            messages?.map(message=>(
                                <div className={`mb-2 ${user?.email===message.email?"text-right":"text-left"} `}>
                                <p className="bg-[var(--color-primary)] text-white rounded-lg py-2 px-4 inline-block">{message.message}</p> <br />
                                <span>{message.email}</span>
                            </div>
                            ))
                           }
                        </div>
                        <form onSubmit={handelMessage} className="flex mt-4">
                            <input
                                type="text"
                                name='message'
                                placeholder="Type a message"
                                className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                            />
                            <button className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-r-md  transition duration-300">
                                Send
                            </button>
                        </form >
                    </>
                }
            </div>
        </>
    );
};

export default ChatBoxCard;