'use client'
import React from 'react'
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

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div className="flex flex-col h-screen relative">
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        </>
    )
}