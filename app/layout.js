import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import Header from "@/components/header";
import {ClerkProvider} from "@clerk/nextjs";
import {dark} from "@clerk/themes";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "MentorAI - AI-powered mentor for careers",
    description: "",
};

export default function RootLayout({children}) {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: dark,
            }}
        >
            <html lang="en" suppressHydrationWarning={true}>
            <body className={`${inter.className}`}>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                <Header/>
                <main className="min-h-screen">
                    {children}
                </main>
                <footer className="bg-muted/50 py-12">
                    <div className="container mx-auto px-4 text-center text-gray-400">
                        <p className="text-2xl font-bold">MentorAI - AI Powered Mentor for Careers</p>
                    </div>
                </footer>
            </ThemeProvider>
            </body>
            </html>
        </ClerkProvider>
    );
}
