import React from 'react';

// Defining the properties for the Hero component
interface HeroProps {
  heading: string;
  description: string;
  children?: React.ReactNode;
}

// Hero component function
export default function Hero({ heading, description, children }: HeroProps) {

  return (
    <section>
      <header className="max-w-screen-xl mx-auto px-6 py-24 lg:py-48 text-center">
        <h1 className="font-extrabold p-6 leading-none text-5xl tracking-tighter" data-aos="zoom-y-out">
          {heading}
        </h1>
        <p className="leading-loose max-w-screen-md mx-auto sm:text-lg text-base text-gray-400 tracking-tighter" data-aos="zoom-y-out" data-aos-delay="150">
          {description}
        </p>
      </header>
      {/* Displaying optional children (additional content) */}
      {children}
    </section>
  )
}