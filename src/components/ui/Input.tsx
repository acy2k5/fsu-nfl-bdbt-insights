import { FieldError, UseFormRegisterReturn } from "react-hook-form"

interface InputProps {
    error?: FieldError
    id: string
    label: string
    placeholder?: string
    register: UseFormRegisterReturn
    title?: string
    type?:
        | "checkbox"
        | "color"
        | "date"
        | "datetime-local"
        | "email"
        | "hidden"
        | "month"
        | "number"
        | "password"
        | "radio"
        | "range"
        | "search"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week"
}

export default function Input({
    error,
    id,
    label,
    placeholder,
    register,
    title,
    type = "text", // default type is "text"
}: InputProps) {
    return (
        <li>
            <label className="block mb-1" htmlFor={id}>
                {label}
            </label>
            <input
                className="bg-gray-800 outline-none p-3 rounded-md w-full"
                id={id}
                placeholder={placeholder}
                title={title}
                type={type}
                {...register}
            />
            {error && (
                <p className="mt-1 text-sm text-red-500">{error.message}</p>
            )}
        </li>
    )
}
