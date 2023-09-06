"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react';
import { QuestionMarkCircleIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import ModalInfo from './modalInfo';


export default function Header() {

    const cancelButtonInfoRef = useRef(null)
    const [modalInfoOpen, setModalInfoOpen] = useState(true)

    return (
        <>
            <div className='col-span-12 grid grid-cols-12 z-10'>
                <div className="col-span-9">
                    <Image
                        className='sm:hidden'
                        src="/images/logo-mini.svg"
                        width={78}
                        height={44}
                        alt="Picture of the author"
                    />
                    <Image
                        className='hidden sm:block'
                        src="/images/logo.svg"
                        width={250}
                        height={44}
                        alt="Picture of the author"
                    />
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