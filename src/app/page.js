import SignIn from "@/components/signin";
import Chat from "@/components/chat";
import Input from "@/components/messageInput";
import ScrollElement from "@/components/scrollElement";
import { AuthOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
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
                    <Chat session={session} msg={messages} />
                ) : (
                    <SignIn />
                )}
            </>
            <ScrollElement />
            {session && <Input />}
        </main>
    );
}
