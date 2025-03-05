import React, { useRef } from 'react';
import MainLayout from '../components/Layout/MainLayout.tsx';
import Personal from '../components/Personal.tsx';
import Skills from '../components/Skills.tsx';
import Experience from '../components/Experience.tsx';

const Home: React.FC = () => {
  const personalRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const experiencelRef = useRef<HTMLDivElement>(null);

  const menus = [
    {
      name: 'Personal',
      ref: personalRef,
    },
    {
      name: 'Skill',
      ref: skillRef,
    },
    {
      name: 'Experience',
      ref: experiencelRef,
    },
  ];
  const data = {
    startYear: '2018',
    endYear: '2025',
    imageProfile: require('../assets/image/profile-me.jpg'),
    personalSummary: 'I am a Full-Stack Web Developer / Front End Web Developer.' +
    '<br> I have 6 years of experience as a web developer.' +
    '<br> I have worked on developing ERP, CRM, POS, and back-office systems.' +
    '<br> Currently, I am improving a retail website for the Apple Store.' +
    '<br><br> I love to learn new techniques for software development and learn about a new framework for many platforms like the Web Front-end, API Back-end.' +
    '<br> In the future, I aspire to work as a Systems Analyst (SA) or Project Manager (PM), focusing on the overall picture and being responsible for the projects I’m managing.',
    education: {
      university: "2014 - 2018 King Mongkut's University of Technology North Bangkok",
      major: 'Bachelor of Science - Computer Science and Technology',
    },
    name: 'Chenjira Khamchiang',
    phoneNumber: '092-387-3332',
    email: 'chenjira.k95@gmail.com',
    nationality: 'Thai',
    birthDate: '29 Jul 1995',
    linkedin: 'https://linkedin.com/in/chenjira-khamchiang-b58b2625b',
    github: [{
      link: '',
      projectName: '',
    }],
    skill: {
      frontend: [
        {
          name: 'Vue.js (V2 , V3)',
          imageUrl: require('../assets/icon/vue.webp')
        }, 
        {
          name: 'Nuxt.js',
          imageUrl: require('../assets/icon/nuxt.webp')
        },
        {
          name: 'React.js',
          imageUrl:  require('../assets/icon/react.webp')
        },
        {
          name: 'CSS (SASS, SCSS)',
          imageUrl: require('../assets/icon/css.webp')
        },
        {
          name: 'CSS Tailwind Framework',
          imageUrl: require('../assets/icon/tailwind.webp')
        },
        {
          name: 'CSS Bootstrap Framework',
          imageUrl: require('../assets/icon/boostrap.webp')
        },
        {
          name: 'Javascript',
          imageUrl: require('../assets/icon/javascript.webp')
        },
        {
          name: 'Typescript',
          imageUrl: require('../assets/icon/typescript.webp')
        },
      ],
      backend: [
        {
          name: 'Node.js (Express, SOCKET.IO)',
          imageUrl: require('../assets/icon/node.webp')
        },
        {
          name: 'Nest.js (API)',
          imageUrl: require('../assets/icon/nest.webp')
        },
        {
          name: 'PHP (Laravel Framework) (API)',
          imageUrl: require('../assets/icon/laravel.webp')
        }
      ],
      testing: [
        {
          name: 'Jest (Unit test)',
          imageUrl: require('../assets/icon/jest.webp')
        },
        {
          name: 'Vitest (Unit test)',
          imageUrl: require('../assets/icon/vitest.webp')
        },
        {
          name: 'Cypress (Automate test)',
          imageUrl: require('../assets/icon/cypress.webp')
        },
      ],
      database: [
        {
          name: 'MySQL Database',
          imageUrl: require('../assets/icon/mysql.webp')
        },
      ],
      git: [
        {
          name: 'Github',
          imageUrl: require('../assets/icon/github.webp')
        },
        {
          name: 'GitLab',
          imageUrl: require('../assets/icon/gitlab.webp')
        },
        {
          name: 'Azure',
          imageUrl: require('../assets/icon/azure.webp')
        },
      ]
    },
    experiences: [
      {
        start:'2024 Jun',
        end: 'Current',
        company:'COM7 public company limited',
        theme: '#008900',
        position: 'Frontend Web developer',
        detail: 'Almost using Vue(V2) for improving frontend and using PHP Laravel for backend API',
        feature: [
          'studio7 - Improvement a retail website for selling IT products and Apple store',
          'Queue program - Improvement the internal management system and implementing a queue support application for customers purchasing products in-store.',
          'iStudio Backoffice - implement feature backoffice for display data on iStudio website',
          'BaNana backoffice - implement feature backoffice for display data on BaNana website',
        ],
        projects: [
          {
            name: 'iStudio7',
            link: 'https://www.studio7thailand.com/en',
            image: require('../assets/image/studio7.webp'),
          },
          {
            name: 'BaNana',
            link: '',
            image: require('../assets/image/banana-icon.webp'),
          },
          {
            name: 'iStudio7 Education',
            link: '',
            image: require('../assets/image/isudio-edu.webp'),
          },
          {
            name: 'Backoffice',
            link: '',
            image: require('../assets/image/backoffice.png'),
          },
          {
            name: 'Queue Management',
            link: '',
            image: require('../assets/image/queue.png'),
          },
        ],
      },
      {
        start:'Jun 2021',
        end: 'May 2024',
        company:'Buzzebees Co., Ltd. ',
        theme: '#f9a601',
        position: 'Frontend web developer',
        detail: 'Develop CRM Loyalty & Marketing Solutions , Rewards & Privileges Management , E-Commerce, Back-Office system using Vue.js (V3), React.js, Node.js to develop.',
        feature: [
          'CRM web applications can login with Line , Google , Facebook.',
          'Users can see privileges for campaigns handled by user-level and includes collecting points with Buzzebees marketplace, Line, Shopee, and Lazada platforms.',
          'This web application also has a feature to save the history of the collected points.',
          'User can transfer points to another platform.',
          'Develop white-label products by creating an SDK using Vue 3 with TypeScript to make it easier for the support team to use its functions.',
        ],
        projects: [
          {
            name: 'Cvitt',
            link: 'https://c-vitt.buzzebees.com',
            image: require('../assets/image/C-vitt.webp'),
          },
          {
            name: 'Dior',
            link: 'https://diorth.buzzebees.com',
            image: require('../assets/image/dior.webp'),
          },
          {
            name: 'Guerlain',
            link: 'https://guerlainth.buzzebees.com/welcome',
            image: require('../assets/image/guarlain.webp'),
          },
          {
            name: 'JCB',
            link: 'https://jcb.buzzebees.com/welcome',
            image: require('../assets/image/JCB.png'),
          },
          {
            name: 'MoshiMoshi',
            link: 'https://moshimoshi.buzzebees.com',
            image: require('../assets/image/moshi.png'),
          },
          {
            name: 'BurgerKing',
            link: 'https://burgerking.buzzebees.com',
            image: require('../assets/image/burger-king.png'),
          },
          {
            name: 'PostFamily',
            link: 'https://postfamily.buzzebees.com',
            image: require('../assets/image/post-family_1.webp'),
          },
          {
            name: 'Scotch',
            link: 'https://scotch.buzzebees.com',
            image: require('../assets/image/scotch.webp'),
          },
          {
            name: 'TIPCoin',
            link: 'https://tipcoin.buzzebees.com',
            image: require('../assets/image/tipcoin.webp'),
          },
          {
            name: 'B-Shop',
            link: 'https://bshop.buzzebees.com/beesrewards',
            image: require('../assets/image/b-shop.webp'),
          },
          {
            name: 'Brand Suntory B2B',
            link: '',
            image: require('../assets/image/brand-suntory.webp'),
          },
          {
            name: 'Backoffice Buzzebees marketplace',
            link: '',
            image: require('../assets/image/logo-buzzebees.png'),
          },
          {
            name: 'K-Point Exchange Backoffice',
            link: '',
            image: require('../assets/image/kpoint.png'),
          },
          {
            name: 'Ferrari Backoffice',
            link: '',
            image: require('../assets/image/ferrari.png'),
          },
          {
            name: 'POS Backoffice',
            link: '',
            image: require('../assets/image/pos-bzbs.png'),
          },
          {
            name: 'PTTOR Backoffice',
            link: '',
            image: require('../assets/image/pttor.png'),
          },
        ],
      },
      {
        start:'May 2020',
        end: 'Dec 2020',
        company:'SCG Chemicals (Project zero to one)',
        theme: '#e50019',
        position: 'Frontend developer',
        detail: 'Develop the MarketplaceB2B website using Nuxt.js for improvement.',
        feature: [
          'Feature Status order delivery.',
          'Feature Compare prices for similar products from different vendors.',
          'Feature delivery and compare price & delivery time.',
        ],
        projects: [{
          name: 'ROOTS',
          link: 'https://rootsplatform.com/en/welcome',
          image: require('../assets/image/roots.webp'),
        },
        {
          name: 'ROOTS Backoffice',
          link: '',
          image: require('../assets/image/backoffice.png'),
        }],
      },
      {
        start:'April 2020',
        end: '',
        company:'SSUP (Thailand) co. ltd',
        theme: '#00afaa',
        position: ' Full-Stack Developer',
        detail: 'Develop a Point of Sale System(POS) program using PHP for improvement.',
        feature: [
          'Feature order receipts',
          'Feature update monthly promotions and discount offers.',
        ],
        projects: [{
          name: 'Point of Sale System (POS)',
          link: '',
          image: require('../assets/image/pos.png'),
        }],
      },
      {
        start:'Jun 2018',
        end: 'Mar 2020',
        company:'Kisra Company Limited',
        position: 'Full-Stack Developer',
        theme: '#fde403',
        detail: 'Develop an ERP website for an internal factory using a PHP Laravel API for the backend, along with Vue.js for the frontend.',
        feature: [
          'Feature Check Stock',
          'Feature Purchase Order',
          'Feature Invoice Receipt',
          'Feature Account System',
          'Feature Human Resource (salary slip , tax , social security fund)',
          'Feature Report Statement',
        ],
        projects: [{
          name: 'Somboon ERP',
          link: '',
          image: require('../assets/image/SOMBOON.webp'),
        },
        {
          name: 'Account management',
          link: '',
          image: require('../assets/image/accounting.png'),
        },
        {
          name: 'TCDC Homepage',
          link: 'https://www.tcdc.or.th/th/home',
          image: require('../assets/image/TCDC-logo.png'),
        },
        {
          name: 'TCDC Backoffice (Manage content)',
          link: '',
          image: require('../assets/image/backoffice.png'),
        }
      ],
      },
    ]
  };

  const scrollToSection = async (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className='bg-primary px-10'>
      <div className='flex justify-center pt-10'>
        {menus.map((menu, i) => (
          <button key={`menu_${i}`}
            onClick={() => scrollToSection(menu.ref)}
            className='bg-black text-white hover:bg-opacity-40 rounded-md py-4 w-36 text-xs ml-2'>
            { menu.name }
          </button>
        ))}
      </div>
      <div className='h-svh flex justify-center'>
        <div className='pt-40'>
          <div className='border border-black p-4 rounded-32px w-36'>
            { data.startYear} - { data.endYear}
          </div>
          <h1 className='text-8xl font-extrabold'>Portfolio</h1>
        </div>
      </div>
      <MainLayout id='personal'>
        <div ref={personalRef} className='py-16'>
          <Personal data={data} />
        </div>
      </MainLayout>
      <MainLayout id="skill">
        <div ref={skillRef} className='py-16 border-t'>
          <h1 className='pb-10'>My Skill</h1>
          <Skills skill={data.skill} />
        </div>
      </MainLayout>
      <MainLayout id="experience">
        <div ref={experiencelRef} className='py-16 border-t'>
          <h1 className='pb-10 pl-4'>My Experience</h1>
          <Experience experiences={data.experiences} />
        </div>
      </MainLayout>
    </div>
  );
};

export default Home;
