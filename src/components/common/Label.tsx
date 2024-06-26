import React from "react"

interface LabelProps {
    text: string
    className?: string
    htmlFor?: string
}

export default function Label({ text, className, htmlFor }: LabelProps) {
    return (
        <label className={className} htmlFor={htmlFor}>
            {text}
        </label>
    )
}
