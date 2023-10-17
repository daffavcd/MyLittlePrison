"use client";
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import ModalPortfolio from './modalPortfolio';
import { LightBulbIcon, ChevronDoubleUpIcon, ChevronDoubleRightIcon, ChevronDoubleDownIcon, ChevronDoubleLeftIcon } from '@heroicons/react/24/solid'
import { portfolios } from '../data/portfolios';
import localforage from 'localforage';
import Link from 'next/link'

import characterJump from '../../../public/images/sprites/char_jump.gif'
import characterIdle from '../../../public/images/sprites/char_idle.gif'
import characterUp from '../../../public/images/sprites/char_run_up.gif'
import characterRight from '../../../public/images/sprites/char_run_right.gif'
import characterDown from '../../../public/images/sprites/char_run_down.gif'
import characterLeft from '../../../public/images/sprites/char_run_left.gif'

export default function Game() {

    let actualCol = 0;
    const totalProjects = portfolios.length;


    const [isDesktop, setIsDesktop] = useState(true);

    const IDLE_TIME = 2000;
    const [isIdle, setIsIdle] = useState(false);

    const startX = useRef<number | null>(null);
    const startY = useRef<number | null>(null);

    const [modalOpen, setModalOpen] = useState(false)
    const cancelButtonRef = useRef(null)

    const [isCharacterMoving, setIsCharacterMoving] = useState(false);
    const [characterImage, setCharacterImage] = useState(characterIdle);

    const [portfolio, setPortfolio] = useState({
        colCell: 0,
        title: "",
        desc: "",
        repoLink: "",
        features: [],
        imagesPath: [],
        techImagesPath: []
    });

    const [visitedPortofolio, setVisitedPortofolio] = useState<number[]>([]);

    // mapLayout.rowCenter and mapLayout.colCenter is the center cell of the displayed map
    // characterPosition.rowCell and characterPosition.colCell is the current cell of the character
    const [mapLayout, setMapLayout] = useState(
        {
            maxRowCell: 9,
            maxColCell: 81,
            maxColCellEachRowDisplayed: 9,
            maxColCellDisplayed: 27,
            maxColCellEachRow: 9,
            rowCenter: 5,
            colCenter: 41,
            objectCell: [1, 2],
            portfolioCell: portfolios
        }
    );

    const [characterPosition, setCharacterPosition] = useState({ rowCell: 5, colCell: 41 });

    let translation = useRef({ dx: "", dy: "" });
    let translationObject = useRef({ dx: "", dy: "" });
    let cellHeight = useRef(90);
    let cellWidth = useRef(90);

    const portfolioCoordinate = mapLayout.portfolioCell.map((x) => x.colCell);

    const [portfolioThumbnail, setPortfolioThumbnail] = useState(
        <div className={`fixed scale-0 transition-transform ease-in-out duration-300 grid grid-cols-12 py-4 px-2 w-64 h-36 rounded bg-modal-mlp border-modal-mlp shadow-sm z-50`}
            id='thumbnail-portfolio'
        >
            <div className="col-span-12">
                <div className='dark-overlay'></div>
                <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <div className='flex shadow-sm items-center justify-center text-base leading-normal font-semibold p-4 text-black text-center h-16 w-16 rounded-full bg-blood-80 hover:scale-125 transition-transform ease-in-out duration-300 cursor-pointer'>
                        {`Show`}
                    </div>
                </div>
            </div>
        </div>
    );

    const [portfolioThumbnailOnHover, setPortfolioThumbnailOnHover] = useState(
        <div className={`fixed scale-0 transition-transform ease-in-out duration-300 grid grid-cols-12 py-4 px-2 w-64 h-36 rounded bg-modal-mlp border-modal-mlp shadow-sm z-50`}
            id='thumbnail-portfolio=hover'
            style={{ zIndex: 70 }}
        >
            <div className="col-span-12">
                <div className='dark-overlay'></div>
            </div>
        </div>
    );

    const [hoveredPortfolio, setHoveredPortfolio] = useState(0);
    // ====================================START OF FUNCTION ====================================

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        // ABORTING MOVEMENT IF THE CHARACTER STILL ON ANIMATION
        if (isCharacterMoving) return;

        startX.current = e.touches[0].clientX;
        startY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        // ABORTING MOVEMENT IF THE CHARACTER STILL ON ANIMATION
        if (isCharacterMoving) return;

        if (startX.current === null || startY.current === null) return;

        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;

        const deltaX = currentX - startX.current;
        const deltaY = currentY - startY.current;

        let simulatedKeyEvent = new KeyboardEvent('keydown', { key: 'None' });

        if (Math.abs(deltaX) > 65 || Math.abs(deltaY) > 65) {
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > 0) {
                    simulatedKeyEvent = new KeyboardEvent('keydown', { key: 'ArrowRight' });
                } else {
                    simulatedKeyEvent = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
                }
            } else {
                if (deltaY > 0) {
                    simulatedKeyEvent = new KeyboardEvent('keydown', { key: 'ArrowDown' });
                } else {
                    simulatedKeyEvent = new KeyboardEvent('keydown', { key: 'ArrowUp' });
                }
            }
            moveDisplayCharacter(simulatedKeyEvent);
        }
    };

    const handleTouchEnd = () => {
        startX.current = null;
        startY.current = null;
    };

    // TRACKING IDLE TIME
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsIdle(true);
            console.log('User is idle');
        }, IDLE_TIME);

        return () => {
            clearTimeout(timeoutId); // Cleanup the timer on unmount
        };
    });

    // LISTENING TO KEYBOARD EVENT
    useEffect(() => {
        document.body.addEventListener('keydown', moveDisplayCharacter);
        return () => {
            document.body.removeEventListener('keydown', moveDisplayCharacter)
        }
    })

    // GETTING THE CENTER CELL HEIGHT FOR THE FIRST TIME
    useEffect(() => {
        let centerCell = document.getElementById(`cell-row-${mapLayout.rowCenter}-col-${mapLayout.colCenter}`);
        if (centerCell != null || centerCell != undefined) {
            cellHeight.current = centerCell.offsetHeight;
            cellWidth.current = centerCell.offsetWidth;
            console.log(`New cell dimension detected! ${cellHeight.current}px x ${cellWidth.current}px `);
        }
    }, [mapLayout]);

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

    // INITIALIZE LOCAL STORAGE (IF NOT PUTTING IT ON USE EFFECT THERE WILL BE PROBLEM WITH NEXT SSR
    useEffect(() => {
        localforage.config({
            driver: localforage.INDEXEDDB,
            name: 'myLittlePrison',
            storeName: 'the-promised-desire',
        });
    }, []);

    // GET INDEXDB
    useEffect(() => {
        const loadData = async () => {
            try {
                const oldValue = await localforage.getItem("visitedPortofolio");
                if (Array.isArray(oldValue)) {
                    setVisitedPortofolio(oldValue);
                }
            } catch (err) {
                console.error(err);
            }
        };

        loadData();
    }, []);

    // CHANGE MAP LAYOUT BASED ON WINDOW RESOLUTION
    useEffect(() => {
        if (!isDesktop) {
            setMapLayout(m => ({
                ...m,
                maxColCellEachRowDisplayed: 3,
                maxColCellDisplayed: 9,
            }));
        } else {
            setMapLayout(m => ({
                ...m,
                maxColCellEachRowDisplayed: 9,
                maxColCellDisplayed: 27,
            }));
        }
    }, [isDesktop]);

    const moveDisplayCharacter = (event: KeyboardEvent) => {
        const key = event.key;

        // RESET IDLE IF THE USER NOT AFK
        if (
            key === "ArrowUp" ||
            key === "ArrowRight" ||
            key === "ArrowDown" ||
            key === "ArrowLeft" ||
            key === "w" || key === "W" ||
            key === "d" || key === "D" ||
            key === "s" || key === "S" ||
            key === "a" || key === "A"
        ) {
            setIsIdle(false);
        }
        // ABORTING MOVEMENT IF THE MODAL IS OPEN
        if (modalOpen && key === "Enter" || key === "Esc") {
            setModalOpen(false);
        }

        // IF THE END ABORT
        if (visitedPortofolio.length == totalProjects) return;

        if (modalOpen) return;
        // ABORTING MOVEMENT IF THE CHARACTER STILL ON ANIMATION
        if (isCharacterMoving) return;


        if (isPortfolioAround(key)) {
            return;
        } else {
            // IF ENTER WASN'T PRESSED AND PRESS ANOTHER KEY
            // CHECK IF CHARACTER STILL INSIDE THE MAP
            if (key === "ArrowUp" || key === "w" || key === "W") {

                if (characterPosition.rowCell > 1) {
                    moveAnimation("Up");
                }
            } else if (key === "ArrowRight" || key === "d" || key === "D") {

                if (
                    characterPosition.colCell < mapLayout.maxColCell
                    && characterPosition.colCell % mapLayout.maxColCellEachRow !== 0
                ) {
                    moveAnimation("Right");
                }
            } else if (key === "ArrowDown" || key === "s" || key === "S") {

                if (characterPosition.rowCell < mapLayout.maxRowCell) {
                    moveAnimation("Down");
                }
            } else if (key === "ArrowLeft" || key === "a" || key === "A") {

                if (characterPosition.colCell > 1 && characterPosition.colCell % mapLayout.maxColCellEachRow !== 1) {
                    moveAnimation("Left");
                }
            }
        }
    }

    const moveAnimation = (heading: string) => {
        let nextCharacterImage = characterIdle;
        let nextLayout = "None";

        // ABORT ANIMATION IF THE CHARACTER IS COLLIDING WITH AN OBJECT
        // if (isColliding(heading)) return;

        // CHANGE THE STATE TO MOVING
        if (heading == "Up") {
            nextCharacterImage = characterUp;
            // MOVE UP DISPLAYED MAP ONCE ? IF THERE IS ANOTHER TOP AND IF NOT AT THE VERY TOP
            if (characterPosition.rowCell - 1 > 1 && characterPosition.rowCell - 1 < mapLayout.rowCenter) {
                nextLayout = "Up";
            }

            // DONT TRANSLATE OBJECT DOWN IF THE CHARACTER WITHIN TWO ROW FROM THE TOP OR BOTTOM
            if (characterPosition.rowCell <= 2 || characterPosition.rowCell == mapLayout.maxRowCell) {
                translation.current = { dx: `0px`, dy: `-${cellHeight.current}px` };
                translationObject.current = { dx: `0px`, dy: `0px` };
            } else {
                translation.current = { dx: `0px`, dy: `0px` };
                translationObject.current = { dx: `0px`, dy: `${cellHeight.current}px` };
            }

        } else if (heading == "Right") {
            nextCharacterImage = characterRight;

            if (((characterPosition.colCell + 1) % mapLayout.maxColCellEachRow) != 0 && ((characterPosition.colCell + 1) % mapLayout.maxColCellEachRow) > 2 && !isDesktop) {
                nextLayout = "Right";
            }

            // IF ON THE RIGHTMOST OF THE MAP, TRANSLATE THE CHAR ONLY AND NOT THE OBJECT
            if (characterPosition.colCell % mapLayout.maxColCellEachRow == 8 || characterPosition.colCell % mapLayout.maxColCellEachRow == 1 && !isDesktop) {
                translation.current = { dx: `${cellWidth.current}px`, dy: `0px` };
                translationObject.current = { dx: `0px`, dy: `0px` };
            } else if (!isDesktop) {
                translation.current = { dx: `0px`, dy: `0px` };
                translationObject.current = { dx: `-${cellWidth.current}px`, dy: `0px` };
            } else { // IF DESKTOP JUST DO NORMAL TRANSLATION
                translation.current = { dx: `${cellWidth.current}px`, dy: `0px` };
                translationObject.current = { dx: `0px`, dy: `$0px` };
            }

        } else if (heading == "Down") {
            nextCharacterImage = characterDown;
            // MOVE DOWN DISPLAYED MAP ONCE IF THERE IS ANOTHER BOTTOM AND IF NOT AT THE VERY BOTTOM
            if (characterPosition.rowCell + 1 < mapLayout.maxRowCell && characterPosition.rowCell + 1 > mapLayout.rowCenter) {
                nextLayout = "Down";
            }

            // DONT TRANSLATE OBJECT UP IF THE CHARACTER WITHIN TWO ROW FROM THE TOP OR BOTTOM
            if (characterPosition.rowCell == 1 || characterPosition.rowCell == mapLayout.maxRowCell - 1) {
                translation.current = { dx: `0px`, dy: `${cellHeight.current}px` };
                translationObject.current = { dx: `0px`, dy: `0px` };
            } else {
                translation.current = { dx: `0px`, dy: `0px` };
                translationObject.current = { dx: `0px`, dy: `-${cellHeight.current}px` };
            }
        } else if (heading == "Left") {
            nextCharacterImage = characterLeft;

            // CHANGE LAYOUT TO LEFT IF THERE IS ANOTHER LEFT AND IF NOT AT THE VERY LEFT
            if (((characterPosition.colCell - 1) % mapLayout.maxColCellEachRow) != 1 && ((characterPosition.colCell - 1) % mapLayout.maxColCellEachRow) < 8 && !isDesktop) {
                nextLayout = "Left";
            }

            // IF ON THE LEFTMOST OF THE MAP, TRANSLATE THE CHAR ONLY AND NOT THE OBJECT
            if (characterPosition.colCell % mapLayout.maxColCellEachRow == 0 || characterPosition.colCell % mapLayout.maxColCellEachRow == 2 && !isDesktop) {
                translation.current = { dx: `-${cellWidth.current}px`, dy: `0px` };
                translationObject.current = { dx: `0px`, dy: `0px` };
            } else if (!isDesktop) {
                translation.current = { dx: `0px`, dy: `0px` };
                translationObject.current = { dx: `${cellWidth.current}px`, dy: `0px` };
            } else { // IF DESKTOP JUST DO NORMAL TRANSLATION
                translation.current = { dx: `-${cellWidth.current}px`, dy: `0px` };
                translationObject.current = { dx: `0px`, dy: `$0px` };
            }
        }
        // CHANGE THE STATE HERE TO RE RENDER THE DISPLAYED MAP
        setCharacterImage(nextCharacterImage);
        setIsCharacterMoving(true);

        setTimeout(() => {
            // CHANGE THE STATE TO NOT MOVING
            setCharacterImage(characterIdle);
            moveRefCharacter(heading);
            setIsCharacterMoving(false);
            handleTouchEnd();
            if (nextLayout != "None") {
                changeMapLayout(nextLayout);
            }
        }, 300);
    }

    const changeMapLayout = (heading: string) => {
        console.log("Map Layout Changed!");
        if (heading == "Up") {
            setMapLayout(
                {
                    ...mapLayout,
                    rowCenter: mapLayout.rowCenter - 1,
                    colCenter: mapLayout.colCenter - mapLayout.maxColCellEachRow,
                }
            );
            // MADE HOVERED THUMBNAIL NOT BUGGING ON CHANGING LAYOUT
            setHoveredPortfolio(0);
        } else if (heading == "Down") {
            setMapLayout({
                ...mapLayout,
                rowCenter: mapLayout.rowCenter + 1,
                colCenter: mapLayout.colCenter + mapLayout.maxColCellEachRow,

            })
            setHoveredPortfolio(0);
        } else if (heading == "Right") {
            setMapLayout({
                ...mapLayout,
                colCenter: mapLayout.colCenter + 1,
            })
        } else if (heading == "Left") {
            setMapLayout({
                ...mapLayout,
                colCenter: mapLayout.colCenter - 1,
            })
        }
    }

    const moveRefCharacter = (heading: string) => {
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

    const isColliding = (heading: string) => {
        let isColliding = false;
        // CHECKING IF THE CHARACTER IS COLLIDING WITH OBJECT
        if (heading == "Up") {
            if (mapLayout.objectCell.includes(characterPosition.colCell - mapLayout.maxColCellEachRow)) {
                isColliding = true;
            }
        } else if (heading == "Right") {
            if (mapLayout.objectCell.includes(characterPosition.colCell + 1)) {
                isColliding = true;
            }
        } else if (heading == "Down") {
            if (mapLayout.objectCell.includes(characterPosition.colCell + mapLayout.maxColCellEachRow)) {
                isColliding = true;
            }
        } else if (heading == "Left") {
            if (mapLayout.objectCell.includes(characterPosition.colCell - 1)) {
                isColliding = true;
            }
        }
        return isColliding;
    }

    const clickPortfolio = useCallback((actualCol: number) => {
        // SAVES TO INDEXDB
        let bulbCoordinate = actualCol;
        let getPortfolio = {};
        // WHETER PRESSING OR ENTERING
        if (actualCol == -1) {
            bulbCoordinate = characterPosition.colCell;
        }
        setIndexDB(bulbCoordinate);

        mapLayout.portfolioCell.map((portfolio, k) => {
            if (portfolio.colCell === bulbCoordinate) {
                getPortfolio = portfolio;
            }
        });
        setPortfolio(prevState => ({
            ...prevState,
            ...getPortfolio
        }));

        setModalOpen(true);
    }, [characterPosition.colCell, mapLayout.portfolioCell]);

    const isPortfolioAround = (event: string) => {
        const key = event;
        const characterCoordinate = characterPosition.colCell;

        if (key === "Enter" && portfolioCoordinate.includes(characterCoordinate)) {
            clickPortfolio(-1);
            return true;
        } else {
            // BACK TO PARENT FUNCTION
            return false;
        }
    }

    const setIndexDB = async (characterCoordinate: number) => {
        let updatedVisitedPortofolio: number[];;
        try {
            const oldValue = await localforage.getItem("visitedPortofolio");

            if (Array.isArray(oldValue)) {
                // Check if characterCoordinate is not already in the array
                if (!oldValue.includes(characterCoordinate)) {
                    updatedVisitedPortofolio = [...oldValue, characterCoordinate];
                } else {
                    updatedVisitedPortofolio = oldValue;
                }
            } else {
                // initialize updatedVisitedPortofolio with characterCoordinate
                updatedVisitedPortofolio = [characterCoordinate];
            }
            setVisitedPortofolio(updatedVisitedPortofolio)

            await localforage.setItem("visitedPortofolio", updatedVisitedPortofolio);
        } catch (err) {
            console.log(err);
        }
    }

    const isThereAnyUnvisited = (direction: string) => {
        let startColFind = -1;
        let filteredPortfolios: number[] = [];
        let isThereAnyPortfolios = false;

        if (direction == "Up") {
            startColFind = (characterPosition.rowCell - 1) * mapLayout.maxColCellEachRow;

            filteredPortfolios = portfolios.filter(portfolio => (portfolio.colCell <= startColFind)).map(filteredPortfolio => {
                return filteredPortfolio.colCell;
            })

            if (filteredPortfolios.some(filteredPortfolio => !visitedPortofolio.includes(filteredPortfolio))) {
                isThereAnyPortfolios = true;
            }

        } else if (direction == "Right") {
            startColFind = characterPosition.rowCell * mapLayout.maxColCellEachRow;

            filteredPortfolios = portfolios.filter(portfolio => (portfolio.colCell > characterPosition.colCell && portfolio.colCell <= startColFind)).map(filteredPortfolio => {
                return filteredPortfolio.colCell;
            })

            if (filteredPortfolios.some(filteredPortfolio => !visitedPortofolio.includes(filteredPortfolio))) {
                isThereAnyPortfolios = true;
            }
        } else if (direction == "Down") {
            startColFind = (characterPosition.rowCell * mapLayout.maxColCellEachRow) + 1;

            filteredPortfolios = portfolios.filter(portfolio => (portfolio.colCell >= startColFind)).map(filteredPortfolio => {
                return filteredPortfolio.colCell;
            })

            if (filteredPortfolios.some(filteredPortfolio => !visitedPortofolio.includes(filteredPortfolio))) {
                isThereAnyPortfolios = true;
            }
        } else if (direction == "Left") {
            startColFind = (characterPosition.rowCell * mapLayout.maxColCellEachRow) - (mapLayout.maxColCellEachRow - 1);

            filteredPortfolios = portfolios.filter(portfolio => (portfolio.colCell < characterPosition.colCell && portfolio.colCell >= startColFind)).map(filteredPortfolio => {
                return filteredPortfolio.colCell;
            })

            if (filteredPortfolios.some(filteredPortfolio => !visitedPortofolio.includes(filteredPortfolio))) {
                isThereAnyPortfolios = true;
            }
        }

        return isThereAnyPortfolios;
    }

    const restartGame = async () => {
        try {
            await localforage.removeItem("visitedPortofolio");
            setVisitedPortofolio([]);
        } catch (err) {
            console.log(err);
        }
    }

    const isThereAPortfolio = (cellPosition: number) => {
        let isThereAPortfolio = false;
        for (const portfolio of mapLayout.portfolioCell) {
            if (portfolio.colCell === cellPosition) {
                isThereAPortfolio = true;
                break;
            }
        }
        return isThereAPortfolio;
    }

    // WHEN CHARACTER ABOVE THE PORTFOLIO USE EFFECT
    useEffect(() => {
        let isThereAPortfolio = false;
        let checkHSide = '-';
        let checkVSide = '-';

        const charachterColCurrentRowPos = Math.round((characterPosition.colCell % mapLayout.maxColCellEachRow));
        const charachterRowCurrentPos = characterPosition.rowCell;
        for (const portfolio of mapLayout.portfolioCell) {
            if (portfolio.colCell === characterPosition.colCell) {
                isThereAPortfolio = true;
                break;
            }
        }

        // IN DESKTOP, CHECK VERTICAL SIDE WORKs AS THE HINT FOR WHERE TO SHOW THE THUMBNAIL
        if (!isDesktop) {
            if (charachterRowCurrentPos == mapLayout.maxRowCell) {
                checkVSide = 'Bottom';
            } else {
                checkVSide = 'Top';
            }
        } else {
            if (charachterRowCurrentPos == mapLayout.maxRowCell || charachterRowCurrentPos != 1) {
                checkVSide = 'Bottom';
            } else {
                checkVSide = 'Top';
            }
        }


        if (charachterColCurrentRowPos > Math.round(mapLayout.maxColCellEachRow / 2) || charachterColCurrentRowPos == 0) {
            checkHSide = 'Right';
        } else {
            checkHSide = 'Left';
        }

        if (isThereAPortfolio) {

            const getPortfolio = portfolios.find(singlePortfolio => singlePortfolio.colCell === characterPosition.colCell);

            setPortfolioThumbnail(
                <div className={`fixed scale-100 transition-transform ease-in-out duration-300 grid grid-cols-12 py-4 px-2 w-64 h-36 rounded bg-modal-mlp border-modal-mlp shadow-sm z-50
                ${charachterColCurrentRowPos == 0 && checkVSide == 'Top' && !isDesktop
                        ? '-translate-x-20 translate-y-48' :
                        charachterColCurrentRowPos == 1 && checkVSide == 'Top' && !isDesktop
                            ? 'translate-x-20 translate-y-48' :
                            charachterColCurrentRowPos > 0 && checkVSide == 'Top' && !isDesktop
                                ? 'translate-y-48' :
                                charachterColCurrentRowPos == 0 && checkVSide == 'Bottom' && !isDesktop
                                    ? '-translate-x-20 -translate-y-48' :
                                    charachterColCurrentRowPos == 1 && checkVSide == 'Bottom' && !isDesktop
                                        ? 'translate-x-20 -translate-y-48' :
                                        charachterColCurrentRowPos > 0 && checkVSide == 'Bottom' && !isDesktop
                                            ? '-translate-y-48 6' :
                                            checkHSide == 'Left' && checkVSide == 'Top' && isDesktop
                                                ? 'translate-x-44 translate-y-28'
                                                : checkHSide == 'Right' && checkVSide == 'Top' && isDesktop
                                                    ? '-translate-x-44 translate-y-28'
                                                    : checkHSide == 'Left' && checkVSide == 'Bottom' && isDesktop
                                                        ? 'translate-x-44 -translate-y-28'
                                                        : checkHSide == 'Right' && checkVSide == 'Bottom' && isDesktop
                                                            ? '-translate-x-44 -translate-y-28'
                                                            : 'translate-x-44 translate-y-28'
                    }
                `}
                    id='thumbnail-portfolio'
                >
                    <div className="col-span-12">
                        <Image
                            src={`/images/portfolios/${getPortfolio?.imagesPath[0]}.png`}
                            className={`rounded w-full h-full ${!visitedPortofolio.includes(characterPosition.colCell) ? 'blur-sm' : null}`}
                            title={`Image of ${getPortfolio?.title}`}
                            alt={`Image of ${getPortfolio?.title}`}
                            quality={25}
                            height={107}
                            width={230}
                            blurDataURL="/images/placeholder-image.png"
                            placeholder="blur"
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                                width: '100%',
                                maxWidth: '238px',
                                maxHeight: '110px'
                            }}
                        />
                        <div className='dark-overlay'></div>
                        <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            <div className='flex shadow-sm items-center justify-center text-base leading-normal font-semibold p-4 text-black text-center h-16 w-16 rounded-full bg-blood-80 hover:scale-125 transition-transform ease-in-out duration-300 cursor-pointer'
                                onClick={() => clickPortfolio(characterPosition.colCell)}
                            >
                                {`Show`}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    }, [characterPosition, mapLayout.portfolioCell, mapLayout.maxColCellEachRow, mapLayout.maxRowCell, clickPortfolio, isDesktop, visitedPortofolio]);

    // PORTFOLIO HOVER USE EFFECT
    useEffect(() => {
        // ABORT IF NOT HOVERED
        if (hoveredPortfolio == 0) return;

        let checkHSide = '-';
        let checkVSide = '-';

        const charachterColCurrentRowPos = Math.round((hoveredPortfolio % mapLayout.maxColCellEachRow));
        const charachterRowCurrentPos = Math.ceil(hoveredPortfolio / mapLayout.maxColCellEachRow);

        if (charachterRowCurrentPos > (mapLayout.rowCenter - 1)) {
            checkVSide = 'Bottom';
        } else {
            checkVSide = 'Top';
        }

        if (charachterColCurrentRowPos > Math.round(mapLayout.maxColCellEachRow / 2) || charachterColCurrentRowPos == 0) {
            checkHSide = 'Right';
        } else {
            checkHSide = 'Left';
        }



        const getPortfolio = portfolios.find(singlePortfolio => singlePortfolio.colCell === hoveredPortfolio);

        setPortfolioThumbnailOnHover(
            <div className={`fixed scale-100 transition-transform ease-in-out duration-300 grid grid-cols-12 py-4 px-2 w-64 h-36 rounded bg-modal-mlp border-modal-mlp shadow-sm z-50
                ${charachterColCurrentRowPos == 0 && checkVSide == 'Top' && !isDesktop
                    ? '-translate-x-20 translate-y-48' :
                    charachterColCurrentRowPos == 1 && checkVSide == 'Top' && !isDesktop
                        ? 'translate-x-20 translate-y-48' :
                        charachterColCurrentRowPos > 0 && checkVSide == 'Top' && !isDesktop
                            ? 'translate-y-48' :
                            charachterColCurrentRowPos == 0 && checkVSide == 'Bottom' && !isDesktop
                                ? '-translate-x-20 -translate-y-48' :
                                charachterColCurrentRowPos == 1 && checkVSide == 'Bottom' && !isDesktop
                                    ? 'translate-x-20 -translate-y-48' :
                                    charachterColCurrentRowPos > 0 && checkVSide == 'Bottom' && !isDesktop
                                        ? '-translate-y-48 6' :
                                        checkHSide == 'Left' && checkVSide == 'Top' && isDesktop
                                            ? 'translate-x-44 translate-y-28'
                                            : checkHSide == 'Right' && checkVSide == 'Top' && isDesktop
                                                ? '-translate-x-44 translate-y-28'
                                                : checkHSide == 'Left' && checkVSide == 'Bottom' && isDesktop
                                                    ? 'translate-x-44 -translate-y-28'
                                                    : checkHSide == 'Right' && checkVSide == 'Bottom' && isDesktop
                                                        ? '-translate-x-44 -translate-y-28'
                                                        : 'translate-x-44 translate-y-28'
                }
                `}
                id='thumbnail-portfolio=hover'
                style={{ zIndex: 70 }}
            >
                <div className="col-span-12">
                    <Image
                        src={`/images/portfolios/${getPortfolio?.imagesPath[0]}.png`}
                        className={`rounded w-full h-full ${!visitedPortofolio.includes(hoveredPortfolio) ? 'blur-sm' : null}`}
                        title={`Image of ${getPortfolio?.title}`}
                        alt={`Image of ${getPortfolio?.title}`}
                        quality={25}
                        height={107}
                        width={230}
                        blurDataURL="/images/placeholder-image.png"
                        placeholder="blur"
                        style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%',
                            maxWidth: '238px',
                            maxHeight: '110px'
                        }}
                    />
                    <div className='dark-overlay'></div>
                </div>
            </div>
        );

    }, [hoveredPortfolio, mapLayout.portfolioCell, mapLayout.maxColCellEachRow, mapLayout.maxRowCell, mapLayout.rowCenter, isDesktop, visitedPortofolio]);


    return (
        <>
            <div className="col-span-12 grid grid-cols-12 gap-5 pb-10 sm:pb-0 sm:pl-24 sm:pr-24 -mt-16 sm:-mt-12 h-fit z-20">
                <div className='col-span-12 sm:col-span-6'>
                    <div className='inline-flex justify-center items-center p-4 bg-red-700/25 text-blood text-lg font-medium drop-shadow-xl w-full sm:w-fit max-h-11 rounded-xl select-none'>
                        <span className="font-extrabold">{`${visitedPortofolio.length}`}</span>&nbsp;{`/`}&nbsp;<span className="font-extrabold">{`${totalProjects}`}</span>&nbsp;{`Projects Found`}
                    </div>
                </div>
            </div>
            <div className="col-span-12 sm:pl-24 sm:pr-24 -mt-32 sm:-mt-16" id="game-map">
                <div className="relative h-96 shadow shadow-black rounded"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="dark-overlay-game rounded"></div>
                    {visitedPortofolio.length == totalProjects && (
                        <div className="dark-overlay-win rounded">
                            <div className="grid grid-cols-12 p-4 h-full gap-6 overflow-auto">
                                <div className="col-span-12 flex justify-center items-end text-center">
                                    <span className="font-semibold text-4xl text-blood shadow shadow-black select-none">{`You've Found All The Projects!`}</span>
                                </div>
                                <div className='col-span-6 flex justify-end items-center sm:items-start'>
                                    <Link href={`/about`}>
                                        <div className='inline-flex justify-center items-center text-center p-4 bg-red-700/25 text-blood text-lg font-medium drop-shadow-xl max-h-11 rounded-xl cursor-pointer text-blood hover:text-white hover:scale-125 transition-transform ease-in-out duration-150'>
                                            <span className="font-semibold text-xl" >{`About`}</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-span-6 flex justify-start items-center sm:items-start'>
                                    <div className='inline-flex justify-center items-center p-4 bg-red-700/25 text-blood text-lg font-medium drop-shadow-xl max-h-11 rounded-xl cursor-pointer text-blood hover:text-white hover:scale-125 transition-transform ease-in-out duration-150' onClick={() => restartGame()}>
                                        <span className="font-semibold text-xl" >{`Restart`}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div id="cell-row" className={`grid grid-cols-3 sm:grid-cols-9 gap-0 p-4 h-full overflow-hidden`}>
                        {
                            [...Array(mapLayout.maxColCellDisplayed)].map((x, j) => {
                                // These rules created to make it dynamic when displaying/maping the game map (The key is the displayed COL CENTER).
                                // (if you want to change the map dimension, just change the variable ref declared at the very above *use odds number*).
                                // The rules to get the current iteration of row and col is:
                                // GET CURRENT COL RULES= (current iteration + current displayed coll center) - (total coll for a row + floor of total coll for a row / 2).
                                // Get curret row = (current iteration(j) + center coll of displayed map) - total distance to the first column of the displayed map from center coll of displayed map.
                                const currentCol = (j + mapLayout.colCenter) - (mapLayout.maxColCellEachRow + Math.floor(mapLayout.maxColCellEachRowDisplayed / 2))

                                if (actualCol == 0) {
                                    actualCol = currentCol;
                                } else {
                                    actualCol = actualCol + 1;
                                }

                                // IF THE CURRENT COL IS THE LAST COL OF THE DISPLAYED MAP, THEN ADD ACTUAL COLL.
                                if (j % mapLayout.maxColCellEachRowDisplayed == 0 && j != 0 && !isDesktop) {
                                    actualCol = actualCol + (mapLayout.maxColCellEachRow - mapLayout.maxColCellEachRowDisplayed);
                                }

                                const currentRow = Math.ceil(actualCol / mapLayout.maxColCellEachRow);


                                return (
                                    <div key={j}
                                        id={`cell-row-${currentRow}-col-${actualCol}`}
                                        className={`character-container flex items-center justify-center col-span-1 text-center border border-blood-darken rounded-sm relative`}
                                    >
                                        {/* CONDITION IF ROW & COLL CELL MATCH, TO SHOW CHARACTER  */}
                                        {
                                            (currentRow == characterPosition.rowCell && actualCol == characterPosition.colCell) ? (
                                                // <Character />
                                                <>
                                                    <Image
                                                        alt="Character"
                                                        className={`z-50 ${portfolioCoordinate.includes(characterPosition.colCell) ? 'cursor-pointer' : 'cursor-default'}`}
                                                        src={(portfolioCoordinate.includes(characterPosition.colCell) && isIdle && !visitedPortofolio.includes(actualCol)) ? characterJump : characterImage}
                                                        onClick={() => portfolioCoordinate.includes(characterPosition.colCell) ? clickPortfolio(-1) : null}
                                                        fill={true}
                                                        priority={true}
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

                                                    {/* If the character not at the very top show it */}
                                                    {/* if the it's in desktop and from character coll cell downwards there is an unvisited portfolio show it */}
                                                    <div className={`
                                                            ${isIdle
                                                            && characterPosition.rowCell > 1
                                                            && isThereAnyUnvisited("Up")
                                                            ? 'visible'
                                                            : 'invisible'
                                                        }
                                                            absolute translate-y-[-50%] -top-4 z-30`}>
                                                        <ChevronDoubleUpIcon className="h-14 w-h-14 text-orange-600 shadow-2xl animate-pulse-arrow-up" aria-hidden="true"
                                                            style={{
                                                                transition: 'transform 0.3s ease-in-out',
                                                                transform: isCharacterMoving ? `translate(${translation.current.dx}, ${translation.current.dy})` : 'none',
                                                            }}
                                                        />
                                                    </div>
                                                    <div className={`
                                                            ${isIdle
                                                            && characterPosition.colCell < mapLayout.maxColCell
                                                            && characterPosition.colCell % mapLayout.maxColCellEachRow !== 0
                                                            && isThereAnyUnvisited("Right")
                                                            ? 'visible'
                                                            : 'invisible'
                                                        }
                                                            absolute translate-x-[50%] -right-4 z-30`}>
                                                        <ChevronDoubleRightIcon className="h-14 w-h-14 text-orange-600 shadow-2xl animate-pulse-arrow-right" aria-hidden="true"
                                                            style={{
                                                                transition: 'transform 0.3s ease-in-out',
                                                                transform: isCharacterMoving ? `translate(${translation.current.dx}, ${translation.current.dy})` : 'none',
                                                            }}
                                                        />
                                                    </div>
                                                    <div className={`
                                                            ${isIdle
                                                            && characterPosition.rowCell < mapLayout.maxRowCell
                                                            && isThereAnyUnvisited("Down")
                                                            ? 'visible'
                                                            : 'invisible'
                                                        }
                                                            absolute translate-y-[50%] -bottom-4 z-30`}>
                                                        <ChevronDoubleDownIcon className="h-14 w-h-14 text-orange-600 shadow-2xl animate-pulse-arrow-down" aria-hidden="true"
                                                            style={{
                                                                transition: 'transform 0.3s ease-in-out',
                                                                transform: isCharacterMoving ? `translate(${translation.current.dx}, ${translation.current.dy})` : 'none',
                                                            }}
                                                        />
                                                    </div>
                                                    <div className={`
                                                            ${isIdle
                                                            && characterPosition.colCell > 1
                                                            && characterPosition.colCell % mapLayout.maxColCellEachRow !== 1
                                                            && isThereAnyUnvisited("Left")
                                                            ? 'visible'
                                                            : 'invisible'
                                                        }
                                                            absolute translate-x-[-50%] -left-4 z-30`}>
                                                        <ChevronDoubleLeftIcon className="h-14 w-h-14 text-orange-600 shadow-2xl animate-pulse-arrow-left" aria-hidden="true"
                                                            style={{
                                                                transition: 'transform 0.3s ease-in-out',
                                                                transform: isCharacterMoving ? `translate(${translation.current.dx}, ${translation.current.dy})` : 'none',
                                                            }}
                                                        />
                                                    </div>
                                                </>

                                            ) : null
                                        }

                                        {/* CONDITION IF COLL CELL MATCH, TO SHOW PORTFOLIO OBJECT */}
                                        {(isThereAPortfolio(actualCol)
                                            && visitedPortofolio.length != totalProjects
                                            && actualCol == characterPosition.colCell) ?
                                            portfolioThumbnail : (
                                                <div className={`fixed scale-0 transition-transform ease-in-out duration-300 grid grid-cols-12 py-4 px-2 w-64 h-36 rounded bg-modal-mlp border-modal-mlp shadow-sm z-50`}
                                                    id='thumbnail-portfolio'
                                                >
                                                    <div className="col-span-12">
                                                        <div className='dark-overlay'></div>
                                                        <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                                            <div className='flex shadow-sm items-center justify-center text-base leading-normal font-semibold p-4 text-black text-center h-16 w-16 rounded-full bg-blood-80 hover:scale-125 transition-transform ease-in-out duration-300 cursor-pointer'>
                                                                {`Show`}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        {mapLayout.portfolioCell.map((portfolio, k) => (
                                            actualCol === portfolio.colCell ? (
                                                <div key={k}
                                                    className='flex items-center justify-center'
                                                    style={{
                                                        position: 'absolute',
                                                        transition: 'transform 0.3s ease-in-out',
                                                        transform: isCharacterMoving ? `translate(${translationObject.current.dx}, ${translationObject.current.dy})` : 'none',

                                                    }}
                                                >
                                                    <LightBulbIcon
                                                        className={`${isIdle && !visitedPortofolio.includes(actualCol) ? 'animate-bounce-mlp' : ''} ${visitedPortofolio.includes(actualCol) ? 'text-red-900' : 'text-blood'} shadow cursor-pointer hover:text-red-900 z-40`} aria-hidden="true" onClick={() => clickPortfolio(portfolio.colCell)}
                                                        style={{
                                                            objectFit: 'cover',
                                                            width: '45%',
                                                            height: '45%',
                                                        }}
                                                        onMouseEnter={() => setHoveredPortfolio(portfolio.colCell)}
                                                        onMouseLeave={() => setHoveredPortfolio(0)}
                                                    />
                                                    {(hoveredPortfolio != 0
                                                        && visitedPortofolio.length != totalProjects
                                                        && actualCol == hoveredPortfolio) ?
                                                        portfolioThumbnailOnHover : (
                                                            <div className={`fixed scale-0 transition-transform ease-in-out duration-300 grid grid-cols-12 py-4 px-2 w-64 h-36 rounded bg-modal-mlp border-modal-mlp shadow-sm z-50`}
                                                                id='thumbnail-portfolio=hover'
                                                                style={{ zIndex: 70 }}
                                                            >
                                                                <div className="col-span-12">
                                                                    <div className='dark-overlay'></div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            ) : null
                                        ))}
                                    </div>
                                )
                            })}
                    </div>
                </div>
                <ModalPortfolio portfolio={portfolio} modalOpen={modalOpen} setModalOpen={setModalOpen} cancelButtonRef={cancelButtonRef} />
            </div >
        </>
    )
}