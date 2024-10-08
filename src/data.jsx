import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
    {
        id: 1,
        name: 'Home',
        icon: <FaHome className='nav__icon' />,
        path: '/',
    },

    {
        id: 2,
        name: 'About',
        icon: <FaUser className='nav__icon' />,
        path: '/about',
    },

    {
        id: 3,
        name: 'Portfolio',
        icon: <FaFolderOpen className='nav__icon' />,
        path: '/portfolio',
    },

    {
        id: 4,
        name: 'Contact',
        icon: <FaEnvelopeOpen className='nav__icon' />,
        path: '/contact',
    },
];

export const personalInfo = [
    {
        id: 1,
        title: 'First Name : ',
        description: 'Abhilash',
    },

    {
        id: 2,
        title: 'Last Name : ',
        description: 'B N',
    },

    {
        id: 3,
        title: 'Age : ',
        description: '23 Years',
    },

    {
        id: 4,
        title: 'Nationality : ',
        description: 'Indian',
    },
    {
        id: 5,
        title: 'Address : ',
        description: 'Bengaluru',
    },

    {
        id: 6,
        title: 'Phone : ',
        description: '8453552544',
    },

    {
        id: 7,
        title: 'Email : ',
        description: 'bnabhilash2001@mail.com',
    },

    {
        id: 8,
        title: 'LinkedIn : ',
        description: 'abhilashbn12',
    },
    {
        id: 9,
        title: 'GitHub : ',
        description: 'abhilashbn12',
    },

    {
        id: 10,
        title: 'Languages : ',
        description: 'English, Kannada,Telugu',
    },
];

export const stats = [
    {
        id: 1,
        no: '2+',
        title: 'Years of Practicing <br /> Web Development',
    },

    {
        id: 2,
        no: '5+',
        title: 'Completed <br /> Projects',
    },

];

export const resume = [

    {
        id: 1,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2017',
        title: '10<sup>th</sup> Standard <span> Katherine Public School </span>',

    },

    {
        id: 2,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2019',
        title: ' II PUC <span> Panchgiri PU College </span>',
    },

    {
        id: 3,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2019-2022',
        title: 'Bachelor of Computer Application <span> Nagarjuna College of Management Studies </span>',
    },
    {
        id: 4,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2022-2024',
        title: 'Master of Computer Application <span> PES University </span>',
    },
];

export const skills = [
    {
        id: 1,
        title: 'Html',
        percentage: '95',
    },
    {
        id: 2,
        title: 'CSS',
        percentage: '70',
    },

    {
        id: 3,
        title: 'Javascript',
        percentage: '90',
    },
    {
        id: 4,
        title: 'React JS',
        percentage: '80',
    },
    {
        id: 5,
        title: 'Node JS',
        percentage: '60',
    },
    {
        id: 6,
        title: 'Express JS',
        percentage: '60',
    },
    {
        id: 7,
        title: 'MongoDB',
        percentage: '70',
    },
    {
        id: 8,
        title: 'SQL',
        percentage: '80',
    },
];

export const portfolio = [
    {
        id: 1,
        img: Work1,
        title: 'Photo Editing',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project : ',
                desc: 'Photo',
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Dribble',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'Adobe Photoshop',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: 'www.dribble.com',
            },
        ],
    },

    {
        id: 2,
        img: Work2,
        title: 'Website Design',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project : ',
                desc: 'Website',
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Dribble',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'React JS',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: 'www.dribble.com',
            },
        ],
    },

    {
        id: 3,
        img: Work3,
        title: 'Video Editing',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project : ',
                desc: 'Video',
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Dribble',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'Adobe Premium',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: 'www.dribble.com',
            },
        ],
    },

    {
        id: 4,
        img: Work4,
        title: 'Video Editing',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project : ',
                desc: 'Video',
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Dribble',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'Adobe Premium',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: 'www.dribble.com',
            },
        ],
    },

    {
        id: 5,
        img: Work5,
        title: 'Landing Page',
        details: [
            {
                title: 'Project : ',
                desc: 'Website',
            },
            {
                title: 'Client : ',
                desc: 'Dribble',
            },
            {
                title: 'Language : ',
                desc: 'React JS, Node JS',
            },
            {
                title: 'Preview : ',
                desc: 'www.dribble.com',
            },
        ],
    },

    {
        id: 6,
        img: Work6,
        title: 'Photo Editing',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project : ',
                desc: 'Photo',
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Dribble',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'Adobe Photoshop',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: 'www.dibble.com',
            },
        ],
    },
];

export const themes = [
    {
        id: 1,
        img: Theme1,
        color: 'hsl(252, 35%, 51%)',
    },

    {
        id: 2,
        img: Theme2,
        color: 'hsl(4, 93%, 54%)',
    },

    {
        id: 3,
        img: Theme3,
        color: 'hsl(271, 76%, 53%)',
    },

    {
        id: 4,
        img: Theme4,
        color: 'hsl(225, 73%, 57%)',
    },

    {
        id: 5,
        img: Theme5,
        color: 'hsl(43, 74%, 49%)',
    },

    {
        id: 6,
        img: Theme6,
        color: 'hsl(339, 81%, 66%)',
    },

    {
        id: 7,
        img: Theme7,
        color: 'hsl(80, 61%, 50%)',
    },

    {
        id: 8,
        img: Theme8,
        color: 'hsl(19, 96%, 52%)',
    },

    {
        id: 9,
        img: Theme9,
        color: 'hsl(88, 65%, 43%)',
    },

    {
        id: 10,
        img: Theme10,
        color: 'hsl(42, 100%, 50%)',
    },
];