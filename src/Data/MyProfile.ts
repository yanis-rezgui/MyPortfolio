
import type { Contact, Profile } from "../Types/Profile";

export const profile: Profile = {
  name: "Yanis Rezgui",

  headline: {
  fr: "Je conçois des produits logiciels qui font grandir votre entreprise.",
  en: "I Build Software Products That Grow Your Business.",
},

  shortBio: {
  fr: "Développeur full-stack spécialisé dans React, TypeScript, Node.js et les solutions intégrant l'IA. J'aide les entreprises et les entrepreneurs à transformer leurs idées en applications web fiables, évolutives et faciles à maintenir.",
  en: "Full-stack developer specializing in React, TypeScript, Node.js, and AI-powered solutions. I help businesses and entrepreneurs turn their ideas into reliable, scalable, and maintainable web applications.",
},

  about: {
  fr: "Je suis Yanis Rezgui, étudiant en troisième année de licence informatique à l'Université d'Alger 1 et développeur full-stack. Je me spécialise dans la conception, le développement et le déploiement d'applications web complètes. J'interviens sur l'ensemble du cycle de vie d'un projet : de la compréhension du besoin et de la conception de l'architecture jusqu'au développement frontend et backend, à la gestion des bases de données, à la mise en production et à la maintenance. Mon objectif est de transformer des idées en logiciels concrets, fonctionnels et conçus pour durer.\n\nAu fil de mes projets personnels et de mes expériences concrètes, j'ai construit des bases techniques solides et une véritable expérience pratique dans le développement de solutions web. Je travaille avec des technologies modernes comme React, TypeScript, Node.js et MongoDB, et j'explore également l'intégration de l'intelligence artificielle dans les applications. Qu'il s'agisse de développer mes propres produits ou de répondre à un besoin professionnel, j'accorde autant d'importance à la qualité du code qu'à la fiabilité, à l'expérience utilisateur et au résultat final.",

  en: "I'm Yanis Rezgui, a third-year Computer Science student at Université d'Alger 1 and a full-stack developer. I specialize in designing, building, and deploying complete web applications. I take part in every stage of a project: from understanding requirements and designing the architecture to frontend and backend development, database management, deployment, and maintenance. My goal is to turn ideas into practical, functional, and reliable software products.\n\nThrough my personal projects and hands-on professional experience, I've developed a solid technical foundation and practical experience in building web solutions. I work with modern technologies such as React, TypeScript, Node.js, and MongoDB, while also exploring the integration of artificial intelligence into web applications. Whether I'm building my own products or addressing a business need, I focus on code quality, reliability, user experience, and delivering a complete solution.",
},

  location: "Algiers, Algeria",

  avatar: "/images/profile/avatar.webp",

  // Add the URL to your CV when it is ready.
  // Example: "/documents/yanis-rezgui-cv.pdf"
  resumeUrl: undefined,

  availability: {
    freelance: true,
    internship: true,
    fullTime: false,
  },

  languages: [
   
    {
      name: {
        fr: "Français",
        en: "French",
      },
      level: {
        fr: "Avancé/Nati",
        en: "Advanced/Native",
      },
    },
    {
      name: {
        fr: "Anglais",
        en: "English",
      },
      level: {
        fr: "Intermédiaire",
        en: "Intermediate",
      },
    },
     {
      name: {
        fr: "Kabyle",
        en: "Kabyle",
      },
      level: {
        fr: "Langue maternelle",
        en: "Native",
      },
    },
  ],


  stats: [
    {
      name: {
        fr: "Projets en production",
        en: "Projects in Production",
      },
      number: 10,
      description: {
        fr: "Plus de 10 projets développés, déployés ou préparés pour une utilisation concrète.",
        en: "Over 10 projects developed, deployed, or prepared for real-world use.",
      },
    },
    {
      name: {
        fr: "Années d'apprentissage",
        en: "Years of Learning & Building",
      },
      number: 2,
      description: {
        fr: "Plus de deux ans à apprendre, expérimenter et développer des solutions numériques.",
        en: "Over two years of learning, experimenting, and building digital solutions.",
      },
    },
    {
      name: {
        fr: "Technologies maîtrisées",
        en: "Technologies Used",
      },
      number: 12,
      description: {
        fr: "Plus de 12 technologies explorées à travers des projets web, des API et des bases de données.",
        en: "Over 12 technologies explored through web projects, APIs, and database development.",
      },
    },
    {
      name: {
        fr: "Clients satisfaits",
        en: "Satisfied Clients",
      },
      number: 5,
      description: {
        fr: "Des collaborations orientées vers les besoins des clients et la création de solutions utiles.",
        en: "Client-focused collaborations dedicated to delivering useful digital solutions.",
      },
    },
  ],

};







export const contact: Contact = {
  phone: "+213 553533167",
  email: "yanisrezgui28@gmail.com",

  socials: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/yanis-rezgui/", // Add your LinkedIn profile URL
    },
    {
      name: "GitHub",
      link: "https://github.com/yanis-rezgui", // Add your GitHub profile URL
    },
  ],
};
