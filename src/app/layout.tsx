import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Cosmic Vault",
  description: "Permanent archive of public-domain and freely-licensed knowledge. Humanity’s backup against digital amnesia.",
  openGraph: {
    title: "Cosmic Vault",
    description: "Humanity’s backup against digital amnesia.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmic Vault",
    description: "Permanent archive of public-domain knowledge.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} font-sans bg-cosmic-900 text-white min-h-screen bg-cosmic-gradient bg-fixed`}
      >
        {children}
      </body>
    </html>
  );
}
