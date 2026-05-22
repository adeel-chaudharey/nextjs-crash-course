import type { Metadata } from "next";
import { Schibsted_Grotesk,Martian_Mono} from "next/font/google";
import "./globals.css";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianmono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent",
  description: "The HUb for Every Event you Mustn't Miss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${schibstedGrotesk.variable} ${martianmono.variable} min-h-screen antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
