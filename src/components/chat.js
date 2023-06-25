"use client";
import React, { useState, useLayoutEffect, useRef } from "react";
import Message from "./message";
const Chat = ({ messages, session }) => {
    const main = useRef();
    const [consecMessage, setConsecMessage] = useState(false);
    useLayoutEffect(() => {
        const chat = main.current.childNodes;
        for (let i = 0; i < chat.length; i++) {
            const consec =
                chat[i]?.dataset.mode == "sender" &&
                chat[i - 1]?.dataset.mode === "sender";
            if (consec) {
                // console.log(consec);
                setConsecMessage(true);
            } else if (!consec) {
                setConsecMessage(false);
            }
        }
    }, [consecMessage]);
    return (
        <div
            className="flex h-full flex-col justify-between gap-[7px]"
            ref={main}
        >
            {messages.map((message) => (
                <Message
                    key={message.id}
                    message={message}
                    session={session}
                    consecMessage={consecMessage}
                />
            ))}
        </div>
    );
};

export default Chat;
