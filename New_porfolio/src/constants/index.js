import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    // carrent,
    // jobit,
    // tripguide,
    threejs,
  } from "../assets";

  /* Logos */

  import tekionLogo from "../assets/tekion_logo.jpeg";
  import reactLogo from "../assets/react.svg";
  import tailwindLogo from "../assets/tailwindcss.png";
  import typescriptLogo from "../assets/typescript.png";
  import nextLogo from "../assets/next-js.png";
  import sassLogo from "../assets/sass.png";
  // import goLogo from "../assets/Go-Logo.png";
  import antDLogo from "../assets/antd.png";
  import ssnLogo from "../assets/SSN.png";
  import springLogo from "../assets/spring.png";
  import javascriptLogo from "../assets/logo-javascript.svg";
  import deskIcon from "../assets/desk_icon.png";

  import uwLogo from "../assets/uw-logo.png";
  import aiVoiceLogo from "../assets/ai_voice.png";
  import ssecLogo from "../assets/ssec-logo.png";
  import findmeLogo from "../assets/findme.svg";

  /* Tech Stack Logos */

  import materialuiLogo from "../assets/materialui.svg";
  import phpLogo from "../assets/php.svg";
  import graphqlLogo from "../assets/graphql.svg";
  import openaiLogo from "../assets/openai.svg";
  import pythonLogo from "../assets/python.svg";
  import fastapiLogo from "../assets/fastapi.svg";
  import n8nLogo from "../assets/n8n.svg";
  import noaaLogo from "../assets/noaa_logo.svg";
  import slimLogo from "../assets/slim.png";
  import anthropicLogo from "../assets/anthropic.svg";
  import oracleLogo from "../assets/oracle.svg";

  /* SpotLights */

  import spotLight1 from "../assets/spotlight1.png";
  import spotLight2 from "../assets/spotlight2.png";
  import spotLight3 from "../assets/spotlight3.png";
  import spotLight4 from "../assets/spotlight4.png";
  import spotLight5 from "../assets/spotlight5.png";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  export const services = [
    {
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
    },
    {
      title: "Data Engineer",
      icon: mobile,
    },
  ];
  
  export const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: pythonLogo,
    },
    {
      name: "Spring Boot",
      icon: springLogo,
    },
    {
      name: "FastAPI",
      icon: fastapiLogo,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  export const myProjects = [
    {
      title: 'WolfCare - Web Application',
      desc: 'Built 50+ Flask REST APIs and MySQL database schema for a full-stack healthcare platform supporting online appointment scheduling and symptom checking.',
      subdesc: 'Configured GitHub Actions CI/CD pipelines for automated frontend and backend testing, ensuring code quality across all commits.',
      href: 'https://github.com/Shubham10Jain',
      texture: '/textures/online_mentor.mp4',
      logo: pythonLogo,
      logoStyle: {
        backgroundColor: '#0d1b2a',
        border: '0.2px solid #1b4f72',
        boxShadow: '0px 0px 60px 0px #1a5276aa',
      },
      spotlight: spotLight4,
      isLive: false,
      tags: [
        { id: 1, name: 'Python', path: pythonLogo },
        { id: 2, name: 'React.js', path: reactLogo },
        { id: 3, name: 'MySQL', path: antDLogo }, // using antD as placeholder for db
      ],
    },
    {
      title: 'Airport Facility Utilization Dashboard',
      desc: 'Built an interactive dashboard in Python and JavaScript to visualize passenger flow, gate occupancy, and wait times across airport terminals using simulated data.',
      subdesc: 'Developed a linear regression model to forecast terminal capacity trends using MongoDB for data storage and retrieval.',
      // href: 'https://github.com/Shubham10Jain',
      texture: '/textures/Airport-Dashboard.png',
      logo: deskIcon,
      logoStyle: {
        backgroundColor: '#1a1a2e',
        boxShadow: '0px 0px 60px 0px #e9456033',
      },
      spotlight: spotLight5,
      isLive: false,
      tags: [
        { id: 1, name: 'Python', path: pythonLogo },
        { id: 2, name: 'JavaScript', path: javascriptLogo },
        { id: 3, name: 'Docker', path: docker },
        { id: 4, name: 'MongoDB', path: mongodb },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'UW Office of Economic & Employer Engagement',
      pos: 'Software Developer',
      duration: 'July 2025 - January 2026',
      title: [
        "Built an end-to-end data ingestion pipeline using Selenium and BeautifulSoup to automate industry classification with retry logic, eliminating 20 hours/week of manual effort.",
        "Trained a Logistic Regression classifier using scikit-learn and spaCy to automatically classify 8,000+ companies into 5 industry categories, achieving 90% accuracy, validated against manual samples.",
        "Built a pandas normalization layer to standardize inconsistent fields across employer records, reducing manual cleanup."
      ],
      icon: uwLogo,
      logoClass: 'scale-[1.4] object-contain',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'University of Wisconsin-Madison (Ischool)',
      pos: 'Backend Developer Intern',
      duration: 'September 2024 - December 2024',
      title: [
        "Reduced execution latency by 30% by implementing AWS Lambda backend workflows for real-time data processing.",
        "Designed and deployed RESTful APIs and backend microservices in Node.js and FastAPI to handle student application workflows for MAPWA, a UW-Madison platform for university internship and part-time placements.",
        "Reduced database query response time by 60% (2s to 0.8s) through targeted indexing and caching strategies on AWS RDS.",
        "Developed automated test suites using pytest and Selenium to ensure crash-free backend performance for 50-80 beta users."
      ],
      icon: uwLogo,
      logoClass: 'scale-[1.4] object-contain',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Oracle (OFSS)',
      pos: 'Software Engineer',
      duration: 'July 2022 - July 2024',
      title: [
        "Built Jenkins CI/CD pipelines, reducing release cycle time by 83% (from 60 min to 10 min) and reducing deployment errors across a 10-engineer team.",
        "Engineered OAuth2 authentication and transaction processing microservices on Oracle FLEXCUBE using Spring Boot and Spring Cloud, handling enterprise-scale internal banking workflows across Rabobank Brazil's employee-facing platform.",
        "Resolved recurring production crashes in FLEXCUBE's core banking modules by conducting deep performance profiling and implementing targeted code fixes across a large-scale enterprise codebase.",
        "Improved rendering performance of Rabobank's internal banking portal by refactoring React components and optimizing Redux state management through memoization and elimination of unnecessary re-renders.",
        "Executed STaaS security scans across FLEXCUBE modules, identifying and remediating vulnerabilities and reducing high-severity security risks."
      ],
      icon: oracleLogo,
      animation: 'salute',
    },
  ];
