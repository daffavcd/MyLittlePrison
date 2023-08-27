export default function Footer() {
    return (
        <footer className='grid grid-cols-12 max-w-full'>
            <div className="relative col-span-12">
                <div className="dark-overlay-game"></div>
                <div className="grid grid-cols-12 gap-0 pt-5 pb-5">
                    <div className="col-span-12 text-center z-10 text-zinc-400">
                        {`Move The Character With Arrow Keys`}
                    </div>
                </div>
            </div>
        </footer >
    )
}