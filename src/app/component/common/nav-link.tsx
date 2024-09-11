"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface navLinkProps {
  href: string,
  children: React.ReactNode,
  style?: string
}

const NavLink = ({ href, children, style}: navLinkProps) => {
const pathName = usePathname();
const isActive = pathName === href;

  return (
    <Link href={href}>
      <li className={`${isActive ? 'text-[#FFA500] border-b-[3.3px] border-b-[#FFA500]' : ''} ${style}`}>
        {children}
      </li>
    </Link>
  )
}

export default NavLink;
