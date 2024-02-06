import Game from './game'
import Header from './header'
import Footer from './footer'
import Image from 'next/image'

export default function HomeGame() {

    return (
        <>
            <div className="flex flex-col h-screen relative">
                <Image
                    className="bg-repeat"
                    alt="Background Image"
                    src="/images/blur3.jpg"
                    quality={100}
                    fill
                    priority
                    sizes="100vw"
                    style={{
                        position: 'absolute',
                        objectFit: 'cover',
                    }}
                />
                <div className="dark-overlay"></div>
                <main className="grid grid-cols-12 h-screen pt-7 pr-10 pb-5 pl-10">
                    <Header />
                    <Game />
                    <Footer />
                </main>
            </div>
        </>
    )
}
