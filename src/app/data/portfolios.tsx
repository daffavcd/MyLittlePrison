interface Portfolio {
    colCell: number;
    year: string;
    desc: string;
    repoLink: string;
    title: string;
    features: string[];
    imagesPath: string[];
    techImagesPath: string[];
}

export const portfolios: Portfolio[] = [
    {
        colCell: 51,
        title: "My Desired Utopias - Find Your Restaurant Catalog Here!",
        desc: '🍔🍕 My Desired Utopias is the culmination of my Dicoding "Becoming a Web Front- End Developer Expert" certification journey. This project showcases modern front-end development, featuring a Progressive Web App (PWA) that fetches restaurant data from the Dicoding server using Hapi, Webpack, and pure CSS/JS',
        repoLink: 'https://github.com/daffavcd/restaurant-catalog',
        year: '2022',
        features: [
            'Upholding code quality through automated testing.',
            "Seamless catalog data fetching from Dicoding's API.",
            'Harnessing the power of Hapi server for efficient routin.',
            'Embracing the PWA paradigm for offline access and speed.',
            'Responsive design with pure CSS/JS for optimal user experience.',
        ],
        imagesPath: [
            'resto_1',
            'resto_2',
            'resto_3',
            'resto_4',
            'resto_5',
        ],
        techImagesPath: [
            'javascript',
            'css',
            'webpack',
        ]
    },
    {
        colCell: 37,
        title: "Chatting Converse: Real-Time Chat Web App with Pusher Integration and MySQL",
        desc: '⚡️💬 An immersive real-time chat web application designed to bring people closer through seamless communication. This project leverages the power of Pusher for real-time subscription updates and integrates jQuery for dynamic interactions such as incoming message notifications. The conversations are not only live but also persistent, due to the integration of MySQL for storing and retrieving chat data',
        repoLink: 'https://github.com/daffavcd/chatting-converse',
        year: '2021',
        features: [
            'Share images and documents seamlessly in the chat interface.',
            'MySQL integration saves and stores every important conversation.',
            'Experience instant interactions via Pusher for simultaneous chatting.',
            'Enjoy instant messaging with real-time updates on Chatting Converse.',
        ],
        imagesPath: [
            'chat_1',
            'chat_2',
            'chat_3',
            'chat_4',
        ],
        techImagesPath: [
            'javascript',
            'laravel',
            'php',
            'jquery',
            'pusher',
            'mysql',
        ]
    },
    {
        colCell: 30,
        title: "Ticketing API Bot: Enhancing Ticketing Management with Web Service and Telegram Bot Integration",
        desc: '🌐🔐 Ticketing API Bot project is a solution designed to streamline and optimize ticketing management for Nakula Sadewa through the synergistic integration of a web service and a Telegram bot. By employing technologies such as a RESTful API server, Telegram bot capabilities, and the secure Sanctum token-based authentication, this project epitomizes efficiency and modernity in digital operations',
        repoLink: 'https://github.com/chicken-porridge/ticketing-api-bot',
        year: '2022',
        features: [
            'Security ensured through Sanctum token authentication for data privacy.',
            'Telegram bot using BotMan to elevates user interaction—create and manage tickets.',
            "RESTful API server connects Nakula Sadewa's multi-platform apps for efficient ticketing.",
        ],
        imagesPath: [
            'ticket_1',
            'ticket_2',
            'ticket_3',
            'ticket_4',
        ],
        techImagesPath: [
            'laravel',
            'php',
            'botman',
            'mysql',
        ]
    },
    {
        colCell: 43,
        title: "MNE-1001 - CSR Monitoring and Evaluation Web App with SPA Architecture",
        desc: "🌐📊 SR-APP is a project by PT Olahkarsa Inovasi Indonesia that aimed at revolutionizing CSR program management through the development of a cutting-edge web application. One of their products, MNE-1001, was a project that geared towards establishing a solution that effectively manages and monitors CSR programs in a streamlined and integrated manner. The web app built on the Single Page Application (SPA) architecture and seamlessly integrates Laravel and ReactJS using InertiaJS. While primarily focused on front-end development, I am also sometimes adjusting to the needs of the back-end team to ensure the project's success",
        repoLink: 'Private',
        year: '2022',
        features: [
            'Backend powered by Laravel, front-end by ReactJS.',
            "Single Page App design for smooth user experience, reduced reloads.",
            'Provide an efficient platform for managing and monitoring CSR programs.',
            'Enabling stakeholders to track the progress and effectiveness of the CSR projects in real time.',
        ],
        imagesPath: [
            'mne_1',
            'mne_2',
            'mne_3',
            'mne_4',
            'mne_5',
            'mne_6',
            'mne_7',
            'mne_8',
            'mne_9',
            'mne_10',
            'mne_11',
            'mne_12',
        ],
        techImagesPath: [
            'react',
            'laravel',
            'php',
            'inertia',
            'mysql',
            'bootstrap',
        ]
    },
    {
        colCell: 40,
        title: "J-Golf: Elevating Golf Experience Through Mobile-Centric Web Application",
        desc: "⛳️🏌️‍♂️ J-Golf—an innovative project developed under PT Javadwipa Duta Mandiri. J-Golf is a revolutionary mobile-centric web application that redefines the golfing experience. Designed with a focus on mobile usage, J-Golf brings forth a comprehensive solution for golf enthusiasts. The application's core functionalities encompass managing scoring rankings during golf rounds with friends, offering golf course packages for lessons and caddie appointments, creating and participating in events, and providing leaderboards and golf statistics for both personal and community analysis",
        repoLink: 'Private',
        year: '2021',
        features: [
            'Join, organize golf events in J-Golf for exhibition and competition.',
            "Manage scores, adding competitiveness to golf rounds with friends.",
            "Track standings, compare stats on dynamic leaderboards for insights.",
            'Improve golfing skills with varied lessons; schedule personalized caddie training.',
        ],
        imagesPath: [
            'jgolf_1',
            'jgolf_2',
            'jgolf_3',
            'jgolf_4',
            'jgolf_5',
            'jgolf_6',
            'jgolf_7',
            'jgolf_8',
            'jgolf_9',
            'jgolf_10',
            'jgolf_11',
            'jgolf_12',
            'jgolf_13',
        ],
        techImagesPath: [
            'laravel',
            'php',
            'mysql',
            'bootstrap',
        ]
    },
    {
        colCell: 54,
        title: "BLB-Gadang: Streamlining Inventory Management with Web Application",
        desc: "📦📄 BLB-Gadang—an innovative project undertaken for Bengkel Las & Bubut Gadang Jalan Raya Gadang 54, Sukun, Malang. BLB-Gadang is a transformative web application designed to transition manual bookkeeping processes into a seamless digital solution. This project aims to enhance inventory management, simplify the tracking of incoming and outgoing goods, automate transaction calculations, and eliminate the need for handwritten records. By embracing technology, BLB-Gadang empowers the client with efficient data management and streamlined workflows",
        repoLink: 'Private',
        year: '2021',
        features: [
            'Automation for precise transaction calculations, reducing errors.',
            "Handling incoming and outgoing goods, keeping track of inventory.",
            'Create PDF transaction reports for organized record-keeping and sharing.',
        ],
        imagesPath: [
            'blb_1',
            'blb_2',
            'blb_3',
            'blb_4',
            'blb_5',
            'blb_6',
            'blb_7',
            'blb_8',
        ],
        techImagesPath: [
            'laravel',
            'php',
            'mysql',
            'bootstrap',
        ]
    },
    {
        colCell: 32,
        title: "Kamar Pasien: Medical Emergency Reservations Using Google Maps API Integration",
        desc: "🚑🗺️ Kamar Pasien was my milestone project during the Dicoding SIB Kampus Merdeka Program. This project aim to be a panic button, providing users with a seamless and efficient way to make medical reservations during emergencies. Kamar Pasien possess Google Maps API JavaScript to display nearby medical facilities, enabling users to access the routes and location using Google Maps to the intended facilty. Kamar Pasien stands out by offering a mobile web application experience with Progressive Web App",
        repoLink: 'Private',
        year: '2022',
        features: [
            "Quick medical emergency reservations with panic button feature.",
            'Can be installed on User devices for instant access as a PWA App.',
            'Google Maps API to find nearby medical facilities for easy access.',
        ],
        imagesPath: [
            'kp_1',
            'kp_2',
            'kp_3',
            'kp_4',
            'kp_5',
            'kp_6',
            'kp_7',
            'kp_8',
            'kp_9',
            'kp_10',
            'kp_11',
            'kp_12',
            'kp_13',
        ],
        techImagesPath: [
            'javascript',
            'css',
            'supabase',
            'webpack',
        ]
    },
];
