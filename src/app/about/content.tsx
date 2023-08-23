"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronRightIcon, ChevronLeftIcon, EnvelopeIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'

export default function Content() {

    const [isDesktop, setIsDesktop] = useState(true);

    // GET WINDOW RESOLUTION
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1279px)');
        setIsDesktop(!mediaQuery.matches);
        const handleMediaQueryChange = (e: MediaQueryListEvent) => {
            setIsDesktop(!e.matches);
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

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
                        <p className='shadow'>Yes, as some of you may already be aware, the theme of this mini portfolio website i took it from Netflix. </p >
                    </div>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12  pt-32 pb-32 pl-6 pr-6 md:pl-80 md:pr-80 text-white text-2xl text-center'>
                        {`"I'm well aware that this project still very far from the excepted main concept that so called "Prison". I really need to make a time to create the whole assets prison stuff that have in mind." - @daffavcd`}
                    </div>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12  pt-14 pb-14 pl-6 pr-6 text-white font-semibold text-4xl text-center'>
                        {`Some of my certifications`}
                    </div>
                </div>
                <div className='grid grid-cols-12 pt-8 pb-8 pl-6 pr-6 gap-4 text-center relative'>
                    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-blood-90 text-white hover:text-black cursor-pointer z-20 shadow-lg'>
                        <ChevronLeftIcon className="h-11 w-11" aria-hidden="true" />
                    </div>
                    {/* Right Arrow */}
                    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-blood-90 text-white hover:text-black cursor-pointer z-20 shadow-lg'>
                        <ChevronRightIcon className="h-11 w-11" aria-hidden="true" />
                    </div>
                    {isDesktop ? (
                        <div className='col-span-4'>
                            <div className='relative' id='left-certificate'>
                                <Image
                                    src="/images/certificates/expert.jpg"
                                    className='z-0'
                                    width={580}
                                    height={50}
                                    alt="Picture of the author"
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="dark-overlay"></div>
                            </div>
                        </div>
                    ) : null}
                    <div className={isDesktop ? 'col-span-4' : 'col-span-12 text-center'}>
                        <div className='certificate-container inline-flex' id='center-certificate'>
                            <Image
                                src="/images/certificates/merdeka.jpg"
                                className='z-10'
                                width={580}
                                height={50}
                                alt="Picture of the author"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    {isDesktop ? (
                        <div className='col-span-4'>
                            <div className='relative' id='right-certificate'>
                                <Image
                                    src="/images/certificates/fundamental.jpg"
                                    className='z-0'
                                    width={580}
                                    height={50}
                                    alt="Picture of the author"
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="dark-overlay"></div>
                            </div>
                        </div>
                    ) : null}
                </div>
                <div className='grid grid-cols-12 pt-14 pb-14 pl-6 pr-6 md:pl-32 md:pr-32 text-white'>
                    <div className='col-span-10 text-left'>
                        <Image
                            src="/images/logo-full.svg"
                            width={190}
                            height={80}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='col-span-2 flex justify-end items-center gap-4'>
                        <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=daffavcd@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='h-10 w-h-10 text-blood hover:text-white cursor-pointer' icon={faGoogle} />
                        </Link>

                        <Link href="https://twitter.com/messages/compose?recipient_id=813202528816930816" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='h-10 w-h-10 text-blood hover:text-white cursor-pointer' icon={faTwitter} />
                        </Link>
                        <Link href="https://github.com/daffavcd" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='h-10 w-h-10 text-blood hover:text-white cursor-pointer' icon={faGithub} />
                        </Link>
                    </div>
                </div>
                <div className='grid grid-cols-12 pt-14 pb-14 pl-6 pr-6 md:pl-32 md:pr-32 text-white'>
                    <div className='col-span-6 text-left'>

                    </div>
                    <div className='col-span-6 text-right text-lg'>
                        {`© 2023 thePromisedDesire`}
                    </div>
                </div>
            </div >
        </>
    )
}