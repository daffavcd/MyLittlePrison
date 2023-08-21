"use client";

import Image from 'next/image'
import { useState, useEffect, useRef, } from 'react';
import { ExclamationCircleIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import ModalInfo from './modalInfo';


export default function Header() {

    const cancelButtonInfoRef = useRef(null)
    const [modalInfoOpen, setModalInfoOpen] = useState(false)

    return (
        <>
            <div className="col-span-10 z-10">
                <Image
                    src="/images/logo.svg"
                    width={250}
                    height={50}
                    alt="Picture of the author"
                    style={{ marginTop: "5px" }}
                />
            </div >
            <div className="col-span-2 z-10">
                <div className='rounded-2xl grid gap-2 p-2 bg-black/60' style={{ width: "fit-content" }}>
                    <ExclamationCircleIcon className="h-12 w-12 animate-pulse text-blood hover:text-white cursor-pointer pointer-events-auto" tabIndex={1} aria-hidden="true"
                        onClick={() => setModalInfoOpen(true)}
                    />
                    {/* <UserCircleIcon className="h-12 w-12 text-blood hover:text-white cursor-pointer" aria-hidden="true" /> */}
                </div>
            </div >
            <ModalInfo modalInfoOpen={modalInfoOpen} setModalInfoOpen={setModalInfoOpen} cancelButtonInfoRef={cancelButtonInfoRef} />
        </>
    )
}