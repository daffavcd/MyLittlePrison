import { useState, useEffect, useRef, Fragment } from 'react';
import Image from 'next/image';
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { LightBulbIcon } from '@heroicons/react/24/solid'

export default function Content() {

    // const [isDesktop, setIsDesktop] = useState(true);

    // // GET WINDOW RESOLUTION
    // useEffect(() => {
    //     const mediaQuery = window.matchMedia('(max-width: 639px)');
    //     setIsDesktop(!mediaQuery.matches);
    //     const handleMediaQueryChange = (e: MediaQueryListEvent) => {
    //         setIsDesktop(!e.matches);
    //     };

    //     mediaQuery.addEventListener('change', handleMediaQueryChange);
    //     return () => {
    //         mediaQuery.removeEventListener('change', handleMediaQueryChange);
    //     };
    // }, []);

    return (
        <div className="col-span-12">
            <div className="flex flex-col h-screen -mt-24">
                <Image
                    alt="Background Image"
                    src="/images/luffy.jpg"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                />
                <div className="dark-overlay"></div>
                <div className='flex items-center pl-24 pr-24 text-4xl leading-normal font-medium p-4 text-white text-center z-10 h-full'>
                    Yes you right, the concept of this portfolio website i took it from Netflix.
                </div>
            </div>
            <div className='grid grid-cols-12 bg-black'>
                <div className='col-span-12  pt-16 pb-16 pl-6 pr-6 sm:pl-72 sm:pr-72 text-white text-xl text-center'>
                    {`"I'm very aware that this project still very far from the excepted main concept that's called "Prison". I really need to make a time to create the whole assets prison stuff that i really want." - @daffavcd`}
                </div>
            </div>
        </div >
    )
}