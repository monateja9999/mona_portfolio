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
  meta,
  usc,
  shell,
  matchday,
  stocksearch,
  xchange,
  contextualmatching,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  // {
  //   id: "resume",
  //   title: "Resume",
  // },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Computer Science Grader",
    company_name: "University of Southern California",
    icon: usc,
    iconBg: "#FFFFFF",
    date: "August 2024 - Present",
    points: [
      "Ranked 1st in a class of 481 in the term exam and appointed as a grader for the Web Technologies course under Prof. Marco Papa.",
      "Assisted in instructing students on assignments and homework related to MERN and MEAN stacks, Kotlin for Android Development, and Flask.",
      "Graded assignments, homework, and exams while supporting the professor in evaluating the course.",
      "Provided guidance to students to improve their understanding of modern web technologies and development frameworks.",
    ],

  },
  {
    title: "Transformational Change Analyst",
    company_name: "Shell",
    icon: shell,
    iconBg: "#FFFFFF",
    date: "Sep 2020 - Jun 2023",
    points: [
      "Pioneered an Associate Database for the TC department, streamlining hiring processes, automating cost calculations, and saving 1000+ hours of recruiters' time. Integrated with Power BI to provide interactive dashboards with KPIs for deeper insights.",
      "Collaborated with the TC Leadership Team to optimize resource management by implementing a comprehensive tracker to monitor 300+ cases (65% of the department) related to contractor lifecycle management.",
      "Spearheaded QA testing for FUSION, a Salesforce-based Change Management application integrated with Tableau and BI, utilized by over 500+ managers and project sponsors. Authored and verified 183 user stories to ensure seamless functionality.",
      "Led the Transformational Change space for Shell Identity Management and Partnering Services, migrating 84,000+ user records to a new system and improving identity lifecycle processes, impacting 8,000+ managers at Shell and associated companies."
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Matchday.Ai",
    icon: matchday,
    iconBg: "#FFFFFF",
    date: "Dec 2019 - Jun 2020",
    points: [
      "Engineered an automated player tracking system using Deep Learning and OpenCV in a multi-camera environment, enhancing real-time analytics for major tournaments such as the Premier Badminton League, which reached a peak viewership of 1.5 million.",
      "Partnered with the Star Sports broadcast crew to deliver real-time statistics and analysis during live broadcasts, significantly enhancing viewer experience.",
      "Initiated research in soccer by implementing advanced techniques such as color segmentation and spatial transformation, achieving 95.6% accuracy in player tracking and providing valuable data insights.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Stock Trek",
    description:
      "Responsive stock trading platform (MERN) stack and Android app (Kotlin) with real-time trade simulation, RESTful APIs, buy/sell functionality, wallet, watchlist, portfolio, and interactive stock charts.",
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "yellow-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: stocksearch,
    source_code_link: "https://github.com/monateja9999/stock_trek",
    live_demo_link: "https://myclient6853863452.wl.r.appspot.com/",
    youtube_link: "https://youtu.be/0IYM2VKoPzM",
  },
  {
    name: "X-Change VIT",
    description:
      "Web and Mobile (Java) Applications to streamline hostel room allocation for 20,000+ VIT students spanning across 24 blocks, enabling real-time room searches, block filtering, and image viewing. This prposed system reduces the end-to-end hostel allocation and exchange process time from 1 month to 3-5 days.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "php",
        color: "violet-text-gradient",
      },
      {
        name: "sql",
        color: "blue-text-gradient",
      },

    ],
    image: xchange,
    source_code_link: "https://github.com/monateja9999/x_change_vit",
  },
  {
    name: "Contextual Matching",
    description:
      "This project reimagines the job-matching process by utilizing word and sentence embeddings to uncover hidden context within job applications. It enhances the accuracy and precision of matching candidates with the most relevant opportunities, transforming the traditional approach to recruitment.",
    tags: [
      {
        name: "llm",
        color: "blue-text-gradient",
      },
      {
        name: "dense_passage_retrieval",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
    ],
    image: contextualmatching,
    source_code_link: "https://github.com/monateja9999/contextual_matching",
  },
];

export { services, technologies, experiences, testimonials, projects };
