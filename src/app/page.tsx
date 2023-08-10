"use client";
import Image from 'next/image'
import Link from 'next/link'
import Map from './components/map'
import { useState } from 'react';

export default function Home() {
  const [likes, setLikes] = useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello, Home page!</h1>

      <Map likes={likes} handleClick={handleClick} />
    </main>
  )
}
