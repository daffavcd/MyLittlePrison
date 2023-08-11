"use client";
import { useState, useEffect } from 'react';

export default function Game() {
    const mapLayout = { maxWidth: 1000, maxHeight: 240 };

    const [characterPosition, setCharacterPosition] = useState({ top: 40, left: 20 });

    useEffect(() => {
        document.body.addEventListener('keydown', moveCharacter);
        return () => {
            document.body.removeEventListener('keydown', moveCharacter)
        }
    })

    const moveCharacter = (event: KeyboardEvent) => {
        console.log(event);
        const characterJump = 10;

        if (event.key == "ArrowUp") {
            if ((characterPosition.top - characterJump) > 0) {
                setCharacterPosition({ top: characterPosition.top - characterJump, left: characterPosition.left });
            }
        } else if (event.key == "ArrowDown") {
            if ((characterPosition.top + characterJump) < mapLayout.maxHeight) {
                setCharacterPosition({ top: characterPosition.top + characterJump, left: characterPosition.left });
            }
        } else if (event.key == "ArrowLeft") {
            if ((characterPosition.left - characterJump) > 0) {
                setCharacterPosition({ top: characterPosition.top, left: characterPosition.left - characterJump });
            }
        } else if (event.key == "ArrowRight") {
            if ((characterPosition.left + characterJump) < mapLayout.maxWidth) {
                setCharacterPosition({ top: characterPosition.top, left: characterPosition.left + characterJump });
            }
        }
    }

    const characterStyle = {
        top: `${characterPosition.top}px`,
        left: `${characterPosition.left}px`,
        transition: 'top 0.3s ease, left 0.3s ease',
    };

    return (
        <div className="relative w-full h-64 border-sky-500 border-4" style={{ backgroundColor: "#d2a985" }}>
            <div id="my-character" className="absolute" style={characterStyle}>THIS IS MY MAP!</div>
        </div>
    )
}