"use client";
import { useState, useEffect, useRef, Fragment } from 'react';
import Image from 'next/image';
import ModalPortfolio from './modalPortfolio';
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { LightBulbIcon } from '@heroicons/react/24/solid'
import { portfolios } from '../data/portfolios';

export default function Game() {

    const [modalOpen, setModalOpen] = useState(false)

    const cancelButtonRef = useRef(null)

    const [isDesktop, setIsDesktop] = useState(true);

    const [isCharacterMoving, setIsCharacterMoving] = useState(false);
    const [characterImage, setCharacterImage] = useState('idle_blinking');

    const [portfolio, setPortfolio] = useState({
        colCell: 0,
        title: "",
        desc: "",
        repoLink: "",
        features: [],
        imagesPath: [],
        techImagesPath: []
    });

    // mapLayout.rowCenter and mapLayout.colCenter is the center cell of the displayed map
    // characterPosition.rowCell and characterPosition.colCell is the current cell of the character
    const mapLayout = useRef(
        {
            maxRowCell: 9,
            maxColCell: 81,
            maxColCellEachRow: 9,
            maxColCellDisplayed: 27,
            rowCenter: 5,
            colCenter: 41,
            objectCell: [1, 2],
            portfolioCell: portfolios
        }
    );

    const characterPosition = useRef({ rowCell: 5, colCell: 41 });
    let translation = useRef({ dx: "", dy: "" });
    let translationObject = useRef({ dx: "", dy: "" });
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
        let centerCell = document.getElementById(`cell-row-${mapLayout.current.rowCenter}-col-${mapLayout.current.colCenter}`);
        if (centerCell != null || centerCell != undefined) {
            cellHeight.current = centerCell.offsetHeight;
            cellWidth.current = centerCell.offsetWidth;
            console.log(`New cell dimension detected! ${cellHeight.current}px x ${cellWidth.current}px `);
        }
    }, []);

    // GET WINDOW RESOLUTION
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 639px)');
        setIsDesktop(!mediaQuery.matches);
        const handleMediaQueryChange = (e: MediaQueryListEvent) => {
            setIsDesktop(!e.matches);
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    const moveDisplayCharacter = (event: KeyboardEvent) => {
        // ABORTING MOVEMENT IF THE MODAL IS OPEN
        if (modalOpen && event.key === "Enter" || event.key === "Esc") {
            setModalOpen(false);
        }

        if (modalOpen) return;
        // ABORTING MOVEMENT IF THE CHARACTER STILL ON ANIMATION
        if (isCharacterMoving) return;

        isPortfolioAround(event.key);

        // CONDITION TO MOVE THE CHARACTER WAS FULFILLED
        const key = event.key;
        if (key === "ArrowUp" && characterPosition.current.rowCell > 1) {
            moveAnimation("Up");
        } else if (key === "ArrowRight" && characterPosition.current.colCell < mapLayout.current.maxColCell && characterPosition.current.colCell % mapLayout.current.maxColCellEachRow !== 0) {
            moveAnimation("Right");
        } else if (key === "ArrowDown" && characterPosition.current.rowCell < mapLayout.current.maxRowCell) {
            moveAnimation("Down");
        } else if (key === "ArrowLeft" && characterPosition.current.colCell > 1 && characterPosition.current.colCell % mapLayout.current.maxColCellEachRow !== 1) {
            moveAnimation("Left");
        }
    }

    const moveAnimation = (heading: string) => {
        let nextCharacterImage = "";
        // IN THE CASE OF OBJECT IMAGE IS OUTSIDE OF THE RENDERED IMAHE 
        // OBJECT ANIMATION CANNOT BE ANIMATED
        // I THINK I SHOULD'VE RENDER ALL OF THE CELL AT ONCE

        // ABORT ANIMATION IF THE CHARACTER IS COLLIDING WITH AN OBJECT
        // if (isColliding(heading)) return;

        // CHANGE THE STATE TO MOVING
        if (heading == "Up") {
            // MOVE UP DISPLAYED MAP ONCE ? IF THERE IS ANOTHER TOP AND IF NOT AT THE VERY TOP
            if (characterPosition.current.rowCell - 1 > 1 && characterPosition.current.rowCell - 1 < mapLayout.current.rowCenter) {
                mapLayout.current.rowCenter = mapLayout.current.rowCenter - 1;
                mapLayout.current.colCenter = mapLayout.current.colCenter - mapLayout.current.maxColCellEachRow;
            }

            translation.current = { dx: `0px`, dy: `-${cellHeight.current}px` };
            nextCharacterImage = "run_up";

            // DONT ANIMATE OBJECT DOWN IF THE CHARACTER WITHIN TWO ROW FROM THE TOP OR BOTTOM
            if (characterPosition.current.rowCell <= 2 || characterPosition.current.rowCell == mapLayout.current.maxRowCell) {
                translationObject.current = { dx: `0px`, dy: `0px` };
            } else {
                translationObject.current = { dx: `0px`, dy: `-${cellHeight.current}px` };
            }

        } else if (heading == "Right") {
            translation.current = { dx: `${cellWidth.current}px`, dy: `0px` };
            nextCharacterImage = "run_right";
            translationObject.current = { dx: `0px`, dy: `$0px` };
        } else if (heading == "Down") {
            // MOVE DOWN DISPLAYED MAP ONCE IF THERE IS ANOTHER BOTTOM AND IF NOT AT THE VERY BOTTOM
            if (characterPosition.current.rowCell + 1 < mapLayout.current.maxRowCell && characterPosition.current.rowCell + 1 > mapLayout.current.rowCenter) {
                mapLayout.current.rowCenter = mapLayout.current.rowCenter + 1;
                mapLayout.current.colCenter = mapLayout.current.colCenter + mapLayout.current.maxColCellEachRow;
            }

            nextCharacterImage = "run_down";
            translation.current = { dx: `0px`, dy: `${cellHeight.current}px` };

            // DONT ANIMATE OBJECT UP IF THE CHARACTER WITHIN TWO ROW FROM THE TOP OR BOTTOM
            if (characterPosition.current.rowCell == 1 || characterPosition.current.rowCell == mapLayout.current.maxRowCell - 1) {
                translationObject.current = { dx: `0px`, dy: `0px` };
            } else {
                translationObject.current = { dx: `0px`, dy: `${cellHeight.current}px` };
            }

        } else if (heading == "Left") {
            translation.current = { dx: `-${cellWidth.current}px`, dy: `0px` };
            nextCharacterImage = "run_left";
            translationObject.current = { dx: `0px`, dy: `$0px` };
        }

        // CHANGE THE STATE HERE TO RE RENDER THE DISPLAYED MAP
        setCharacterImage(nextCharacterImage);
        setIsCharacterMoving(true);
        setTimeout(() => {
            moveRefCharacter(heading);
            // CHANGE THE STATE TO NOT MOVING
            setCharacterImage("idle_blinking");
            setIsCharacterMoving(false);
        }, 300);
    }

    const moveRefCharacter = (heading: string) => {
        if (heading == "Up") {
            characterPosition.current = { rowCell: characterPosition.current.rowCell - 1, colCell: characterPosition.current.colCell - mapLayout.current.maxColCellEachRow };
        } else if (heading == "Right") {
            characterPosition.current = { rowCell: characterPosition.current.rowCell, colCell: characterPosition.current.colCell + 1 };
        } else if (heading == "Down") {
            characterPosition.current = { rowCell: characterPosition.current.rowCell + 1, colCell: characterPosition.current.colCell + mapLayout.current.maxColCellEachRow };
        } else if (heading == "Left") {
            characterPosition.current = { rowCell: characterPosition.current.rowCell, colCell: characterPosition.current.colCell - 1 };
        }
    }

    const isColliding = (heading: string) => {
        let isColliding = false;
        // CHECKING IF THE CHARACTER IS COLLIDING WITH OBJECT
        if (heading == "Up") {
            if (mapLayout.current.objectCell.includes(characterPosition.current.colCell - mapLayout.current.maxColCellEachRow)) {
                isColliding = true;
            }
        } else if (heading == "Right") {
            if (mapLayout.current.objectCell.includes(characterPosition.current.colCell + 1)) {
                isColliding = true;
            }
        } else if (heading == "Down") {
            if (mapLayout.current.objectCell.includes(characterPosition.current.colCell + mapLayout.current.maxColCellEachRow)) {
                isColliding = true;
            }
        } else if (heading == "Left") {
            if (mapLayout.current.objectCell.includes(characterPosition.current.colCell - 1)) {
                isColliding = true;
            }
        }
        return isColliding;
    }

    const clickPortfolio = (currentPortfolio: object) => {
        setPortfolio(prevState => ({
            ...prevState,
            ...currentPortfolio
        }));
        setModalOpen(true);
    }

    const isPortfolioAround = (event: string) => {
        const key = event;
        const characterCoordinate = characterPosition.current.colCell;
        const portfolioCoordinate = mapLayout.current.portfolioCell.map((x) => x.colCell);

        if (key === "Enter" && portfolioCoordinate.includes(characterCoordinate)) {
            clickPortfolio(mapLayout.current.portfolioCell[portfolioCoordinate.indexOf(characterCoordinate)]);
        }
    }

    return (
        <div className="col-span-12 sm:pl-24 sm:pr-24" id="game-map">
            <div className="relative h-96">
                <div className="dark-overlay-game rounded"></div>
                <div id="cell-row" className="hidden sm:grid grid-cols-9 gap-0 p-4 h-full">
                    {
                        [...Array(mapLayout.current.maxColCellDisplayed)].map((x, j) => {
                            // These rules created to make it dynamic when displaying/maping the game map (The key is the displayed COL CENTER).
                            // (if you want to change the map dimension, just change the variable ref declared at the very above *use odds number*).
                            // The rules to get the current iteration of row and col is:
                            // GET CURRENT COL RULES= (current iteration + current displayed coll center) - (total coll for a row + floor of total coll for a row / 2).
                            // Get curret row = (current iteration(j) + center coll of displayed map) - total distance to the first column of the displayed map from center coll of displayed map.
                            const currentCol = (j + mapLayout.current.colCenter) - (mapLayout.current.maxColCellEachRow + Math.floor(mapLayout.current.maxColCellEachRow / 2));
                            const currentRow = Math.ceil(currentCol / mapLayout.current.maxColCellEachRow);
                            return (
                                <div key={j}
                                    id={`cell-row-${currentRow}-col-${currentCol}`}
                                    className={`character-container flex items-center justify-center  col-span-1 text-center border border-indigo-600 relative`}
                                >

                                    {/* CONDITION IF ROW & COLL CELL MATCH, TO SHOW CHARACTER  */}
                                    {
                                        (currentRow == characterPosition.current.rowCell && currentCol == characterPosition.current.colCell) ? (
                                            // <Character />
                                            <Image
                                                alt="Character"
                                                className='z-30'
                                                src={`/images/sprites/${characterImage}.gif`}
                                                fill={true}
                                                sizes="(max-width: 150px) 100vw, (max-width: 300px) 50vw, 33vw"
                                                style={{
                                                    objectFit: 'cover',
                                                    height: '100%',
                                                    width: '100%',
                                                    position: 'absolute',
                                                    transition: 'transform 0.3s ease-in-out',
                                                    transform: isCharacterMoving ? `translate(${translation.current.dx}, ${translation.current.dy})` : 'none',
                                                }}
                                            />
                                        ) : null
                                    }
                                    {/* CONDITION IF COLL CELL MATCH, TO SHOW PORTFOLIO  */}
                                    {mapLayout.current.portfolioCell.map((portfolio, k) => (
                                        currentCol === portfolio.colCell ? (
                                            <LightBulbIcon
                                                key={k}
                                                className="text-blood animate-bounce-mlp shadow cursor-pointer hover:text-white" aria-hidden="true" onClick={() => clickPortfolio(portfolio)}
                                                style={{
                                                    width: '45%',
                                                    height: '45%',
                                                    position: 'absolute',
                                                    objectFit: 'fill',
                                                    // transition: 'transform 0.2s ease-in-out',
                                                    // transform: isCharacterMoving ? `translate(${translationObject.current.dx}, ${translationObject.current.dy})` : 'none',
                                                }}
                                            />
                                        ) : null
                                    ))}
                                </div>
                            )
                        })}
                </div>
                {!isDesktop ? (
                    <div className='flex items-center text-lg font-medium p-4 text-white text-center sm:invisible relative z-10 h-full'>
                        {`To explore my projects, please utilize a desktop (width of 640 pixels or more) and provide a keyboard to move the character. I'm trying to make it as a game-like experience`}
                    </div>
                ) : null}
            </div>
            <ModalPortfolio portfolio={portfolio} modalOpen={modalOpen} setModalOpen={setModalOpen} cancelButtonRef={cancelButtonRef} />
        </div >
    )
}