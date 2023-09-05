export default function Footer() {
    return (
        <footer className='col-span-12 absolute bottom-0 grid grid-cols-12 w-full bg-black/70 -mr-10 -ml-10 z-10'>
            <div className="grid grid-cols-12 col-span-12 gap-0 pt-5 pb-5">
                <div className="col-span-12 hidden xl:block text-center z-10 text-zinc-400">
                    {`Move The Character Using Arrow Keys`}
                </div>
                <div className="col-span-12 xl:hidden text-center z-10 text-zinc-400">
                    {`Move The Character Using Swipe [Beta]`}
                </div>
            </div>
        </footer >
    )
}