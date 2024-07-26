import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Page description',
}

import Organizations, {
  organizationsList,
} from '@/app/about/components/Organizations'
import Team from '@/app/about/components/Team'
import Testimonial from '@/components/ui/Testimonial'

export default function About() {
  return (
    <>
      <Organizations organizations={organizationsList} />
      <Team />
      <Testimonial
        image="https://example.com/image.jpg"
        name="John Doe"
        title="CEO, ABC Corporation"
        text="This is a testimonial text. This is a testimonial text."
        bgColor="bg-blue-100"
        textColor="text-blue-900"
        borderColor="border-blue-500"
      />
    </>
  )
}
