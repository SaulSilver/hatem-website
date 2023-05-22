import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hatem - Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Website for Hatem, a software engineer.' // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Hatem',
  subtitle: "I'm a Software Engineer",
  location: 'Helsinki',
  cta: 'Know more'
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'A Software Engineer managing projects and building apps/websites. Used to teach programming at YouCode school in Kyoto, Japan.',
  paragraphTwo:
    'I appreciate teamwork, wellbeing, productive process and outcome. Multicultural and international workplaces attract me. I enjoy meeting people, teaching and learning from others.',
  paragraphThree:
    'Aside from work and associated activities, I like spending time with family and friends, play guitar, football, workout or go for a walk. Lately, I have been learning about Psychology and mental wellbeing.'
  // resume: 'resume.pdf' // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'fiba3x3_website.png',
    title: 'FIBA 3x3 Website',
    info: 'The official website for FIBA 3x3 basketball, offering news, updates, rankings and resources for players, teams, and fans. The platform also serves as a community hub, facilitating entry points for player registration, team formation, and providing educational materials for event organizers, coaches, and referees.',
    info2:
      'Statically-generated website using JAMstack; MetalsmithJS, SCSS and AWS.',
    url: 'https://fiba3x3.com/'
  },
  {
    id: nanoid(),
    img: 'fiba3x3_worldtour.png',
    title: 'FIBA 3x3 World Tour Website',
    info: 'Focuses specifically on the FIBA 3x3 World Tour pro-level competitions, providing a centralized source for teams, players, and fans to access exclusive information, news, and updates. From tournament details and standings to captivating highlights, the platform immerses users in the thrilling world of global 3x3 basketball competition.',
    info2: 'Server-rendered website using React, Redux, Typescript, SCSS, AWS.',
    url: 'https://worldtour.fiba3x3.com/'
  },
  {
    id: nanoid(),
    img: 'fiba3x3_scores.png',
    title: 'FIBA 3x3 Scores Web App',
    info: 'Web app for FIBA 3x3 basketball to be used on the venue for tournaments. Supporting realtime scoring and possesion tracking with offline capabilities living up to the term "Basketball never stops." It also provides multiple APIs for 3rd party integrations (e.g. TV network).',
    info2:
      'Built using React, Redux, Typescript, RxJS, CouchDB, Heroku and AWS.',
    url: 'https://scores.fiba3x3.com/'
  },
  {
    id: nanoid(),
    img: 'shipandco_app.png',
    title: 'Ship&co Web App',
    info: 'SaaS web application of an All-in-One Shipping Management Solution for Global eCommerce. Multilingual built using MeteorJS, MongoDB and has its own REST API offered to users.',
    info2:
      "Deliver the SaaS web app for eCommerce shipping management solution. Handle 4 web applications and websites. Project management and foresee the company's goals. Integrate EC platforms, carriers (e.g. Shopify, FedEx, etc.) and Stripe. Mentor multiple interns.",
    url: 'https://app.shipandco.com/'
  },
  {
    id: nanoid(),
    img: 'shipandco_website.png',
    title: 'Ship&co Website',
    info: 'Static website for Ship&co app displaying its features, information and API documentation.',
    info2:
      'Mobile-friendly and lightning fast. Multilingual supporting Japanese, English and French. Built using JAMstack; MetalsmithJS, SCSS and Netlify.',
    url: 'https://www.shipandco.com/en/'
  },
  {
    id: nanoid(),
    img: 'lancul.png',
    title: 'LanCul CRM Web App',
    info: "Being in charge of LanCul's web development, I built an internal CRM to handle clients' data and help the employees to avoid mundane tasks.",
    info2: 'Stack used: React, Python, AWS, MySQL',
    url: ''
  },
  {
    id: nanoid(),
    img: 'remotework.png',
    title: 'Remotework.jp',
    info: 'I believe remote work should be available to tech employees even before COVID hit. So I contributed by creating this website; a list of tech remote work opportunities to boost the remote work scene in Japan.',
    info2:
      'Open-source project on GitHub. Website is in Japanese and English, built with Jekyll & SCSS supporting Dark and Light modes.',
    url: 'https://remotework.jp/',
    repo: 'https://github.com/remote-jp/remote-in-japan' // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'hatem.houssein@gmail.com'
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hatemhoussein/'
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/SaulSilver'
    }
    // {
    //   id: nanoid(),
    //   name: 'gitlab',
    //   url: 'https://gitlab.com/hForHatem'
    // }
    // {
    //   id: nanoid(),
    //   name: 'dev',
    //   url: '',
    // },
  ]
};
