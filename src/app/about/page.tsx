import Image from 'next/image'
import Link from 'next/link'
import Header from './header'
import Footer from './footer'
import Content from './content'

export default function About() {
  return (
    <>
      <main className='scroll-smooth'>
        <Header />
        <Content />
        {/* <Footer /> */}
      </main>
    </>
  )
}
