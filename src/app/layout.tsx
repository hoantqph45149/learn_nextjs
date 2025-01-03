import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import AppProvider from "@/app/app-provider";
import { cookies } from "next/headers";
import SlideSession from "@/components/slide-session";

const roboto = Roboto({ subsets: ["vietnamese"], weight: ["400", "900"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sessionToken = cookies().get("sessionToken");
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <AppProvider initialSessionToken={sessionToken?.value}>
            <SlideSession />
            {children}
          </AppProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
