import Anchor from '@/components/ui/Anchor'
import Header from '@/components/ui/Header'
import Mapper from '@/components/ui/Mapper'

interface OrganizationProps {
  id: number
  logo: string
  name: string
  url: string
}

const organizations: OrganizationProps[] = [
  {
    id: 1,
    logo: 'https://th.bing.com/th/id/R.bbab252af72131ef7e984638195ee2c1?rik=IDhsFLkht4OB5Q&riu=http%3a%2f%2fwww.famunews.com%2fwp-content%2fuploads%2f2013%2f09%2fFAMU_SEAL-on-White.png&ehk=sM0hqv4ebTgEpsHPepOu47jfB%2fGo4qSOSdsHoCHUgrU%3d&risl=&pid=ImgRaw&r=0',
    name: 'Florida A&M University',
    url: 'https://www.famu.edu',
  },
  {
    id: 2,
    logo: 'https://edurank.org/assets/img/uni-logos/florida-state-university-logo.png',
    name: 'Florida State University',
    url: 'https://www.fsu.edu',
  },
  {
    id: 3,
    logo: 'https://1000logos.net/wp-content/uploads/2020/10/National-Science-Foundation-logo-640x643.png',
    name: 'National Science Foundation',
    url: 'https://www.nsf.gov/',
  },
]

export default function Organizations() {
  return (
    <section className="relative" id="spotlight">
      {/* Main content container */}
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        {/* Section header */}
        <Header
          heading="Our Sponsors"
          headingLevel={2}
          subtext="A showcase of thanks to those that made this possible!"
        />
        {/* Section content */}
        <Mapper<OrganizationProps>
          data={organizations}
          renderItem={(org) => (
            <li key={org.id} className="flex flex-col items-center text-center">
              <img
                alt={org.name}
                className="w-32 h-32 object-contain mb-4"
                src={org.logo}
              />
              <h3 className="text-lg font-semibold mb-2">
                <Anchor href={org.url}>{org.name}</Anchor>
              </h3>
            </li>
          )}
          WrapperElement="ul"
          wrapperProps={{
            className:
              'grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 gap-x-12',
          }}
        />
      </div>
    </section>
  )
}
