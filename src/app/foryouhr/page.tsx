"use client";
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/20/solid';

import TextTransition, { presets } from 'react-text-transition';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileInvoiceDollar,
    faGraduationCap,
    faPuzzlePiece,
    faCameraRetro,
    faCertificate,
    faChildReaching,
    faLaptopCode,
    faShip,
    faMicrochip,
    faChartLine,
    faCommentsDollar,
    faAward,
    faHandSpock,
    faFaceAngry,
    faCode,
    faLightbulb,
    faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
library.add(
    faFileInvoiceDollar,
    faGraduationCap,
    faPuzzlePiece,
    faCameraRetro,
    faCertificate,
    faChildReaching,
    faLaptopCode,
    faShip,
    faMicrochip,
    faChartLine,
    faCommentsDollar,
    faAward,
    faHandSpock,
    faFaceAngry,
    faCode,
    faLightbulb,
    faArrowUpRightFromSquare,
)

import { Player } from '@lottiefiles/react-lottie-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { TypeAnimation } from 'react-type-animation';
import { motion, Variants } from "framer-motion";
import Slider from "react-slick";
import { poster } from '../../data/posters';

import mne1Blur from '../../../public/images/portfolios/mne_1_blur.png'
import mne2Blur from '../../../public/images/portfolios/mne_2_blur.png'
import mne3Blur from '../../../public/images/portfolios/mne_3_blur.png'
import jgolf1Blur from '../../../public/images/portfolios/jgolf_1_blur.png'
import jgolf2Blur from '../../../public/images/portfolios/jgolf_2_blur.png'
import jgolf3Blur from '../../../public/images/portfolios/jgolf_3_blur.png'
import jgolf4Blur from '../../../public/images/portfolios/jgolf_4_blur.png'
import dachess1Blur from '../../../public/images/portfolios/dachess_1_blur.png'
import dachess2Blur from '../../../public/images/portfolios/dachess_2_blur.png'
import dachess3Blur from '../../../public/images/portfolios/dachess_3_blur.png'
import dachess4Blur from '../../../public/images/portfolios/dachess_4_blur.png'

