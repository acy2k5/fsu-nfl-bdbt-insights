import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Page description',
}

import Hero from "@/app/about/components/Hero"
import Organizations from "@/app/about/components/Organizations"
import Team from "@/app/about/components/Team"
import Testimonial from "@/app/about/components/Testimonial"

export default function About() {
  return (
    <>
      <Hero />
      <Organizations />
      <Team />
      <Testimonial />
    </>
  )
}
