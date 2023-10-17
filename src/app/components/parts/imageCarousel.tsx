"use client";
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react';
import { ChevronRightIcon, ChevronLeftIcon, StopIcon } from '@heroicons/react/20/solid';

export default function ImageCarousel({ images }: { images: any }) {
    const slides = useRef(images);

    const [currentIndex, setCurrentIndex] = useState(0);


    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.current.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.current.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const changeSlide = setInterval(() => {
            const theLength = slides.current.length == undefined ? 0 : slides.current.length;
            const isLastSlide = currentIndex === theLength - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
        }, 4000);
        return () => clearInterval(changeSlide);
    }, [currentIndex]);

    return (
        <div className="grid grid-cols-12 mt-5 h-full">
            <div className="flex items-center justify-center col-span-12 h-full">
                <div className='max-w-[1400px] h-[300px] w-full m-auto py-16 px-4 relative group shadow-2xl select-none'>
                    {slides.current.map((slide: string, slideIndex: number) => (
                        <Image
                            key={slideIndex}
                            src={`/images/portfolios/${slide}.png`}
                            className={`rounded ${slideIndex === currentIndex ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0 invisible'}`}
                            alt={slide.toUpperCase()}
                            title={slide.toUpperCase()}
                            fill={true}
                            quality={60}
                            placeholder="blur"
                            blurDataURL='/images/placeholder.png'
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                                width: '100%',
                            }}
                        />
                    ))}
                    {/* Left Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-red-800 cursor-pointer'>
                        <ChevronLeftIcon className="h-8 w-8" aria-hidden="true" onClick={prevSlide} />
                    </div>
                    {/* Right Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-red-800 cursor-pointer'>
                        <ChevronRightIcon className="h-8 w-8" aria-hidden="true" onClick={nextSlide} />
                    </div>
                    <div className='hidden group-hover:flex absolute left-[50%] -translate-x-[50%] bottom-0 text-2xl p-2 cursor-pointer'>
                        {slides.current.map((slide: string, slideIndex: number) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className='text-2xl cursor-pointer'
                            >
                                {slideIndex === currentIndex ? <StopIcon className="h-5 w-5 text-red-700/80" aria-hidden="true" /> : <StopIcon className="h-5 w-5 text-black/20" aria-hidden="true" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}