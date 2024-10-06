import { Metadata } from 'next'
import Notebook from '@/app/notebook/components/notebook.mdx'

export const metadata: Metadata = {
  title: 'Notebook',
  description: 'Page description',
}

export default function NoteBook() {
  return (
    <>
      <Notebook />
    </>
  )
}
