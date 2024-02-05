import Image from 'next/image';

export default function Isolation() {
    return (
        <>
            <div className="flex absolute h-full w-full" style={{ zIndex: 101 }}>
                <div className={`fixed scale-100 transition-transform ease-in-out duration-300 grid grid-cols-12 py-4 px-2 w-64 h-36 rounded bg-modal-mlp border-modal-mlp shadow-sm z-50`}
                    id='thumbnail-portfolio=hover'
                    style={{ zIndex: 70 }}
                >
                    <div className="col-span-12">
                        <Image
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0Z2T8DwACKgFKDPXbYwAAAABJRU5ErkJggg=="
                            title={`Blur`}
                            alt={`Blur`}
                            height={107}
                            width={230}
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0Z2T8DwACKgFKDPXbYwAAAABJRU5ErkJggg=="
                            placeholder="blur"
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                                width: '100%',
                                maxWidth: '238px',
                                maxHeight: '110px'
                            }}
                        />
                        <div className='dark-overlay'></div>
                    </div>
                </div>
            </div>
            <div className='w-full h-full absolute transition-transform ease-out duration-500' style={{ backgroundColor: "#400000" }} />
        </>
    )
}