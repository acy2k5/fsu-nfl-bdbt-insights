import Link from "next/link"
import React from "react"

interface AnchorProps {
    children: React.ReactNode
    className?: string
    href: string
    rel?: string
    target?: string
    title?: string
}

export default function Anchor({
    children,
    className,
    href,
    rel,
    target,
    title,
}: AnchorProps) {
    return (
        <Link
            href={href}
            className={className}
            target={target}
            rel={rel}
            title={title}
        >
            {children}
        </Link>
    )
}
