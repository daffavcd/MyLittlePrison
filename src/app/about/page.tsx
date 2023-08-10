import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello, About page! <Link href={`/pages/about`}>PINDAH</Link></h1>
    </main>
  )
}
