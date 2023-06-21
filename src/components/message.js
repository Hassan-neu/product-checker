"use client";
import React from "react";

const Message = ({ sender, consecMessage, msg }) => {
    return (
        <div
            className={`flex flex-row gap-2 w-72 ${
                sender ? "flex-row-reverse self-end" : ""
            }`}
            {...(sender
                ? { "data-mode": "sender" }
                : { "data-mode": "receiver" })}
        >
            {/* <div
                className={`w-[35px] h-[35px] flex-grow-0 flex-shrink-0  border-2 border-gray-400 rounded-full flex justify-center items-center text-sm ${
                    consecMessage ? "invisible" : ""
                }`}
            >
                U/A
            </div> */}
            <div
                className={`flex flex-col gap-[2px] ${
                    consecMessage ? "flex-col-reverse" : ""
                }`}
            >
                <div
                    className={`text-gray-500 text-xs flex gap-1 ${
                        sender ? "self-end" : "self-start flex-row-reverse"
                    }`}
                >
                    <span>19:30</span>
                    <span
                        className={`font-semibold ${
                            consecMessage ? "hidden" : ""
                        } `}
                    >
                        Hassan
                    </span>
                </div>
                <div
                    className={`text-sm text-white text-justify rounded-[15px] px-[1em] py-[.5em] break-keep  bg-blue-500 ${
                        sender ? "rounded-tr-[0]" : "rounded-tl-[0] bg-gray-500"
                    } ${consecMessage && sender ? "!rounded-tr-[15px] " : ""} ${
                        consecMessage && !sender ? "!rounded-tl-[15px] " : ""
                    } `}
                >
                    {msg}
                </div>
            </div>
        </div>
    );
};

export default Message;
