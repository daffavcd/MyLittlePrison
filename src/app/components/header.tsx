"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react';
import { QuestionMarkCircleIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import ModalInfo from './modalInfo';


export default function Header() {

    const [isDesktop, setIsDesktop] = useState(true);

    // GET WINDOW RESOLUTION
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 639px)');
        setIsDesktop(!mediaQuery.matches);
        const handleMediaQueryChange = (e: MediaQueryListEvent) => {
            setIsDesktop(!e.matches);
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    const cancelButtonInfoRef = useRef(null)
    const [modalInfoOpen, setModalInfoOpen] = useState(false)

    return (
        <>
            <div className="col-span-9 z-10">
                <Image
                    src="/images/logo.svg"
                    width={250}
                    height={50}
                    alt="Picture of the author"
                />
            </div >
            <div className="col-span-3 z-10 text-right">
                <div className='rounded-xl inline-flex gap-2 p-1 bg-blood drop-shadow-2xl w-fit max-h-11'>
                    {isDesktop ? (
                        <QuestionMarkCircleIcon className="h-9 w-9 animate-pulse text-black hover:text-white cursor-pointer " aria-hidden="true"
                            onClick={() => setModalInfoOpen(true)}
                        />
                    ) : null}
                    <Link href={`/about`}>
                        <UserCircleIcon className="h-9 w-9 text-black hover:text-white cursor-pointer" aria-hidden="true" />
                    </Link>
                </div>
            </div >
            <ModalInfo modalInfoOpen={modalInfoOpen} setModalInfoOpen={setModalInfoOpen} cancelButtonInfoRef={cancelButtonInfoRef} />
        </>
    )
}