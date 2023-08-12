"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Character from './parts/character';
import { log } from 'console';

export default function Game() {
    const mapLayout = { maxWidth: 1000, maxHeight: 240, maxRowCell: 3, maxColCell: 27, maxColCellEachRow: 9 };
    let row = 1;

    const [characterPosition, setCharacterPosition] = useState({ rowCell: 2, colCell: 14 });

    useEffect(() => {
        document.body.addEventListener('keydown', moveCharacter);
        return () => {
            document.body.removeEventListener('keydown', moveCharacter)
        }
    })

    const moveCharacter = (event: KeyboardEvent) => {
        console.log(characterPosition);

        if (event.key == "ArrowUp") {
            if ((characterPosition.rowCell - 1) >= 1) {
                setCharacterPosition({ rowCell: characterPosition.rowCell - 1, colCell: characterPosition.colCell - mapLayout.maxColCellEachRow });
            }
        } else if (event.key == "ArrowRight") {
            if ((characterPosition.colCell + 1) <= mapLayout.maxColCell) {
                if (characterPosition.colCell % mapLayout.maxColCellEachRow == 0) {
                    setCharacterPosition({ rowCell: characterPosition.rowCell + 1, colCell: characterPosition.colCell + 1 });
                } else {
                    setCharacterPosition({ rowCell: characterPosition.rowCell, colCell: characterPosition.colCell + 1 });
                }

            }
        } else if (event.key == "ArrowDown") {
            if ((characterPosition.rowCell + 1) <= mapLayout.maxRowCell) {
                setCharacterPosition({ rowCell: characterPosition.rowCell + 1, colCell: characterPosition.colCell + mapLayout.maxColCellEachRow });
            }
        } else if (event.key == "ArrowLeft") {
            if ((characterPosition.colCell - 1) >= 1) {
                if (characterPosition.colCell % mapLayout.maxColCellEachRow == 1) {
                    setCharacterPosition({ rowCell: characterPosition.rowCell - 1, colCell: characterPosition.colCell - 1 });
                } else {
                    setCharacterPosition({ rowCell: characterPosition.rowCell, colCell: characterPosition.colCell - 1 });
                }
            }
        }
    }

    return (
        <div className="col-span-12 pl-24 pr-24" id="game-map">
            <div className="relative h-96">
                <div className="dark-overlay-game rounded"></div>
                <div id="cell-row" className="grid grid-cols-9 gap-1 p-4 h-full">
                    {
                        [...Array(mapLayout.maxColCell)].map((x, j) => {
                            if (j % mapLayout.maxColCellEachRow == 0 && j != 0) {
                                row = row + 1;
                            }
                            return (
                                <div key={j} id={`cell-row-${row}-col-${j + 1}`} className="col-span-1 text-center z-10 border-solid border-2 border-white relative">
                                    {
                                        (j + 1 == characterPosition.colCell && row == characterPosition.rowCell) ? (
                                            <Character />
                                        ) : null
                                    }
                                </div>
                            )
                        })}
                </div>

            </div>

        </div>
    )
}