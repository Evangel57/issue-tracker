'use client'
import Link from 'next/link'
import React from 'react'
import { GiAlienBug } from "react-icons/gi";
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const NavBar = () => {
  const currentPath = usePathname()
  console.log(currentPath)
  const links  = [
      { label: "Dashboard", href: '/'},
      { label: "Issues", href: '/issues'},

  ]
  return (
  <nav className='flex space-x-6 border-b mb-6 py-5 items-center'>
      <Link href="/"><GiAlienBug size='2em' /></Link>
      <ul className='flex space-x-6'>
          { links.map(link =>
              <li key={link.href}>
                  <Link
                  // import classNames
                  className={classNames({
                    "text-zinc-900": link.href === currentPath,
                    "text-zinc-500": link.href != currentPath,
                    "hover:text-zinc-800 transition-colors": true
                  })}
                  // className='text-zinc-500 hover:text-zinc-800 transition-colors'
                  href={link.href}>
                      {link.label}
                  </Link>
              </li>
          )}
      </ul>
  </nav>
  )
}

export default NavBar
