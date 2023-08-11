import Game from './components/game'
import Header from './components/header'
import Image from 'next/image'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col justify-between pt-5 pr-10 pb-5 pl-10 ">
      <Image
        alt="Background Image"
        src="/images/red-velvet.jpg"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
      <div className="dark-overlay"></div>
      <Header />
      <Game />
    </main>
  )
}
