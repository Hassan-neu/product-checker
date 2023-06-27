"use client";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
const Input = () => {
    const [text, setText] = useState("");
    const sendMessage = async () => {
        if (text === " ") return;
        await fetch("http://localhost:3000/api/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
        });
        setText("");
    };
    return (
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl px-8 bg-white">
            <form className="flex items-center my-3 py-2 px-4 justify-center gap-2 w-full rounded-full bg-gray-200">
                <TextareaAutosize
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && text !== " ") {
                            e.preventDefault();
                            sendMessage();
                        }
                    }}
                    rows={1}
                    maxRows={2}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type a message"
                    className="px-2 py-1 resize-none focus:outline-none text-sm w-full scrollbar-thumb-gray-500 scrollbar scrollbar-thumb-rounded-full scrollbar-w-1 bg-transparent"
                />
                <button
                    type="submit"
                    className="flex justify-center items-center self-end shrink-0 text-gray-500 active:scale-95"
                    onClick={(e) => {
                        e.preventDefault();
                        sendMessage();
                    }}
                >
                    <AiOutlineSend size={25} />
                </button>
            </form>
        </div>
    );
};

export default Input;
