"use client";
import React from "react";
import Message from "./message";
import { useRef, useEffect } from "react";
const Main = () => {
    const view = useRef();
    useEffect(() => {
        view.current.scrollIntoView({ behaviour: "smooth" });
    }, []);
    return (
        <>
            <Message msg="hi" />
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
            <Message consecMessage msg="i'll be waiting for your response" />
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
            </div>
        </>
    );
};

export default Main;
