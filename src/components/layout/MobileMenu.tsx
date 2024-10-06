'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function MobileMenu() {
  const pathname = usePathname()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const mobileNavRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = ({ target }: { target: EventTarget | null }) => {
      if (!mobileNavRef.current || !triggerRef.current) return
      if (
        !mobileNavOpen ||
        mobileNavRef.current.contains(target as Node) ||
        triggerRef.current.contains(target as Node)
      )
        return
      setMobileNavOpen(false)
    }
    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [mobileNavOpen])

  useEffect(() => {
    const handleEscKey = ({ keyCode }: { keyCode: number }) => {
      if (!mobileNavOpen || keyCode !== 27) return
      setMobileNavOpen(false)
    }
    document.addEventListener('keydown', handleEscKey)
    return () => document.removeEventListener('keydown', handleEscKey)
  }, [mobileNavOpen])

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={triggerRef}
        className={`hamburger ${mobileNavOpen ? 'active' : ''}`}
        aria-label="Toggle Mobile Menu"
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/* Mobile navigation */}
      <div ref={mobileNavRef}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="border-solid border-0 border-t border-gray-800 absolute top-full h-screen z-20 left-0 w-full overflow-hidden bg-black"
          enter="transition ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="grid grid-cols-1 gap-6 p-6">
            {[
              ['Home', '/'],
              ['About Us', '/about'],
              ['Contact Us', '/contact'],
              ['Notebook', '/notebook'],
            ].map(([anchorText, hyperlink]) => (
              <li key={hyperlink}>
                <Link
                  href={hyperlink}
                  className={clsx(
                    'font-medium text-gray-400 hover:text-white transition duration-300 ease-in-out',
                    {
                      'text-white': pathname === hyperlink,
                    },
                  )}
                  onClick={() => setMobileNavOpen(false)}
                >
                  {anchorText}
                </Link>
              </li>
            ))}
          </ul>
        </Transition>
      </div>
    </div>
  )
}
