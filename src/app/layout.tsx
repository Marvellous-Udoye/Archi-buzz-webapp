import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ArchiNav from "./component/common/archi-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ArchiBuzz",
  description: "Empower Your Architectural Vision with AI Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <ArchiNav />
        </header>
        {children}
      </body>
    </html>
  );
}

