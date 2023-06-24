"use client";
import React from "react";
import { signIn } from "next-auth/react";
const SignIn = () => {
    const handlSignIn = async () => {
        signIn("google", { callbackUrl: "http://localhost:3000" });
    };
    return (
        <div className="m-auto flex flex-col gap-5 w-2/5 items-center justify-center border-2 border-gray-500 rounded-lg px-4 py-8">
            <div className="text-gray-500 text-center">
                <h3>You&apos;re currently not signed in </h3>
            </div>
            <button
                className="outline-2 outline outline-offset-2 outline-gray-500 px-3 py-2 rounded-sm hover:bg-blue-500 hover:text-white hover:outline-blue-500 text-gray-500"
                onClick={handlSignIn}
            >
                Sign In with Google
            </button>
        </div>
    );
};

export default SignIn;
