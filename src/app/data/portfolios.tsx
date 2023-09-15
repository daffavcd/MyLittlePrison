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
        desc: '⚡️💬 An immersive real-time chat web application designed to bring people closer through seamless communication. This project leverages the power of Pusher for real-time subscription updates and integrates jQuery for dynamic interactions such as incoming message notifications.<break> The conversations are not only live but also persistent, due to the integration of MySQL for storing and retrieving chat data',
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
        desc: '🌐🔐 Ticketing API Bot project is a solution designed to streamline and optimize ticketing management for Nakula Sadewa through the synergistic integration of a web service and a Telegram bot.<break> By employing technologies such as a RESTful API server, Telegram bot capabilities, and the secure Sanctum token-based authentication, this project epitomizes efficiency and modernity in digital operations',
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
        desc: "🌐📊 SR-APP is a project by PT Olahkarsa Inovasi Indonesia that aimed at revolutionizing CSR program management through the development of a cutting-edge web application. One of their products, MNE-1001, was a project that geared towards establishing a solution that effectively manages and monitors CSR programs in a streamlined and integrated manner.<break> The web app built on the Single Page Application (SPA) architecture and seamlessly integrates Laravel and ReactJS using InertiaJS. While primarily focused on front-end development, I am also sometimes adjusting to the needs of the back-end team to ensure the project's success",
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
        desc: "⛳️🏌️‍♂️ J-Golf—an innovative project developed under PT Javadwipa Duta Mandiri. J-Golf is a revolutionary mobile-centric web application that redefines the golfing experience. Designed with a focus on mobile usage, J-Golf brings forth a comprehensive solution for golf enthusiasts.<break> The application's core functionalities encompass managing scoring rankings during golf rounds with friends, offering golf course packages for lessons and caddie appointments, creating and participating in events, and providing leaderboards and golf statistics for both personal and community analysis",
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
        desc: "📦📄 BLB-Gadang—an innovative project undertaken for Bengkel Las & Bubut Gadang Jalan Raya Gadang 54, Sukun, Malang. BLB-Gadang is a transformative web application designed to transition manual bookkeeping processes into a seamless digital solution.<break> This project aims to enhance inventory management, simplify the tracking of incoming and outgoing goods, automate transaction calculations, and eliminate the need for handwritten records. By embracing technology, BLB-Gadang empowers the client with efficient data management and streamlined workflows",
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
        desc: "🚑🗺️ Kamar Pasien was my milestone project during the Dicoding SIB Kampus Merdeka Program. This project aim to be a panic button, providing users with a seamless and efficient way to make medical reservations during emergencies.<break> Kamar Pasien possess Google Maps API JavaScript to display nearby medical facilities, enabling users to access the routes and location using Google Maps to the intended facilty. Kamar Pasien stands out by offering a mobile web application experience with Progressive Web App",
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
    {
        colCell: 57,
        title: "My Missing Cat: Your Pet's Journey Home",
        desc: "🐾🐶 My Missing Cat, the online platform dedicated to reuniting missing pets with their owners. Our platform is designed to make it easier for pet owners to find their lost furry friends by creating a community where you can report missing pets and help others find theirs.<break> My Missing Cat is a user-friendly application created with Flutter, offering a seamless experience for both pet owners and those willing to lend a helping hand in the search for missing pets",
        repoLink: 'https://github.com/daffavcd/kucingkuHilang',
        year: '2022',
        features: [
            "Built with Flutter, accesible for different devices and platforms.",
            'Create a community of pet lovers to participate in locating missing pets.',
            'Upload information about missing pet, including a photo, description, and last seen location.',
        ],
        imagesPath: [
            'kh_1',
            'kh_2',
            'kh_3',
            'kh_4',
            'kh_5',
            'kh_6',
        ],
        techImagesPath: [
            'flutter',
            'firebase',
        ]
    },
    {
        colCell: 47,
        title: "Letter Archiver: Your Timeless Document Archiver",
        desc: "📂🔍 Digital storer for archiving and preserving all your important documents. Powered by Laravel, our platform ensures that your cherished letters, documents, and memories are not just stored but safeguarded for the ages",
        repoLink: 'https://github.com/daffavcd/letterArchive',
        year: '2022',
        features: [
            'Easily upload documents of various formats with a few simple clicks.',
            'Quickly find and retrieve your archived documents whenever you need them.',
            "Securely archive and organize your important documents, letters, and files.",
        ],
        imagesPath: [
            'la_1',
            'la_2',
            'la_3',
        ],
        techImagesPath: [
            'laravel',
        ]
    },
    {
        colCell: 68,
        title: "Movie Catalog: Explore the World of Cinema",
        desc: "🎬⭐ Powered by Flutter and harnessing the extensive Themoviedb API, CineWave provides you with an extensive catalog of current hit movies, complete with detailed synopses and more",
        repoLink: 'https://github.com/daffavcd/APIThemoviedb',
        year: '2021',
        features: [
            'Explore a vast catalog of current popular movies from around the world.',
            "Stay informed with the latest movie releases and updates thanks to Themoviedb API.",
            'Read user reviews and ratings to make informed decisions about which movies to watch.',
        ],
        imagesPath: [
            'movie_1',
            'movie_2',
        ],
        techImagesPath: [
            'flutter',
        ]
    },
    {
        colCell: 13,
        title: "Bookshelf App: Your Personal Library",
        desc: "🎬⭐ This project is a testament to my journey in front-end development, created as part of my certification on Dicoding. With the power of local storage and the finesse of pure CSS and JavaScript",
        repoLink: 'https://github.com/daffavcd/bookshelf-apps',
        year: '2022',
        features: [
            'Create and manage your own digital bookshelf, complete with book covers and titles.',
            "Store your book data locally, ensuring your collection remains accessible even offline.",
        ],
        imagesPath: [
            'ba_1',
            'ba_2',
            'ba_3',
            'ba_4',
        ],
        techImagesPath: [
            'javascript',
            'css',
        ]
    },
    {
        colCell: 36,
        title: "MR Shop: Your One-Stop E-commerce Destination",
        desc: "🏷️💬 B2C e-commerce platform where shopping meets simplicity. Created with the robust Laravel framework, MR Shop offers an features such as leave comments, provide ratings, and explore various categories",
        repoLink: 'https://github.com/daffavcd/mrshop',
        year: '2021',
        features: [
            'Easily navigate through product categories to narrow down your search.',
            "Access detailed product reviews from other shoppers to make informed decisions.",
            'Share your thoughts and experiences by leaving comments and ratings on products.',
        ],
        imagesPath: [
            'shop_1',
            'shop_2',
            'shop_3',
            'shop_4',
            'shop_5',
            'shop_6',
            'shop_7',
            'shop_8',
            'shop_9',
            'shop_10',
        ],
        techImagesPath: [
            'laravel',
            'mysql',
            'php',
        ]
    },
    {
        colCell: 24,
        title: "News Faker: Explore Curated Dummy News",
        desc: "📰💬 Dive into the curated dummy news with News Faker, a unique news website created with Laravel. Experience the fun of exploring fictional news stories, leave comments, and show your appreciation by liking your favorite articles",
        repoLink: 'https://github.com/daffavcd/news-faker',
        year: '2020',
        features: [
            'News stories generated by Laravel Faker.',
            "Engage with the content by leaving comments and liking your preferred news articles.",
            'Explore different categories of dummy news stories for a variety of entertaining content.',
        ],
        imagesPath: [
            'news_1',
            'news_2',
            'news_3',
            'news_4',
            'news_5',
            'news_6',
            'news_7',
            'news_8',
        ],
        techImagesPath: [
            'laravel',
            'mysql',
            'php',
        ]
    },
    {
        colCell: 62,
        title: "CryptoWatcher: Your Daily Crypto Insights",
        desc: "💰📈 Cryptocurrency market watcher app designed to provide you with a quick overview of the most popular cryptocurrency assets",
        repoLink: 'https://github.com/daffavcd/cry-watcher',
        year: '2022',
        features: [
            'Real-time updates on the prices of the most popular cryptocurrency assets.',
            "Easily compare current cryptocurrency prices to their values from the previous day.",
            "Using coinapi.io as the API provider.",
        ],
        imagesPath: [
            'cry_1',
        ],
        techImagesPath: [
            'javascript',
            'css',
        ]
    },
];
