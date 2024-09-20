"use client"

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ArchiNav from "./component/common/archi-nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const hideNavbar = pathname === "/login" || pathname === "/signup";

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    setIsMenuOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <header>
          {!hideNavbar && <ArchiNav
            isNavbarOpen={isNavbarOpen}
            isMenuOpen={isMenuOpen}
            handleNavClick={toggleNavbar}
            closeNavbar={closeNavbar}
          />
          }
        </header>
        <main>
          {children}
        </main>
        {isNavbarOpen && (
          <div
            className={`${isMenuOpen ? "" : "hidden"
              } fixed h-[100vh] inset-0 bg-black opacity-50 z-10 transition-opacity duration-300 ease-in-out lg:hidden`}
          ></div>
        )}
      </body>
    </html>
  );
}
