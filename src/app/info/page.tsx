"use client";
import React, { useEffect, useState } from 'react'

export default function Info() {
    return (
        <>
            <div className={`grid grid-cols-12 gap-3 relative h-screen w-full p-8 bg-black text-white`}>
                <div className='col-span-12 font-medium text-2xl'>
                    {`Total Unique Visitor : `}
                </div>
                <div className='col-span-12 font-medium text-2xl'>
                    {`Average Time Spent : `}
                </div>
                <div className='col-span-12 font-medium text-2xl'>
                    {`Average User Moves Character : `}
                </div>
                <div className='col-span-12 font-medium text-2xl'>

                </div>
            </div>
        </>
    )
}