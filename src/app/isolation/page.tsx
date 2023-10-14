"use client";
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

export default function Isolation() {


    return (
        <div className="grid grid-cols-12 h-full p-24">
            <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
        </div>
    )
}