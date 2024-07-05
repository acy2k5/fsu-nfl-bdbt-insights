import React from "react"

interface InputProps {
    type?:
        | "text"
        | "email"
        | "password"
        | "tel"
        | "number"
        | "date"
        | "time"
        | "datetime-local"
        | "month"
        | "week"
        | "url"
        | "search"
        | "color"
        | "checkbox"
        | "radio"
        | "range"
        | "hidden"
    value?: string
    placeholder?: string
    className?: string
}

export default function Input({
    type,
    value,
    placeholder,
    className,
}: InputProps) {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            className={
                (className =
                    "w-full p-3 rounded-md bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500")
            }
        />
    )
}
