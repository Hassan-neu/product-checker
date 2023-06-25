"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";
import { MdOutlinePhone } from "react-icons/md";
import { PiVideoCameraLight } from "react-icons/pi";
const Header = () => {
    return (
        <div className="text-center py-4 flex gap-3 px-8 items-center">
            <div className="mr-auto text-gray-500">CHAT ME</div>
            <div>
                <MdOutlinePhone size={20} />
            </div>
            <div>
                <PiVideoCameraLight size={20} />
            </div>
        </div>
    );
};

export default Header;
