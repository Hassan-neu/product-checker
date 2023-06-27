"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { MdOutlinePhone } from "react-icons/md";
import { PiVideoCameraLight } from "react-icons/pi";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src={session.user.image} />
                            <AvatarFallback>
                                {session.user.name
                                    .split(" ")
                                    .map((acr) => acr[0])}
                            </AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => signOut()}>
                            Log Out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
        </div>
    );
};

export default Header;
