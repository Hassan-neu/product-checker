"use client";
import React from "react";

const Message = ({ sender, consecMessage }) => {
    return (
        <div
            className={`flex flex-row gap-2 w-72 ${
                sender ? "flex-row-reverse self-end" : ""
            }`}
            {...(sender
                ? { "data-mode": "sender" }
                : { "data-mode": "receiver" })}
        >
            <div
                className={`w-[35px] h-[35px] flex-grow-0 flex-shrink-0  border-2 border-gray-400 rounded-full flex justify-center items-center text-sm ${
                    consecMessage ? "invisible" : ""
                }`}
            >
                U/A
            </div>
            <div
                className={`flex flex-col gap-1 ${
                    consecMessage ? "flex-col-reverse" : ""
                }`}
            >
                <div
                    className={`text-gray-500 text-xs self-start flex gap-1 ${
                        sender ? "self-end" : ""
                    }`}
                >
                    <span>19:30</span>
                    <span
                        className={`font-semibold ${
                            consecMessage ? "hidden" : ""
                        } `}
                    >
                        You
                    </span>
                </div>
                <div
                    className={`text-sm text-justify rounded-[20px] px-[1em] py-[.5em] break-all ${
                        sender
                            ? "rounded-tr-none bg-blue-500 text-white"
                            : "rounded-tl-none bg-gray-500 text-white"
                    } 
                        ${consecMessage && "rounded-tr-[20px]"} 
                          ${consecMessage && !sender && "rounded-tl-[20px]"}  `}
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur laboriosam aperiam quis. Laudantium tempora veniam
                    recusandae ipsa, repudiandae, eum provident quisquam ratione
                    odit dolores harum mollitia impedit, cum praesentium qui.
                </div>
            </div>
        </div>
    );
};

export default Message;
