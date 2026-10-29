
import type { Experience } from "../Types/Experience";

export const experiences: Experience[] = [
  {
    id: "el-ahlem-fullstack",
    company: "Agence El Ahlem",
    role: {
      fr: "Développeur Full-Stack",
      en: "Full-Stack Developer",
    },
    type: "freelance",
    location: "Algiers, Algeria",
    workMode: "hybrid",
    description: {
      fr: "Conception et développement de bout en bout d'une plateforme web immobilière pour l'Agence El Ahlem. Responsable de l'ensemble du cycle de développement, de l'analyse des besoins du client à la conception, au développement frontend et backend, jusqu'au déploiement et à la livraison de la solution en production.",
      en: "End-to-end design and development of a real estate web platform for Agence El Ahlem. Responsible for the entire development lifecycle, from client requirements analysis and system design to frontend and backend development, deployment, and production delivery.",
    },
    responsibilities: [
      {
        fr: "Concevoir et développer une plateforme immobilière publique avec recherche, filtrage des biens, favoris, authentification et demandes de visite.",
        en: "Design and develop a public real estate platform featuring property search, filtering, favorites, authentication, and viewing requests.",
      },
      {
        fr: "Développer un panneau d'administration complet pour gérer les biens, les utilisateurs, les visites, les témoignages et les notifications.",
        en: "Build a comprehensive administration dashboard to manage properties, users, viewings, testimonials, and notifications.",
      },
      {
        fr: "Concevoir une API REST structurée avec Node.js et Express 5, ainsi qu'une base de données PostgreSQL avec Prisma ORM.",
        en: "Design a structured REST API using Node.js and Express 5, alongside a PostgreSQL database managed with Prisma ORM.",
      },
      {
        fr: "Mettre en place l'authentification sécurisée, la gestion des images avec Cloudinary et les notifications en temps réel avec Socket.IO.",
        en: "Implement secure authentication, image management with Cloudinary, and real-time notifications using Socket.IO.",
      },
      {
        fr: "Assurer le déploiement en production et collaborer directement avec le client pour les ajustements et la livraison.",
        en: "Handle production deployment and work directly with the client on refinements and final delivery.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express 5",
      "PostgreSQL",
      "Prisma",
      "Cloudinary",
      "Socket.IO",
      "JWT",
      "Resend",
    ],
    startDate: "2026-07",
    endDate: null,
    currentlyWorking: true,
    featured: true,
    order: 1,
  },

  {
    id: "ancient-wisdom-founder",
    company: "Ancient Wisdom",
    role: {
      fr: "Fondateur & Développeur Full-Stack",
      en: "Founder & Full-Stack Developer",
    },
    type: "freelance",
    location: "Algiers, Algeria",
    workMode: "remote",
    description: {
      fr: "Fondation et développement d'Ancient Wisdom, une plateforme numérique dédiée à la découverte et à l'apprentissage de l'histoire. Je prends en charge la vision du produit, son architecture technique, son développement et son déploiement, tout en faisant évoluer continuellement ses fonctionnalités.",
      en: "Founded and developed Ancient Wisdom, a digital platform dedicated to historical discovery and learning. I oversee the product vision, technical architecture, development, and deployment while continuously expanding its features.",
    },
    responsibilities: [
      {
        fr: "Définir la vision du produit et concevoir son architecture technique.",
        en: "Define the product vision and design its technical architecture.",
      },
      {
        fr: "Développer les interfaces et les fonctionnalités de la plateforme avec React, TypeScript et Tailwind CSS.",
        en: "Develop the platform interfaces and features using React, TypeScript, and Tailwind CSS.",
      },
      {
        fr: "Concevoir et développer les fonctionnalités backend, les API et la gestion des données.",
        en: "Design and develop backend features, APIs, and data management.",
      },
      {
        fr: "Intégrer Hermes AI, un assistant intelligent destiné à faciliter l'exploration des contenus historiques.",
        en: "Integrate Hermes AI, an intelligent assistant designed to make historical content easier to explore.",
      },
      {
        fr: "Gérer le déploiement, les évolutions techniques et l'amélioration continue du produit.",
        en: "Manage deployment, technical improvements, and the product's continuous development.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "Gemini API",
      "Vercel",
    ],
    startDate: "2025-07",
    endDate: null,
    currentlyWorking: true,
    featured: true,
    order: 2,
  },

  {
    id: "abb-internship",
    company: "ABB",
    role: {
      fr: "Stagiaire en Développement Web & Intelligence Artificielle",
      en: "Web Development & Artificial Intelligence Intern",
    },
    type: "internship",
    location: "Algiers, Algeria",
    workMode: "hybrid",
    description: {
      fr: "Participation à un projet encadré par le Directeur des opérations d'ABB Algérie, visant à faciliter l'analyse réglementaire liée à l'importation d'équipements sensibles conformément au décret algérien 09-410. Développement d'une solution basée sur l'intelligence artificielle générative pour automatiser l'analyse des fiches techniques de produits.",
      en: "Contributed to a project supervised by the Operations Director at ABB Algeria, aimed at simplifying regulatory analysis related to the import of sensitive equipment under Algerian Decree 09-410. Developed a generative AI-based solution to automate the analysis of product technical specifications.",
    },
    responsibilities: [
      {
        fr: "Analyser le contexte réglementaire algérien et concevoir des prompts structurés pour guider les réponses de l'intelligence artificielle.",
        en: "Analyze the Algerian regulatory context and design structured prompts to guide AI-generated responses.",
      },
      {
        fr: "Développer une approche de prompt engineering permettant d'obtenir des analyses cohérentes à partir de fiches techniques.",
        en: "Develop a prompt engineering approach to generate consistent analyses from technical product specifications.",
      },
      {
        fr: "Concevoir une plateforme web de type chatbot intégrant l'API Gemini.",
        en: "Build a chatbot-style web platform integrated with the Gemini API.",
      },
      {
        fr: "Automatiser l'injection des instructions réglementaires avant chaque analyse de produit.",
        en: "Automate the injection of regulatory instructions before each product analysis.",
      },
      {
        fr: "Contribuer à la réalisation d'un assistant intelligent d'aide à la décision pour les procédures d'importation.",
        en: "Contribute to building an intelligent decision-support assistant for import procedures.",
      },
    ],
    technologies: [
      "Gemini API",
      "Prompt Engineering",
      "JavaScript",
      "Web Development",
      "AI Integration",
    ],
    startDate: "2025-06",
    endDate: "2025-08",
    currentlyWorking: false,
    featured: true,
    order: 3,
  },

  {
    id: "gemini-global-hackathon",
    company: "Google DeepMind",
    role: {
      fr: "Participant – Gemini 3 Global Hackathon",
      en: "Participant – Gemini 3 Global Hackathon",
    },
    type: "collaboration",
    location: "International",
    workMode: "remote",
    description: {
      fr: "Participation au Gemini 3 Global Hackathon, une compétition internationale organisée par Google DeepMind et hébergée sur Devpost. Développement de Gemini-Trade, une plateforme d'analyse de conformité à l'importation exploitant les capacités de l'API Gemini.",
      en: "Participated in the Gemini 3 Global Hackathon, an international competition organized by Google DeepMind and hosted on Devpost. Developed Gemini-Trade, an import compliance analysis platform powered by the Gemini API.",
    },
    responsibilities: [
      {
        fr: "Concevoir une solution d'intelligence artificielle pour analyser la conformité réglementaire des produits à importer.",
        en: "Design an AI-powered solution to analyze the regulatory compliance of products intended for import.",
      },
      {
        fr: "Développer des prompts structurés pour améliorer la précision et l'explicabilité des analyses.",
        en: "Develop structured prompts to improve the accuracy and explainability of AI analyses.",
      },
      {
        fr: "Traduire des contraintes réglementaires complexes en instructions exploitables par un modèle d'IA.",
        en: "Translate complex regulatory requirements into instructions that can be processed by an AI model.",
      },
      {
        fr: "Développer une interface full-stack fonctionnelle dans un temps limité.",
        en: "Build a functional full-stack interface under strict time constraints.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Gemini API",
      "Vercel",
      "Prompt Engineering",
    ],
    startDate: "2026-03",
    endDate: "2026-04",
    currentlyWorking: false,
    featured: true,
    order: 4,
  },
];
