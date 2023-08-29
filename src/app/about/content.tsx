"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronRightIcon, ChevronLeftIcon, EnvelopeIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link'

export default function Content() {

    const [isDesktop, setIsDesktop] = useState(true);

    const slides = useRef([
        'merdeka',
        'fundamental',
        'tsa',
        'expert',
    ],);

    const [currentCertificate, setCurrentCertificate] = useState(0);

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

    useEffect(() => {
        const changeSlide = setInterval(() => {
            const isLastSlide = currentCertificate === slides.current.length - 1;
            const newIndex = isLastSlide ? 0 : currentCertificate + 1;
            setCurrentCertificate(newIndex);
        }, 4000);
        return () => clearInterval(changeSlide);
    }, [currentCertificate]);




    const prevSlide = () => {
        const isFirstSlide = currentCertificate === 0;
        const newIndex = isFirstSlide ? slides.current.length - 1 : currentCertificate - 1;
        setCurrentCertificate(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentCertificate === slides.current.length - 1;
        const newIndex = isLastSlide ? 0 : currentCertificate + 1;
        setCurrentCertificate(newIndex);
    };

    return (
        <>
            <div className="col-span-12">
                <div className="flex flex-col h-screen" style={{ marginTop: "-95px" }}>
                    <Image
                        alt="Background Image"
                        src="/images/luffy1.jpg"
                        quality={100}
                        fill
                        priority
                        sizes="100vw"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                    <div className="dark-overlay"></div>
                    <div className='flex items-center pl-6 pr-6 sm:pl-24 sm:pr-24 text-3xl sm:text-4xl leading-normal font-medium p-4 text-white text-center z-10 h-full'>
                        <p className='shadow'>Yes, as some of you may already be aware, the theme of this mini portfolio website i took it from Netflix. </p >
                    </div>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12  pt-32 pb-32 pl-6 pr-6 md:pl-80 md:pr-80 text-white text-xl sm:text-2xl text-center'>
                        {`"I'm well aware that this project still very far from the excepted main concept that so called "Prison". I really need to make a time to create the whole assets prison stuff that have in mind." - @daffavcd`}
                    </div>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12  pt-14 pb-14 pl-6 pr-6 text-white font-bold text-3xl sm:text-4xl text-center'>
                        {`Some of My Certifications`}
                    </div>
                </div>
                <div className='grid grid-cols-12 pt-8 pb-28 pl-6 pr-6 gap-4 text-center relative'>
                    {isDesktop ? (
                        <div className='col-span-4 flex justify-end items-end'>
                            <div className='relative' id='left-certificate'
                                draggable="false">
                                <Image
                                    src={currentCertificate === 0 ? `/images/certificates/${slides.current[slides.current.length - 1]}.jpg` : `/images/certificates/${slides.current[currentCertificate - 1]}.jpg`}
                                    className='z-0'
                                    width={472}
                                    height={335}
                                    alt="Picture of the certificate"
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="dark-overlay"></div>
                            </div>
                        </div>
                    ) : null}
                    <div className={isDesktop ? 'col-span-4 flex justify-center items-end' : 'col-span-12 flex justify-center items-end'}>
                        <div className='relative shadow-inner' id='center-certificate'>
                            <Image
                                src={`/images/certificates/${slides.current[currentCertificate]}.jpg`}
                                className='z-10'
                                width={472}
                                height={335}
                                alt="Picture of the certificate"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    {isDesktop ? (
                        <div className='col-span-4 flex justify-start items-end'>
                            <div className='relative' id='right-certificate'>
                                <Image
                                    src={currentCertificate === slides.current.length - 1 ? `/images/certificates/${slides.current[0]}.jpg` : `/images/certificates/${slides.current[currentCertificate + 1]}.jpg`}
                                    className='z-0'
                                    width={472}
                                    height={335}
                                    alt="Picture of the certificate"
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="dark-overlay"></div>
                            </div>
                        </div>
                    ) : null}
                    <div className='absolute top-[40%] -translate-x-0 translate-y-[-40%] left-5 text-2xl rounded-full p-2 bg-blood-90 text-white hover:text-black cursor-pointer z-20 shadow-lg' onClick={prevSlide}>
                        <ChevronLeftIcon className="h-11 w-11" aria-hidden="true" />
                    </div>
                    {/* Right Arrow */}
                    <div className='absolute top-[40%] -translate-x-0 translate-y-[-40%] right-5 text-2xl rounded-full p-2 bg-blood-90 text-white hover:text-black cursor-pointer z-20 shadow-lg' onClick={nextSlide}>
                        <ChevronRightIcon className="h-11 w-11" aria-hidden="true" />
                    </div>
                </div>
                <div className='grid grid-cols-12 pt-0 pb-0 pl-6 pr-6 sm:pl-36 sm:pr-36 bg-black gap-5'>
                    <div className='col-span-12 sm:col-span-6 flex justify-center overflow-hidden'>
                        <Player
                            autoplay
                            loop
                            src="/images/lottie/work-red.json"
                            style={{ height: '400px', width: '400px' }}
                        >
                        </Player>
                    </div>
                    <div className='col-span-12 sm:col-span-6 flex flex-col justify-center text-xl font-medium text-left text-white'>
                        <span className='text-2xl font-semibold mb-4'>{`Full-Stack Developer`}</span>
                        {`While lately I've been focusing on Front-End Development, I used to prefer being a Back-End Developer when i just started the journey of software development.`}
                    </div>
                </div>
                <div className='grid grid-cols-12 pt-0 pb-28 pl-6 pr-6 sm:pl-36 sm:pr-36 bg-black gap-5'>
                    <div className='col-span-12 sm:col-span-6 flex flex-col justify-center text-xl font-medium text-left text-white'>
                        <span className='text-2xl font-semibold mb-4'>{`7 Years of Study`}</span>
                        {`Recently, I just graduated as a Bachelor of Applied Science in Informatics Engineering major. I've studied a broad range of computer disciplines since I was in vocational high school.`}
                    </div>
                    <div className='col-span-12 sm:col-span-6 flex justify-center order-first sm:order-last overflow-hidden'>
                        <Player
                            autoplay
                            loop
                            src="/images/lottie/red-education.json"
                            style={{ height: '400px', width: '400px' }}
                        >
                        </Player>
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
                    <div className='col-span-12 text-white font-bold text-3xl sm:text-4xl text-center pt-5 pb-5 z-10'>
                        {`Technologies Used`}
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
                        <Link href="https://mail.google.com/mail/?fs=1&to=daffavcd@gmail.com&tf=cm" target="_blank" rel="noopener noreferrer">
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
                    <div className='col-span-6 hidden sm:block text-left text-base'>
                        I created this project out of my boredom when I had nothing to do, while I was trying to find a job after my graduation. I trully appreciate it if you have come this far. Just sent me any dms, I would really love to hear it from you.
                    </div>
                    <div className='col-span-12 text-center sm:col-span-6 sm:text-right text-lg'>
                        {`© 2023`}<br />{`thePromisedDesire`}
                    </div>
                </div>
            </div >
        </>
    )
}