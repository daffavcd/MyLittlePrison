"use client";
import { useState, useEffect, useRef, Fragment } from 'react';
import Image from 'next/image';
import Modal from './modal';
import { InformationCircleIcon } from '@heroicons/react/24/outline'

export default function Game() {

    const [modalOpen, setModalOpen] = useState(false)

    const cancelButtonRef = useRef(null)

    const [isCharacterMoving, setIsCharacterMoving] = useState(false);

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
            portfolioCell: [
                {
                    colCell: 51,
                    title: "My Desired Utopias - Find Your Restaurant Catalog Here!",
                    desc: '🍔🍕 My Desired Utopias is the culmination of my Dicoding "Becoming a Web Front- End Developer Expert" certification journey. This project showcases modern front-end development, featuring a Progressive Web App (PWA) that fetches restaurant data from the Dicoding server using Hapi, Webpack, and pure CSS/JS',
                    repoLink: 'https://github.com/daffavcd/restaurant-catalog',
                    features: [
                        'Seamless catalog data fetching from Dicoding&quot;s API',
                        'Responsive design with pure CSS/JS for optimal user experience',
                        'Harnessing the power of Hapi server for efficient routin',
                        'Embracing the PWA paradigm for offline access and speed',
                        'Upholding code quality through automated testing',
                    ],
                    imagesPath: [
                        '/images/portfolios/resto_1',
                        '/images/portfolios/resto_2',
                    ],
                    techImagesPath: [
                        '/images/langs/javascript',
                        '/images/langs/css',
                        '/images/langs/webpack',
                    ]
                },
                {
                    colCell: 37,
                    title: "Chatting Converse: Real-Time Chat Web App with Pusher Integration and MySQL",
                    desc: '⚡️💬 An immersive real-time chat web application designed to bring people closer through seamless communication. This project leverages the power of Pusher for real-time updates and integrates jQuery for dynamic interactions. The conversations are not only live but also persistent, thanks to the integration with MySQL for storing and retrieving chat data',
                    repoLink: 'https://github.com/daffavcd/chatting-converse',
                    features: [
                        'Experience the excitement of instant messaging with real-time updates. Chatting Converse ensures that messages are delivered and displayed in a fraction of a second.',
                        'The magic of real-time communication comes to life through Pusher, enabling users to chat simultaneously and experience the thrill of instant interactions',
                        'Every conversation matters. By integrating with MySQL, Chatting Converse ensures that your conversations are saved',
                        'Allowing users to share images and documents. File are seamlessly integrated into the chat interface, enhancing the overall communication experience.',
                    ],
                    imagesPath: [
                        '/images/portfolios/chat_1',
                        '/images/portfolios/chat_2',
                        '/images/portfolios/chat_3',
                        '/images/portfolios/chat_4',
                    ],
                    techImagesPath: [
                        '/images/langs/javascript',
                        '/images/langs/laravel',
                        '/images/langs/php',
                        '/images/langs/jquery',
                        '/images/langs/pusher',
                        '/images/langs/mysql',
                    ]
                },
                {
                    colCell: 30,
                    title: "Ticketing API Bot: Enhancing Ticketing Management with Web Service and Telegram Bot Integration",
                    desc: '🌐🔐 Ticketing API Bot project is a solution designed to streamline and optimize ticketing management for Nakula Sadewa through the synergistic integration of a web service and a Telegram bot. By employing technologies such as a RESTful API server, Telegram bot capabilities, and the secure Sanctum token-based authentication, this project epitomizes efficiency and modernity in digital operations',
                    repoLink: 'https://github.com/chicken-porridge/ticketing-api-bot',
                    features: [
                        "RESTful API server, acting as a bridge that connects Nakula Sadewa&quot;s multi-platform applications. This enables seamless communication and data exchange for efficient ticketing management.",
                        'The Telegram bot takes user interaction to the next level. Users can effortlessly create, view, and manage tickets directly from the convenience of their Telegram app, enhancing accessibility and user engagement',
                        'Security is paramount. This project leverages Sanctum token authentication to ensure secure access to the system, safeguarding sensitive data and ensuring user privacy.',
                    ],
                    imagesPath: [
                        '/images/portfolios/ticket_1',
                        '/images/portfolios/ticket_2',
                        '/images/portfolios/ticket_2',
                        '/images/portfolios/ticket_2',
                    ],
                    techImagesPath: [
                        '/images/langs/laravel',
                        '/images/langs/php',
                        '/images/langs/botman',
                    ]
                },
            ],
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
        // IN THE CASE OF OBJECT IMAGE IS OUTSIDE OF THE RENDERED IMAHE 
        // OBJECT ANIMATION CANNOT ANIMATED
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

            // DONT ANIMATE OBJECT DOWN IF THE CHARACTER WITHIN TWO ROW FROM THE TOP OR BOTTOM
            if (characterPosition.current.rowCell <= 2 || characterPosition.current.rowCell == mapLayout.current.maxRowCell) {
                translationObject.current = { dx: `0px`, dy: `0px` };
            } else {
                translationObject.current = { dx: `0px`, dy: `-${cellHeight.current}px` };
            }

        } else if (heading == "Right") {
            translation.current = { dx: `${cellWidth.current}px`, dy: `0px` };
            translationObject.current = { dx: `0px`, dy: `$0px` };
        } else if (heading == "Down") {
            // MOVE DOWN DISPLAYED MAP ONCE IF THERE IS ANOTHER BOTTOM AND IF NOT AT THE VERY BOTTOM
            if (characterPosition.current.rowCell + 1 < mapLayout.current.maxRowCell && characterPosition.current.rowCell + 1 > mapLayout.current.rowCenter) {
                mapLayout.current.rowCenter = mapLayout.current.rowCenter + 1;
                mapLayout.current.colCenter = mapLayout.current.colCenter + mapLayout.current.maxColCellEachRow;
            }

            translation.current = { dx: `0px`, dy: `${cellHeight.current}px` };

            // DONT ANIMATE OBJECT UP IF THE CHARACTER WITHIN TWO ROW FROM THE TOP OR BOTTOM
            if (characterPosition.current.rowCell == 1 || characterPosition.current.rowCell == mapLayout.current.maxRowCell - 1) {
                translationObject.current = { dx: `0px`, dy: `0px` };
            } else {
                translationObject.current = { dx: `0px`, dy: `${cellHeight.current}px` };
            }

        } else if (heading == "Left") {
            translation.current = { dx: `-${cellWidth.current}px`, dy: `0px` };
            translationObject.current = { dx: `0px`, dy: `$0px` };
        }

        // CHANGE THE STATE HERE TO RE RENDER THE DISPLAYED MAP
        setIsCharacterMoving(true);
        setTimeout(() => {
            moveRefCharacter(heading);
            // CHANGE THE STATE TO NOT MOVING
            setIsCharacterMoving(false);
        }, 200);
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
        <div className="col-span-12 pl-24 pr-24" id="game-map">
            <div className="relative h-96">
                <div className="dark-overlay-game rounded"></div>
                <div id="cell-row" className="grid grid-cols-9 gap-0 p-4 h-full">
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
                                                src="/images/sprites/0_Warrior_Idle Blinking_000.png"
                                                fill={true}
                                                sizes="(max-width: 150px) 100vw, (max-width: 300px) 50vw, 33vw"
                                                style={{
                                                    height: '100%',
                                                    width: '100%',
                                                    position: 'absolute',
                                                    transition: 'transform 0.2s ease-in-out',
                                                    transform: isCharacterMoving ? `translate(${translation.current.dx}, ${translation.current.dy})` : 'none',
                                                }}
                                            />
                                        ) : null
                                    }
                                    {/* CONDITION IF COLL CELL MATCH, TO SHOW PORTFOLIO  */}
                                    {mapLayout.current.portfolioCell.map((portfolio, k) => (
                                        currentCol === portfolio.colCell ? (
                                            <InformationCircleIcon
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
            </div>
            <Modal portfolio={portfolio} modalOpen={modalOpen} setModalOpen={setModalOpen} cancelButtonRef={cancelButtonRef} />
        </div >
    )
}