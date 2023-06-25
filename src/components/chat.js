"use client";
import React from "react";
import Message from "./message";
const Chat = ({ messages, session }) => {
    return (
        <div className="flex h-full flex-col justify-between gap-[7px]">
            {messages.map((message) => (
                <Message key={message.id} message={message} session={session} />
            ))}
        </div>
    );
};

export default Chat;
