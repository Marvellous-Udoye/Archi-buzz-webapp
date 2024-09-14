"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import ArchiNav from "./component/common/archi-nav";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideNavbar = pathname === "/login" || pathname === "/signup";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <header>{!hideNavbar && <ArchiNav />}</header>
        {children}
      </body>
    </html>
  );
}
