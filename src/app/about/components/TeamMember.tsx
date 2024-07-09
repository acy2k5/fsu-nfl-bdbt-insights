import React, { ReactNode } from "react"

// Defining the properties for the TeamMember component
interface TeamMemberProps {
    pfp: string
    name: string
    role: string
    children?: ReactNode
}

// TeamMember component function
export default function TeamMember({
    pfp,
    name,
    role,
    children,
}: TeamMemberProps) {
    return (
        <li className="text-center text-gray-400">
            <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={pfp}
                alt={`${name}'s profile picture`}
            />
            <h3 className="font-semibold sm:text-lg text-base text-white">
                {name}
            </h3>
            <p className="text-base text-gray-400">{role}</p>
            {/* Render social links if they exist */}
            {children && (
                <ul className="flex justify-center mt-4">{children}</ul>
            )}
        </li>
    )
}
