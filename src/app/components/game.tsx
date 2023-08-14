"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Character from './parts/character';
import { log } from 'console';

export default function Game() {
    const mapLayout = { maxWidth: 1000, maxHeight: 240, maxRowCell: 3, maxColCell: 27, maxColCellEachRow: 9, widthCell: 110, colCenter: 14 };
    let row = 1;
    let currentHeading = "None";

    const [characterPosition, setCharacterPosition] = useState({ rowCell: 2, colCell: 14 });

    const [isCharacterMoving, setIsCharacterMoving] = useState(false);
    const [translation, setTranslation] = useState({ dx: "", dy: "" });

    useEffect(() => {
        document.body.addEventListener('keydown', moveDisplayCharacter);
        return () => {
            document.body.removeEventListener('keydown', moveDisplayCharacter)
        }
    })

    useEffect(() => {
        if (isCharacterMoving) {
            const transitionTimeout = setTimeout(() => {
                setIsCharacterMoving(false);
            }, 300);
            return () => {
                clearTimeout(transitionTimeout);
            }
        }
    }, [isCharacterMoving]);

    const moveDisplayCharacter = (event: KeyboardEvent) => {
        // console.log(characterPosition);
        if (event.key == "ArrowUp") {
            if ((characterPosition.rowCell - 1) >= 1) {
                moveAnimation("Up");
            }
        } else if (event.key == "ArrowRight") {
            if ((characterPosition.colCell + 1) <= mapLayout.maxColCell) {
                if (characterPosition.colCell % mapLayout.maxColCellEachRow != 0) {
                    moveAnimation("Right");
                }
            }
        } else if (event.key == "ArrowDown") {
            if ((characterPosition.rowCell + 1) <= mapLayout.maxRowCell) {
                moveAnimation("Down");
            }
        } else if (event.key == "ArrowLeft") {
            if ((characterPosition.colCell - 1) >= 1) {
                if (characterPosition.colCell % mapLayout.maxColCellEachRow != 1) {
                    moveAnimation("Left");
                }
            }
        }
    }

    const moveStateCharacter = (heading: string) => {
        if (heading == "Up") {
            setCharacterPosition({ rowCell: characterPosition.rowCell - 1, colCell: characterPosition.colCell - mapLayout.maxColCellEachRow });
        } else if (heading == "Right") {
            setCharacterPosition({ rowCell: characterPosition.rowCell, colCell: characterPosition.colCell + 1 });
        } else if (heading == "Down") {
            setCharacterPosition({ rowCell: characterPosition.rowCell + 1, colCell: characterPosition.colCell + mapLayout.maxColCellEachRow });
        } else if (heading == "Left") {
            setCharacterPosition({ rowCell: characterPosition.rowCell, colCell: characterPosition.colCell - 1 });
        }
    }

    const moveAnimation = (heading: string) => {
        setIsCharacterMoving(true);
        if (heading == "Up") {
            setTranslation({ dx: `0px`, dy: `-${mapLayout.widthCell}px` })
        } else if (heading == "Right") {
            setTranslation({ dx: `${mapLayout.widthCell}px`, dy: `0px` })
        } else if (heading == "Down") {
            setTranslation({ dx: `0px`, dy: `${mapLayout.widthCell}px` })
        } else if (heading == "Left") {
            setTranslation({ dx: `-${mapLayout.widthCell}px`, dy: `0px` })
        }
        setTimeout(() => {
            moveStateCharacter(heading);
        }, 300);
    }


    return (
        <div className="col-span-12 pl-24 pr-24" id="game-map">
            <div className="relative h-96">
                <div className="dark-overlay-game rounded"></div>
                <div id="cell-row" className="grid grid-cols-9 gap-1 p-4 h-full">
                    {
                        [...Array(mapLayout.maxColCell)].map((x, j) => {
                            // CONDITION TO CHANGE ROW
                            if (j % mapLayout.maxColCellEachRow == 0 && j != 0) {
                                row = row + 1;
                            }
                            return (
                                <div key={j}
                                    id={`cell-row-${row}-col-${j + 1}`}
                                    className={`col-span-1 text-center z-10 border-solid border-2 border-white relative`}

                                >
                                    {/* CONDITION TO SHOW CHARACTER  */}
                                    {
                                        (j + 1 == characterPosition.colCell && row == characterPosition.rowCell) ? (
                                            // <Character />
                                            <Image
                                                src="/images/sprites/0_Warrior_Idle Blinking_000.png"
                                                fill={true}
                                                alt="Character"
                                                objectFit="contain"
                                                className={`${isCharacterMoving ? 'character-transition' : ''}`}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    transition: 'transform 0.3s ease-in-out',
                                                    transform: isCharacterMoving ? `translate(${translation.dx}, ${translation.dy})` : 'none',
                                                }}
                                            />
                                        ) : null
                                    }
                                    {/* <Image
                                        src="/images/lands/land_1.png"
                                        fill={true}
                                        alt="Character"
                                        objectFit="contain"
                                        style={{ width: '100%', height: '100%' }}
                                    /> */}
                                </div>
                            )
                        })}
                </div>

            </div>

        </div >
    )
}