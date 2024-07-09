import { useState } from "react"
import { FieldError, UseFormRegisterReturn } from "react-hook-form"

interface CharacterCounterProps {
    error?: FieldError
    id: string
    label: string
    maxLength: number
    placeholder?: string
    register: UseFormRegisterReturn
    rows?: number
    title?: string
}

export default function CharacterCounter({
    error,
    id,
    label,
    maxLength,
    placeholder,
    register,
    rows = 5,
    title,
}: CharacterCounterProps) {
    const [characterCount, setCharacterCount] = useState(0)

    const handleInputChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setCharacterCount(event.target.value.length)
    }

    return (
        <li>
            <label className="block mb-1" htmlFor={id}>
                {label}
            </label>
            <textarea
                className="bg-gray-800 outline-none p-3 rounded-md w-full"
                id={id}
                placeholder={placeholder}
                rows={rows}
                title={title}
                {...register}
                onChange={handleInputChange}
            ></textarea>
            <span
                className={`text-sm ${
                    characterCount > maxLength
                        ? "text-red-500"
                        : "text-gray-400"
                }`}
            >
                {characterCount}/{maxLength} characters
            </span>
            {error && (
                <p className="mt-1 text-sm text-red-500">{error.message}</p>
            )}
        </li>
    )
}
