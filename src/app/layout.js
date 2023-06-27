import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/head";
import { AuthOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "CHAT ME",
    description: "Real-Time chat app",
};

export default async function RootLayout({ children }) {
    const session = await getServerSession(AuthOptions);
    return (
        <html lang="en">
            <body className={`${inter.className} max-w-2xl mx-auto relative`}>
                <header className="sticky top-0 bg-white z-50">
                    <Header session={session} />
                </header>
                {children}
            </body>
        </html>
    );
}
