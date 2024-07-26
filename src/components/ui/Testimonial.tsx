import React from 'react'

interface TestimonialProps {
  image: string
  name: string
  title: string
  text: string
  bgColor?: string
  textColor?: string
  borderColor?: string
}

const Testimonial: React.FC<TestimonialProps> = ({
  image,
  name,
  title,
  text,
  bgColor = 'bg-white',
  textColor = 'text-gray-900',
  borderColor = 'border-gray-200',
}) => {
  return (
    <div
      className={`flex flex-col p-8 rounded-lg shadow-md ${bgColor} ${borderColor}`}
    >
      <img src={image} alt={name} className="w-16 h-16 rounded-full mb-4" />
      <h3 className={`text-lg font-bold ${textColor}`}>{name}</h3>
      <p className={`text-sm font-medium ${textColor}`}>{title}</p>
      <p className={`text-sm ${textColor}`}>{text}</p>
    </div>
  )
}

export default Testimonial
