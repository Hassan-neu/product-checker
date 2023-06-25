import prisma from "@/libs/prismaClient";
import { AuthOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";

export async function POST(req) {
    const session = await getServerSession(AuthOptions);
    if (!session) {
        return new Response(JSON.stringify({ message: "Unathorized" }), {
            status: 400,
        });
    }
    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email,
        },
    });
    // console.log(user);
    if (!user) {
        return new Response(JSON.stringify({ message: "No user sesssion" }), {
            status: 404,
        });
    }
    const { text } = await req.json();
    const messages = await prisma.messages.create({
        data: {
            text,
            userName: user.name,
            userId: user.id,
        },
    });
    return new Response(JSON.stringify(messages), { status: 201 });
}

export async function GET(req) {
    const messages = await prisma.messages.findMany();
    return new Response(JSON.stringify(messages), { status: 200 });
}