import mangtas from '../../../public/images/certificates/mangtas.png'
import merdeka from '../../../public/images/certificates/merdeka.png'
import analytic from '../../../public/images/certificates/analytic.png'
import expert from '../../../public/images/certificates/expert.png'
import flutter from '../../../public/images/certificates/flutter.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Foryouhr() {

    const [isDesktop, setIsDesktop] = useState(true);

    // GET WINDOW RESOLUTION
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1279px)');
        setIsDesktop(!mediaQuery.matches);
        // IF IN MOBILE VIEW MOVE THE CONTAINER A BIT TO THE CENTER
        if (mediaQuery.matches) {
            setTranslationPosterContainer({
                translateX: -100,
                translateY: -130
            });
        }

        const handleMediaQueryChange = (e: MediaQueryListEvent) => {
            setIsDesktop(!e.matches);

            if (e.matches) {
                setTranslationPosterContainer({
                    translateX: -100,
                    translateY: -130
                });
            }
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


    const [hoveredLinkGame, setHoveredLinkGame] = useState(false);

    const textLeftVariants: Variants = {
        offscreen: {
            x: -1000
        },
        onscreen: {
            x: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    // POSTER FUNCTIONALITIES

    let posterIteration = 0;

    const [currentActivePoster, setCurrentActivePoster] = useState(16);

    const availablePosters = [
        9, 10, 11,
        15, 16, 17,
        21, 22, 23
    ];

    const posterOrder = [9, 15, 21, 10, 16, 22, 11, 17, 23];

    const translationValueForOneMove = { x: 332, y: 526 };

    const [translationPosterContainer, setTranslationPosterContainer] = useState({
        translateX: 0,
        translateY: 0
    });

    const [activePoster, setActivePoster] = useState(16);

    const movePosterContainer = (headingPoster: number) => {
        let translationXValue = translationValueForOneMove.x;
        let translationYValue = translationValueForOneMove.y;
        // CHANGE VALUE IF IN MOBILE VIEW
        if (!isDesktop) {
            translationXValue = 177;
            translationYValue = 288;
        }

        let translationX = translationPosterContainer.translateX;
        let translationY = translationPosterContainer.translateY;

        const postersPerRow = 6;
        const currentRow = Math.ceil(currentActivePoster / postersPerRow);
        const currentColumn = currentActivePoster % postersPerRow || postersPerRow;
        const headingRow = Math.ceil(headingPoster / postersPerRow);
        const headingColumn = headingPoster % postersPerRow || postersPerRow;

        const rowDifference = headingRow - currentRow;
        const columnDifference = headingColumn - currentColumn;

        translationX = translationX - (columnDifference * translationXValue);
        translationY = translationY - (rowDifference * translationYValue);

        setTranslationPosterContainer({
            ...translationPosterContainer,
            translateX: translationX,
            translateY: translationY
        })

        setActivePoster(headingPoster);

        setCurrentActivePoster(headingPoster);
    }

    const nextPoster = () => {
        const currentIndex = posterOrder.indexOf(currentActivePoster);
        const nextIndex = (currentIndex + 1) % posterOrder.length;
        movePosterContainer(posterOrder[nextIndex]);
    };

    const prevPoster = () => {
        const currentIndex = posterOrder.indexOf(currentActivePoster);
        const nextIndex = (currentIndex - 1 + posterOrder.length) % posterOrder.length;
        movePosterContainer(posterOrder[nextIndex]);
    };

    // CAROUSEL FUNCTIONALLITY
    const NextArrowCarousel = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={`absolute top-[35%] -mr-2 lg:-mr-6 right-0 scale-100 transition-transform ease-in-out duration-150 cursor-pointer text-poster hover:scale-110 bg-btn-certificates p-3 z-20 max-w-lg shadow-black`}
                style={{ ...style }}
                onClick={onClick}
            >
                <ChevronRightIcon className="h-8 w-8 lg:h-11 lg:w-11" aria-hidden="true" />
            </div>
        );
    }

    const LeftArrowCarousel = (props: any) => {
        const { className, style, onClick } = props;
        return (

            <div
                className={`absolute top-[35%] -ml-2 lg:-ml-6 left-0 scale-100 transition-transform ease-in-out duration-150 cursor-pointer text-poster hover:scale-110 bg-btn-certificates p-3 z-20 max-w-lg shadow-black`}
                style={{ ...style }}
                onClick={onClick}
            >
                <ChevronLeftIcon className="h-8 w-8 lg:h-11 lg:w-11" aria-hidden="true" />
            </div>
        );
    }

    const carouselSettings = {
        className: "center",
        centerMode: true,
        dots: false,
        speed: 500,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrowCarousel />,
        prevArrow: <LeftArrowCarousel />,
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            },
        ]
    };

    const substractWords = (text: string) => {
        let maxCharacter = 116;
        if (!isDesktop) maxCharacter = 52;

        if (text.length <= maxCharacter) {
            return text;
        } else {
            return text.substring(0, maxCharacter) + "...";
        }
    }

    const TEXTS = ['COLORFULL', 'BRILLIANT', 'CONTRARIAN'];

    const [index, setIndex] = useState(0);

    const [isFullyRendered, setIsFullyRendered] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3100, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    useEffect(() => {
        setIsFullyRendered(true);
    }, []);

    const updatePolygonStyles = useCallback((invertedX: number, invertedY: number) => {
        const mouseXPercentage = (invertedX / window.innerWidth) * 100;
        const mouseYPercentage = (invertedY / window.innerHeight) * 100;

        let shapeDot = {
            polygon_1_x: ["--polygon-1-x", 59],
            polygon_1_y: ["--polygon-1-y", 21],
            polygon_2_x: ["--polygon-2-x", 46],
            polygon_2_y: ["--polygon-2-y", 47],
            polygon_3_x: ["--polygon-3-x", 36],
            polygon_3_y: ["--polygon-3-y", 82],
            polygon_4_x: ["--polygon-4-x", 48],
            polygon_4_y: ["--polygon-4-y", 58],
            polygon_5_x: ["--polygon-5-x", 51],
            polygon_5_y: ["--polygon-5-y", 46],
            polygon_6_x: ["--polygon-6-x", 55],
            polygon_6_y: ["--polygon-6-y", 34],
        };

        if (!isDesktop) {
            shapeDot = {
                polygon_1_x: ["--polygon-1-x-mobile", 60],
                polygon_1_y: ["--polygon-1-y-mobile", 23],
                polygon_2_x: ["--polygon-2-x-mobile", 47],
                polygon_2_y: ["--polygon-2-y-mobile", 42],
                polygon_3_x: ["--polygon-3-x-mobile", 39],
                polygon_3_y: ["--polygon-3-y-mobile", 70],
                polygon_4_x: ["--polygon-4-x-mobile", 52],
                polygon_4_y: ["--polygon-4-y-mobile", 53],
                polygon_5_x: ["--polygon-5-x-mobile", 55],
                polygon_5_y: ["--polygon-5-y-mobile", 41],
                polygon_6_x: ["--polygon-6-x-mobile", 59],
                polygon_6_y: ["--polygon-6-y-mobile", 29],
            };
        }

        const clampPercentage = (percentage: number) => {
            if (percentage >= 85) return 3;
            if (percentage >= 75) return 2;
            if (percentage >= 65) return 1;
            if (percentage <= 15) return -3;
            if (percentage <= 25) return -2;
            if (percentage <= 35) return -1;
            return 0;
        };

        const clampPercentageMiddle = (percentage: number) => {
            if (percentage >= 85) return 6;
            if (percentage >= 75) return 4;
            if (percentage >= 65) return 2;
            if (percentage <= 15) return -6;
            if (percentage <= 25) return -4;
            if (percentage <= 35) return -2;
            return 0;
        };

        const adjustPercentage = (currentValue: number, percentage: number) => {
            const adjustment = clampPercentage(percentage);
            return currentValue + adjustment;
        };

        const adjustPercentageMiddle = (currentValue: number, percentage: number) => {
            const adjustment = clampPercentageMiddle(percentage);
            return currentValue + adjustment;
        };


        document.documentElement.style.setProperty(`${shapeDot.polygon_1_x[0]}`, `${shapeDot.polygon_1_x[1]}%`);
        document.documentElement.style.setProperty(`${shapeDot.polygon_1_y[0]}`, `${adjustPercentage(shapeDot.polygon_1_y[1] as number, mouseYPercentage)}%`);

        if (mouseXPercentage < 50) {
            document.documentElement.style.setProperty(`${shapeDot.polygon_2_x[0]}`, `${adjustPercentageMiddle(shapeDot.polygon_2_x[1] as number, mouseXPercentage)}%`);
        } else {
            document.documentElement.style.setProperty(`${shapeDot.polygon_2_x[0]}`, `${shapeDot.polygon_2_x[1]}%`);
        }

        document.documentElement.style.setProperty(`${shapeDot.polygon_2_y[0]}`, `${adjustPercentage(shapeDot.polygon_2_y[1] as number, mouseYPercentage)}%`);

        document.documentElement.style.setProperty(`${shapeDot.polygon_3_x[0]}`, `${shapeDot.polygon_3_x[1]}%`);
        document.documentElement.style.setProperty(`${shapeDot.polygon_3_y[0]}`, `${adjustPercentage(shapeDot.polygon_3_y[1] as number, mouseYPercentage)}%`);


        if (mouseXPercentage > 50) {
            document.documentElement.style.setProperty(`${shapeDot.polygon_4_x[0]}`, `${adjustPercentageMiddle(shapeDot.polygon_4_x[1] as number, mouseXPercentage)}%`);
            document.documentElement.style.setProperty(`${shapeDot.polygon_5_x[0]}`, `${adjustPercentageMiddle(shapeDot.polygon_5_x[1] as number, mouseXPercentage)}%`);
            document.documentElement.style.setProperty(`${shapeDot.polygon_6_x[0]}`, `${adjustPercentage(shapeDot.polygon_6_x[1] as number, mouseXPercentage)}%`);
        } else {
            document.documentElement.style.setProperty(`${shapeDot.polygon_4_x[0]}`, `${shapeDot.polygon_4_x[1]}%`);
            document.documentElement.style.setProperty(`${shapeDot.polygon_5_x[0]}`, `${shapeDot.polygon_5_x[1]}%`);
            document.documentElement.style.setProperty(`${shapeDot.polygon_6_x[0]}`, `${shapeDot.polygon_6_x[1]}%`);
        }

        document.documentElement.style.setProperty(`${shapeDot.polygon_4_y[0]}`, `${adjustPercentage(shapeDot.polygon_4_y[1] as number, mouseYPercentage)}%`);

        document.documentElement.style.setProperty(`${shapeDot.polygon_5_y[0]}`, `${adjustPercentage(shapeDot.polygon_5_y[1] as number, mouseYPercentage)}%`);

        document.documentElement.style.setProperty(`${shapeDot.polygon_6_y[0]}`, `${adjustPercentage(shapeDot.polygon_6_y[1] as number, mouseYPercentage)}%`);
    }, [isDesktop]);

    // MOUSE TRACKER FOR MASK SVG

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const mainContent = document.getElementById('main-content');
            if (mainContent && mainContent.contains(event.target as Node)) {
                const invertedX = window.innerWidth - event.clientX;
                const invertedY = window.innerHeight - event.clientY;
                updatePolygonStyles(invertedX, invertedY);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [updatePolygonStyles]);

    useEffect(() => {
        const simulateMouseMove = () => {
            const clientX = Math.random() * window.innerWidth;
            const clientY = Math.random() * window.innerHeight;

            updatePolygonStyles(clientX, clientY);
        };

        let mobileMouseMoveInterval: NodeJS.Timeout;
        if (!isDesktop) {
            mobileMouseMoveInterval = setInterval(simulateMouseMove, 1700);
        }

        return () => {
            clearInterval(mobileMouseMoveInterval);
        };
    }, [updatePolygonStyles, isDesktop]);

    return (
        <>
            <main className='bg-black overflow-x-hidden'>
                <div className="col-span-12">
                    <div className={`flex flex-col relative h-screen ${scrolledAbout ? 'blur-sm' : 'blur-none'}`} id='main-content'>
                        <Image
                            src="/images/blur-home-2-compress.jpg"
                            title={`Background Landing`}
                            alt={`Background Landing`}
                            fill
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                            className='z-0'
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0Z2T8DwACKgFKDPXbYwAAAABJRU5ErkJggg=="
                            placeholder="blur"
                        />
                        <div className='dark-overlay' />
                        <a href="#first-content" className='absolute left-[50%] -translate-x-[50%] bottom-10 z-50'>
                            <div className='text-2xl rounded-lg rotate-45 p-2 bg-blood-90 text-white cursor-pointer z-20 shadow-lg'>
                                <div className='absolute -m-2 w-full h-full rounded-lg border-2 border-white animate-ping-mlp-2' />
                                <ChevronRightIcon className="h-9 w-9 rotate-45" aria-hidden="true" />
                            </div>
                        </a>
                        <div className='absolute left-7 top-[50%] hidden md:block' style={{ transform: "rotate(270deg)" }}>
                            <p className='text-sm lg:text-lg font-semibold select-none' style={{ color: "#BA9C99" }}>IDN | GMT+7</p>
                        </div>
                        <div className='absolute z-50 flex justify-cemter items-center gap-1 md:gap-8 left-[50%] -translate-x-[50%] top-16'>
                            <a className='py-1 px-3 transition-colors ease-in-out duration-300 rounded-full hover:bg-slate-50 hover:text-black font-medium text-white ' href="#first-content">
                                <p className='text-lg md:text-lg select-none whitespace-nowrap'>PROJECTS <sup>15</sup></p>
                            </a>
                            <a className='py-1 px-3 transition-colors ease-in-out duration-300 rounded-full hover:bg-slate-50 hover:text-black font-medium text-white' href="#poster-content">
                                <p className='text-lg md:text-lg select-none'>ABOUT</p>
                            </a>
                        </div>
                        <div className='absolute flex items-center justify-center w-full h-full'>
                            <div className='absolute grid grid-cols-12 transition-all ease-in-out duration-300 gap-1 lg:gap-2 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] text-5xl md:text-6xl xl:text-8xl font-semibold xl:font-medium select-none text-white'>
                                <div className='col-span-12 flex items-center justify-center'>
                                    <p className=''>ULTRA-</p>
                                </div>
                                <div className='col-span-12 flex items-center justify-center'>
                                    <p className={` absolute ${isFullyRendered ? 'hidden' : ''}`}>COLORFULL</p>
                                    <TextTransition className='flex items-center justify-center ' springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition>
                                </div>
                                <div className='col-span-12 md:col-span-6 flex items-center justify-center md:justify-end'>
                                    <p className=''>DEV</p>
                                </div>
                                <div className='col-span-6 hidden md:flex items-center justify-start text-xs lg:text-base xl:text-xl'>
                                    <TypeAnimation
                                        sequence={[
                                            `Hi, how are you doing?`,
                                            500,
                                            `Are you looking for a dance partner?`,
                                            700,
                                            `Any dance moves, I'd be down for it;`,
                                            1000,
                                            `Well, don't worry if you didn't get it,`,
                                            1000,
                                            `I shall lead the dance for you.`,
                                            1000,
                                        ]}
                                        speed={85}
                                        className='select-none'
                                        repeat={Infinity}
                                    />
                                </div>
                                <div className='col-span-12 -mx-6 mt-5 flex md:hidden text-center items-center justify-center text-lg font-light'>
                                    {`Any dance moves, I'd be down for it`}
                                </div>
                            </div>
                        </div>
                        <div className='absolute flex items-center justify-center w-full h-full layer-mask' >
                            <div className='absolute grid grid-cols-12 transition-all ease-in-out duration-300 gap-1 lg:gap-2 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] text-5xl md:text-6xl xl:text-8xl font-semibold xl:font-medium select-none' style={{ color: "#a00000" }}>
                                <div className='col-span-12 flex items-center justify-center'>
                                    <p className=''>ULTRA-</p>
                                </div>
                                <div className='col-span-12 flex items-center justify-center'>
                                    <p className={` absolute ${isFullyRendered ? 'hidden' : ''}`}>COLORFULL</p>
                                    <TextTransition className='flex items-center justify-center ' springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition>
                                </div>
                                <div className='col-span-12 md:col-span-6 flex items-center justify-center md:justify-end'>
                                    <p className=''>DEV</p>
                                </div>
                                <div className='col-span-6 hidden md:flex items-center justify-start text-xs lg:text-base xl:text-xl'>
                                    <p>^_^</p>
                                </div>
                                <div className='col-span-12 -mx-6 mt-5 flex md:hidden text-center items-center justify-center text-lg font-light'>
                                    {`Any dance moves, I'd be down for it`}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex poster-shadow-banner relative z-10' />
                    {/* PORTFOLIO SECTION */}
                    <div className='grid grid-cols-12 pt-24 lg:pt-32 pb-14 lg:pb-24 pl-6 pr-6 lg:pl-24 lg:pr-24 overflow-hidden lg:overflow-visible'>
                        <div className='col-span-12 lg:col-span-7'>
                            <div className="relative flex justify-center items-center w-full min-h-[565px] lg:min-h-[580px]" >
                                <Image
                                    src={dachess4Blur}
                                    className='z-[31] absolute hover:z-50 transition-transform ease-in-out duration-300'
                                    placeholder="blur"
                                    id='first-content'
                                    alt="Picture of DaChess"
                                    style={{
                                        objectFit: 'cover',
                                        transform: 'rotate(-27deg) translate(-30px, -45px);',
                                        maxWidth: '800px',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(-27deg) translate(-30px, -45px) scale(1.15)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-27deg) translate(-30px, -45px) scale(1)'}
                                />
                                <Image
                                    src={dachess3Blur}
                                    className='z-[32]  absolute hover:z-50 transition-transform ease-in-out duration-300'
                                    placeholder="blur"
                                    alt="Picture of DaChess"
                                    style={{
                                        objectFit: 'cover',
                                        transform: 'rotate(0deg) translate(0px, -65px);',
                                        maxWidth: '350px',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) translate(0px, -65px)   scale(1.15)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg) translate(0px, -65px)  scale(1)'}
                                />
                                <Image
                                    src={dachess2Blur}
                                    className='z-[33]  absolute hover:z-50 transition-transform ease-in-out duration-300'
                                    placeholder="blur"
                                    alt="Picture of DaChess"
                                    style={{
                                        objectFit: 'cover',
                                        transform: 'rotate(28deg) translate(130px, -70px);',
                                        maxWidth: '350px',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(28deg) translate(130px, -70px)   scale(1.15)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(28deg) translate(130px, -70px)  scale(1)'}
                                />
                                <Image
                                    src={dachess1Blur}
                                    className='z-[34]  absolute hover:z-50 transition-transform ease-in-out duration-300'
                                    placeholder="blur"
                                    alt="Picture of DaChess"
                                    style={{
                                        objectFit: 'cover',
                                        transform: 'rotate(-28deg) translate(-130px, -70px);',
                                        maxWidth: '350px',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(-28deg) translate(-130px, -70px)   scale(1.15)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-28deg) translate(-130px, -70px)  scale(1)'}
                                />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-5 grid-cols-12 p-3 grid'>
                            <div className='col-span-12 text-white font-semibold text-2xl flex justify-start items-end sm:px-5'>
                                <span className='flex justify-start items-center'>
                                    {`DaChess`}
                                    <span className='font-extralight text-sm flex justify-start items-center ml-3'>
                                        <span className="relative flex h-[9px] w-[9px] mr-1">
                                            <span className="animate-ping-development absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-[9px] w-[9px] bg-amber-500"></span>
                                        </span>
                                        {`Under Development`}
                                    </span>
                                </span>
                            </div>
                            <div className='col-span-12 text-white font-normal text-xl flex justify-start items-start sm:px-5 flex-col gap-5'>
                                <ul className="list-disc text-left">
                                    <li className='mt-2'>{`Play chess online instantly with your friends, no sign in required.`}</li>
                                    <li className='mt-2'>{`Evaluate yourself using the most powerful chess engine, Stockfish, for free.`}</li>
                                </ul>
                                <a href="https://dachess.vercel.app" target="_blank" rel="noopener noreferrer" className='z-50'>
                                    <div className='rounded-xl font-medium inline-flex min-w-[150px] items-center justify-center gap-2 py-2 px-4 bg-blood drop-shadow-2xl w-fit text-black hover:text-white hover:scale-105 transition-transform ease-in-out duration-150'>
                                        Live site
                                        <FontAwesomeIcon className='cursor-pointer h-5' icon={faArrowUpRightFromSquare} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 pt-0 lg:pt-56 pb-0 lg:pb-72 pl-6 pr-6 lg:pl-24 lg:pr-24 overflow-hidden lg:overflow-visible'>
                        <div className='col-span-12 lg:col-span-7'>
                            <div className="relative flex justify-center items-center w-full min-h-[690px] lg:min-h-[230px]" >
                                <Image
                                    src={mne1Blur}
                                    className='z-20 absolute hover:z-50 transition-transform ease-in-out duration-300'
                                    placeholder="blur"
                                    alt="Picture of SR-APP"
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
                                    placeholder="blur"
                                    alt="Picture of SR-APP"
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
                                    placeholder="blur"
                                    alt="Picture of SR-APP"
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
                            <div className='col-span-12 text-white font-semibold text-2xl flex justify-start items-end sm:px-5'>
                                {`SR-APP`}
                            </div>
                            <div className='col-span-12 text-white font-normal text-xl flex justify-start items-start sm:px-5'>
                                <ul className="list-disc text-left">
                                    <li className='mt-2'>{`Effectively track and monitor your corporate CSR necessity.`}</li>
                                    <li className='mt-2'>{`Organize your CSR records for improved reporting and evaluation.`}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 pt-0 lg:pt-32 pb-24 lg:pb-72 pl-6 pr-6 lg:pl-24 lg:pr-24 overflow-hidden lg:overflow-visible'>
                        <div className='col-span-12 lg:col-span-7'>
                            <div className="relative flex justify-center items-center w-full min-h-[835px] lg:min-h-[345px]" >
                                <Image
                                    src={jgolf1Blur}
                                    className='z-30  absolute hover:z-50 transition-transform ease-in-out duration-300'
                                    placeholder="blur"
                                    alt="Picture of JGolf"
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
                                    placeholder="blur"
                                    alt="Picture of JGolf"
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
                                    placeholder="blur"
                                    alt="Picture of JGolf"
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
                                    placeholder="blur"
                                    alt="Picture of JGolf"
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
                        <div className='col-span-12 lg:col-span-5 grid-cols-12 p-3 grid'
                        >
                            <div className='col-span-12 text-white font-semibold text-2xl flex justify-start items-end sm:px-5'>
                                {`J-GOLF`}
                            </div>
                            <div className='col-span-12 text-white font-normal text-xl flex justify-start items-start sm:px-5'>
                                <ul className="list-disc text-left">
                                    <li className='mt-2'>{`Rank your golf game with your friends to make it more competitive.`}</li>
                                    <li className='mt-2'>{`Order golf training courses and compare yourself to other players.`}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <motion.div className='grid grid-cols-12 pb-28 pt-9 lg:pb-52 lg:pt-52 pl-6 pr-6 lg:pl-24 lg:pr-24 poster-shadow relative z-10'
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <motion.div className='col-span-12 lg:col-span-7 text-white font-normal text-xl sm:text-2xl text-left flex justify-start items-center' variants={textLeftVariants}>
                            <p>{`Feel free to explore more samples of my projects in a four-directional `}
                                <a href={`/game`} className='hover:text-red-600 justify-start items-center inline'
                                    onMouseEnter={() => setHoveredLinkGame(true)}
                                    onMouseLeave={() => setHoveredLinkGame(false)}

                                >
                                    <span className='underline'>{`mini game.`}</span>
                                    <sup className='no-underline'>12</sup>
                                </a>
                            </p>
                        </motion.div>
                        <div className='hidden lg:col-span-5 justify-center items-center sm:flex px-28'>
                            <div className={`absolute scale-0 ${hoveredLinkGame && 'scale-100'} min-w-[350px] transition-transform ease-in-out duration-300 grid grid-cols-12 py-4 px-2 w-auto h-auto rounded bg-modal-mlp border-modal-mlp shadow-sm z-50`}
                                id='thumbnail-portfolio=hover'
                                style={{ zIndex: 70 }}
                            >
                                <div className="col-span-12">
                                    <Image
                                        src="/images/game-mode.png"
                                        title={`Blur`}
                                        alt="Picture of mini game spoiler"
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
                                    <div className='dark-overlay-1' />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    {/* END OF PORTFOLIO SECTION */}
                    <div className='relative h-[720px] lg:h-[670px] flex justify-center items-center overflow-hidden' id="poster-content">
                        <div className='absolute top-[40%] scale-100 transition-transform ease-in-out duration-150 cursor-pointer text-poster hover:scale-110 left-0 bg-header-poster p-3 z-40 max-w-lg mh shadow-black' onClick={prevPoster}>
                            <ChevronLeftIcon className="h-8 w-8 lg:h-11 lg:w-11" aria-hidden="true" />
                        </div>
                        <div className='absolute top-[40%] scale-100 transition-transform ease-in-out duration-150 cursor-pointer text-poster hover:scale-110 right-0 bg-header-poster p-3 z-40 max-w-lg mh shadow-black' onClick={nextPoster}>
                            <ChevronRightIcon className="h-8 w-8 lg:h-11 lg:w-11" aria-hidden="true" />
                        </div>
                        <div className='absolute max-h-[336px] lg:max-h-none lg:left-[20%] lg:-translate-x-[20%] min-h-[270px] bottom-0 bg-header-poster p-9 z-20 max-w-lg select-none shadow-black'>
                            <div className="col-span-1 flex justify-start items-end text-white font-bold text-2xl pb-2">
                                {`${poster[currentActivePoster - 1].title}`}
                            </div>
                            <div className="col-span-1 flex justify-start items-start text-white font-medium text-lg">
                                {`${poster[currentActivePoster - 1].desc}`}
                            </div>
                        </div>
                        <div className='relative flex transition-transform ease-in-out duration-700' style={{
                            transform: `rotate(13deg) translate(${translationPosterContainer.translateX}px, ${translationPosterContainer.translateY}px)`,
                        }}>
                            {/* FIXED WIDTH FOR POSTER CAROUSEL */}
                            <div className='min-h-[830px] w-[1000px] lg:w-[2000px] grid grid-cols-12 gap-5 pt-14 pb-14 pl-6 pr-6 text-left select-none'>

                                {
                                    poster.map((poster, key) => {
                                        posterIteration++;
                                        let currentIteration = posterIteration;
                                        return (
                                            <div key={key}
                                                id={`poster-${posterIteration}`}
                                                className={`min-h-[265px] lg:min-h-[500px] w-[144px] lg:w-[308px] col-span-2 p-4 lg:p-6 grid grid-cols-1 ${availablePosters.includes(currentIteration) && currentIteration != currentActivePoster ? 'cursor-pointer' : ''} ${posterIteration == currentActivePoster ? 'bg-poster-active' : availablePosters.includes(currentIteration) ? 'bg-poster' : 'bg-poster-unhovered'}`}
                                                onClick={availablePosters.includes(currentIteration) && currentIteration != currentActivePoster ? () => movePosterContainer(currentIteration) : undefined}
                                            >
                                                <div className="col-span-1 flex justify-center items-center">
                                                    <FontAwesomeIcon icon={['fas', poster.iconImage]} className='w-[80px] h-[80px] lg:w-[155px] lg:h-[155px] text-black' height={155} width={155} />
                                                </div>
                                                <div className="col-span-1 flex justify-start items-end text-black font-bold text-lg lg:text-2xl pb-1 lg:pb-2">
                                                    {`${poster.title}`}
                                                </div>
                                                <div className="col-span-1 flex justify-start items-start text-black font-medium text-sm lg:text-lg">
                                                    <p className='line-clamp-4'>{`${substractWords(`${poster.desc}`)}`}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 pt-32 pb-10 pl-6 pr-6 text-white font-semibold text-3xl sm:text-4xl text-center select-none'>
                            {`Certain Credentials`}
                        </div>
                    </div>
                    <div className='pt-10 pb-8 pl-2 pr-2 lg:pl-6 lg:pr-6'>
                        <Slider {...carouselSettings}>
                            <div>
                                <Image
                                    src={mangtas}
                                    className='z-10  select-none'
                                    width={423}
                                    height={300}
                                    placeholder="blur"
                                    alt="Picture of the certificate"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div>
                                <Image
                                    src={merdeka}
                                    className='z-10  select-none'
                                    width={423}
                                    height={300}
                                    placeholder="blur"
                                    alt="Picture of the certificate"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div>
                                <Image
                                    src={analytic}
                                    className='z-10  select-none'
                                    width={423}
                                    height={300}
                                    placeholder="blur"
                                    alt="Picture of the certificate"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div>
                                <Image
                                    src={expert}
                                    className='z-10  select-none'
                                    width={423}
                                    height={300}
                                    placeholder="blur"
                                    alt="Picture of the certificate"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div>
                                <Image
                                    src={flutter}
                                    className='z-10  select-none'
                                    width={423}
                                    height={300}
                                    placeholder="blur"
                                    alt="Picture of the certificate"
                                    style={{ objectFit: 'cover' }}
                                />

                            </div>
                        </Slider>
                    </div>
                    <div className='grid grid-cols-12 pt-20 pb-0 pl-6 pr-6 lg:pl-36 lg:pr-36 bg-black gap-5'>
                        <div className='col-span-12 sm:col-span-6 flex justify-center overflow-hidden'>
                            <Player
                                autoplay
                                loop
                                src="/images/lottie/world-rednew.json"
                                style={{ height: '400px', width: '400px' }}
                            >
                            </Player>
                        </div>
                        <div className='col-span-12 sm:col-span-6 flex flex-col justify-center text-xl font-normal text-left text-white select-none'
                        >
                            <span className='text-2xl sm:text-3xl font-semibold mb-4'>{`Full Stack Engineer`}</span>
                            {`In my opinion, front end and back end are the embodiment of our dress and tongue, respectively.`}
                        </div>
                    </div>
                    <div className='grid grid-cols-12 pt-0 pb-32 pl-6 pr-6 lg:pl-36 lg:pr-36 bg-black gap-5'>
                        <div className='col-span-12 sm:col-span-6 flex flex-col justify-center text-xl font-normal text-left text-white select-none'
                        >
                            <span className='text-2xl sm:text-3xl font-semibold mb-4'>{`CS Degree Graduate`}</span>
                            {`Speaking of AI, the most logical answer to me is to evolve if we want to maintain our dominance.*`}
                        </div>
                        <div className='col-span-12 sm:col-span-6 flex justify-center order-first sm:order-last overflow-hidden'>
                            <Player
                                autoplay
                                loop
                                src="/images/lottie/study-rednew.json"
                                style={{ height: '400px', width: '400px' }}
                            >
                            </Player>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 pt-32 pb-32 px-20 sm:pl-24 sm:pr-24' style={{
                        backgroundImage: `url('/images/blur4.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative', // Ensure proper stacking of children
                    }}

                    >
                        <div className='dark-overlay' />
                        <motion.div className='col-span-12 text-white font-medium text-2xl sm:text-4xl text-left pt-5 pb-5 z-10 select-none'
                            initial={{ opacity: 0, scale: 0.5 }}
                            viewport={{ once: true, amount: 0.1 }}
                            whileInView={{
                                opacity: 1, scale: 1, transition: {
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }
                            }}
                        >
                            {`Does that mean my scope is restricted to the outlined area?`}
                        </motion.div>
                        <motion.div className='col-span-12 text-white text-xl font-normal sm:text-2xl flex justify-center items-center select-none gap-20 pt-5 pb-5 z-10'
                            initial={{ opacity: 0, scale: 0.5 }}
                            viewport={{ once: true, amount: 0.1 }}
                            whileInView={{
                                opacity: 1, scale: 1, transition: {
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }
                            }}
                        >
                            {`No,`}<br /> {`If you have a completely different thoughts, I would really love to hear about it.`}
                        </motion.div>
                    </div>
                    <div className='grid grid-cols-12 pt-14 pb-14 pl-6 pr-6 md:pl-32 md:pr-32 text-white'>
                        <div className='col-span-10 flex justify-start items-center'>
                            <svg className='w-[171px] h-[72px]' viewBox="0 0 726 398" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-[#E40000] hover:fill-white' d="M171.824 210.2H214.592C229.024 210.2 239.848 214.072 247.064 221.816C254.28 229.56 257.888 240.912 257.888 255.872V274.088C257.888 289.048 254.28 300.4 247.064 308.144C239.848 315.888 229.024 319.76 214.592 319.76H200.864V395H171.824V210.2ZM214.592 293.36C219.344 293.36 222.864 292.04 225.152 289.4C227.616 286.76 228.848 282.272 228.848 275.936V254.024C228.848 247.688 227.616 243.2 225.152 240.56C222.864 237.92 219.344 236.6 214.592 236.6H200.864V293.36H214.592ZM273.66 210.2H316.692C331.652 210.2 342.564 213.72 349.428 220.76C356.292 227.624 359.724 238.272 359.724 252.704V264.056C359.724 283.24 353.388 295.384 340.716 300.488V301.016C347.756 303.128 352.684 307.44 355.5 313.952C358.492 320.464 359.988 329.176 359.988 340.088V372.56C359.988 377.84 360.164 382.152 360.516 385.496C360.868 388.664 361.748 391.832 363.156 395H333.588C332.532 392.008 331.828 389.192 331.476 386.552C331.124 383.912 330.948 379.16 330.948 372.296V338.504C330.948 330.056 329.54 324.16 326.724 320.816C324.084 317.472 319.42 315.8 312.732 315.8H302.7V395H273.66V210.2ZM313.26 289.4C319.068 289.4 323.38 287.904 326.196 284.912C329.188 281.92 330.684 276.904 330.684 269.864V255.608C330.684 248.92 329.452 244.08 326.988 241.088C324.7 238.096 321.004 236.6 315.9 236.6H302.7V289.4H313.26ZM380.137 210.2H409.178V395H380.137V210.2ZM468.68 397.64C454.598 397.64 443.948 393.68 436.736 385.76C429.518 377.664 425.912 366.136 425.912 351.176V340.616H453.368V353.288C453.368 365.256 458.384 371.24 468.416 371.24C473.342 371.24 477.038 369.832 479.504 367.016C482.144 364.024 483.464 359.272 483.464 352.76C483.464 345.016 481.7 338.24 478.184 332.432C474.662 326.448 468.152 319.32 458.648 311.048C446.678 300.488 438.32 290.984 433.568 282.536C428.816 273.912 426.44 264.232 426.44 253.496C426.44 238.888 430.136 227.624 437.528 219.704C444.92 211.608 455.654 207.56 469.736 207.56C483.638 207.56 494.108 211.608 501.152 219.704C508.364 227.624 511.976 239.064 511.976 254.024V261.68H484.52V252.176C484.52 245.84 483.284 241.264 480.824 238.448C478.358 235.456 474.752 233.96 470 233.96C460.316 233.96 455.48 239.856 455.48 251.648C455.48 258.336 457.238 264.584 460.76 270.392C464.456 276.2 471.056 283.24 480.56 291.512C492.704 302.072 501.062 311.664 505.64 320.288C510.212 328.912 512.504 339.032 512.504 350.648C512.504 365.784 508.718 377.4 501.152 385.496C493.76 393.592 482.936 397.64 468.68 397.64ZM571.13 397.64C556.874 397.64 545.96 393.592 538.394 385.496C530.822 377.4 527.042 365.96 527.042 351.176V254.024C527.042 239.24 530.822 227.8 538.394 219.704C545.96 211.608 556.874 207.56 571.13 207.56C585.386 207.56 596.294 211.608 603.866 219.704C611.432 227.8 615.218 239.24 615.218 254.024V351.176C615.218 365.96 611.432 377.4 603.866 385.496C596.294 393.592 585.386 397.64 571.13 397.64ZM571.13 371.24C581.162 371.24 586.178 365.168 586.178 353.024V252.176C586.178 240.032 581.162 233.96 571.13 233.96C561.098 233.96 556.082 240.032 556.082 252.176V353.024C556.082 365.168 561.098 371.24 571.13 371.24ZM634.856 210.2H671.288L699.536 320.816H700.064V210.2H725.936V395H696.104L661.256 260.096H660.728V395H634.856V210.2Z" />
                                <path className='fill-[#E40000] hover:fill-white' d="M195.824 0.199951H224.864V158.6H272.648V185H195.824V0.199951ZM286.574 0.199951H315.614V185H286.574V0.199951ZM360.067 26.6H329.707V0.199951H419.468V26.6H389.107V185H360.067V26.6ZM458.81 26.6H428.45V0.199951H518.21V26.6H487.85V185H458.81V26.6ZM532.268 0.199951H561.308V158.6H609.092V185H532.268V0.199951ZM623.018 0.199951H702.218V26.6H652.058V75.4399H691.922V101.84H652.058V158.6H702.218V185H623.018V0.199951Z" />
                                <path className='fill-[#E40000] hover:fill-white' d="M0.87207 140.6H31.0161L44.4561 236.792H44.8401L58.2801 140.6H88.4241V275H68.4561V173.24H68.0721L52.7121 275H35.0481L19.6881 173.24H19.3041V275H0.87207V140.6ZM123.577 217.784L98.0409 140.6H120.505L134.905 189.944H135.289L149.689 140.6H170.233L144.697 217.784V275H123.577V217.784Z" />
                            </svg>
                        </div>
                        <div className='col-span-2 flex justify-end items-center gap-4'>
                            <a href="mailto:daffavcd@gmail.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-8 w-8 sm:w-10 sm:h-10 text-blood hover:text-white hover:scale-105 cursor-pointer' icon={faGoogle} />
                            </a>
                            <a href="https://www.linkedin.com/in/daffavcd/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-8 w-8 sm:w-10 sm:h-10 text-blood hover:text-white hover:scale-105 cursor-pointer' icon={faLinkedin} />
                            </a>
                            <a href="https://github.com/daffavcd" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-8 w-8 sm:w-10 sm:h-10 text-blood hover:text-white hover:scale-105 cursor-pointer' icon={faGithub} />
                            </a>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-4 pt-14 pb-14 pl-6 pr-6 md:pl-32 md:pr-32 text-white'>
                        <div className='col-span-12 sm:col-span-4 text-left sm:text-left text-base'>
                            <a href={`/game`} className='hover:text-red-600 underline'>
                                {`Try Game Mode`}
                            </a>
                            <br />{`The entire project was created without using any CMS, code and implementation are purely handmade.`}
                        </div>
                        <div className="col-span-12 grid grid-cols-12 sm:col-span-8">
                            <div className='col-span-12 mb-3 sm:mb-0 sm:col-span-8 flex justify-center sm:justify-end items-center'>
                                <div className='w-[300px]'>
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
                            <div className='col-span-12 mb-3 sm:mb-0 text-center sm:col-span-4 flex justify-center sm:justify-end items-center sm:text-right text-lg'>
                                {`© 2024`}<br />{`thePromisedDesires`}
                            </div>
                        </div>
                    </div>
                </div >
            </main >
        </>
    )
}