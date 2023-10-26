export default function Isolation() {
    return (
        <>
            <div className="flex absolute h-full w-full" style={{ zIndex: 101 }}>
                <div className={`flex justify-center items-center bg-black w-full h-full absolute text-white transition-transform ease-out duration-500`}>
                    <p className='font-medium text-5xl'>My Little Prison</p>
                </div>
            </div>
            <div className='w-full h-full absolute transition-transform ease-out duration-500' style={{ backgroundColor: "#400000" }} />
        </>
    )
}