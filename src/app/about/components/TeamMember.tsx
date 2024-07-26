import { ReactNode } from 'react'

interface TeamMemberProps {
  bio?: string
  children?: ReactNode
  image: string
  name: string
  role?: string
}

export default function TeamMember({
  bio,
  children,
  image,
  name,
  role,
}: TeamMemberProps) {
  return (
    <li className="text-center text-gray-400">
      <img
        alt={`${name}'s profile picture`}
        className="mx-auto mb-4 w-36 h-36 rounded-full"
        src={image}
      />
      <div>
        <h3 className="font-semibold sm:text-lg text-base text-white">
          {name}
        </h3>
        {role && <p className="text-base text-gray-400">{role}</p>}
        {bio && <p className="text-base text-gray-400">{bio}</p>}
      </div>
      {children && (
        <ul className="flex justify-center mt-4 space-x-4">{children}</ul>
      )}
    </li>
  )
}
