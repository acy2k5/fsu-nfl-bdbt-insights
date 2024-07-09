import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us",
    description: "Page description",
}

import Team from "@/app/about/components/Team"
import Testimonial from "@/app/about/components/Testimonial"

export default function About() {
    return (
        <>
            <Team />
            <Testimonial />
        </>
    )
}
