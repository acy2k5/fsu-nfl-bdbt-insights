"use client" // Enables client-side rendering

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { sendEmail } from "@/utils/sendEmail"
import { FormData, contactFormSchema } from "@/lib/contact-form.schema"
import Label from "@/components/common/Label"
import Button from "@/components/common/Button"

const ContactForm = () => {
    const {
        register, // Register form fields
        handleSubmit, // Handle form submission
        reset, // Reset form fields
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(contactFormSchema),
    })

    function onSubmit(data: FormData) {
        sendEmail(data)
        reset()
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
                    <Label text="Name" htmlFor="name" />
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
                    <Label text="Email" htmlFor="email" />
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
                    <Label text="Subject" htmlFor="subject" />
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
                    <Label text="Message" htmlFor="message" />
                    <textarea
                        rows={4}
                        {...register("message")}
                        className="w-full p-3 rounded-md bg-gray-800 outline-none"
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-500 text-sm">
                            {errors.message.message}
                        </p>
                    )}
                </li>
            </ul>
            <Button
                className="hover:shadow-form rounded-md w-full bg-purple-500 p-3 text-base font-semibold text-white outline-none"
                type="submit"
            >
                Submit
            </Button>
        </form>
    )
}

export default ContactForm
