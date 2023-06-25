// "use client";
import Image from "next/image";
import Message from "@/components/message";
import SignIn from "@/components/signin";
import Chat from "@/components/chat";
import Input from "@/components/messageInput";
import { AuthOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
// import { useState, useEffect, useRef } from "react";
export default async function Home() {
    // const [consecMessage, setConsecMessage] = useState(false);
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
    const session = await getServerSession(AuthOptions);
    const res = await fetch("http://localhost:3000/api/messages", {
        method: "GET",
    });
    const messages = await res.json();
    return (
        <main className="flex min-h-screen flex-col justify-between px-8 gap-4">
            <div className="flex h-full flex-col justify-between gap-[7px]">
                {session ? (
                    <Chat messages={messages} session={session} />
                ) : (
                    <SignIn />
                )}
            </div>
            <Input />
        </main>
    );
}
