"use client";
import React from "react";
import Message from "./message";
import { useRef, useEffect } from "react";
const Main = () => {
    const main = useRef();
    useEffect(() => {
        main.scrollIntoView({ behaviour: "smooth" });
    }, []);
    return (
        <div className="flex h-full flex-col justify-between gap-[7px]">
            <div ref={view} className="h-20 w-full"></div>
        </div>
    );
};

export default Main;
