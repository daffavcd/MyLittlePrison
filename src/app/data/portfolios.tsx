interface Portfolio {
    colCell: number;
    title: string;
    desc: string;
    repoLink: string;
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
        features: [
            "Seamless catalog data fetching from Dicoding's API",
            'Responsive design with pure CSS/JS for optimal user experience',
            'Harnessing the power of Hapi server for efficient routin',
            'Embracing the PWA paradigm for offline access and speed',
            'Upholding code quality through automated testing',
        ],
        imagesPath: [
            'resto_1',
            'resto_2',
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
        desc: '⚡️💬 An immersive real-time chat web application designed to bring people closer through seamless communication. This project leverages the power of Pusher for real-time updates and integrates jQuery for dynamic interactions. The conversations are not only live but also persistent, thanks to the integration with MySQL for storing and retrieving chat data',
        repoLink: 'https://github.com/daffavcd/chatting-converse',
        features: [
            'Experience the excitement of instant messaging with real-time updates. Chatting Converse ensures that messages are delivered and displayed in a fraction of a second.',
            'The magic of real-time communication comes to life through Pusher, enabling users to chat simultaneously and experience the thrill of instant interactions',
            'Every conversation matters. By integrating with MySQL, Chatting Converse ensures that your conversations are saved',
            'Allowing users to share images and documents. File are seamlessly integrated into the chat interface, enhancing the overall communication experience.',
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
        features: [
            "RESTful API server, acting as a bridge that connects Nakula Sadewa's multi-platform applications. This enables seamless communication and data exchange for efficient ticketing management.",
            'The Telegram bot takes user interaction to the next level. Users can effortlessly create, view, and manage tickets directly from the convenience of their Telegram app, enhancing accessibility and user engagement',
            'Security is paramount. This project leverages Sanctum token authentication to ensure secure access to the system, safeguarding sensitive data and ensuring user privacy.',
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
        desc: "🌐📊 SR-APP is a project aimed at revolutionizing CSR program management through the development of a cutting-edge web application. Named MNE-1001, this web app is built on the Single Page Application (SPA) architecture and seamlessly integrates Laravel and ReactJS using InertiaJS. This project is geared towards establishing an all-encompassing solution that effectively manages and monitors CSR programs in a streamlined and integrated manner. While primarily focused on front-end development, I am also proficient in adjusting to the needs of the back-end team to ensure the project's success",
        repoLink: 'Private',
        features: [
            "Adopting a Single Page Application architecture ensures a smooth and seamless user experience by minimizing page reloads and enhancing overall responsiveness.",
            'Leveraging the power of Laravel as the back-end and ReactJS as the front-end',
            'The core objective of MNE-1001 is to provide an efficient platform for managing and monitoring CSR programs. ',
            'The web app offers comprehensive monitoring capabilities, enabling stakeholders to track the progress, impact, and effectiveness of CSR projects in real time.',
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
];
