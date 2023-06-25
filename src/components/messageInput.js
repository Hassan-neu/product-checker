"use client";
import React from "react";
import { useState } from "react";
const Input = () => {
    const [text, setText] = useState("");
    const sendMessage = async () => {
        await fetch("http://localhost:3000/api/sendmessage", {
            method: "POST",
            body: JSON.stringify({ text }),
        });
    };
    return (
        <div className="flex items-center py-3 px-2 justify-center gap-2 w-full bg-white fixed bottom-0 left-0">
            <textarea
                name="text"
                id="text"
                cols="30"
                rows="1"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="py-2 px-4 border-2 border-gray-500 rounded-full resize-none focus:outline-none"
            ></textarea>
            <button
                className="py-2 px-2 rounded-full bg-blue-400"
                onClick={sendMessage}
            >
                🕊️
            </button>
        </div>
    );
};

export default Input;
