"use client";
import Image from 'next/image'
import { useState } from 'react';
import { ChevronRightIcon, ChevronLeftIcon, StopIcon } from '@heroicons/react/20/solid';
import { StopIcon as StopOutline } from '@heroicons/react/24/outline';

export default function Isolation() {
    const slides = [
        {
            url: '/images/portfolios/resto_1.png',
        },
        {
            url: '/images/portfolios/resto_2.png',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="grid grid-cols-12 h-full p-24">
            <div className="flex items-center justify-center col-span-12 p-4 h-full">
                <h1 className='text-2xl'>ISOLATION ROOM</h1>
            </div>
            {/* ISOLATION BOX */}
            <div id='ISOLATION_BOX' className="flex items-center justify-center col-span-12 p-4 h-full">
                <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group shadow-2xl'>
                    <Image
                        src={slides[currentIndex].url}
                        className='rounded transition duration-500 ease-in-out'
                        alt="ImageDescription"
                        fill={true}
                        style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%',
                        }}
                    />
                    {/* Left Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <ChevronLeftIcon className="h-10 w-10" aria-hidden="true" onClick={prevSlide} />
                    </div>
                    {/* Right Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <ChevronRightIcon className="h-10 w-10" aria-hidden="true" onClick={nextSlide} />
                    </div>
                    <div className='hidden group-hover:flex absolute left-[50%] -translate-x-[50%] bottom-4 text-2xl rounded-xl p-2 bg-black/20 cursor-pointer'>
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className='text-2xl cursor-pointer'
                            >
                                {slideIndex === currentIndex ? <StopIcon className="h-6 w-6 text-white" aria-hidden="true" /> : <StopOutline className="h-6 w-6 text-white" aria-hidden="true" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}