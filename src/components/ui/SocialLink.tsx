import Link from "next/link"
import React, { ReactNode } from "react"

interface SocialLinkProps {
    platform: string
    icon: ReactNode
    url: string
    className?: string
    title?: string
}

export default function SocialLink({
    platform,
    icon,
    url,
    title = `Visit ${platform} profile`, // set default title
    className = "justify-center text-gray-400 hover:text-white transition duration-200 ease-in-out",
}: SocialLinkProps) {
    return (
        <Link
            className={className}
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            title={title}
        >
            {icon}
        </Link>
    )
}
