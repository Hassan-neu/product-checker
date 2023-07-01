"use client";
import React from "react";
import { useRef, useEffect } from "react";
const ScrollElement = () => {
    const view = useRef();
    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, []);
    return (
        <div ref={view} className="h-28 w-full">
            {" "}
        </div>
    );
};

export default ScrollElement;
