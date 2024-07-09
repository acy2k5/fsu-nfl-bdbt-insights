import React from "react"

interface ButtonProps {
    children: React.ReactNode
    disabled?: boolean
    title?: string
    type?: "button" | "submit" | "reset"
}

export default function Button({
    children,
    disabled,
    title,
    type,
}: ButtonProps) {
    return (
        <button
            className="bg-purple-500 font-semibold hover:shadow-form outline-none p-3 rounded-md text-base text-white w-full"
            disabled={disabled}
            title={title}
            type={type}
        >
            {children}
        </button>
    )
}
