import Link from "next/link"

interface AnchorProps {
    children: React.ReactNode
    className?: string
    href: string
    rel?: string
    target?: string
}

export default function Anchor({
    children,
    className,
    href,
    rel,
    target,
}: AnchorProps) {
    return (
        <Link href={href} className={className} target={target} rel={rel}>
            {children}
        </Link>
    )
}
