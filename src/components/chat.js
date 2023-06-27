"use client";
import React, { useEffect, useState } from "react";
import Message from "./message";
import { pusherClient } from "@/libs/pusher";
const Chat = ({ session }) => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        pusherClient.subscribe("messages");
        pusherClient.bind("messages:new", (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });
        return () => {
            pusherClient.unsubscribe("messages");
            pusherClient.unbind("messages:new");
        };
    }, [messages]);

    return (
        <div className="flex h-full flex-col justify-between gap-[7px]">
            {messages.map((message) => (
                <Message key={message.id} message={message} session={session} />
            ))}
        </div>
    );
};

export default Chat;
