"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { TypeAnimation } from 'react-type-animation';

import mne1Blur from '../../../public/images/portfolios/mne_1_blur.png'
import mne2Blur from '../../../public/images/portfolios/mne_2_blur.png'
import mne3Blur from '../../../public/images/portfolios/mne_3_blur.png'

import jgolf1Blur from '../../../public/images/portfolios/jgolf_1_blur.png'
import jgolf2Blur from '../../../public/images/portfolios/jgolf_2_blur.png'
import jgolf3Blur from '../../../public/images/portfolios/jgolf_3_blur.png'
import jgolf4Blur from '../../../public/images/portfolios/jgolf_4_blur.png'

export default function Foryouhr() {

    const [isDesktop, setIsDesktop] = useState(true);

    const slides = useRef([
        'mangtas',
        'merdeka',
        'analytic',
        'expert',
        'flutter',
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



    useEffect(() => {
        const changeSlide = setInterval(() => {
            const isLastSlide = currentCertificate === slides.current.length - 1;
            const newIndex = isLastSlide ? 0 : currentCertificate + 1;
            setCurrentCertificate(newIndex);
        }, 4000);
        return () => clearInterval(changeSlide);
    }, [currentCertificate]);

    // TRACK TRAFFICS TO DATABASE (PAGES OPENED) --------------------------
    // const [isIdle, setIsIdle] = useState(false);
    // const clientIpAddress = useRef('')
    // const freshSession = useRef(new Date().toISOString());
    // const IDLE_TIME = 4000;

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const currentMediaQuery = window.matchMedia('(max-width: 639px)');
    //         const currentIsDesktop = !currentMediaQuery.matches;
    //         let formData = new FormData();

    //         const locationResponse = await fetch(`https://ipapi.co/json/`);
    //         if (locationResponse.ok) {
    //             const locationData = await locationResponse.json();
    //             formData.append('user_identity', locationData.ip);
    //             formData.append('used_device', currentIsDesktop ? 'Desktop' : 'Mobile');
    //             formData.append('visited_pages', 'Home|About');

    //             const createIdentity = await fetch('/traffics-update', {
    //                 method: 'POST',
    //                 body: formData
    //             });

    //             if (createIdentity.ok) {
    //                 clientIpAddress.current = locationData.ip;
    //                 return true;
    //             } else {
    //                 console.error('Failed to create identity');
    //                 return false;
    //             }
    //         } else {
    //             console.error('Failed to fetch location information');
    //         }
    //     };
    //     fetchData();
    // }, []);

    // TRACKING SESSION 5 SECONDS LOOPING -----------------------------------
    // useEffect(() => {
    //     const timeoutId = setTimeout(() => {
    //         setIsIdle(!isIdle);
    //     }, IDLE_TIME);

    //     return () => {
    //         clearTimeout(timeoutId); // Cleanup the timer on unmount
    //     };
    // });

    // useEffect(() => {
    //     const currentMediaQuery = window.matchMedia('(max-width: 639px)');
    //     const currentIsDesktop = !currentMediaQuery.matches;
    //     const currentIPAddress = clientIpAddress.current;

    //     const startSession = freshSession.current;
    //     const endSession = new Date().toISOString();
    //     const timeDifferenceInMilliseconds = Date.parse(endSession) - Date.parse(startSession);
    //     const timeDifferenceInSeconds = timeDifferenceInMilliseconds / 1000;

    //     let formData_session = new FormData();
    //     formData_session.append('user_identity', currentIPAddress);
    //     formData_session.append('used_device', currentIsDesktop ? 'Desktop' : 'Mobile');
    //     formData_session.append('total_character_movements', '0');
    //     formData_session.append('session_duration', timeDifferenceInSeconds.toString());

    //     fetch('/traffics-update', {
    //         method: 'POST',
    //         body: formData_session
    //     });
    //     freshSession.current = new Date().toISOString();
    // }, [isIdle]);


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

    const [hoveredLinkGame, setHoveredLinkGame] = useState(false);

    return (
        <>
            <main className='bg-black'>
                <div className="col-span-12">
                    <div className={`flex flex-col h-screen ${scrolledAbout ? 'blur-sm' : 'blur-none'}`} id='main-content' style={{
                        backgroundImage: `url('/images/blur3.svg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative', // Ensure proper stacking of children
                    }}>

                        <div className='dark-overlay'></div>
                        {/* <Particle /> */}
                        <a href="#first-content">
                            <div className='absolute left-[50%] -translate-x-[50%] bottom-10 text-2xl rounded-lg rotate-45 p-2 bg-blood-90 text-white cursor-pointer z-20 shadow-lg'>
                                <div className='absolute -m-2 w-full h-full rounded-lg border-2 border-white animate-ping-mlp-2' />
                                <ChevronRightIcon className="h-9 w-9 rotate-45" aria-hidden="true" />
                            </div>
                        </a>
                        <div className='flex items-center pl-6 pr-6 md:pl-36 md:pr-36 text-4xl sm:text-6xl leading-normal font-medium p-4 text-white text-center z-10 h-full'>
                            <TypeAnimation
                                sequence={[
                                    `Hello, how's it going?`,
                                    500,
                                    `The Promised Desire's here,`,
                                    500,
                                    `You lookin' for a dance partner?`,
                                    700,
                                    `Whether it's in a genre of system, an app, or a website, i would really love that,`,
                                    800,
                                    `Oh, but you don't know how to move your feet?`,
                                    700,
                                    `No worries, I shall lead the dance for you.`,
                                    1000,
                                ]}
                                speed={75}
                                className='shadow select-none'
                                repeat={Infinity}
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-12 pt-32 pb-32 pl-6 pr-6 lg:pl-24 lg:pr-24' id='first-content'>
                        <div className='col-span-12 lg:col-span-7 text-white text-lg sm:text-2xl text-left'>
                            {`For those of you who are able to appreciate code, I'd like to recommend experiencing my works through a `}
                            <Link href={`/game`} className='hover:text-red-600 underline'
                                onMouseEnter={() => setHoveredLinkGame(true)}
                                onMouseLeave={() => setHoveredLinkGame(false)}>
                                {`mini-game here.`}
                            </Link>
                        </div>
                        <div className='hidden lg:col-span-5 justify-center items-center sm:flex px-28'>
                            <div className={`absolute scale-0 ${hoveredLinkGame && 'scale-100'} transition-transform ease-in-out duration-300 grid grid-cols-12 py-4 px-2 w-auto h-auto rounded bg-modal-mlp border-modal-mlp shadow-sm z-50`}
                                id='thumbnail-portfolio=hover'
                                style={{ zIndex: 70 }}
                            >
                                <div className="col-span-12">
                                    <Image
                                        src="/images/game-mode.png"
                                        title={`Blur`}
                                        alt={`Blur`}
                                        height={500}
                                        width={350}
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0Z2T8DwACKgFKDPXbYwAAAABJRU5ErkJggg=="
                                        placeholder="blur"
                                        style={{
                                            objectFit: 'cover',
                                            height: '100%',
                                            width: '100%',
                                            maxWidth: '500px',
                                            maxHeight: '350px'
                                        }}
                                    />
                                    <div className='dark-overlay'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* PORTFOLIO SECTION */}
                    <div className='grid grid-cols-12 pt-0 lg:pt-32 pb-72 pl-6 pr-6 lg:pl-24 lg:pr-24 overflow-hidden lg:overflow-visible'>
                        <div className='col-span-12 lg:col-span-7'>
                            <div className="relative flex justify-center items-center w-full min-h-[690px] lg:min-h-[230px]" >
                                <Image
                                    src={mne1Blur}
                                    className='z-20 absolute hover:z-50 transition-transform ease-in-out duration-300'
                                    quality={100}
                                    placeholder="blur"
                                    alt="MNE"
                                    style={{
                                        objectFit: 'cover',
                                        transform: 'rotate(67deg) translate(-5px, 106px);',
                                        maxWidth: '550px',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(67deg) translate(-5px, 106px) scale(1.15)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(67deg) translate(-5px, 106px) scale(1)'}
                                />
                                <Image
                                    src={mne2Blur}
                                    className='z-10 absolute hover:z-50 transition-transform ease-in-out duration-300'
                                    quality={100}
                                    placeholder="blur"
                                    alt="MNE"
                                    style={{
                                        objectFit: 'cover',
                                        transform: 'rotate(328deg) translate(48px, 80px);',
                                        maxWidth: '550px',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(328deg) translate(48px, 80px) scale(1.15)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(328deg) translate(48px, 80px) scale(1)'}
                                />
                                <Image
                                    src={mne3Blur}
                                    className='z-0 absolute hover:z-50 transition-transform ease-in-out duration-300'
                                    quality={100}
                                    placeholder="blur"
                                    alt="MNE"
                                    style={{
                                        objectFit: 'cover',
                                        transform: 'translate(0px, -150px);',
                                        maxWidth: '550px',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translate(0px, -150px) scale(1.15)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(0px, -150px) scale(1)'}
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-5 grid-cols-12 p-3 grid'>
                            <div className='col-span-12 text-white font-bold text-2xl flex justify-start items-end sm:px-5'>
                                {`SR-APP`}
                            </div>
                            <div className='col-span-12 text-white font-medium text-lg flex justify-start items-start sm:px-5'>
                                <ul className="list-disc text-left">
                                    <li>{`I developed SR-APP, the 1st Corporate Social Responsibility microservices app in Indonesia as the main front end developer.`}</li>
                                    <li>{`Implemented using React and Laravel in a Single Page Application, the app manages to monitor every CSR progress effectively.`}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 pt-0 lg:pt-32 pb-72 pl-6 pr-6 lg:pl-24 lg:pr-24 overflow-hidden lg:overflow-visible'>
                        <div className='col-span-12 lg:col-span-7'>
                            <div className="relative flex justify-center items-center w-full min-h-[1070px] lg:min-h-[345px]" >
                                <Image
                                    src={jgolf1Blur}
                                    className='z-30 absolute hover:z-50 transition-transform ease-in-out duration-300'
                                    quality={100}
                                    placeholder="blur"
                                    alt="MNE"
                                    style={{
                                        objectFit: 'cover',
                                        transform: 'rotate(315deg) translate(-172px, 179px);',
                                        maxWidth: '415px',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(315deg) translate(-172px, 179px) scale(1.15)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(315deg) translate(-172px, 179px) scale(1)'}
                                />
                                <Image
                                    src={jgolf3Blur}
                                    className='z-20 absolute hover:z-50 transition-transform ease-in-out duration-300'
                                    quality={100}
                                    placeholder="blur"
                                    alt="MNE"
                                    style={{
                                        objectFit: 'cover',
                                        transform: 'rotate(0deg) translate(-227px, 118px );',
                                        maxWidth: '415px',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) translate(-227px, 118px) scale(1.15)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg) translate(-227px, 118px) scale(1)'}
                                />
                                <Image
                                    src={jgolf4Blur}
                                    className='z-10 absolute hover:z-50 transition-transform ease-in-out duration-300'
                                    quality={100}
                                    placeholder="blur"
                                    alt="MNE"
                                    style={{
                                        objectFit: 'cover',
                                        transform: 'rotate(349deg) translate(121px, 150px) ;',
                                        maxWidth: '415px',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(349deg) translate(121px, 150px)  scale(1.15)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(349deg) translate(121px, 150px)  scale(1)'}
                                />
                                <Image
                                    src={jgolf2Blur}
                                    className='z-0 absolute hover:z-50 transition-transform ease-in-out duration-300'
                                    quality={100}
                                    placeholder="blur"
                                    alt="MNE"
                                    style={{
                                        objectFit: 'cover',
                                        transform: 'rotate(12deg) translate(-32px, -24px );',
                                        maxWidth: '415px',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(12deg) translate(-32px, -24px ) scale(1.15)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(12deg) translate(-32px, -24px ) scale(1)'}
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-5 grid-cols-12 p-3 grid'>
                            <div className='col-span-12 text-white font-bold text-2xl flex justify-start items-end sm:px-5'>
                                {`J-GOLF`}
                            </div>
                            <div className='col-span-12 text-white font-medium text-lg flex justify-start items-start sm:px-5'>
                                <ul className="list-disc text-left">
                                    <li>{`I designed and developed a Mobile focus golf web application called J-Golf as the 1st Indonesian Golf Management app using Laravel.`}</li>
                                    <li>{`J-Golf primarily manages subscription packages for courses training, golf event creation, scoring, and rankings.`}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* END OF PORTFOLIO SECTION */}
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12  pt-14 pb-14 pl-6 pr-6 text-white font-bold text-3xl sm:text-4xl text-center select-none'>
                            {`Some of My Certifications`}
                        </div>
                    </div>
                    <div className='grid grid-cols-12 pt-8 pb-0 pl-6 pr-6 gap-4 text-center relative'>
                        {isDesktop ? (
                            <div className='col-span-4 flex justify-end items-end'>
                                <div className='relative' id='left-certificate'>
                                    <Image
                                        src={currentCertificate === 0 ? `/images/certificates/${slides.current[slides.current.length - 1]}.png` : `/images/certificates/${slides.current[currentCertificate - 1]}.png`}
                                        className='z-0 select-none'
                                        width={423}
                                        height={300}
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
                                    src={`/images/certificates/${slides.current[currentCertificate]}.png`}
                                    className='z-10 scale-110 select-none'
                                    width={423}
                                    height={300}
                                    alt="Picture of the certificate"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                        {isDesktop ? (
                            <div className='col-span-4 flex justify-start items-end'>
                                <div className='relative' id='right-certificate'>
                                    <Image
                                        src={currentCertificate === slides.current.length - 1 ? `/images/certificates/${slides.current[0]}.png` : `/images/certificates/${slides.current[currentCertificate + 1]}.png`}
                                        className='z-0 select-none'
                                        width={423}
                                        height={300}
                                        alt="Picture of the certificate"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="dark-overlay"></div>
                                </div>
                            </div>
                        ) : null}
                        <div className='absolute top-[55%] -translate-x-0 translate-y-[-55%] left-5 text-2xl rounded-full p-2 hover:scale-105 bg-blood-90 text-black hover:text-white cursor-pointer z-20 shadow-md' onClick={prevSlide}>
                            <ChevronLeftIcon className="h-11 w-11 hover:scale-105" aria-hidden="true" />
                        </div>
                        {/* Right Arrow */}
                        <div className='absolute top-[55%] -translate-x-0 translate-y-[-55%] right-5 text-2xl rounded-full p-2 hover:scale-105 bg-blood-90 text-black hover:text-white cursor-pointer z-20 shadow-md' onClick={nextSlide}>
                            <ChevronRightIcon className="h-11 w-11 hover:scale-105" aria-hidden="true" />
                        </div>
                    </div>
                    <div className='grid grid-cols-12 pt-40 pb-0 pl-6 pr-6 lg:pl-36 lg:pr-36 bg-black gap-5'>
                        <div className='col-span-12 sm:col-span-6 flex justify-center overflow-hidden'>
                            <Player
                                autoplay
                                loop
                                src="/images/lottie/world.json"
                                style={{ height: '400px', width: '400px' }}
                            >
                            </Player>
                        </div>
                        <div className='col-span-12 sm:col-span-6 flex flex-col justify-center text-xl font-medium text-left text-white select-none'>
                            <span className='text-2xl sm:text-3xl font-semibold mb-4'>{`Full-Stack Developer`}</span>
                            {`While lately I've been focusing on Front-End Development, I used to prefer being a Back-End Developer on my starting days.`}
                        </div>
                    </div>
                    <div className='grid grid-cols-12 pt-0 pb-40 pl-6 pr-6 lg:pl-36 lg:pr-36 bg-black gap-5'>
                        <div className='col-span-12 sm:col-span-6 flex flex-col justify-center text-xl font-medium text-left text-white select-none'>
                            <span className='text-2xl sm:text-3xl font-semibold mb-4'>{`7 Years of Study`}</span>
                            {`Graduated as a BASc in Informatics Engineering major. I've studied a broad range of computer disciplines since I was 15 y/o.`}
                        </div>
                        <div className='col-span-12 sm:col-span-6 flex justify-center order-first sm:order-last overflow-hidden'>
                            <Player
                                autoplay
                                loop
                                src="/images/lottie/study-3.json"
                                style={{ height: '400px', width: '400px' }}
                            >
                            </Player>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 pt-32 pb-32 pl-24 pr-24' style={{
                        backgroundImage: `url('/images/blur4.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative', // Ensure proper stacking of children
                    }}>
                        <div className="dark-overlay"></div>
                        <div className='col-span-12 text-white font-bold text-2xl sm:text-4xl text-left pt-5 pb-5 z-10 select-none'>
                            {`Does that mean I'm limited to the listed area?`}
                        </div>
                        <div className='col-span-12 text-white text-xl sm:text-2xl flex justify-center items-center select-none gap-20 pt-5 pb-5 z-10'>
                            {`Defenitely not,`}<br /> {`The Curiosity, Imagination, and Adaptability are still breathing.`}
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
                                <FontAwesomeIcon className='h-8 w-8 sm:w-10 sm:h-10 text-blood hover:text-white cursor-pointer' icon={faGoogle} />
                            </Link>
                            <Link href="https://twitter.com/messages/compose?recipient_id=813202528816930816" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-8 w-8 sm:w-10 sm:h-10 text-blood hover:text-white cursor-pointer' icon={faTwitter} />
                            </Link>
                            <Link href="https://github.com/daffavcd" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-8 w-8 sm:w-10 sm:h-10 text-blood hover:text-white cursor-pointer' icon={faGithub} />
                            </Link>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-4 pt-14 pb-14 pl-6 pr-6 md:pl-32 md:pr-32 text-white'>
                        <div className='col-span-6 text-center sm:text-left text-base'>
                            <Link href={`/game`} className='hover:text-red-600 underline'>
                                {`Try Game Mode`}
                            </Link>
                            <br />{`Experience my works through a mini-game.`}
                        </div>
                        <div className='col-span-12 mb-3 sm:mb-0 sm:col-span-3'>
                            <div className='w-full'>
                                <AudioPlayer
                                    loop={false}
                                    preload={`none`}
                                    customVolumeControls={[]}
                                    showJumpControls={false}
                                    customAdditionalControls={[]}
                                    layout='horizontal'
                                    src="/super_boring.aac"
                                    onPlay={e => console.log("onPlay")}
                                />
                            </div>
                        </div>
                        <div className='col-span-12 mb-3 sm:mb-0 text-center sm:col-span-3 sm:text-right text-lg'>
                            {`© 2024`}<br />{`thePromisedDesires`}
                        </div>
                    </div>
                </div >
            </main>
        </>
    )
}