export default function Footer() {
    return (
        <footer className='grid grid-cols-12 max-w-full'>
            <div className="relative col-span-12">
                <div className="dark-overlay-game"></div>
                <div className="grid grid-cols-12 gap-0 pt-5 pb-5">
                    <div className="col-span-12 hidden xl:block text-center z-10 text-zinc-400">
                        {`Move The Character Using Arrow Keys`}
                    </div>
                    <div className="col-span-12 xl:hidden text-center z-10 text-zinc-400">
                        {`Move The Character Using Swipe [Beta]`}
                    </div>
                </div>
            </div>
        </footer >
    )
}