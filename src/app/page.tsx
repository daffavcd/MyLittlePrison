"use client";
import Image from 'next/image'
import Link from 'next/link'
import Game from './components/game'
import { useState } from 'react';

export default function Home() {
  const [likes, setLikes] = useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Game />
    </main>
  )
}
