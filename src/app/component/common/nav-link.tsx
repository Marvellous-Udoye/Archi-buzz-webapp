"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavLinkProps {
  href: string | string[];
  children: React.ReactNode;
  style?: string;
}

const NavLink = ({ href, children, style }: NavLinkProps) => {
  const pathName = usePathname();
  const isActive = Array.isArray(href) ? href.includes(pathName) : pathName === href;

  return (
    <Link href={Array.isArray(href) ? href[0] : href}>
      <li
        className={`
          ${isActive ? 'text-[#FFA500] border-b-[3.3px] border-[#FFA500]' : ''}
          ${isActive ? 'lg:border-l-0 lg:bg-transparent lg:border-b-[3.3px]' : ''}
          ${isActive ? 'border-l-[3px] border-l-[#FFA500] bg-[#FFDB99] lg:border-l-0 lg:bg-transparent' : ''}
          ${style}
          transition-colors duration-300 ease-in-out
        `}
      >
        {children}
      </li>
    </Link>
  );
};

export default NavLink;
