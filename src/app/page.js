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
    const session = await getServerSession(AuthOptions);
    console.log(session);
    return (
        <main className="flex h-screen min-h-screen flex-col justify-between px-8 gap-4">
            <div className="flex h-full flex-col justify-between gap-[7px]">
                {session ? <Chat /> : <SignIn />}

                {/* <Message msg="hi" />
                <Message sender={true} msg="hello" />
                <Message sender={true} consecMessage msg="how are you doing?" />
                <Message msg="i'm good" />
                <Message sender={true} msg="that's nice" />
                <Message msg="promise me this i just between us" />
                <Message sender={true} msg="what's it about?" />
                <Message
                    sender={true}
                    consecMessage
                    msg="did you commit murder lol?"
                />
                <Message
                    sender={true}
                    consecMessage
                    msg="i do't do well with policeee 🤣🤣"
                />
                <Message msg="no, be serious" />
                <Message
                    consecMessage
                    msg="I need you to keep this just between me and you"
                />
                <Message
                    consecMessage
                    msg=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem dolore aliquam, veritatis quidem quos unde distinctio voluptatum ipsum dignissimos."
                />
                <Message
                    consecMessage
                    msg="i'll be waiting for your response"
                />
                <Message
                    sender={true}
                    msg="woow, i really don't know what to say 😥😥"
                />
                <Message
                    consecMessage
                    sender={true}
                    msg="i'll get back to you when i'm done"
                />
                <Message msg="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic minima impedit sit atque architecto cupiditate, ullam, commodi autem velit qui distinctio quas ex amet pariatur maxime fugit numquam ducimus? Reiciendis explicabo eos obcaecati voluptatum magni voluptates dolore asperiores aut." />
                <div ref={view} className="h-20 w-full">
                    {" "}
                </div> */}
            </div>
            <Input />
        </main>
    );
}
