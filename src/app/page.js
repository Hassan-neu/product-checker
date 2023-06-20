"use client";
import Image from "next/image";
import Message from "@/components/message";
import { useState, useEffect, useRef } from "react";
export default function Home() {
    // const [consecMessage, setConsecMessage] = useState(false);
    // const main = useRef();
    // useEffect(() => {
    //     const docus = main.current.childNodes;
    //     for (let i = 0; i < docus.length; i++) {
    //         const consec =
    //             docus[i].dataset.mode == "sender" &&
    //             docus[i - 1].dataset.mode === "sender";
    //         if (consec) {
    //             setConsecMessage(true);
    //         } else if (!consec) {
    //             console.log(false);
    //         }
    //     }
    // }, [consecMessage]);
    return (
        <main className="flex min-h-screen flex-col justify-between p-24 gap-4">
            Main
            <Message />
            <Message sender={true} />
            <Message sender={true} consecMessage />
            <Message />
            <Message sender={true} />
            <Message />
            <Message sender={true} />
            <Message sender={true} consecMessage />
            <Message sender={true} consecMessage />
            <Message />
            <Message consecMessage />
            <Message consecMessage />
            <Message consecMessage />
            <Message consecMessage />
        </main>
    );
}
