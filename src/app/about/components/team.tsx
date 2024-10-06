import { ReactNode } from 'react'
import Header from '@/components/ui/Header'
import Mapper from '@/components/ui/Mapper'
import SocialLink from '@/components/ui/SocialLink'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IconType } from 'react-icons'

interface TeamMemberProps {
  bio?: string
  children?: ReactNode
  id: number
  image: string
  name: string
  role?: string
  socialLinks?: {
    platform: string
    href: string
    icon: IconType
    className?: string
  }[]
}

const teamMembers: TeamMemberProps[] = [
  {
    id: 1,
    name: 'Andrew Young',
    role: 'Web Developer',
    image:
      'https://i.pinimg.com/736x/aa/c6/a1/aac6a12fd48d80fe1c1d7e4f87505589.jpg',
    socialLinks: [
      {
        platform: 'GitHub',
        href: 'https://github.com/acy2k5',
        icon: FaGithub,
        className: 'text-purple-600 hover:text-purple-800',
      },
      {
        platform: 'LinkedIn',
        href: 'https://www.linkedin.com/in/youngandrewchristian/',
        icon: FaLinkedin,
        className: 'text-blue-700 hover:text-blue-900',
      },
    ],
  },
  {
    id: 2,
    name: 'Alex Trbovic',
    role: 'Data Analyst',
    image:
      'https://i.pinimg.com/736x/aa/c6/a1/aac6a12fd48d80fe1c1d7e4f87505589.jpg',
    socialLinks: [
      {
        platform: 'GitHub',
        href: 'https://github.com/ATrbovic',
        icon: FaGithub,
        className: 'text-purple-600 hover:text-purple-800',
      },
      {
        platform: 'LinkedIn',
        href: 'https://www.linkedin.com/in/alextrbovic/',
        icon: FaLinkedin,
        className: 'text-blue-700 hover:text-blue-900',
      },
    ],
  },
  {
    id: 3,
    name: 'Lichun Li',
    role: 'Assistant Professor',
    image:
      'https://i.pinimg.com/736x/aa/c6/a1/aac6a12fd48d80fe1c1d7e4f87505589.jpg',
    socialLinks: [
      {
        platform: 'LinkedIn',
        href: 'https://www.linkedin.com/in/lichun-li-653776263/',
        icon: FaLinkedin,
        className: 'text-blue-700 hover:text-blue-900',
      },
    ],
  },
  {
    id: 4,
    name: 'Souhail Marnaoui',
    role: 'Data Analyst',
    image:
      'https://i.pinimg.com/736x/aa/c6/a1/aac6a12fd48d80fe1c1d7e4f87505589.jpg',
  },
  {
    id: 5,
    name: 'Nicolas Herbst',
    role: 'Data Analyst',
    image:
      'https://i.pinimg.com/736x/aa/c6/a1/aac6a12fd48d80fe1c1d7e4f87505589.jpg',
  },
  {
    id: 6,
    name: 'Jose Diaz',
    role: 'Data Analyst',
    image:
      'https://i.pinimg.com/736x/aa/c6/a1/aac6a12fd48d80fe1c1d7e4f87505589.jpg',
  },
  {
    id: 7,
    name: 'Olivia Zeng',
    role: 'Researcher',
    image:
      'https://i.pinimg.com/736x/aa/c6/a1/aac6a12fd48d80fe1c1d7e4f87505589.jpg',
  },
]

export default function TeamMembers() {
  return (
    <section className="relative">
      {/* Main content container */}
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Responsive vertical padding container */}
        <div className="py-12 md:py-20">
          {/* Section heading */}
          <Header
            heading="Our Team"
            headingLevel={2}
            subtext="Meet the people behind this project!"
          />
          {/* Section content */}
          <Mapper<TeamMemberProps>
            data={teamMembers}
            renderItem={(member) => (
              <li className="text-center text-gray-400" key={member.id}>
                <img
                  alt={`${member.name}'s profile picture`}
                  className="mx-auto mb-4 w-36 h-36 rounded-full"
                  src={member.image}
                />
                <div>
                  <h3 className="font-semibold sm:text-lg text-base text-white">
                    {member.name}
                  </h3>
                  {member.role && (
                    <p className="text-base text-gray-400">{member.role}</p>
                  )}
                  {member.bio && (
                    <p className="text-base text-gray-400">{member.bio}</p>
                  )}
                </div>
                {member.socialLinks && (
                  <ul className="flex justify-center mt-4 space-x-4">
                    {member.socialLinks.map((link, index) => (
                      <li key={index}>
                        <SocialLink
                          href={link.href}
                          icon={link.icon}
                          platform={link.platform}
                          className={link.className}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )}
            WrapperElement="ul"
            wrapperProps={{
              className:
                'grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
            }}
          />
        </div>
      </div>
    </section>
  )
}
