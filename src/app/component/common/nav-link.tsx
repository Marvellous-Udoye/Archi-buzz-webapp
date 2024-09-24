"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavLinkProps {
  href: string | string[];
  children: React.ReactNode;
  style?: string;
  onClick?: () => void;
}

const NavLink = ({ href, children, style, onClick }: NavLinkProps) => {
  const pathName = usePathname();

  const isActive = React.useMemo(() => {
    if (Array.isArray(href)) {
      return href.some(path => pathName.startsWith(path));
    }
    if (href === '/courses') {
      return pathName === '/courses' || pathName.startsWith('/courses/');
    }
    return pathName === href;
  }, [href, pathName]);

  const linkHref = Array.isArray(href) ? href[0] : href;

  return (
    <Link href={linkHref}>
      <li
        className={`
          ${isActive ? 'text-[#FFA500] border-[#FFA500]' : ''}
          ${isActive ? 'lg:bg-transparent border-b-0 lg:border-b-[3.3px]' : ''}
          ${isActive ? 'border-l-[3px] border-l-[#FFA500] bg-[#FFDB99] lg:border-l-0 lg:bg-transparent' : ''}
          ${style}
          transition-colors duration-300 ease-in-out
        `}
        onClick={onClick}
      >
        {children}
      </li>
    </Link>
  );
};

export default NavLink;