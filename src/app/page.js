import SignIn from "@/components/signin";
import Chat from "@/components/chat";
import Input from "@/components/messageInput";
import ScrollElement from "@/components/scrollElement";
import { AuthOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
export default async function Home() {
    const session = await getServerSession(AuthOptions);
    return (
        <main className="flex min-h-screen flex-col justify-between px-8 gap-4">
            <>{session ? <Chat session={session} /> : <SignIn />}</>
            <ScrollElement />
            <Input />
        </main>
    );
}
