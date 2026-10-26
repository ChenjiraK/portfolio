import React, { useRef, useState } from 'react';
import MainLayout from '../components/Layout/MainLayout.tsx';
import Personal from '../components/Personal.tsx';
import Skills from '../components/Skills.tsx';
import Experience from '../components/Experience.tsx';
import PortfolioNavigation from '../components/PortfolioNavigation.tsx';
import SectionHeading from '../components/SectionHeading.tsx';
import usePortfolioMotion from '../hooks/usePortfolioMotion.ts';

const Home: React.FC = () => {
  const scope = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('home');
  usePortfolioMotion(scope, setActiveSection);
  const data = {
    startYear: '2018',
    endYear: '2026',
    imageProfile: require('../assets/image/profile-me.jpg'),
    personalSummary: 'I am a Frontend / Full-Stack Engineer with 6+ years of experience developing and maintaining enterprise web applications, CRM platforms, retail systems, and back-office solutions using React.js, Vue.js, JavaScript, and TypeScript.' +
    '<br> I have 6+ years of experience as a web developer.' +
    '<br> I have worked on developing ERP, CRM, POS, e-commerce and back-office systems.' +
    '<br> Currently, I am improving a website back-office for the CJ More.' +
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
    linkedinIcon: require('../assets/icon/linkedin.webp'),
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
          name: 'React.js, Next.js',
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
          name: 'Golang (GIN, GORM)',
          imageUrl: require('../assets/icon/golang.webp')
        },
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
      cloud: [
        {
          name: 'Docker',
          imageUrl: require('../assets/icon/docker.webp')
        },
        {
          name: 'Kubernetes',
          imageUrl: require('../assets/icon/kubernetes.webp')
        },
        {
          name: 'Argo CD',
          imageUrl: require('../assets/icon/argo.webp')
        },
        {
          name: 'Huawei Cloud',
          imageUrl: require('../assets/icon/huawei.webp')
        },
        {
          name: 'Kibana',
          imageUrl: require('../assets/icon/kibana.webp')
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
        {
          name: 'Playwright (Automate test)',
          imageUrl: require('../assets/icon/playwright.webp')
        },
      ],
      database: [
        {
          name: 'MySQL Database',
          imageUrl: require('../assets/icon/mysql.webp')
        },
        {
          name: 'PostgreSQL Database',
          imageUrl: require('../assets/icon/postgresql.webp')
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
        start:'Apr 2025',
        end: 'Current',
        company:'CJ MORE',
        theme: '#008900',
        position: 'Software engineer',
        detail: 'Built and maintained internal business applications used by 1,500+ branch users nationwide.',
        feature: [
          'Developed and maintained enterprise web applications supporting 1,500+ branch users nationwide using React.js, Vite, Material UI, and Tailwind CSS.',
          'Built interactive data tables with pagination, sorting, and filtering using TanStack Table, and implemented form handling and validation using React Hook Form.',
          'Managed frontend application state, including user authentication state, loading indicators, and cached data, using Zustand.',
          'Implemented unit tests using Vitest and end-to-end automated tests using Playwright to support application quality and reliability.',
          'Developed RESTful APIs using Golang and PostgreSQL, including request validation, structured JSON responses, and error handling.'
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
        start:'Jun 2024',
        end: 'March 2025',
        company:'COM7 public company limited',
        theme: '#008900',
        position: 'Frontend Web developer',
        detail: 'Implement website for customer and back-office using Vue(V2) for improving frontend and using PHP Laravel for backend API',
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
          'Implemented social login with LINE, Google, and Facebook, along with campaign and privilege management features based on user levels.',
          'Built loyalty features for point collection, transaction history, and point transfers across Buzzebees Marketplace, LINE, Shopee, and Lazada.',
          'Developed reusable SDK components for white-label products using Vue.js 3 and TypeScript to simplify feature integration and support.',
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

  const scrollToSection = (id: string) => {
    const section = scope.current?.querySelector<HTMLElement>(`#${id}`);
    section?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
  };
  return (
    <div ref={scope} className="portfolio-motion bg-primary font-sans text-[#292d28] selection:bg-[#d2e1ce]">
      <PortfolioNavigation active={activeSection} onNavigate={scrollToSection} />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-[1160px] px-5 md:px-10">
        <section id="home" data-section aria-labelledby="portfolio-title" className="relative flex min-h-[calc(100svh-77px)] scroll-mt-24 flex-col justify-center overflow-hidden py-20 md:py-28">
          <div aria-hidden="true" data-hero-orbit className="pointer-events-none absolute -right-24 top-20 hidden h-80 w-80 rounded-full border border-green-2B5F44/15 lg:block">
            <div className="absolute inset-8 rounded-full border border-green-2B5F44/15" />
            <div className="absolute inset-16 rounded-full border border-green-2B5F44/15" />
            <div className="absolute left-8 top-10 h-3 w-3 rounded-full bg-green-2B5F44" />
          </div>
          <p data-hero-detail className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] !text-green-2B5F44">
            <span aria-hidden="true" className="h-px w-8 bg-green-2B5F44" />{data.startYear} — {data.endYear} / My journey
          </p>
          <h1 id="portfolio-title" className="relative !font-medium !leading-[1.04] tracking-[-0.065em]">
            <span className="block overflow-hidden pb-3"><span data-hero-line className="block !text-[clamp(3.6rem,11vw,8rem)] !text-green-2B5F44">My Portfolio</span></span>
          </h1>
          <div className="relative mt-9 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div data-hero-detail>
              <p className="mb-2 !text-lg !text-inherit">{data.name}</p>
              <p className="max-w-md !text-sm !leading-7">Full-Stack & Frontend Web Developer.<br />ERP, CRM, POS & retail experiences.</p>
            </div>
            <button data-hero-detail type="button" onClick={() => scrollToSection('personal')} className="group flex w-fit items-center gap-5 rounded-full bg-black py-3 pl-6 pr-3 text-sm text-white transition-colors duration-300 hover:bg-green-2B5F44 motion-reduce:transition-none">
              Explore my portfolio
              <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 !text-white transition-transform duration-300 group-hover:translate-y-1 motion-reduce:transform-none">↓</span>
            </button>
          </div>
          <div data-hero-detail className="mt-16 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-black/40"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-green-2B5F44" />Scroll to discover</div>
        </section>
        <MainLayout id="personal">
          <SectionHeading id="personal-title" number="01" title="Personal" caption="The person behind the code" />
          <Personal data={data} />
          <button type="button" onClick={() => scrollToSection('skill')} className="group mt-10 flex items-center gap-4 rounded py-3 text-sm text-green-2B5F44">Explore my skills <span aria-hidden="true" className="!text-inherit transition-transform duration-300 group-hover:translate-y-1 motion-reduce:transform-none">↓</span></button>
        </MainLayout>
        <MainLayout id="skill">
          <SectionHeading id="skill-title" number="02" title="My Skill" caption="Tools I build with" />
          <Skills skill={data.skill} />
        </MainLayout>
        <MainLayout id="experience">
          <SectionHeading id="experience-title" number="03" title="My Experience" caption="Teams, projects & progress" />
          <Experience experiences={data.experiences} />
        </MainLayout>
        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-black/10 py-8 text-xs text-black/50">
          <div>{data.name} / Portfolio</div>
          <button type="button" onClick={() => scrollToSection('home')} className="group rounded py-2 hover:text-green-2B5F44">Back to top <span aria-hidden="true" className="ml-2 inline-block !text-inherit transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transform-none">↑</span></button>
        </footer>
      </main>
    </div>
  );
};

export default Home;
