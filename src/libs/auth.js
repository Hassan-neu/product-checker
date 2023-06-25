import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prismaClient";
export const AuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({ session, token }) {
            if (token.id) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.image;
            }
            return session;
        },
        async jwt({ token, user }) {
            const dbUser = await prisma.user.findFirst({
                where: {
                    email: token.email,
                },
            });
            if (!dbUser) {
                token.user !== user.id;
                return token;
            }
            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                image: dbUser.image,
            };
        },
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    secret: "EvHVd7BOvRN+ZjjyNcjBf2Ji7vUTZ1ogkqF77sJVxSY=",
};
