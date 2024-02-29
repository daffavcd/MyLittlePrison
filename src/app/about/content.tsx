"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
// import Particle from '../components/parts/particle';

export default function Content() {

    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Jakarta'
    });
    const formattedTime = formatter.format(now).replace(' ', ', ');

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

    const [scrolledAbout, setScrolledAbout] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolledAbout(true);
            } else {
                setScrolledAbout(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="col-span-12">
                <div className={`flex flex-col h-screen ${scrolledAbout ? 'blur-sm' : 'blur-none'}`} id='main-content' style={{ marginTop: "-95px" }}>
                    <Image
                        alt="Background Image"
                        src="/images/ruffy.jpg"
                        quality={75}
                        fill
                        priority
                        sizes="100vw"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                    <div className='dark-overlay'></div>
                    {/* <Particle /> */}
                    <a href="#first-content">
                        <div className='absolute left-[50%] -translate-x-[50%] bottom-10 text-2xl rounded-lg rotate-45 p-2 bg-blood-90 text-white cursor-pointer z-20 shadow-lg'>
                            <div className='absolute -m-2 w-full h-full rounded-lg border-2 border-white animate-ping-mlp-2' />
                            <ChevronRightIcon className="h-9 w-9 rotate-45" aria-hidden="true" />
                        </div>
                    </a>
                    <div className='flex items-center pl-6 pr-6 md:pl-36 md:pr-36 text-3xl sm:text-4xl leading-normal font-normal p-4 text-white text-center z-10 h-full'>
                        <p className='shadow select-none'>I try to create the portfolio showcase in a game-like experience, hope you enjoy it. </p >
                    </div>
                </div>
                <div className='grid grid-cols-12' id='first-content'>
                    <div className='col-span-12  pt-32 pb-32 pl-6 pr-6 lg:pl-80 lg:pr-80 text-white text-lg sm:text-xl text-center'>
                        {`"I'm well aware that this project still very far from the excepted main concept that so called "Prison". I really need to make time to create the whole assets prison stuff, and taking a consideration because it would likely be a heavy website if i put all those images that i have in mind rendered." - @daffavcd`}
                    </div>
                </div>
                <div className='grid grid-cols-12 pt-32 pb-32 pl-6 pr-6' style={{
                    backgroundImage: `url('/images/blur2.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative', // Ensure proper stacking of children
                }}>
                    <div className="dark-overlay"></div>
                    <div className='col-span-12 text-white font-semibold text-3xl sm:text-4xl text-center pt-5 pb-5 z-10 select-none'>
                        {`Code Environment`}
                    </div>
                    <div className='col-span-12 flex justify-center items-center gap-20 pt-5 pb-5 z-10'>
                        <Image
                            src={`/images/next-js.svg`}
                            title="Next.Js"
                            alt="Next.Js"
                            height={125}
                            width={125}
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                        <Image
                            src={`/images/tailwind.svg`}
                            title="Tailwind"
                            alt="Tailwind"
                            height={125}
                            width={125}
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </div>
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
                        <Link href="mailto:daffavcd@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='h-8 w-8 sm:w-10 sm:h-10 text-blood hover:text-white cursor-pointer' icon={faGoogle} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/daffavcd/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='h-8 w-8 sm:w-10 sm:h-10 text-blood hover:text-white cursor-pointer' icon={faLinkedin} />
                        </Link>
                        <Link href="https://github.com/daffavcd" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='h-8 w-8 sm:w-10 sm:h-10 text-blood hover:text-white cursor-pointer' icon={faGithub} />
                        </Link>
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-4 pt-14 pb-14 pl-6 pr-6 md:pl-32 md:pr-32 text-white'>
                    <div className='col-span-6 hidden sm:block text-left text-base'>
                        I created this project out of my boredom when I had nothing to do, while I was trying to find a job after my graduation. I trully appreciate it if you have come this far. Just sent me any dms, I would really love to hear it from you.
                    </div>
                    <div className='col-span-12 mb-3 sm:mb-0 text-center sm:col-span-3 sm:text-right text-lg'>
                        {`GMT+7`}<br />
                        {formattedTime}
                    </div>
                    <div className='col-span-12 mb-3 sm:mb-0 text-center sm:col-span-3 sm:text-right text-lg'>
                        {`© 2024`}<br />{`thePromisedDesires`}
                    </div>
                </div>
            </div >
        </>
    )
}