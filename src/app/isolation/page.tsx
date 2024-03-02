'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import mangtas from '../../../public/images/certificates/mangtas.png'
import merdeka from '../../../public/images/certificates/merdeka.png'
import analytic from '../../../public/images/certificates/analytic.png'
import expert from '../../../public/images/certificates/expert.png'
import flutter from '../../../public/images/certificates/flutter.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Isolation() {
    const maskedDivStyle = {
        width: '300px',
        height: '300px',
        backgroundColor: '#333',
        overflow: 'hidden',
    };

    const contentStyle = {
        width: '100%',
        height: '100%',
        backgroundColor: '#f00',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1, // Ensure content is above mask
    };

    return (
        <>
            <div className='relative' style={maskedDivStyle}>
                <div className='absolute' style={contentStyle}>
                    {/* Your content goes here */}
                    This is the content inside the masked div.
                </div>
            </div>
        </>
    )
}