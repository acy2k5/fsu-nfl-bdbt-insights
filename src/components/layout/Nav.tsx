'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import MobileMenu from '@/components/layout/MobileMenu'
import Anchor from '@/components/ui/Anchor'

const SCROLL_THRESHOLD = 10

function SiteBranding() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Anchor
      className="flex items-center gap-3"
      href="https://eng.famu.fsu.edu/"
      title="Visit the FAMU-FSU College of Engineering home page"
    >
      <img
        alt="Florida State University Logo"
        className="h-8 w-8 inline-block sm:h-12 sm:w-12"
        src="https://logodix.com/logo/24794.png"
      />
      <span className="font-semibold inline-block text-white">
        {screenWidth < 512
          ? 'FSU NFL BDBT'
          : screenWidth < 1920
            ? 'FSU NFL Big Data Bowl Team'
            : 'Florida State University National Football League Big Data Bowl Team'}
      </span>
    </Anchor>
  )
}

function DesktopMenu() {
  const pathname = usePathname()

  const menuItems = [
    ['Landing', '/'],
    ['About Us', '/about'],
    ['Contact Us', 'mailto:lichunli@eng.famu.fsu.edu'],
    ['Project', '/project'],
  ]

  return (
    <ul className="gap-6 justify-end flex-wrap items-center hidden md:flex md:grow">
      {menuItems.map(([anchorText, hyperlink]) => (
        <li key={hyperlink}>
          <Link
            href={hyperlink}
            className={clsx(
              'font-medium text-gray-400 hover:text-white transition duration-300 ease-in-out',
              {
                'text-white': pathname === hyperlink,
              },
            )}
          >
            {anchorText}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default function Nav() {
  const [top, setTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.pageYOffset <= SCROLL_THRESHOLD)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        top
          ? ''
          : 'border-solid border-0 border-b border-gray-800 bg-black backdrop-blur-sm'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <SiteBranding />
          <DesktopMenu />
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}
