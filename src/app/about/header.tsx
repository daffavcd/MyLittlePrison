"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'

export default function HeaderAbout() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`pt-7 pr-10 pb-5 pl-10 sticky top-0 z-50 ${scrolled ? 'bg-black shadow' : ''}`} style={{ transition: "background-color 0.3s ease"}}>
                <div className='grid grid-cols-12'>
                    <div className="col-span-9 z-10">
                        <Link href={`/`}>
                            <Image
                                src="/images/logo.svg"
                                width={250}
                                height={50}
                                alt="Picture of the author"
                            />
                        </Link>
                    </div >
                    <div className="col-span-3 z-10 text-right">
                        <div className='rounded-xl inline-flex gap-2 p-1 bg-blood shadow-2xl w-fit max-h-11'>
                            <Link href={`/`}>
                                <ArrowUturnLeftIcon className="h-9 w-9 text-black hover:text-white cursor-pointer" aria-hidden="true" />
                            </Link>
                        </div>
                    </div >
                </div>
            </div>
        </>
    )
}