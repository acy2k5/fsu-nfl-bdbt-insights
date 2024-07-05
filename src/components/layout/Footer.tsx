"use client"

import Link from "next/link"
import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import Anchor from "@/components/common/Anchor"

// Footer Component
const Footer = () => {
    // Get the current year
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-solid border-0 border-t border-gray-800 bg-black text-gray-800 w-full">
            {/* Main content container */}
            <div className="max-w-screen-xl mx-auto p-6">
                {/* Bottom area */}
                <div className="flex max-md:gap-6 flex-col md:flex-row items-center justify-between">
                    {/* Social Links Component */}
                    <SocialLinks />
                    {/* Copyright notice */}
                    <p className="max-md:text-center text-base text-gray-600">
                        {currentYear} &copy; &nbsp;
                        <Anchor
                            href="https://www.famu.edu"
                            children="Florida A&M University"
                        />
                        -
                        <Anchor
                            href="https://www.fsu.edu"
                            children="Florida State University"
                        />
                        &nbsp;
                        <Anchor
                            href="https://eng.famu.fsu.edu"
                            children="College of Engineering"
                        />
                        . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

// SocialLinks Component
const SocialLinks = () => {
    // Social icons data
    const socialIcons = [
        {
            platform: "Facebook",
            url: "https://www.facebook.com/",
            icon: <FaFacebook />,
        },
        {
            platform: "Instagram",
            url: "https://www.instagram.com/",
            icon: <FaInstagram />,
        },
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/school/florida-state-university/",
            icon: <FaLinkedin />,
        },
        {
            platform: "Twitter",
            url: "https://twitter.com/FloridaState",
            icon: <FaTwitter />,
        },
    ]

    return (
        <ul className="flex gap-6 md:order-1">
            {socialIcons.map((social, index) => (
                <li key={index}>
                    <Link
                        aria-label={social.platform}
                        className="justify-center text-gray-400 hover:text-white transition duration-200 ease-in-out"
                        href={social.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        title={`Visit FSU's ${social.platform} profile`}
                    >
                        {React.cloneElement(social.icon, {
                            className: "w-6 h-6",
                        })}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Footer
