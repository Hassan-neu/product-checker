"use client";
import React from "react";
import Message from "./message";
import { useRef, useEffect } from "react";
const Chat = ({ messages, session }) => {
    const view = useRef();
    useEffect(() => {
        view.current.scrollIntoView({ behaviour: "smooth" });
    }, []);
    console.log(messages);
    return (
        <>
            {messages.map((message) => (
                <Message key={message.id} message={message} session={session} />
            ))}
            <div ref={view} className="h-20 w-full">
                {" "}
            </div>
        </>
    );
};

export default Chat;
