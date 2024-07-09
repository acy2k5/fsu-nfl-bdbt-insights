"use client"

import React, { useState, useEffect } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

import MobileMenu from "@/components/layout/MobileMenu"

export default function Nav() {
    const pathname = usePathname()
    const [top, setTop] = useState<boolean>(true)
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)

    const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }

    const handleResize = () => {
        setScreenWidth(window.innerWidth)
    }

    useEffect(() => {
        scrollHandler()
        window.addEventListener("scroll", scrollHandler)
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("scroll", scrollHandler)
            window.removeEventListener("resize", handleResize)
        }
    }, [top])

    return (
        <nav
            className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
                top
                    ? ""
                    : "border-solid border-0 border-b border-gray-800 bg-black backdrop-blur-sm"
            }`}
        >
            {/* Main content container */}
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Site branding */}
                    <Link
                        className="flex items-center gap-3"
                        href="https://eng.famu.fsu.edu/"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Visit the FAMU-FSU College of Engineering home page"
                    >
                        <img
                            alt="Florida State University Logo"
                            className="h-8 w-8 inline-block sm:h-12 sm:w-12"
                            src="https://logodix.com/logo/24794.png"
                        />
                        <span className="font-semibold inline-block text-white">
                            {screenWidth < 512
                                ? "FSU NFL BDBT"
                                : screenWidth < 1920
                                ? "FSU NFL Big Data Bowl Team"
                                : "Florida State University National Football League Big Data Bowl Team"}
                        </span>
                    </Link>
                    <ul className="gap-6 justify-end flex-wrap items-center hidden md:flex md:grow">
                        {[
                            ["Landing", "/"],
                            ["About Us", "/about"],
                            ["Contact Us", "mailto:lichunli@eng.famu.fsu.edu"],
                            ["Project", "/project"],
                        ].map(([anchorText, hyperlink]) => (
                            <li>
                                <Link
                                    href={hyperlink}
                                    className={clsx(
                                        "font-medium text-gray-400 hover:text-white transition duration-300 ease-in-out",
                                        {
                                            "text-white":
                                                pathname === hyperlink,
                                        }
                                    )}
                                >
                                    {anchorText}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* Mobile menu component */}
                    <MobileMenu />
                </div>
            </div>
        </nav>
    )
}
