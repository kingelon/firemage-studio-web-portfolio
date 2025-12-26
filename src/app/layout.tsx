import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} min-h-screen flex flex-col bg-white text-neutral-900 antialiased`}
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
