import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "TSystem",
    description: "Order management system for trading.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`min-h-screen ${inter.className} text-sm text-zinc-900 bg-[#E5E8EC]`}>
                {children}
            </body>
        </html>
    );
}
