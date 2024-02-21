"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react';
import { QuestionMarkCircleIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import ModalInfo from './modalInfo';

export default function Header() {

    const cancelButtonInfoRef = useRef(null)
    const [modalInfoOpen, setModalInfoOpen] = useState(true)
    const [isLoadingAnimated, setIsLoadingAnimated] = useState(false);

    useEffect(() => {
        const animationTimeout = setTimeout(() => {
            setIsLoadingAnimated(true);
        }, 500);

        return () => clearTimeout(animationTimeout);
    }, []);

    return (
        <>
            <div className={`fixed inset-0 flex justify-center items-center scale-150 bg-black w-full h-full text-white transition-transform ease-in-out duration-1000 ${isLoadingAnimated ? '-translate-y-double-full rounded-b-full' : null}`} style={{ zIndex: 101 }}>
                <p className={`font-normal text-4xl select-none transition-opacity ease-in-out ${isLoadingAnimated ? 'opacity-50' : null}`}>Hi.</p>
            </div>
            <div className='col-span-12 grid grid-cols-12 z-10'>
                <div className="col-span-9">
                    <Link href={`/`} className='inline-block sm:hidden'>
                        <Image
                            className='inline-block sm:hidden'
                            src="/images/logo-mini.svg"
                            width={78}
                            height={44}
                            alt="Picture of the author"
                        />
                    </Link>
                    <Link href={`/`} className='hidden sm:inline-block'>
                        <Image
                            className='hidden sm:inline-block'
                            src="/images/logo.svg"
                            width={250}
                            height={44}
                            alt="Picture of the author"
                        />
                    </Link>
                </div >
                <div className="col-span-3 text-right">
                    <div className='rounded-xl inline-flex gap-2 p-1 bg-blood drop-shadow-2xl w-fit max-h-11'>
                        <QuestionMarkCircleIcon className="h-9 w-9 animate-pulse text-black hover:text-white cursor-pointer " aria-hidden="true"
                            onClick={() => setModalInfoOpen(true)}
                        />
                        <Link href={`/about`}>
                            <UserCircleIcon className="h-9 w-9 text-black hover:text-white cursor-pointer" aria-hidden="true" />
                        </Link>
                    </div>
                </div >
                <ModalInfo modalInfoOpen={modalInfoOpen} setModalInfoOpen={setModalInfoOpen} cancelButtonInfoRef={cancelButtonInfoRef} />
            </div>
        </>
    )
}