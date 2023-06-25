import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "CHAT ME",
    description: "Real-Time chat app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header className="sticky top-0 bg-white z-50">
                    <Header />
                </header>
                {children}
            </body>
        </html>
    );
}
