"use client";
import React from "react";
const Message = ({ message, session, consecMessage }) => {
    const { text, userId, createdAt, userName } = message;
    const {
        user: { id },
    } = session;
    const isSender = userId === id;
    // console.log({ isSender, id });
    return (
        <div
            className={`flex flex-row gap-2 w-full ${
                isSender ? "flex-row-reverse self-end" : ""
            }`}
            {...(isSender
                ? { "data-mode": "sender" }
                : { "data-mode": "received" })}
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
                    className={`text-sm text-white  rounded-[15px] px-[1em] py-[.5em] bg-blue-500  ${
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
