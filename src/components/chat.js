import React from "react";
import Message from "./message";
const Chat = async ({ session }) => {
    const res = await fetch("http://localhost:3000/api/messages", {
        method: "GET",
        cache: "no-store",
    });
    const messages = await res.json();
    return (
        <div className="flex h-full flex-col justify-between gap-[7px]">
            {messages.map((message) => (
                <Message key={message.id} message={message} session={session} />
            ))}
        </div>
    );
};

export default Chat;
