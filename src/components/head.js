"use client";
import React from "react";
import { MdOutlinePhone } from "react-icons/md";
import { PiVideoCameraLight } from "react-icons/pi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dropdown } from "./dropdown";
import Image from "next/image";
const Header = ({ session }) => {
    return (
        <div className="text-center py-4 flex gap-3 px-8 items-center">
            <div className="mr-auto text-gray-500 font-bold">CHAT ME</div>
            <div className="text-blue-500">
                <MdOutlinePhone size={20} />
            </div>
            <div className="text-blue-500">
                <PiVideoCameraLight size={20} />
            </div>
            {session && (
                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                    <Image
                        src={session.user.image}
                        alt={session.user.name.split(" ").map((na) => na[0])}
                        width={30}
                        height={30}
                        className="rounded-full"
                    />
                </div>
                // <Dropdown>
                //     <Avatar>
                //         <AvatarImage src={""} />
                //         <AvatarFallback>
                //             {session.user.name.split(" ").map((acr) => acr[0])}
                //         </AvatarFallback>
                //     </Avatar>
                // </Dropdown>
            )}
        </div>
    );
};

export default Header;
