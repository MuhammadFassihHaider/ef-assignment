import { NavigationBar } from "@/components/organisms/NavigationBar";
import { ThemeProvider } from "@/components/templates/ThemeProvider";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Countries Rest API",
    description: "Gets countries and their details from Countries Rest API",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(nunito.className, "pb-6 dark:bg-very-dark-blue")}
            >
                <link rel="icon" href="/globe.svg" sizes="any" />
                <ThemeProvider>
                    <NavigationBar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
