// CharacterCounter.tsx
import React from "react"

interface CharacterCounterProps {
    value: string
    maxLength: number
}

const CharacterCounter: React.FC<CharacterCounterProps> = ({
    value,
    maxLength,
}) => {
    const characterCount = value.length

    return (
        <span className="text-gray-400 text-sm mt-1">
            {characterCount}/{maxLength} characters
        </span>
    )
}

export default CharacterCounter
