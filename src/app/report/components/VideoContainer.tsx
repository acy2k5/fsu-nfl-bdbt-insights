// VideoContainer.tsx
import React from 'react'

interface VideoContainerProps {
  image: string
  title: string
}

export default function VideoContainer({ image, title }: VideoContainerProps) {
  return (
    <div
      style={{
        width: '100%',
        height: 0,
        paddingBottom: '60%',
        position: 'relative',
        marginBottom: 16,
      }}
    >
      <iframe
        title={title}
        src={image}
        width="100%"
        height="100%"
        className="absolute rounded"
        allowFullScreen
      />
    </div>
  )
}
