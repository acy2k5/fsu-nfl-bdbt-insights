import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us",
    description: "Page description",
}

import Hero from "@/app/about/components/hero"
import Organizations from "@/app/about/components/organizations"
import Team from "@/app/about/components/team"
import Testimonials from "@/app/about/components/testimonials"

export default function About() {
    return (
        <>
            <Hero />
            <Organizations />
            <Team />
            <Testimonials />
        </>
    )
}
