import React, { ReactNode } from 'react'

// Defining the properties for the Section component
interface SectionProps {
  title: string
  subTitle: string
  children: ReactNode
}

// Section component function
export default function Section({ title, subTitle, children }: SectionProps) {
  return (
    <section className="block border border-solid rounded-lg bg-gray-900 border-gray-800 p-6">
      <h3 className="font-semibold mb-4 text-lg text-white">
        <span className="mr-2">{title}</span>
        {subTitle && <span>{subTitle}</span>}
      </h3>
      {/* Paragraph container */}
      <div className="grid gap-4 text-base text-gray-400">{children}</div>
    </section>
  )
}
