
'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {
    const path=usePathname()
    return (
        <div>
            <Link href={href} className={`${path.startsWith(href)&&'text-primary font-bold'} text-black`}>{children}</Link>
            
        </div>
    );
};

export default NavLink;