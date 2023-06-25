// "use client";
import Image from "next/image";
import Message from "@/components/message";
import SignIn from "@/components/signin";
import Chat from "@/components/chat";
import Input from "@/components/messageInput";
import { AuthOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
import ScrollElement from "@/components/scrollElement";
// import { useState, useEffect, useRef } from "react";
export default async function Home() {
    const session = await getServerSession(AuthOptions);
    const res = await fetch("http://localhost:3000/api/messages", {
        method: "GET",
        cache: "no-store",
    });
    const messages = await res.json();
    return (
        <main className="flex min-h-screen flex-col justify-between px-8 gap-4">
            <>
                {session ? (
                    <Chat messages={messages} session={session} />
                ) : (
                    <SignIn />
                )}
            </>
            <ScrollElement />
            <Input />
        </main>
    );
}
