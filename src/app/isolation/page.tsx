"use client";
import React, { useEffect, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

export default function Isolation() {

    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        const animationTimeout = setTimeout(() => {
            setAnimationClass('-translate-y-double-full scale-100 rounded-b-none');
        }, 500);

        return () => clearTimeout(animationTimeout);
    }, []);

    return (
        <>
            <div className="flex absolute h-full w-full" style={{ zIndex: 101 }}>
                <div className={`flex justify-center items-center bg-black w-full h-full absolute text-white transition-transform ease-out duration-500 ${animationClass}`}>
                    <p className='font-medium text-5xl'>My Litte Prison</p>
                </div>
            </div>
            <div className='w-full h-full absolute transition-transform ease-out duration-500' style={{ backgroundColor: "#400000" }} />
        </>
    )
}