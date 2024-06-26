import { z } from "zod"

export const contactFormSchema = z.object({
    name: z.string().min(1, "Name is required").max(50, "Name is too long"),
    email: z
        .string()
        .email("Invalid email address")
        .max(255, "Email is too long"),
    subject: z
        .string()
        .min(5, "Subject must be at least 5 characters")
        .max(100, "Subject is too long"),
    message: z
        .string()
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message is too long"),
})

// Infer the form data type from the schema
export type FormData = z.infer<typeof contactFormSchema>
