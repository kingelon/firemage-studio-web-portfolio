import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
  icons: {
    icon: "/gripfire-brands-solid-full.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} font-mono min-h-screen flex flex-col bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] text-neutral-900 antialiased`}
      >
        <NavBar />
        <main className="mx-auto w-full max-w-5xl px-4 py-12 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
