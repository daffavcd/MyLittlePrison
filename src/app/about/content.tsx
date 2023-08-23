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
        <>
            <div className="col-span-12">
                <div className="flex flex-col h-screen" style={{ marginTop: "-95px" }}>
                    <Image
                        alt="Background Image"
                        src="/images/luffy1.jpg"
                        quality={100}
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                    <div className="dark-overlay"></div>
                    <div className='flex items-center pl-6 pr-6 sm:pl-24 sm:pr-24 text-4xl leading-normal font-medium p-4 text-white text-center z-10 h-full'>
                        Yes, as some of you may already be aware, the theme of this portfolio web app i took it from Netflix.
                    </div>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12  pt-32 pb-32 pl-6 pr-6 md:pl-80 md:pr-80 text-white text-xl text-center'>
                        {`"I'm very aware that this project still very far from the excepted main concept that so called "Prison". I really need to make a time to create the whole assets prison stuff that i really want." - @daffavcd`}
                    </div>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12  pt-14 pb-14 pl-6 pr-6 text-white font-semibold text-4xl text-center'>
                        {`Some of my certifications`}
                    </div>
                </div>
                <div className='grid grid-cols-12 pt-14 pb-14 pl-6 pr-6 md:pl-32 md:pr-32 text-white'>
                    <div className='col-span-6 text-left'>
                        <Image
                            src="/images/logo-full.svg"
                            width={190}
                            height={80}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='col-span-6 text-right'>
                        {`Logos Social Media`}
                    </div>
                </div>
                <div className='grid grid-cols-12 pt-14 pb-14 pl-6 pr-6 md:pl-32 md:pr-32 text-white'>
                    <div className='col-span-6 text-left'>

                    </div>
                    <div className='col-span-6 text-right'>
                        {`© 2023 thePromisedDesire`}
                    </div>
                </div>
            </div >
        </>
    )
}