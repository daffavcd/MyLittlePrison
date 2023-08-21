"use client";

import Image from 'next/image'
import { useState, useEffect, useRef, } from 'react';
import { QuestionMarkCircleIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import ModalInfo from './modalInfo';


export default function Header() {

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
                <div className='rounded-xl inline-flex gap-2 p-1 bg-blood shadow-2xl' style={{ width: "fit-content", maxHeight: "50px" }}>
                    <QuestionMarkCircleIcon className="h-10 w-10 animate-pulse text-black hover:text-white cursor-pointer pointer-events-auto" aria-hidden="true"
                        onClick={() => setModalInfoOpen(true)}
                    />
                    <UserCircleIcon className="h-10 w-10 text-black hover:text-white cursor-pointer" aria-hidden="true" />
                </div>
            </div >
            <ModalInfo modalInfoOpen={modalInfoOpen} setModalInfoOpen={setModalInfoOpen} cancelButtonInfoRef={cancelButtonInfoRef} />
        </>
    )
}