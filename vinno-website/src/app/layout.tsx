import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { siteOrigin } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], display: "swap", variable: "--font-space" });

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: "VINNO | Global Life Science Network",
  description:
    "VINNO is working toward healthier lives and longer companionship, starting from pet healthspan. Public today: a domestic-dog observation draft and a reference validator.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
