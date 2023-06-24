import prisma from "@/libs/prismaClient";
import { AuthOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";

export async function POST(req) {
    const session = getServerSession(AuthOptions);
    if (!session) {
        return new Response(JSON.stringify({ message: "Unathorized" }), {
            status: 400,
        });
    }
    const user = await prisma.user.findUnique({
        where: session.user.email,
    });
    if (!user) {
        return new Response(JSON.stringify({ message: "No user sesssion" }), {
            status: 404,
        });
    }
    const { text } = req.json();
    const messages = await prisma.messages.create({
        data: {
            text,
            userId: user._id,
        },
    });
    return new Response(JSON.stringify(messages), { status: 201 });
}
