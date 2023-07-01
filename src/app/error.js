"use client";
import React from "react";
import { BiErrorAlt } from "react-icons/bi";
const Error = ({ error: { message }, reset }) => {
    console.log(message);
    return (
        <div className="bg-blue-500 h-screen px-4 py-2 flex flex-col items-center justify-center gap-5">
            <div className="text-white text-2xl text-center">
                Something unexpected just happened-
                {message}
            </div>
            <div className="text-red-500">
                <BiErrorAlt size={50} />
            </div>
            <button
                onClick={() => reset()}
                className="border-2  bg-blue-700 px-8 py-2 active:scale-95 rounded-lg text-white"
            >
                Retry
            </button>
        </div>
    );
};

export default Error;
