"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormData, contactFormSchema } from "@/lib/contact-form.schema"
import { sendEmail } from "@/utils/send-email"
import Input from "@/components/ui/Input"
import TextArea from "@/components/ui/TextArea"
import Button from "@/components/ui/Button"

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
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
                <Input
                    error={errors.name}
                    id="name"
                    label="Name"
                    register={register("name")}
                    title="Enter your name"
                />
                <Input
                    error={errors.email}
                    id="email"
                    label="Email"
                    register={register("email")}
                    title="Enter your email address"
                    type="email"
                />
                <Input
                    error={errors.subject}
                    id="subject"
                    label="Subject"
                    register={register("subject")}
                    title="Enter the subject of your message"
                />
                <TextArea
                    error={errors.message}
                    id="message"
                    label="Message"
                    maxLength={1000}
                    register={register("message")}
                    title="Enter your message"
                />
            </ul>
            <Button title="Submit the form" type="submit">
                Submit
            </Button>
        </form>
    )
}
