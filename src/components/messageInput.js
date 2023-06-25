"use client";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
const Input = () => {
    const [text, setText] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();
        if (text === " ") return;
        await fetch("http://localhost:3000/api/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
        });
        setText(" ");
    };
    return (
        <form className="flex items-center py-3 px-8 justify-center gap-2 w-full bg-white fixed bottom-0 left-0">
            <TextareaAutosize
                rows={1}
                maxRows={3}
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="py-2 px-4 border-2 border-gray-500 resize-none focus:outline-none text-sm w-full rounded-lg scrollbar-thumb-gray-500 scrollbar scrollbar-thumb-rounded-full scrollbar-w-1"
            />
            <button
                type="submit"
                className="rounded-full flex justify-center items-center self-end shrink-0 text-blue-500 active:scale-95"
                onClick={sendMessage}
            >
                <AiOutlineSend size={30} />
            </button>
        </form>
    );
};

export default Input;
