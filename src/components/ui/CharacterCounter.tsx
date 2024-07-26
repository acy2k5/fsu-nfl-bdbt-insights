interface CharacterCounterProps {
  currentCount: number
  maxCharacters: number
}

export default function CharacterCounter({
  currentCount,
  maxCharacters,
}: CharacterCounterProps) {
  const hasExceededLimit = currentCount > maxCharacters
  const textColor = hasExceededLimit ? 'text-red-500' : 'text-gray-400'

  return (
    <p className={`mt-1 text-sm ${textColor}`}>
      {currentCount}/{maxCharacters} characters
    </p>
  )
}
