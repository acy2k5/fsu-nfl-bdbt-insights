import { useState } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import CharacterCounter from '@/components/ui/CharacterCounter'

interface TextAreaProps {
  error?: FieldError
  label?: string
  maxLength: number
  name: string
  placeholder?: string
  register: UseFormRegisterReturn
  rows?: number
  title?: string
}

export default function TextArea({
  error,
  label,
  maxLength,
  name,
  placeholder,
  register,
  rows = 5,
  title,
}: TextAreaProps) {
  const [characterCount, setCharacterCount] = useState(0)

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharacterCount(event.target.value.length)
    register.onChange(event)
  }

  return (
    <li>
      {label && (
        <label className="block mb-1" htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        className="bg-gray-800 p-3 rounded-md w-full"
        id={name}
        placeholder={placeholder}
        rows={rows}
        title={title}
        {...register}
        onChange={handleInputChange}
      />
      <CharacterCounter
        currentCount={characterCount}
        maxCharacters={maxLength}
      />
      {error && <p className="mt-1 text-red-500 text-sm">{error.message}</p>}
    </li>
  )
}
