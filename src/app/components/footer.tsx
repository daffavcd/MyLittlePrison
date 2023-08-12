import Image from 'next/image'

export default function Header() {
    return (
        <footer>
            <div className="relative">
                <div className="dark-overlay-game"></div>
                <div className="grid grid-cols-12 gap-12 pt-5 pr-56 pb-5 pl-56">
                    <div className="col-span-12 text-zinc-400 text-center z-10">© 2023 thePromisedDesire.</div>
                </div>
            </div>
        </footer >
    )
}