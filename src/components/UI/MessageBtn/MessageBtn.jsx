"use client";
import ChatBoxCard from '@/components/Card/ChatBoxCard';
import React, { useState } from 'react';
import { IoChatbox } from "react-icons/io5";

const ChatButton = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChatbox = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div>
            <button
                onClick={toggleChatbox}
                className="bg-[var(--color-primary)] p-4 rounded-lg cursor-pointer fixed bottom-4 right-4 z-30 "
            >
                <IoChatbox className="w-7 h-7 text-white" />
            </button>

            {isChatOpen && (
            <ChatBoxCard toggleChatbox={toggleChatbox}></ChatBoxCard>
            )}
        </div>
    );
};

export default ChatButton;
