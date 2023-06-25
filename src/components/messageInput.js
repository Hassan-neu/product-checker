"use client";
import React from "react";
import { useState } from "react";
const Input = () => {
    const [text, setText] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:3000/api/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
        });
        setText(" ");
    };
    return (
        <form className="flex items-center py-3 px-2 justify-center gap-2 w-full bg-white fixed bottom-0 left-0">
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
                type="submit"
                className="py-2 px-2 rounded-full bg-blue-400"
                onClick={sendMessage}
            >
                🕊️
            </button>
        </form>
    );
};

export default Input;
