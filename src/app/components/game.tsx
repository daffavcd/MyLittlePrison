"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Character from './parts/character';
import { log } from 'console';

export default function Game() {
    const mapLayout = { maxWidth: 1000, maxHeight: 240, maxRowCell: 3, maxColCell: 27, maxColCellEachRow: 9, colCenter: 14 };
    let row = 1;

    const [isCharacterMoving, setIsCharacterMoving] = useState(false);
    const characterPosition = useRef({ rowCell: 2, colCell: 14 });
    let translation = useRef({ dx: "", dy: "" });
    let cellHeight = useRef(90);
    let cellWidth = useRef(90);


    // LISTENING TO KEYBOARD EVENT
    useEffect(() => {
        document.body.addEventListener('keydown', moveDisplayCharacter);
        return () => {
            document.body.removeEventListener('keydown', moveDisplayCharacter)
        }
    })

    // GETTING THE CENTER CELL HEIGHT FOR THE FIRST TIME
    useEffect(() => {
        let centerCell = document.getElementById('cell-row-2-col-14');
        if (centerCell != null || centerCell != undefined) {
            cellHeight.current = centerCell.offsetHeight;
            cellWidth.current = centerCell.offsetWidth;
            console.log(`New cell width detected! ${cellHeight.current}px x ${cellWidth.current}px `);
        }
    }, []);

    const moveDisplayCharacter = (event: KeyboardEvent) => {
        // ABORTING MOVEMENT IF THE CHARACTER STILL ON ANIMATION
        if (isCharacterMoving) return;

        // CONDITION TO MOVE THE CHARACTER WAS FULFILLED
        const key = event.key;
        if (key === "ArrowUp" && characterPosition.current.rowCell > 1) {
            moveAnimation("Up");
        } else if (key === "ArrowRight" && characterPosition.current.colCell < mapLayout.maxColCell && characterPosition.current.colCell % mapLayout.maxColCellEachRow !== 0) {
            moveAnimation("Right");
        } else if (key === "ArrowDown" && characterPosition.current.rowCell < mapLayout.maxRowCell) {
            moveAnimation("Down");
        } else if (key === "ArrowLeft" && characterPosition.current.colCell > 1 && characterPosition.current.colCell % mapLayout.maxColCellEachRow !== 1) {
            moveAnimation("Left");
        }
    }

    const moveAnimation = (heading: string) => {
        // CHANGE THE STATE TO MOVING
        if (heading == "Up") {
            translation.current = { dx: `0px`, dy: `-${cellHeight.current}px` };
        } else if (heading == "Right") {
            translation.current = { dx: `${cellWidth.current}px`, dy: `0px` };
        } else if (heading == "Down") {
            translation.current = { dx: `0px`, dy: `${cellHeight.current}px` };
        } else if (heading == "Left") {
            translation.current = { dx: `-${cellWidth.current}px`, dy: `0px` };
        }
        // CHANGE THE STATE HERE
        setIsCharacterMoving(true);
        setTimeout(() => {
            moveRefCharacter(heading);
            // CHANGE THE STATE TO NOT MOVING
            setIsCharacterMoving(false);
        }, 200);
    }

    const moveRefCharacter = (heading: string) => {
        if (heading == "Up") {
            characterPosition.current = { rowCell: characterPosition.current.rowCell - 1, colCell: characterPosition.current.colCell - mapLayout.maxColCellEachRow };
        } else if (heading == "Right") {
            characterPosition.current = { rowCell: characterPosition.current.rowCell, colCell: characterPosition.current.colCell + 1 };
        } else if (heading == "Down") {
            characterPosition.current = { rowCell: characterPosition.current.rowCell + 1, colCell: characterPosition.current.colCell + mapLayout.maxColCellEachRow };
        } else if (heading == "Left") {
            characterPosition.current = { rowCell: characterPosition.current.rowCell, colCell: characterPosition.current.colCell - 1 };
        }
    }


    return (
        <div className="col-span-12 pl-24 pr-24" id="game-map">
            <div className="relative h-96">
                <div className="dark-overlay-game rounded"></div>
                <div id="cell-row" className="grid grid-cols-9 gap-0 p-4 h-full">
                    {
                        [...Array(mapLayout.maxColCell)].map((x, j) => {
                            // CONDITION TO CHANGE ROW
                            if (j % mapLayout.maxColCellEachRow == 0 && j != 0) {
                                row = row + 1;
                            }
                            return (
                                <div key={j}
                                    id={`cell-row-${row}-col-${j + 1}`}
                                    className={`character-container col-span-1 text-center z-10 border border-indigo-600 relative`}
                                >
                                    {/* CONDITION TO SHOW CHARACTER  */}
                                    {
                                        (j + 1 == characterPosition.current.colCell && row == characterPosition.current.rowCell) ? (
                                            // <Character />
                                            <Image
                                                alt="Character"
                                                src="/images/sprites/0_Warrior_Idle Blinking_000.png"
                                                fill={true}
                                                sizes="(max-width: 150px) 100vw, (max-width: 300px) 50vw, 33vw"
                                                style={{
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.2s ease-in-out',
                                                    transform: isCharacterMoving ? `translate(${translation.current.dx}, ${translation.current.dy})` : 'none',
                                                }}
                                            />
                                        ) : null
                                    }
                                </div>
                            )
                        })}
                </div>
            </div>
        </div >
    )
}