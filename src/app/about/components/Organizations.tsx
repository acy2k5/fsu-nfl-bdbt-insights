import Anchor from '@/components/ui/Anchor'

// Define the Organization interface
interface Organization {
  description: string
  logo: string
  name: string
  url: string
}

// Define the OrganizationsProps interface
interface OrganizationsProps {
  organizations: Organization[]
}

// Create a sample organizations list
const organizationsList: Organization[] = [
  {
    description: 'This is a description of Organization 1',
    logo: 'https://example.com/logo1.png',
    name: 'Organization 1',
    url: 'https://example.com/org1',
  },
  {
    description: 'This is a description of Organization 2',
    logo: 'https://example.com/logo2.png',
    name: 'Organization 2',
    url: 'https://example.com/org2',
  },
  {
    description: 'This is a description of Organization 3',
    logo: 'https://example.com/logo3.png',
    name: 'Organization 3',
    url: 'https://example.com/org3',
  },
]

// Create the Organizations component
export default function Organizations({ organizations }: OrganizationsProps) {
  return (
    <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      <h2>Sponsored Organizations</h2>
      <ul>
        {organizations.map((org) => (
          <li key={org.name}>
            <img alt={org.name} className="mx-auto w-48 h-48" src={org.logo} />
            <h3>
              <a href={org.url} target="_blank" rel="noopener noreferrer">
                {org.name}
              </a>
            </h3>
            <p>{org.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Export the organizationsList
export { organizationsList }
