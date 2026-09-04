


/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ServiceType,
  StatsType,
  ToolsType,
} from '@/types/index';



/**
 * Assets
 */
import {
  Briefcase,
  FileText,
  Globe,
  Home,
  Layers,
  Mail,
  Settings,
  Smartphone,
  User,
} from 'lucide-react';

import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

export { projectsData } from './projectsData'

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: FaGithub,
    label: 'GitHub',
    link: 'https://github.com/aleksfeschuk',
  },

  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/oleksandr-feshchuk-26844b266/',
  },
];

const education: ExperienceType[] = [
  {
    year: '2012 - 2018',
    title: "Master's Degree, History",
    institute: 'Zhytomyr Ivan Franko State University',
    desc: 'Studied history and archaeology, developing strong research and analytical skills.',
  },
  {
    year: 'Jun 2025 - Sep 2025',
    title: 'ReactJs Program',
    institute: 'ComIT, Canada',
    desc: 'Learned modern JavaScript, React, TypeScript, Firebase, and responsive UI patterns through real-world projects.',
  },
  {
    year: 'Sep 2025 - Feb 2026',
    title: 'Front End / WEBUI Course (HTML, CSS, JS)',
    institute: 'Freelancer Lifestyle',
    desc: 'Studied core web fundamentals and practical front-end development skills.',
  },
  {
    year: 'Feb 2026 - Aug 2026',
    title: 'The Fullstack Developer Path',
    institute: 'Scrimba',
    desc: 'Studied full-stack development, covering both front-end and back-end technologies.',
  },

];

const experience: ExperienceType[] = [
   {
    year: '2025 - 2026',
    title: 'Self-Directed Front-End Projects',
    institute: 'Personal Practice',
    desc: 'Built and deployed 4+ real-world projects, including an e-commerce marketplace, a restaurant landing page, an interactive game, and a business website — applying React, TypeScript, and Tailwind CSS.',
  },
  {
    year: '2026',
    title: 'Full-Stack Development Practice',
    institute: 'Scrimba Fullstack Path',
    desc: 'Practiced building complete applications with React on the front end and Node.js/Express/MongoDB on the back end.',
  },
];

const tools: ToolsType[] = [
  {
    label: 'Figma',
    imgSrc: '/images/tools/figma.svg',
  },
  {
    label: 'CSS',
    imgSrc: '/images/tools/css3.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: '/images/tools/tailwindcss.svg',
  },
  {
    label: 'React',
    imgSrc: '/images/tools/react.svg',
  },
  {
    label: 'JavaScript',
    imgSrc: '/images/tools/javascript.svg',
  },
  {
    label: 'Node.js',
    imgSrc: '/images/tools/nodejs.svg',
  },
  {
    label: 'Express.js',
    imgSrc: '/images/tools/expressjs.svg',
  },
  {
    label: 'Mongodb',
    imgSrc: '/images/tools/mongodb.svg',
  },
];

const services: ServiceType[] = [
  {
    title: 'UI/UX Design',
    desc: 'Designing clean, intuitive, and user-friendly interfaces with attention to detail and usability.',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Front-End Development',
    desc: 'Building responsive, accessible interfaces using React, TypeScript, and Tailwind CSS.',
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Full-Stack Development',
    desc: 'Developing complete web applications with Node.js, Express, and MongoDB on the back end.',
    icon: <Smartphone className='h-6 w-6 text-green-400' />,
  },
];

const statsData: StatsType[] = [
  {
    number: '30+',
    label: 'Happy Clients',
  },
  {
    number: '05+',
    label: 'Years Of Experience',
  },
  {
    number: '50+',
    label: 'Projects Done',
  },
];

export {
  socialLinks,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
};