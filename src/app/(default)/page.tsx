import { Metadata } from 'next'
import Hero from '@/app/(default)/components/Hero'
import FeatureBlocks from '@/app/(default)/components/FeatureBlocks'

export const metadata: Metadata = {
  description: 'Page description',
}

export default function Index() {
  return (
    <>
      <Hero />
      <FeatureBlocks />
    </>
  )
}
