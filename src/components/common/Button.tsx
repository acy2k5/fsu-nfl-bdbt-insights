import React from "react"

interface ButtonProps {
    children: React.ReactNode
    className?: string
    disabled?: boolean
    type?: "button" | "submit" | "reset"
}

export default function Button({
    children,
    className,
    disabled,
    type,
}: ButtonProps) {
    return (
        <button className={className} disabled={disabled} type={type}>
            {children}
        </button>
    )
}
