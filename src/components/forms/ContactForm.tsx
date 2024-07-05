"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormData, contactFormSchema } from "@/lib/contactForm.schema"
import { sendEmail } from "@/utils/sendEmail"

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(contactFormSchema),
    })

    const [characterCount, setCharacterCount] = useState(0)
    const MAX_MESSAGE_LENGTH = 1000

    function onSubmit(data: FormData) {
        sendEmail(data)
        reset()
        setCharacterCount(0)
    }

    // Update message length state when message field changes
    const handleTextareaChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setCharacterCount(event.target.value.length)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md mx-auto bg-gray-900 p-6 rounded-lg shadow-lg text-white grid grid-cols-1 gap-y-4"
        >
            <header className="text-center mb-4">
                <h1 className="text-3xl font-bold">Contact Us</h1>
                <p>Have any questions? Shoot us a message!</p>
            </header>
            <ul className="grid grid-cols-1 gap-y-4">
                <li>
                    <label htmlFor="name" className="block">
                        Name
                    </label>
                    <input
                        type="text"
                        {...register("name")}
                        className="w-full p-3 rounded-md bg-gray-800 outline-none"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">
                            {errors.name.message}
                        </p>
                    )}
                </li>
                <li>
                    <label htmlFor="email" className="block">
                        Email
                    </label>
                    <input
                        type="email"
                        {...register("email")}
                        className="w-full p-3 rounded-md bg-gray-800 outline-none"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">
                            {errors.email.message}
                        </p>
                    )}
                </li>

                <li>
                    <label htmlFor="Subject" className="block">
                        Subject
                    </label>
                    <input
                        type="text"
                        {...register("subject")}
                        className="w-full p-3 rounded-md bg-gray-800 outline-none"
                    />
                    {errors.subject && (
                        <p className="text-red-500 text-sm">
                            {errors.subject.message}
                        </p>
                    )}
                </li>
                <li>
                    <label htmlFor="message" className="block">
                        Message
                    </label>
                    <textarea
                        rows={4}
                        className="w-full p-3 rounded-md bg-gray-800 outline-none"
                        {...register("message", {
                            onChange: handleTextareaChange,
                        })}
                    ></textarea>
                    <span
                        className={`text-sm ${
                            characterCount > MAX_MESSAGE_LENGTH
                                ? "text-red-500"
                                : "text-gray-400"
                        }`}
                    >
                        {characterCount}/{MAX_MESSAGE_LENGTH} characters
                    </span>
                    {errors.message && (
                        <p className="text-red-500 text-sm">
                            {errors.message.message}
                        </p>
                    )}
                </li>
            </ul>
            <button
                type="submit"
                className="hover:shadow-form rounded-md w-full bg-purple-500 p-3 text-base font-semibold text-white outline-none"
            >
                Submit
            </button>
        </form>
    )
}
