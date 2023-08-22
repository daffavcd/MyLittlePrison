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
            "Seamless catalog data fetching from Dicoding's API.",
            'Responsive design with pure CSS/JS for optimal user experience.',
            'Harnessing the power of Hapi server for efficient routin.',
            'Embracing the PWA paradigm for offline access and speed.',
            'Upholding code quality through automated testing.',
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
            'Experience the excitement of instant messaging with real-time updates. Chatting Converse ensures that messages are delivered and displayed in a fraction of a second.',
            'The magic of real-time communication comes to life through Pusher, enabling users to chat simultaneously and experience the thrill of instant interactions.',
            'Every conversation matters. By integrating with MySQL, Chatting Converse ensures that your conversations are saved.',
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
        year: '2022',
        features: [
            "RESTful API server, acting as a bridge that connects Nakula Sadewa's multi-platform applications. This enables seamless communication and data exchange for efficient ticketing management.",
            'The Telegram bot takes user interaction to the next level. Users can effortlessly create, view, and manage tickets directly from the convenience of their Telegram app, enhancing accessibility and user engagement.',
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
        desc: "🌐📊 SR-APP is a project by PT Olahkarsa Inovasi Indonesia that aimed at revolutionizing CSR program management through the development of a cutting-edge web application. One of their products, MNE-1001, was a project that geared towards establishing a solution that effectively manages and monitors CSR programs in a streamlined and integrated manner. The web app built on the Single Page Application (SPA) architecture and seamlessly integrates Laravel and ReactJS using InertiaJS. While primarily focused on front-end development, I am also sometimes adjusting to the needs of the back-end team to ensure the project's success",
        repoLink: 'Private',
        year: '2022',
        features: [
            "Adopting a Single Page Application architecture ensures a smooth and seamless user experience by minimizing page reloads and enhancing overall responsiveness.",
            'Leveraging the power of Laravel as the back-end and ReactJS as the front-end.',
            'The core objective of MNE-1001 is to provide an efficient platform for managing and monitoring CSR programs.',
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
    {
        colCell: 40,
        title: "J-Golf: Elevating Golf Experience Through Mobile-Centric Web Application",
        desc: "⛳️🏌️‍♂️ J-Golf—an innovative project developed under PT Javadwipa Duta Mandiri. J-Golf is a revolutionary mobile-centric web application that redefines the golfing experience. Designed with a focus on mobile usage, J-Golf brings forth a comprehensive solution for golf enthusiasts. The application's core functionalities encompass managing scoring rankings during golf rounds with friends, offering golf course packages for lessons and caddie appointments, creating and participating in events, and providing leaderboards and golf statistics for both personal and community analysis",
        repoLink: 'Private',
        year: '2021',
        features: [
            "Seamlessly manage and record scoring rankings while enjoying a game of golf with friends, adding a competitive and engaging dimension to your rounds.",
            'Explore a range of lesson packages to enhance your golfing skills. Easily schedule caddie appointments for personalized training sessions.',
            'Create, participate in, and manage golf events within the J-Golf community, fostering a sense of camaraderie and friendly competition.',
            "Access dynamic leaderboards to track event standings and compare golf statistics—yours and others'—providing valuable insights into your progress.",
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
            "Seamlessly manage incoming and outgoing goods, maintaining an accurate overview of inventory levels and transactions.",
            'Automate transaction calculations to ensure accurate records of each transaction, minimizing human error.',
            'Generate detailed transaction reports in PDF format, enabling easy record-keeping and sharing without relying on handwritten documents.',
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
        title: "Kamar Pasien: Empowering Medical Emergency Reservations Using Google Maps API Integration",
        desc: "🚑🗺️ Kamar Pasien was my milestone project during the Dicoding SIB Kampus Merdeka Class (Goverment Program). This project operates as a panic button, providing users with a seamless and efficient way to make medical reservations during emergencies. Kamar Pasien possess Google Maps API JavaScript to display nearby medical facilities, enabling users to access the routes and location using Google Maps of the intended facilty. Kamar Pasien stands out by offering a mobile web application experience with Progressive Web App (PWA) capabilities",
        repoLink: 'Private',
        year: '2022',
        features: [
            "Facilitate swift medical emergency reservations through a panic button feature, for urgent situations.",
            'Utilize Google Maps API JavaScript to showcase nearby medical facilities on a map, empowering users to find the nearest help.',
            'Enable users to install Kamar Pasien as a PWA on their devices, ensuring instant access and a seamless experience as a Single Page Application.',
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
