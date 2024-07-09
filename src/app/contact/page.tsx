import type { Metadata } from "next"
import ContactForm from "@/components/forms/ContactForm"

export const metadata: Metadata = {
    title: "Contact Us",
    description: "",
}

export default function Contact() {
    return <ContactForm />
}
