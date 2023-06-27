"use client";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
const Message = ({ message, session }) => {
    const main = useRef();
    const [consecMessage, setConsecMessage] = useState(false);
    const { text, userId, createdAt, userName } = message;
    const {
        user: { id },
    } = session;
    const isSender = userId === id;
    useEffect(() => {
        const prevSibling = main.current.previousElementSibling;
        if (prevSibling) {
            if (main.current.dataset.mode === prevSibling.dataset.mode)
                setConsecMessage(true);
        }
    }, [consecMessage]);
    return (
        <div
            className={`flex flex-row gap-2 max-w-full w-3/4 ${
                isSender ? "flex-row-reverse self-end" : ""
            }`}
            {...(isSender
                ? { "data-mode": "sender" }
                : { "data-mode": "received" })}
            ref={main}
        >
            <div
                className={`flex flex-col gap-[2px] ${
                    consecMessage ? "flex-col-reverse" : ""
                }`}
            >
                <div
                    className={`text-gray-500 text-xs flex gap-1 ${
                        isSender ? "self-end" : "self-start flex-row-reverse"
                    }`}
                >
                    <span>
                        {new Date(`${createdAt}`)
                            .toTimeString()
                            .split(":")
                            .slice(0, 2)
                            .join(":")
                            .toString()}
                    </span>
                    <span
                        className={`font-semibold ${
                            consecMessage ? "hidden" : ""
                        }`}
                    >
                        {userName.split(" ")[0]}
                    </span>
                </div>
                <div
                    className={`text-sm text-white flex items-center rounded-[15px] px-[1em] py-[.5em] bg-blue-500  ${
                        isSender
                            ? "rounded-tr-[0]"
                            : "rounded-tl-[0] bg-gray-500"
                    } ${consecMessage && isSender ? "!rounded-tr-[15px]" : ""}
                        ${
                            consecMessage && !isSender
                                ? "!rounded-tl-[15px]"
                                : ""
                        }
                    `}
                >
                    {text}
                </div>
            </div>
        </div>
    );
};

export default Message;
