
import type { Project } from "../Types/Project";
import type { Category } from "../Types/Project";

// --------------------------------------------------
// CATEGORIES
// --------------------------------------------------

export const ProjectCategories: Record<string, Category> = {
  webApps: {
    slug: "web-applications-internal-tools",
    name: {
      fr: "Applications Web & Outils Internes",
      en: "Web Applications & Internal Tools",
    },
    description: {
      fr: "Des applications web interactives conçues pour répondre à des besoins concrets, centraliser les données et simplifier les processus métier.",
      en: "Interactive web applications designed to solve practical problems, centralize data, and streamline business processes.",
    },
  },

  websites: {
    slug: "websites-ecommerce",
    name: {
      fr: "Sites Web & Boutiques en Ligne",
      en: "Websites & E-commerce",
    },
    description: {
      fr: "Des sites web modernes et des expériences e-commerce alliant identité visuelle, ergonomie, performance et fonctionnalités adaptées aux utilisateurs.",
      en: "Modern websites and e-commerce experiences combining visual identity, usability, performance, and user-focused functionality.",
    },
  },

  saas: {
    slug: "saas",
    name: {
      fr: "SaaS",
      en: "SaaS",
    },
    description: {
      fr: "Des produits logiciels accessibles en ligne, conçus autour de fonctionnalités spécialisées, d'interfaces intuitives et de workflows efficaces.",
      en: "Online software products built around specialized features, intuitive interfaces, and efficient workflows.",
    },
  },

  aiData: {
    slug: "ai-data",
    name: {
      fr: "IA & Data",
      en: "AI & Data",
    },
    description: {
      fr: "Des projets exploitant l'intelligence artificielle, les modèles de langage et l'analyse de données pour produire des résultats utiles et exploitables.",
      en: "Projects leveraging artificial intelligence, language models, and data analysis to produce useful, actionable results.",
    },
  },
};

// --------------------------------------------------
// PROJECTS
// --------------------------------------------------

export const Projects: Project[] = [

{
  id: "ancient-wisdom",
  title: {
    fr: "Ancient Wisdom",
    en: "Ancient Wisdom",
  },
  slug: {
    fr: "ancient-wisdom",
    en: "ancient-wisdom",
  },
  githubUrl: "https://github.com/yanis-rezgui/AncientWisdomV2",

  shortDescription: {
    fr: "Une plateforme culturelle dédiée à l'histoire, aux civilisations anciennes et à l'exploration du savoir avec l'aide de l'IA.",
    en: "A cultural platform dedicated to history, ancient civilizations, and AI-assisted knowledge exploration.",
  },

  description: {
    fr: "Ancient Wisdom est une plateforme éducative consacrée à l'histoire et au patrimoine culturel. Elle rassemble des contenus sur les civilisations, les personnages historiques, les événements et les ressources culturelles dans une expérience de navigation structurée. Le projet intègre également Hermes AI, un assistant conversationnel conçu pour faciliter l'exploration des connaissances historiques. Une interface d'administration permet de gérer les contenus et de faire évoluer la plateforme.",
    en: "Ancient Wisdom is an educational platform dedicated to history and cultural heritage. It brings together content about civilizations, historical figures, events, and cultural resources in a structured browsing experience. The project also integrates Hermes AI, a conversational assistant designed to support historical knowledge exploration. An administration interface enables content management and platform development.",
  },

  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "Gemini API",
  ],

  features: [
    {
      fr: "Exploration des civilisations, personnages historiques et événements.",
      en: "Explore civilizations, historical figures, and significant events.",
    },
    {
      fr: "Assistant conversationnel Hermes AI dédié à l'exploration historique.",
      en: "Hermes AI conversational assistant for historical knowledge exploration.",
    },
    {
      fr: "Interface d'administration pour gérer les contenus de la plateforme.",
      en: "Administration interface for managing platform content.",
    },
    {
      fr: "Organisation de ressources culturelles : livres, films, articles et monuments.",
      en: "Organized cultural resources, including books, movies, articles, and monuments.",
    },
  ],

  coverImage: "https://res.cloudinary.com/dub4fhabm/image/upload/v1793307071/Gemini_Generated_Image_x0c8tkx0c8tkx0c8_zja6mk.jpg",

  gallery: [
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793305768/Capture_d_%C3%A9cran_du_2026-10-29_21-27-08_krfky1.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793305768/Capture_d_%C3%A9cran_du_2026-10-29_21-26-58_s3pjm5.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793305769/Capture_d_%C3%A9cran_du_2026-10-29_21-27-31_r0o1be.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793305769/Capture_d_%C3%A9cran_du_2026-10-29_21-28-10_htmkf9.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793305768/Capture_d_%C3%A9cran_du_2026-10-29_21-27-44_vyg2lc.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793305769/Capture_d_%C3%A9cran_du_2026-10-29_21-28-10_htmkf9.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793305768/Capture_d_%C3%A9cran_du_2026-10-29_21-27-44_vyg2lc.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793305768/Capture_d_%C3%A9cran_du_2026-10-29_21-27-23_xdioyo.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793305768/Capture_d_%C3%A9cran_du_2026-10-29_21-26-32_jglk9e.png",
  ],

  liveUrl: "https://ancient-wisdom-ivory.vercel.app",
  category: ProjectCategories.webApps,

  // ─── Project Details ───────────────────────
  details: {
    info: {
      client: "Personal Project",
      industry: {
        fr: "Culture et éducation",
        en: "Culture and Education",
      },
      projectType: {
        fr: "Plateforme culturelle et éducative",
        en: "Cultural and Educational Platform",
      },
      role: {
        fr: "Fondateur et développeur Full-Stack",
        en: "Founder and Full-Stack Developer",
      },
      status: "online",
    },

    service: {
      name: {
        fr: "Développement d'applications web",
        en: "Web Application Development",
      },
      slug: "web-app-development",
    },

    introduction: {
      fr: "Ancient Wisdom est un projet personnel né de la volonté de rendre l'histoire et le patrimoine culturel plus accessibles grâce aux technologies web modernes et à l'intelligence artificielle. La plateforme propose un espace centralisé pour découvrir les grandes civilisations, les figures historiques et différentes ressources culturelles.",
      en: "Ancient Wisdom is a personal project born from the ambition to make history and cultural heritage more accessible through modern web technologies and artificial intelligence. The platform provides a centralized space to discover ancient civilizations, historical figures, and various cultural resources.",
    },

    problem: {
      fr: "Les ressources historiques et culturelles sont souvent dispersées sur différentes plateformes, ce qui rend leur exploration moins fluide et structurée. Il existe également peu d'expériences interactives permettant d'approfondir un sujet historique et d'obtenir rapidement des réponses contextualisées.",
      en: "Historical and cultural resources are often scattered across different platforms, making exploration less structured and intuitive. There are also limited interactive experiences that allow users to explore historical topics in depth and quickly obtain contextualized answers.",
    },

    solution: {
      fr: "Conception et développement d'une plateforme éducative réunissant des contenus historiques, des ressources culturelles et un assistant conversationnel basé sur l'IA. Hermes AI permet aux utilisateurs d'interagir avec un assistant dédié à l'exploration historique. Une interface d'administration personnalisée facilite la gestion et l'organisation des contenus.",
      en: "Designed and developed an educational platform bringing together historical content, cultural resources, and an AI-powered conversational assistant. Hermes AI enables users to interact with an assistant dedicated to historical exploration. A custom administration interface simplifies content management and organization.",
    },

    results: [
      {
        fr: "Une plateforme culturelle centralisant plusieurs types de ressources historiques.",
        en: "A cultural platform centralizing multiple types of historical resources.",
      },
      {
        fr: "Intégration d'un assistant conversationnel IA pour enrichir l'expérience d'exploration.",
        en: "Integration of an AI conversational assistant to enhance the exploration experience.",
      },
      {
        fr: "Développement d'un espace d'administration pour assurer l'autonomie dans la gestion des contenus.",
        en: "Development of an administration dashboard for independent content management.",
      },
    ],

    contributions: [
      {
        fr: "Conception de l'architecture Full-Stack et développement de l'interface avec React et TypeScript.",
        en: "Designed the Full-Stack architecture and developed the frontend using React and TypeScript.",
      },
      {
        fr: "Développement d'une API REST avec Node.js et Express pour gérer les différentes ressources de la plateforme.",
        en: "Developed a REST API using Node.js and Express to manage the platform's resources.",
      },
      {
        fr: "Conception des modèles de données et intégration de MongoDB avec Mongoose.",
        en: "Designed data models and integrated MongoDB using Mongoose.",
      },
      {
        fr: "Intégration de Hermes AI et des API de modèles d'intelligence artificielle.",
        en: "Integrated Hermes AI and artificial intelligence model APIs.",
      },
      {
        fr: "Développement d'une interface d'administration pour la gestion des contenus et des ressources.",
        en: "Developed an administration interface for managing content and resources.",
      },
      {
        fr: "Mise en place de fonctionnalités interactives et d'une gestion des comptes utilisateurs.",
        en: "Implemented interactive features and user account management.",
      },
    ],

    technicalDescription: {
      fr: "La plateforme repose sur une architecture Full-Stack séparant le frontend React et le backend Express. MongoDB assure la persistance des données, tandis que Mongoose structure les modèles et les interactions avec la base de données. Hermes AI est intégré via un service dédié permettant de gérer les conversations et les interactions avec les modèles d'IA.",
      en: "The platform uses a Full-Stack architecture separating the React frontend from the Express backend. MongoDB handles data persistence, while Mongoose structures the data models and database interactions. Hermes AI is integrated through a dedicated service that manages conversations and interactions with AI models.",
    },

    techStack: [
      {
        category: {
          fr: "Frontend",
          en: "Frontend",
        },
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "Lucide React",
        ],
      },
      {
        category: {
          fr: "Backend",
          en: "Backend",
        },
        technologies: [
          "Node.js",
          "Express",
          "REST API",
        ],
      },
      {
        category: {
          fr: "Base de données",
          en: "Database",
        },
        technologies: [
          "MongoDB",
          "Mongoose",
        ],
      },
      {
        category: {
          fr: "Intelligence artificielle",
          en: "Artificial Intelligence",
        },
        technologies: [
          "Gemini API",
          "LLM Integration",
          "Hermes AI",
        ],
      },
      {
        category: {
          fr: "Déploiement et outils",
          en: "Deployment and Tools",
        },
        technologies: [
          "Vercel",
          "Cloudinary",
          "Git",
          "GitHub",
        ],
      },
    ],
  },

  featured: true,
  published: true,
  order: 1,
},


 
{
  id: "el-ahlem",
  title: {
    fr: "El Ahlem",
    en: "El Ahlem",
  },
  slug: {
    fr: "el-ahlem",
    en: "el-ahlem",
  },

  shortDescription: {
    fr: "Une application immobilière permettant de présenter des biens et de gérer les opérations à travers une interface dédiée.",
    en: "A real estate web application for presenting properties and managing operations through a dedicated interface.",
  },

  description: {
    fr: "El Ahlem est une application web immobilière développée pour structurer la présentation des biens et faciliter leur gestion. Le projet associe une interface React à une API Express, une base de données PostgreSQL gérée avec Prisma et un système de gestion des médias avec Cloudinary. Une interface d'administration sécurisée permet de gérer les données. L'architecture inclut également des communications temps réel avec Socket.IO et des fonctionnalités d'envoi d'e-mails.",
    en: "El Ahlem is a real estate web application developed to organize property listings and simplify their management. The project combines a React interface with an Express API, a PostgreSQL database managed through Prisma, and Cloudinary for media management. A secured administration interface supports data management. The architecture also includes real-time communication with Socket.IO and email delivery capabilities.",
  },

  technologies: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express 5",
    "Prisma",
    "PostgreSQL",
    "Cloudinary",
    "Socket.IO",
    "JWT",
    "Resend",
  ],

  features: [
    {
      fr: "Présentation et consultation de biens immobiliers.",
      en: "Property presentation and browsing.",
    },
    {
      fr: "Interface d'administration avec authentification sécurisée.",
      en: "Administration interface with secure authentication.",
    },
    {
      fr: "Gestion des médias immobiliers avec Cloudinary.",
      en: "Real estate media management with Cloudinary.",
    },
    {
      fr: "Architecture API avec communications temps réel et envoi d'e-mails.",
      en: "API architecture with real-time communication and email delivery.",
    },
  ],

  coverImage: "https://res.cloudinary.com/dub4fhabm/image/upload/v1793746042/Capture_d_%C3%A9cran_du_2026-09-24_23-34-18_upf0sz.png",

  gallery: [
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793746042/Capture_d_%C3%A9cran_du_2026-09-24_23-34-18_upf0sz.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793746052/Capture_d_%C3%A9cran_du_2026-09-24_23-34-26_fvsnaf.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793746070/Capture_d_%C3%A9cran_du_2026-09-24_23-34-47_h4s0mh.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793746086/Capture_d_%C3%A9cran_du_2026-09-24_23-34-57_byohnh.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793746093/Capture_d_%C3%A9cran_du_2026-09-24_23-35-00_ul1aob.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793746120/Capture_d_%C3%A9cran_du_2026-09-24_23-36-39_gxvbsy.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793746129/Capture_d_%C3%A9cran_du_2026-09-24_23-36-49_kn0tpi.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793746142/Capture_d_%C3%A9cran_du_2026-09-24_23-36-52_u9s3ng.png"
  ],

  liveUrl: "https://el-ahlem.vercel.app",
  category: ProjectCategories.webApps,

  // ─── Project Details ───────────────────────
  details: {
    info: {
      client: "Bureau d'Affaires Immobilier EL AHLEM",

      industry: {
        fr: "Immobilier",
        en: "Real Estate",
      },

      projectType: {
        fr: "Application web immobilière",
        en: "Real Estate Web Application",
      },

      role: {
        fr: "Développeur Full-Stack",
        en: "Full-Stack Developer",
      },

      status: "online",
    },

    service: {
      name: {
        fr: "Développement d'applications web",
        en: "Web Application Development",
      },
      slug: "web-app-development",
    },

    introduction: {
      fr: "El Ahlem est une plateforme immobilière conçue pour accompagner la transformation numérique d'une agence immobilière. Le projet vise à centraliser la présentation des biens, faciliter les interactions avec les clients et simplifier la gestion quotidienne de l'agence grâce à un espace d'administration dédié.",

      en: "El Ahlem is a real estate platform designed to support the digital transformation of a real estate agency. The project aims to centralize property listings, facilitate customer interactions, and simplify the agency's daily operations through a dedicated administration dashboard.",
    },

    problem: {
      fr: "La gestion d'une agence immobilière implique plusieurs opérations : présentation des biens, traitement des demandes de visite, suivi des clients et mise à jour des annonces. Sans une plateforme centralisée, ces opérations peuvent devenir difficiles à organiser et à suivre. L'agence avait besoin d'une solution numérique permettant de présenter ses biens en ligne tout en centralisant ses opérations dans un espace de gestion sécurisé.",

      en: "Managing a real estate agency involves several operations, including property listings, viewing requests, customer follow-ups, and listing updates. Without a centralized platform, these operations can become difficult to organize and track. The agency needed a digital solution to showcase its properties online while centralizing its operations in a secure management interface.",
    },

    solution: {
      fr: "Développement d'une application web composée de deux espaces complémentaires : un site public permettant aux visiteurs de consulter et filtrer les biens, d'enregistrer leurs favoris et de demander des visites, ainsi qu'un panneau d'administration sécurisé permettant à l'agence de gérer ses biens, les demandes de visite, les utilisateurs, les témoignages et les paramètres de l'établissement. L'intégration de Socket.IO permet également de recevoir des notifications administratives en temps réel.",

      en: "Developed a web application consisting of two complementary spaces: a public website where visitors can browse and filter properties, save favorites, and request viewings, and a secure administration dashboard allowing the agency to manage properties, viewing requests, users, testimonials, and agency settings. Socket.IO integration also enables real-time administrative notifications.",
    },

    results: [
      {
        fr: "Mise en ligne d'une plateforme immobilière accessible aux clients et visiteurs.",
        en: "Deployment of a real estate platform accessible to customers and visitors.",
      },
      {
        fr: "Centralisation de la gestion des biens, des demandes de visite et des utilisateurs dans un panneau d'administration.",
        en: "Centralized management of properties, viewing requests, and users through an administration dashboard.",
      },
      {
        fr: "Mise en place d'un système de notifications administratives en temps réel.",
        en: "Implementation of a real-time administrative notification system.",
      },
      {
        fr: "Développement d'une architecture Full-Stack avec une API REST et une base de données relationnelle.",
        en: "Development of a Full-Stack architecture with a REST API and a relational database.",
      },
    ],

    contributions: [
      {
        fr: "Conception et développement de l'interface publique avec React, TypeScript et Tailwind CSS.",
        en: "Designed and developed the public interface using React, TypeScript, and Tailwind CSS.",
      },
      {
        fr: "Développement d'une API REST avec Node.js et Express 5 pour gérer les différentes opérations métier.",
        en: "Developed a REST API using Node.js and Express 5 to handle the application's business operations.",
      },
      {
        fr: "Conception de la base de données PostgreSQL et gestion des relations avec Prisma ORM.",
        en: "Designed the PostgreSQL database and managed relationships using Prisma ORM.",
      },
      {
        fr: "Mise en place d'un système d'authentification basé sur JWT, cookies httpOnly et gestion des rôles.",
        en: "Implemented an authentication system using JWT, httpOnly cookies, and role-based access control.",
      },
      {
        fr: "Développement d'un panneau d'administration permettant la gestion des biens, visites, utilisateurs, témoignages et communes.",
        en: "Developed an administration dashboard for managing properties, viewing requests, users, testimonials, and municipalities.",
      },
      {
        fr: "Intégration de Cloudinary et Multer pour le téléversement et la gestion des images immobilières.",
        en: "Integrated Cloudinary and Multer for real estate image uploads and management.",
      },
      {
        fr: "Implémentation de notifications en temps réel avec Socket.IO et authentification des connexions WebSocket.",
        en: "Implemented real-time notifications using Socket.IO with authenticated WebSocket connections.",
      },
      {
        fr: "Intégration de l'envoi d'e-mails pour les communications et les opérations liées aux comptes utilisateurs.",
        en: "Integrated email delivery for communications and user account operations.",
      },
    ],

    technicalDescription: {
      fr: "L'application repose sur une architecture Full-Stack organisée autour d'un frontend React et d'un backend Node.js / Express 5 exposant une API REST. PostgreSQL assure la persistance des données et Prisma ORM gère les modèles et les relations. L'authentification utilise JWT avec des cookies httpOnly et un contrôle des rôles. Socket.IO est monté sur le même serveur HTTP qu'Express afin de diffuser des notifications en temps réel aux administrateurs. Cloudinary assure le stockage des médias, tandis que les services d'e-mail sont intégrés pour les communications de la plateforme.",

      en: "The application follows a Full-Stack architecture built around a React frontend and a Node.js / Express 5 backend exposing a REST API. PostgreSQL handles data persistence, while Prisma ORM manages data models and relationships. Authentication uses JWT with httpOnly cookies and role-based access control. Socket.IO runs on the same HTTP server as Express to deliver real-time notifications to administrators. Cloudinary handles media storage, while email services support platform communications.",
    },

    techStack: [
      {
        category: {
          fr: "Frontend",
          en: "Frontend",
        },
        technologies: [
          "React",
          "TypeScript",
          "Vite",
          "Tailwind CSS",
          "Framer Motion",
          "React Router",
          "Context API",
        ],
      },

      {
        category: {
          fr: "Backend",
          en: "Backend",
        },
        technologies: [
          "Node.js",
          "Express 5",
          "REST API",
        ],
      },

      {
        category: {
          fr: "Base de données",
          en: "Database",
        },
        technologies: [
          "PostgreSQL",
          "Prisma ORM",
        ],
      },

      {
        category: {
          fr: "Authentification et sécurité",
          en: "Authentication and Security",
        },
        technologies: [
          "JWT",
          "httpOnly Cookies",
          "bcrypt",
          "Helmet",
          "CORS",
          "express-rate-limit",
        ],
      },

      {
        category: {
          fr: "Stockage et médias",
          en: "Storage and Media",
        },
        technologies: [
          "Cloudinary",
          "Multer",
        ],
      },

      {
        category: {
          fr: "Temps réel et communication",
          en: "Real-time and Communication",
        },
        technologies: [
          "Socket.IO",
          "Resend",
          "Nodemailer",
        ],
      },

      {
        category: {
          fr: "Déploiement et outils",
          en: "Deployment and Tools",
        },
        technologies: [
          "Vercel",
          "Neon",
          "Git",
          "GitHub",
        ],
      },
    ],
  },

  featured: true,
  published: true,
  order: 2,
},



{
  id: "driveflow",
  title: {
    fr: "DriveFlow",
    en: "DriveFlow",
  },
  slug: {
    fr: "driveflow",
    en: "driveflow",
  },
  shortDescription: {
    fr: "Une plateforme de location de véhicules avec réservation multi-véhicules, services additionnels et tableau de bord administratif en temps réel.",
    en: "A vehicle rental platform featuring multi-vehicle bookings, additional services, and a real-time administration dashboard.",
  },
  description: {
    fr: "DriveFlow est une application Full-Stack dédiée à la location de véhicules. Elle permet aux utilisateurs de parcourir une flotte de voitures, de consulter leurs caractéristiques et de réserver un ou plusieurs véhicules avec des services complémentaires et une option de livraison. La plateforme intègre également un espace d'administration complet permettant de gérer les véhicules, les catégories, les utilisateurs et les réservations, ainsi qu'un tableau de bord présentant les principales statistiques de l'activité.",
    en: "DriveFlow is a full-stack vehicle rental application that allows users to browse a fleet of cars, explore their specifications, and book one or multiple vehicles with additional services and optional delivery. The platform also includes a comprehensive administration area for managing vehicles, categories, users, and reservations, alongside a dashboard displaying key business metrics.",
  },
  technologies: [
    "React 19",
    "TypeScript",
    "Vite 8",
    "Tailwind CSS 4",
    "Node.js",
    "Express 5",
    "PostgreSQL",
    "Prisma 7",
    "Socket.IO",
    "JWT",
    "Zod",
    "Cloudinary",
    "Resend",
    "Docker",
  ],
  features: [
    {
      fr: "Catalogue de véhicules avec filtres par catégorie, prix, carburant, transmission, nombre de places et disponibilité.",
      en: "Vehicle catalog with filters for category, price, fuel type, transmission, seating capacity, and availability.",
    },
    {
      fr: "Pages détaillées des véhicules avec galerie d'images, équipements, kilométrage et tarif journalier.",
      en: "Detailed vehicle pages featuring image galleries, specifications, mileage, and daily rental prices.",
    },
    {
      fr: "Réservation de plusieurs véhicules avec ajout de services optionnels et livraison à domicile.",
      en: "Multi-vehicle booking with optional additional services and home delivery.",
    },
    {
      fr: "Espace client avec suivi des réservations, historique, profil et paramètres.",
      en: "Customer area with reservation tracking, booking history, profile, and settings.",
    },
    {
      fr: "Tableau de bord administratif avec indicateurs clés, statistiques et graphiques.",
      en: "Admin dashboard featuring key performance indicators, statistics, and charts.",
    },
    {
      fr: "Gestion complète des véhicules, catégories, utilisateurs et réservations.",
      en: "Full management of vehicles, categories, users, and reservations.",
    },
    {
      fr: "Notifications administratives en temps réel grâce à Socket.IO.",
      en: "Real-time administrative notifications powered by Socket.IO.",
    },
    {
      fr: "Authentification sécurisée avec JWT, cookies httpOnly et gestion des rôles.",
      en: "Secure authentication using JWT, httpOnly cookies, and role-based access control.",
    },
    {
      fr: "Réinitialisation du mot de passe et envoi d'e-mails transactionnels.",
      en: "Password reset functionality and transactional email delivery.",
    },
  ],
  coverImage: "https://res.cloudinary.com/dub4fhabm/image/upload/v1793821708/Capture_d_%C3%A9cran_du_2026-11-04_20-42-19_yllcfw.png",
  gallery: [
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793821708/Capture_d_%C3%A9cran_du_2026-11-04_20-42-19_yllcfw.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793821705/Capture_d_%C3%A9cran_du_2026-11-04_20-42-36_escg37.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793821706/Capture_d_%C3%A9cran_du_2026-11-04_20-42-42_rbwspl.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793821707/Capture_d_%C3%A9cran_du_2026-11-04_20-45-36_uevagp.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793821705/Capture_d_%C3%A9cran_du_2026-11-04_20-45-53_lhvqul.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793821718/Capture_d_%C3%A9cran_du_2026-11-04_20-46-17_ntzbzs.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793821727/Capture_d_%C3%A9cran_du_2026-11-04_20-46-25_zfxntr.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793821748/Capture_d_%C3%A9cran_du_2026-11-04_20-46-21_i7ojqj.png",
    
  ],
  liveUrl: "https://drive-flow-ten.vercel.app",
  category: ProjectCategories.webApps,

  details: {
    info: {
      client: "Concept Project",
      industry: {
        fr: "Location de véhicules et mobilité",
        en: "Vehicle Rental and Mobility",
      },
      projectType: {
        fr: "Plateforme web de location de véhicules",
        en: "Vehicle Rental Web Platform",
      },
      role: {
        fr: "Développeur Full-Stack",
        en: "Full-Stack Developer",
      },
      status: "online",
    },

    service: {
      name: {
        fr: "Développement d'applications web",
        en: "Web Application Development",
      },
      slug: "web-app-development",
    },

    introduction: {
      fr: "DriveFlow est une plateforme web de location de véhicules conçue pour centraliser le parcours de réservation et les opérations administratives. Elle propose une interface client pour découvrir les véhicules et effectuer des réservations, ainsi qu'un espace administrateur pour piloter l'activité.",
      en: "DriveFlow is a vehicle rental web platform designed to centralize the booking journey and administrative operations. It provides a customer interface for browsing vehicles and making reservations, alongside an administration area for managing business operations.",
    },

    problem: {
      fr: "La gestion d'une activité de location de véhicules implique plusieurs opérations : présentation de la flotte, gestion des disponibilités, traitement des réservations, services complémentaires et suivi de l'activité. DriveFlow vise à regrouper ces fonctionnalités dans une plateforme cohérente, accessible aux clients comme aux administrateurs.",
      en: "Managing a vehicle rental business involves several operations, including fleet presentation, availability management, reservation processing, additional services, and business monitoring. DriveFlow aims to bring these functionalities together in a unified platform accessible to both customers and administrators.",
    },

    solution: {
      fr: "Développement d'une application Full-Stack composée d'une interface client et d'un espace d'administration. Le système prend en charge les réservations de plusieurs véhicules, les services additionnels, la livraison et le suivi des commandes. Un tableau de bord permet de consulter les indicateurs de performance, tandis que Socket.IO assure la transmission des notifications administratives en temps réel.",
      en: "Development of a full-stack application featuring a customer interface and an administration area. The system supports multi-vehicle reservations, additional services, delivery, and booking management. A dashboard provides business performance insights, while Socket.IO enables real-time administrative notifications.",
    },

    results: [
      {
        fr: "Mise en place d'un parcours de réservation permettant de réserver plusieurs véhicules et d'ajouter des services complémentaires.",
        en: "Implemented a booking flow supporting multiple vehicles and optional additional services.",
      },
      {
        fr: "Centralisation de la gestion des véhicules, catégories, utilisateurs et réservations dans un espace administrateur.",
        en: "Centralized vehicle, category, user, and reservation management in an administration area.",
      },
      {
        fr: "Intégration d'un système de notifications en temps réel pour les administrateurs.",
        en: "Integrated a real-time notification system for administrators.",
      },
      {
        fr: "Développement d'un tableau de bord présentant les principaux indicateurs et statistiques de l'activité.",
        en: "Developed an administrative dashboard displaying key business metrics and statistics.",
      },
    ],

    contributions: [
      {
        fr: "Conception et développement de l'interface utilisateur avec React, TypeScript et Tailwind CSS.",
        en: "Designed and developed the user interface using React, TypeScript, and Tailwind CSS.",
      },
      {
        fr: "Développement d'une API REST avec Node.js et Express 5.",
        en: "Developed a REST API using Node.js and Express 5.",
      },
      {
        fr: "Conception du modèle de données PostgreSQL et intégration de Prisma ORM.",
        en: "Designed the PostgreSQL data model and integrated Prisma ORM.",
      },
      {
        fr: "Implémentation de l'authentification JWT avec access tokens, refresh tokens et cookies httpOnly.",
        en: "Implemented JWT authentication with access tokens, refresh tokens, and httpOnly cookies.",
      },
      {
        fr: "Mise en place d'une gestion des autorisations basée sur les rôles CLIENT, AGENT et ADMIN.",
        en: "Implemented role-based authorization for CLIENT, AGENT, and ADMIN roles.",
      },
      {
        fr: "Intégration de Socket.IO pour les notifications administratives en temps réel.",
        en: "Integrated Socket.IO for real-time administrative notifications.",
      },
      {
        fr: "Intégration de Cloudinary pour le stockage des images et de Resend pour les e-mails transactionnels.",
        en: "Integrated Cloudinary for image storage and Resend for transactional emails.",
      },
      {
        fr: "Renforcement de la sécurité avec Zod, bcrypt, Helmet et une configuration CORS restrictive.",
        en: "Strengthened application security using Zod, bcrypt, Helmet, and restricted CORS configuration.",
      },
    ],

    technicalDescription: {
      fr: "L'application repose sur une architecture séparant le frontend React et le backend Express. Le backend expose une API REST organisée autour des principales ressources métier et utilise PostgreSQL avec Prisma pour la persistance des données. L'authentification repose sur des tokens JWT stockés dans des cookies httpOnly, avec renouvellement automatique de l'access token. Socket.IO partage le serveur HTTP de l'API et diffuse les événements de notification aux administrateurs via une room dédiée. Les notifications sont également persistées en base de données afin de conserver leur historique.",
      en: "The application follows an architecture separating the React frontend from the Express backend. The backend exposes a REST API organized around the main business resources and uses PostgreSQL with Prisma for data persistence. Authentication relies on JWT tokens stored in httpOnly cookies, with automatic access-token renewal. Socket.IO shares the API's HTTP server and broadcasts notification events to administrators through a dedicated room. Notifications are also persisted in the database to maintain their history.",
    },

    techStack: [
      {
        category: {
          fr: "Frontend",
          en: "Frontend",
        },
        technologies: [
          "React 19",
          "TypeScript",
          "Vite 8",
          "Tailwind CSS 4",
          "React Router 7",
          "Context API",
          "Chart.js",
          "Framer Motion",
          "Lucide React",
        ],
      },
      {
        category: {
          fr: "Backend",
          en: "Backend",
        },
        technologies: [
          "Node.js",
          "Express 5",
          "REST API",
          "Socket.IO",
        ],
      },
      {
        category: {
          fr: "Base de données",
          en: "Database",
        },
        technologies: [
          "PostgreSQL 15",
          "Prisma 7",
          "@prisma/adapter-pg",
        ],
      },
      {
        category: {
          fr: "Authentification et sécurité",
          en: "Authentication and Security",
        },
        technologies: [
          "JWT",
          "httpOnly Cookies",
          "bcrypt",
          "Zod",
          "Helmet",
          "CORS",
        ],
      },
      {
        category: {
          fr: "Services et intégrations",
          en: "Services and Integrations",
        },
        technologies: [
          "Cloudinary",
          "Multer",
          "Resend",
        ],
      },
      {
        category: {
          fr: "Outils et déploiement",
          en: "Tools and Deployment",
        },
        technologies: [
          "Docker Compose",
          "Vercel",
          "Git",
          "GitHub",
        ],
      },
    ],
  },

  featured: false,
  published: true,
  order: 3,
},


 
{
  id: "brickstore",
  title: {
    fr: "BrickStore",
    en: "BrickStore",
  },
  slug: {
    fr: "brickstore",
    en: "brickstore",
  },
  shortDescription: {
    fr: "Une boutique e-commerce de briques et jouets de construction avec catalogue, commandes et tableau de bord administrateur.",
    en: "An e-commerce store for building bricks and construction toys, with a product catalog, order management, and an admin dashboard.",
  },
  description: {
    fr: "BrickStore est une application e-commerce Full-Stack conçue pour la vente de briques et de jouets de construction sur le marché algérien. Elle propose une boutique permettant aux clients de parcourir le catalogue, rechercher et filtrer les produits, gérer leur panier et passer commande avec différentes options de livraison. La plateforme comprend également un tableau de bord administratif permettant de gérer les produits, les stocks, les commandes et les utilisateurs, ainsi que de consulter les statistiques commerciales. Elle intègre notamment Cloudinary pour la gestion des images et un système de génération de reçus de commande au format PDF.",
    en: "BrickStore is a full-stack e-commerce application designed for selling building bricks and construction toys in the Algerian market. It provides an online storefront where customers can browse the catalog, search and filter products, manage their shopping cart, and place orders with different delivery options. The platform also features an administration dashboard for managing products, inventory, orders, and users, alongside business analytics. It integrates Cloudinary for image management and a PDF generation system for order receipts.",
  },
  liveUrl: "https://brick-store-iota.vercel.app/",
  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "React Router DOM",
    "Context API",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "JWT",
    "HTTP-only Cookies",
    "bcryptjs",
    "Cloudinary",
    "Multer",
  ],
  features: [
    {
      fr: "Catalogue de produits avec recherche textuelle et filtres par thème, tranche d'âge et prix.",
      en: "Product catalog with full-text search and filters by theme, age range, and price.",
    },
    {
      fr: "Pages détaillées présentant les caractéristiques, descriptions et images des produits.",
      en: "Detailed product pages featuring specifications, descriptions, and images.",
    },
    {
      fr: "Panier interactif avec gestion des quantités et récapitulatif de commande.",
      en: "Interactive shopping cart with quantity management and order summary.",
    },
    {
      fr: "Parcours de commande avec choix entre livraison à domicile et livraison en bureau.",
      en: "Checkout flow with home delivery and pickup-point delivery options.",
    },
    {
      fr: "Confirmation de commande avec génération et téléchargement d'un reçu PDF.",
      en: "Order confirmation with downloadable PDF receipt generation.",
    },
    {
      fr: "Recommandations de produits basées sur leur popularité et leurs performances.",
      en: "Product recommendations based on popularity and performance.",
    },
    {
      fr: "Tableau de bord avec statistiques de chiffre d'affaires, commandes, stocks et produits les plus vendus.",
      en: "Admin dashboard with revenue, orders, inventory, and best-selling product analytics.",
    },
    {
      fr: "Gestion complète des produits, des stocks, des commandes et des comptes administrateurs.",
      en: "Complete management of products, inventory, orders, and administrator accounts.",
    },
    {
      fr: "Authentification sécurisée avec JWT, access tokens, refresh tokens et cookies httpOnly.",
      en: "Secure authentication using JWT, access tokens, refresh tokens, and httpOnly cookies.",
    },
    {
      fr: "Gestion des images produits avec Cloudinary et Multer.",
      en: "Product image management using Cloudinary and Multer.",
    },
  ],
  coverImage: "https://res.cloudinary.com/dub4fhabm/image/upload/v1793915598/Capture_d_%C3%A9cran_du_2026-11-05_22-50-42_x3gt39.png",
  gallery: [
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793915598/Capture_d_%C3%A9cran_du_2026-11-05_22-50-42_x3gt39.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793915604/Capture_d_%C3%A9cran_du_2026-11-05_22-50-49_rllalv.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793915597/Capture_d_%C3%A9cran_du_2026-11-05_22-50-36_eehd4l.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793915598/Capture_d_%C3%A9cran_du_2026-11-05_22-50-54_bihw32.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793915597/Capture_d_%C3%A9cran_du_2026-11-05_22-50-23_f8iuyw.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793915597/Capture_d_%C3%A9cran_du_2026-11-05_22-50-31_lmvv9d.png"
  ],
  category: ProjectCategories.websites,

  details: {
    info: {
      client: "Concept Project",
      industry: {
        fr: "Commerce électronique et jouets",
        en: "E-commerce and Toys",
      },
      projectType: {
        fr: "Boutique e-commerce",
        en: "E-commerce Store",
      },
      role: {
        fr: "Développeur Full-Stack",
        en: "Full-Stack Developer",
      },
      status: "completed",
    },

    service: {
      name: {
        fr: "Développement de boutiques e-commerce",
        en: "E-commerce Development",
      },
      slug: "ecommerce-development",
    },

    introduction: {
      fr: "BrickStore est une boutique e-commerce développée pour la commercialisation de briques et de jouets de construction en Algérie. Le projet associe une expérience d'achat accessible aux clients à un espace d'administration destiné à centraliser la gestion commerciale et opérationnelle de la boutique.",
      en: "BrickStore is an e-commerce store developed for selling building bricks and construction toys in Algeria. The project combines a customer-friendly shopping experience with an administration area designed to centralize the store's commercial and operational management.",
    },

    problem: {
      fr: "Une boutique en ligne nécessite de coordonner plusieurs aspects : présentation des produits, recherche, gestion du panier, traitement des commandes, suivi des stocks et gestion des livraisons. BrickStore répond à ces besoins en regroupant les principales opérations commerciales dans une seule application.",
      en: "An online store needs to coordinate several operations, including product presentation, search, shopping cart management, order processing, inventory tracking, and delivery management. BrickStore addresses these needs by bringing the main commercial operations together in a single application.",
    },

    solution: {
      fr: "Développement d'une plateforme e-commerce Full-Stack comprenant une boutique publique et un tableau de bord administratif. Les clients peuvent explorer les produits, effectuer leurs recherches, gérer leur panier et passer commande. Les administrateurs disposent d'outils pour gérer le catalogue, contrôler les stocks, traiter les commandes et consulter les indicateurs de performance. La plateforme intègre également une authentification sécurisée, un stockage d'images distant et la génération de reçus PDF.",
      en: "Development of a full-stack e-commerce platform featuring a public storefront and an administration dashboard. Customers can explore products, search the catalog, manage their shopping cart, and place orders. Administrators have access to tools for managing the catalog, monitoring inventory, processing orders, and reviewing performance metrics. The platform also integrates secure authentication, cloud-based image storage, and PDF receipt generation.",
    },

    results: [
      {
        fr: "Mise en place d'une boutique en ligne avec catalogue, recherche et filtres adaptés aux produits commercialisés.",
        en: "Implemented an online storefront with a product catalog, search, and relevant product filters.",
      },
      {
        fr: "Développement d'un parcours de commande intégrant les options de livraison et la génération de reçus PDF.",
        en: "Developed a checkout process featuring delivery options and PDF receipt generation.",
      },
      {
        fr: "Centralisation de la gestion des produits, des stocks et des commandes dans un tableau de bord administratif.",
        en: "Centralized product, inventory, and order management in an administration dashboard.",
      },
      {
        fr: "Intégration d'indicateurs et de graphiques pour faciliter le suivi de l'activité commerciale.",
        en: "Integrated business metrics and charts to support commercial activity monitoring.",
      },
    ],

    contributions: [
      {
        fr: "Conception et développement de l'interface e-commerce avec React, TypeScript et Tailwind CSS.",
        en: "Designed and developed the e-commerce interface using React, TypeScript, and Tailwind CSS.",
      },
      {
        fr: "Développement d'une API REST avec Node.js et Express.",
        en: "Developed a REST API using Node.js and Express.",
      },
      {
        fr: "Conception des modèles de données et intégration de MongoDB avec Mongoose.",
        en: "Designed the data models and integrated MongoDB using Mongoose.",
      },
      {
        fr: "Implémentation d'un système d'authentification JWT avec access tokens et refresh tokens stockés dans des cookies httpOnly.",
        en: "Implemented JWT authentication with access and refresh tokens stored in httpOnly cookies.",
      },
      {
        fr: "Mise en place de la gestion des produits, des stocks et des commandes côté administration.",
        en: "Implemented product, inventory, and order management on the administration side.",
      },
      {
        fr: "Intégration de Cloudinary et Multer pour le téléchargement et le stockage des images produits.",
        en: "Integrated Cloudinary and Multer for product image uploads and storage.",
      },
      {
        fr: "Développement d'un tableau de bord analytique avec graphiques de ventes, revenus et stocks.",
        en: "Developed an analytics dashboard with sales, revenue, and inventory charts.",
      },
      {
        fr: "Mise en place d'un système de génération de confirmations de commande au format PDF.",
        en: "Implemented a PDF generation system for order confirmations and receipts.",
      },
    ],

    technicalDescription: {
      fr: "BrickStore repose sur une architecture Full-Stack séparant le frontend React du backend Express. Le backend expose une API REST organisée autour de quatre ressources principales : l'authentification, les produits, les commandes et les utilisateurs. MongoDB et Mongoose assurent la persistance des données. L'authentification utilise une stratégie à deux tokens : un access token de courte durée de 15 minutes et un refresh token de 7 jours, tous deux stockés dans des cookies httpOnly. Le middleware d'autorisation renouvelle automatiquement l'access token lorsqu'il expire. Les images sont téléchargées en mémoire via Multer puis stockées sur Cloudinary.",
      en: "BrickStore follows a full-stack architecture that separates the React frontend from the Express backend. The backend exposes a REST API organized around four main resources: authentication, products, orders, and users. MongoDB and Mongoose handle data persistence. Authentication uses a dual-token strategy: a short-lived 15-minute access token and a 7-day refresh token, both stored in httpOnly cookies. The authorization middleware automatically renews the access token when it expires. Images are uploaded using Multer's memory storage and then stored on Cloudinary.",
    },

    techStack: [
      {
        category: {
          fr: "Frontend",
          en: "Frontend",
        },
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "React Router DOM",
          "Context API",
          "Framer Motion",
        ],
      },
      {
        category: {
          fr: "Backend",
          en: "Backend",
        },
        technologies: [
          "Node.js",
          "Express.js",
          "REST API",
        ],
      },
      {
        category: {
          fr: "Base de données",
          en: "Database",
        },
        technologies: [
          "MongoDB",
          "Mongoose",
        ],
      },
      {
        category: {
          fr: "Authentification et sécurité",
          en: "Authentication and Security",
        },
        technologies: [
          "JWT",
          "Access Tokens",
          "Refresh Tokens",
          "HTTP-only Cookies",
          "bcryptjs",
        ],
      },
      {
        category: {
          fr: "Stockage et gestion des médias",
          en: "Storage and Media Management",
        },
        technologies: [
          "Cloudinary",
          "Multer",
        ],
      },
    ],
  },

  featured: true,
  published: true,
  order: 4,
},


  // 5. SUPPLYPILOT
 
// 5. SUPPLYPILOT
{
  id: "supplypilot",
  title: {
    fr: "SupplyPilot",
    en: "SupplyPilot",
  },
  slug: {
    fr: "supplypilot",
    en: "supplypilot",
  },
  shortDescription: {
    fr: "Un agent IA autonome qui recherche, compare et évalue des fournisseurs industriels pour faciliter les décisions d'approvisionnement.",
    en: "An autonomous AI agent that discovers, compares, and evaluates industrial suppliers to support procurement decisions.",
  },
  description: {
    fr: "SupplyPilot est un agent d'intelligence artificielle conçu pour assister les équipes d'achat et d'ingénierie dans leurs décisions d'approvisionnement. Développé dans le cadre d'un hackathon Devpost, le projet combine Gemini 2.5 Flash et le function calling pour orchestrer plusieurs outils spécialisés : recherche de fournisseurs dans MongoDB, découverte de nouveaux fournisseurs sur le web, comparaison des prix, vérification des certifications et évaluation des risques. Un système de scoring multicritère, calculé directement dans le code, permet ensuite de classer les fournisseurs et de générer des recommandations structurées et explicables. Le prototype s'appuie également sur des données de démonstration et des heuristiques d'extraction web ; il constitue un outil d'aide à la décision et non un système réel de validation des fournisseurs.",
    en: "SupplyPilot is an AI agent designed to support procurement and engineering teams in their sourcing decisions. Developed for a Devpost hackathon, the project combines Gemini 2.5 Flash and function calling to orchestrate specialized tools: supplier search in MongoDB, web-based supplier discovery, price comparison, certification checks, and risk assessment. A multi-criteria scoring system, computed directly in code, ranks suppliers and generates structured, explainable recommendations. The prototype also relies on demonstration data and heuristic-based web extraction; it is a decision-support tool rather than a real supplier-validation system.",
  },
  technologies: [
    "Python",
    "Gemini 2.5 Flash",
    "Function Calling",
    "AI Agents",
    "MongoDB",
    "Mongoose",
    "Tavily Search API",
    "Cheerio",
    "Web Scraping",
    "Node.js",
    "Express",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Docker",
  ],
  features: [
    {
      fr: "Recherche de fournisseurs industriels dans une base de données MongoDB.",
      en: "Industrial supplier search through a MongoDB database.",
    },
    {
      fr: "Découverte de nouveaux fournisseurs sur le web grâce à Tavily et à l'extraction de données avec Cheerio.",
      en: "Discovery of new suppliers across the web using Tavily and Cheerio-based data extraction.",
    },
    {
      fr: "Orchestration de cinq outils spécialisés à travers le function calling de Gemini.",
      en: "Orchestration of five specialized tools through Gemini function calling.",
    },
    {
      fr: "Comparaison des prix et analyse des devis avec calcul des valeurs minimales, maximales et moyennes.",
      en: "Price and quotation comparison, including minimum, maximum, and average price calculations.",
    },
    {
      fr: "Vérification des certifications et analyse de la conformité aux normes industrielles.",
      en: "Certification checks and compliance analysis against industrial standards.",
    },
    {
      fr: "Évaluation des risques fournisseurs selon des règles prédéfinies.",
      en: "Supplier risk assessment based on predefined rules.",
    },
    {
      fr: "Classement multicritère pondéré et génération de recommandations explicables.",
      en: "Weighted multi-criteria ranking and explainable recommendation generation.",
    },
    {
      fr: "Sauvegarde des analyses et des rapports dans MongoDB.",
      en: "Storage of analyses and reports in MongoDB.",
    },
  ],
  coverImage: "https://media.licdn.com/dms/image/v2/D5622AQG7pliRsJSfKw/feedshare-shrink_1280/B56Z7agWyDHIAQ-/0/1781782375869?e=1795651200&v=beta&t=4Qopx0iT6sZY7MbJMSSc9DgDqg7ZtDbh5n6IcFXn7Gc",
  gallery: [
    "https://media.licdn.com/dms/image/v2/D5622AQG7pliRsJSfKw/feedshare-shrink_1280/B56Z7agWyDHIAQ-/0/1781782375869?e=1795651200&v=beta&t=4Qopx0iT6sZY7MbJMSSc9DgDqg7ZtDbh5n6IcFXn7Gc",
    "https://media.licdn.com/dms/image/v2/D5622AQH85huN4bp7xw/feedshare-shrink_1280/B56Z7agW.gGcAM-/0/1781782376656?e=1795651200&v=beta&t=aCXX9N8wRwTc_DkA0SvQ1CueUXfkUefPNL5LfOGruuQ",
    "https://media.licdn.com/dms/image/v2/D5622AQHHp1SF7aBmKA/feedshare-shrink_1280/B56Z7agW7GHcAM-/0/1781782376374?e=1795651200&v=beta&t=nCyzWBwKF4xmOQoYmlMsBXTMIFkeB7laWi6eXHfmbxo",
    "https://media.licdn.com/dms/image/v2/D5622AQFx8CoT6uxXxg/feedshare-shrink_1280/B56Z7agXCUHcAQ-/0/1781782377001?e=1795651200&v=beta&t=uomQhS5K8gMYoll6grBKNEsfWOakEwDJB-jRJliickE",
    "https://media.licdn.com/dms/image/v2/D5622AQHi2dSu4b8wAg/feedshare-shrink_1280/B56Z7agW_gGoAQ-/0/1781782376714?e=1795651200&v=beta&t=t4m4ap69S39gMCXwB_FMV4UItNxDAZbtOBJ3DM9L-Ck"
  ],
  liveUrl: "https://supply-pilot-one.vercel.app",
  githubUrl: "https://github.com/yanis-rezgui/SupplyPilot",
  category: ProjectCategories.aiData,
  details: {
    info: {
      client: "Devpost Hackathon",
      industry: {
        fr: "Achats industriels et chaîne d'approvisionnement",
        en: "Industrial Procurement & Supply Chain",
      },
      projectType: {
        fr: "Agent IA d'aide à la décision",
        en: "AI-Powered Decision Support Agent",
      },
      role: {
        fr: "Développeur Full-Stack & IA",
        en: "Full-Stack & AI Developer",
      },
      status: "online",
      completionDate: "Summer 2026",
    },
    service: {
      name: {
        fr: "Développement d'applications IA",
        en: "AI Application Development",
      },
      slug: "ai-development",
    },
    introduction: {
      fr: "SupplyPilot explore l'utilisation des agents IA dans le domaine des achats industriels. L'objectif est de transformer une demande exprimée en langage naturel en une analyse structurée de plusieurs fournisseurs, en combinant des données internes et des informations découvertes sur le web.",
      en: "SupplyPilot explores the use of AI agents in industrial procurement. Its goal is to transform a natural-language sourcing request into a structured analysis of multiple suppliers by combining internal data with information discovered across the web.",
    },
    problem: {
      fr: "Les équipes d'achat doivent souvent consulter plusieurs sources pour identifier des fournisseurs, comparer leurs tarifs, vérifier leurs certifications et évaluer les risques liés à leur localisation ou à leurs délais de livraison. Ce processus manuel peut être long et difficile à standardiser.",
      en: "Procurement teams often need to consult multiple sources to identify suppliers, compare prices, verify certifications, and assess risks related to supplier location or delivery times. This manual process can be time-consuming and difficult to standardize.",
    },
    solution: {
      fr: "SupplyPilot utilise Gemini Function Calling pour piloter une séquence de cinq outils spécialisés. L'agent recherche d'abord les fournisseurs existants, découvre ensuite de nouveaux candidats sur le web, puis déclenche les analyses de prix, de certifications et de risques. Les résultats sont regroupés dans une analyse structurée, accompagnée d'un classement calculé par un algorithme de scoring indépendant du modèle de langage.",
      en: "SupplyPilot uses Gemini function calling to orchestrate a sequence of five specialized tools. The agent first searches existing suppliers, discovers additional candidates on the web, and then triggers price, certification, and risk analyses. The results are consolidated into a structured report with rankings calculated by a scoring algorithm independent of the language model.",
    },
    results: [
      {
        fr: "Génération d'une shortlist de fournisseurs classés selon plusieurs critères d'approvisionnement.",
        en: "Generation of a supplier shortlist ranked according to multiple procurement criteria.",
      },
      {
        fr: "Production de recommandations structurées avec justification, compromis et détails des scores.",
        en: "Structured recommendations with justifications, trade-offs, and score breakdowns.",
      },
      {
        fr: "Conservation des rapports d'analyse dans MongoDB pour consultation ultérieure.",
        en: "Storage of analysis reports in MongoDB for future reference.",
      },
    ],
    contributions: [
      {
        fr: "Conception de l'architecture d'un agent IA basé sur Gemini Function Calling et une boucle d'exécution avec état.",
        en: "Designed an AI agent architecture powered by Gemini function calling and a stateful execution loop.",
      },
      {
        fr: "Développement de cinq outils spécialisés pour la recherche, la découverte, la comparaison et l'évaluation des fournisseurs.",
        en: "Developed five specialized tools for supplier search, discovery, comparison, and evaluation.",
      },
      {
        fr: "Mise en place d'un pipeline de découverte web utilisant Tavily, Cheerio et des heuristiques d'extraction.",
        en: "Implemented a web discovery pipeline using Tavily, Cheerio, and heuristic-based data extraction.",
      },
      {
        fr: "Développement d'un système de scoring pondéré et normalisé Min-Max, indépendant du LLM.",
        en: "Developed a weighted, Min-Max normalized scoring system independent of the LLM.",
      },
      {
        fr: "Mise en place de garde-fous pour limiter les itérations, imposer la séquence des outils et structurer les réponses.",
        en: "Implemented guardrails to limit iterations, enforce tool execution order, and structure agent responses.",
      },
    ],
    technicalDescription: {
      fr: "L'application repose sur une architecture séparant le frontend React et le backend Express. Le backend orchestre un agent Gemini à travers une boucle de function calling limitée à 12 itérations et une séquence obligatoire de cinq outils. La découverte de fournisseurs utilise Tavily pour la recherche web, puis Cheerio pour extraire des informations à partir des pages candidates à l'aide de regex et de dictionnaires de mots-clés. Les fournisseurs retenus sont enregistrés dans MongoDB. Le classement final est calculé côté serveur à l'aide d'une matrice pondérée normalisée Min-Max : prix (40 %), délai de livraison (25 %), conformité des certifications (20 %) et fiabilité (15 %). Chaque analyse est enregistrée sous forme de rapport avec le détail des scores.",
      en: "The application follows an architecture separating a React frontend from an Express backend. The backend orchestrates a Gemini agent through a function-calling loop capped at 12 iterations, with a mandatory sequence of five tools. Supplier discovery uses Tavily for web search and Cheerio to extract information from candidate pages through regex and keyword dictionaries. Accepted suppliers are stored in MongoDB. The final ranking is computed server-side using a weighted Min-Max normalized matrix: price (40%), delivery time (25%), certification compliance (20%), and reliability (15%). Each analysis is stored as a report containing its score breakdown.",
    },
    techStack: [
      {
        category: {
          fr: "Frontend",
          en: "Frontend",
        },
        technologies: [
          "React 19",
          "Vite 8",
          "TypeScript",
          "Tailwind CSS 4",
          "Framer Motion",
          "Lucide React",
        ],
      },
      {
        category: {
          fr: "Backend",
          en: "Backend",
        },
        technologies: [
          "Node.js",
          "Express",
          "JavaScript ES Modules",
        ],
      },
      {
        category: {
          fr: "Intelligence artificielle",
          en: "Artificial Intelligence",
        },
        technologies: [
          "Google Gemini 2.5 Flash",
          "Function Calling",
          "AI Agent Architecture",
        ],
      },
      {
        category: {
          fr: "Base de données",
          en: "Database",
        },
        technologies: [
          "MongoDB",
          "Mongoose",
        ],
      },
      {
        category: {
          fr: "Recherche et extraction web",
          en: "Web Search & Extraction",
        },
        technologies: [
          "Tavily Search API",
          "Cheerio",
          "node-fetch",
          "Web Scraping",
        ],
      },
      {
        category: {
          fr: "Déploiement et outils",
          en: "Deployment & Tools",
        },
        technologies: [
          "Docker",
          "Docker Compose",
          "Vercel",
        ],
      },
    ],
  },
  featured: true,
  published: true,
  order: 5,
},



// 6. GEMINI-TRADE
{
  id: "gemini-trade",
  title: {
    fr: "Gemini-Trade",
    en: "Gemini-Trade",
  },
  slug: {
    fr: "gemini-trade",
    en: "gemini-trade",
  },
  shortDescription: {
    fr: "Un assistant IA qui analyse les spécifications techniques des produits pour explorer les exigences réglementaires liées à leur importation.",
    en: "An AI-powered assistant that analyzes product specifications to explore regulatory requirements for international imports.",
  },
  description: {
    fr: "Gemini-Trade est un prototype développé dans le cadre d'un hackathon, visant à simplifier l'analyse de conformité à l'importation. L'utilisateur renseigne les caractéristiques techniques d'un produit, le pays de destination et peut fournir un décret officiel. Grâce à l'API Gemini, l'application analyse les informations fournies afin de générer un verdict indicatif sur l'importabilité du produit, accompagné d'une justification juridique et technique, de l'identification des composants sensibles et de conseils de conformité. Le projet explore l'utilisation de l'IA générative dans un contexte réglementaire complexe. Ses résultats restent indicatifs et nécessitent une vérification auprès des autorités compétentes.",
    en: "Gemini-Trade is a hackathon prototype designed to simplify import compliance analysis. Users provide a product's technical specifications, its destination country, and optionally an official import decree. Using the Gemini API, the application analyzes the provided information to generate an indicative importability assessment, supported by legal and technical reasoning, identification of sensitive components, and compliance guidance. The project explores the application of generative AI to complex regulatory contexts. Its outputs remain indicative and must be verified with the relevant authorities.",
  },
  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Gemini API",
    "Generative AI",
    "Prompt Engineering",
    "Structured AI Outputs",
    "Local Storage",
    "Vercel",
  ],
  features: [
    {
      fr: "Analyse des caractéristiques techniques et des composants d'un produit.",
      en: "Analysis of product technical specifications and components.",
    },
    {
      fr: "Prise en compte du pays de destination dans l'analyse réglementaire.",
      en: "Destination-country context for regulatory analysis.",
    },
    {
      fr: "Possibilité de fournir un décret officiel comme document de référence.",
      en: "Option to provide an official decree as a reference document.",
    },
    {
      fr: "Génération d'un verdict indicatif sur l'importabilité du produit.",
      en: "AI-generated indicative assessment of product importability.",
    },
    {
      fr: "Explication juridique et technique des résultats générés.",
      en: "Legal and technical explanations supporting the generated results.",
    },
    {
      fr: "Identification des composants potentiellement sensibles.",
      en: "Identification of potentially sensitive product components.",
    },
    {
      fr: "Recommandations pratiques pour explorer les exigences de conformité.",
      en: "Practical guidance for exploring compliance requirements.",
    },
    {
      fr: "Conservation temporaire des données de test côté navigateur.",
      en: "Temporary storage of testing data on the client side.",
    },
  ],
  coverImage: "https://res.cloudinary.com/dub4fhabm/image/upload/v1793915998/Capture_d_%C3%A9cran_du_2026-11-05_22-59-47_qemjnd.png",
  gallery: [
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793915998/Capture_d_%C3%A9cran_du_2026-11-05_22-59-47_qemjnd.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793915935/Capture_d_%C3%A9cran_du_2026-11-05_22-58-37_hzicxy.png",
    "https://res.cloudinary.com/dub4fhabm/image/upload/v1793915970/a7e9ae0a-5201-4355-9ab9-724f3b6c41a2.png",
  ],
  liveUrl: "https://gemini-trade-clean-version.vercel.app/",
  githubUrl: "https://github.com/rexy-bit/GeminiTradeCleanVersion",
  category: ProjectCategories.aiData,
  details: {
    info: {
      client: "Devpost Hackathon",
      industry: {
        fr: "Commerce international et conformité réglementaire",
        en: "International Trade & Regulatory Compliance",
      },
      projectType: {
        fr: "Prototype d'analyse réglementaire assistée par IA",
        en: "AI-Powered Regulatory Analysis Prototype",
      },
      role: {
        fr: "Développeur Frontend & IA",
        en: "Frontend & AI Developer",
      },
      status: "online",
      completionDate: "2026",
    },
    service: {
      name: {
        fr: "Développement d'applications IA",
        en: "AI Application Development",
      },
      slug: "ai-development",
    },
    introduction: {
      fr: "Gemini-Trade explore comment l'intelligence artificielle générative peut faciliter la compréhension des réglementations liées au commerce international. L'application transforme les spécifications techniques d'un produit et son contexte d'importation en une analyse structurée, accessible et compréhensible.",
      en: "Gemini-Trade explores how generative AI can make international trade regulations easier to understand. The application transforms a product's technical specifications and import context into a structured, accessible, and understandable analysis.",
    },
    problem: {
      fr: "L'analyse de conformité à l'importation peut être complexe et chronophage. Les importateurs et les agents concernés doivent interpréter des textes réglementaires parfois denses et les mettre en relation avec des caractéristiques techniques précises, notamment lorsque des composants sensibles sont présents : modules radio, systèmes de chiffrement, capteurs médicaux ou dispositifs de surveillance.",
      en: "Import compliance analysis can be complex and time-consuming. Importers and relevant professionals must interpret dense regulatory texts and relate them to specific technical characteristics, especially when sensitive components are involved, such as radio modules, encryption systems, medical sensors, or surveillance devices.",
    },
    solution: {
      fr: "Gemini-Trade propose une interface permettant de renseigner un produit, ses spécifications techniques, son pays de destination et éventuellement un décret d'importation. L'API Gemini exploite ces informations pour produire une analyse organisée autour d'un verdict indicatif, d'une justification juridique et technique, des composants sensibles détectés et de conseils pratiques. Cette approche vise à rendre l'exploration réglementaire plus accessible, sans remplacer une validation officielle.",
      en: "Gemini-Trade provides an interface for entering a product, its technical specifications, its destination country, and optionally an import decree. The Gemini API uses this information to generate an analysis structured around an indicative verdict, legal and technical reasoning, identified sensitive components, and practical guidance. This approach makes regulatory exploration more accessible without replacing official validation.",
    },
    results: [
      {
        fr: "Une interface de démonstration permettant de tester des scénarios d'importation.",
        en: "A demonstration interface for testing import scenarios.",
      },
      {
        fr: "Des analyses générées par IA présentant un verdict, des justifications et des recommandations.",
        en: "AI-generated analyses presenting an assessment, supporting reasoning, and recommendations.",
      },
      {
        fr: "Un prototype déployé sur Vercel et accessible en ligne.",
        en: "A prototype deployed on Vercel and accessible online.",
      },
    ],
    contributions: [
      {
        fr: "Développement de l'interface utilisateur avec React, TypeScript et Tailwind CSS.",
        en: "Developed the user interface using React, TypeScript, and Tailwind CSS.",
      },
      {
        fr: "Intégration de l'API Gemini pour l'analyse des spécifications techniques et réglementaires.",
        en: "Integrated the Gemini API to analyze technical specifications and regulatory information.",
      },
      {
        fr: "Conception de prompts visant à obtenir des réponses structurées et des explications compréhensibles.",
        en: "Designed prompts to generate structured responses and understandable explanations.",
      },
      {
        fr: "Mise en place d'une gestion temporaire des données côté navigateur pour les scénarios de démonstration.",
        en: "Implemented temporary client-side data handling for demonstration scenarios.",
      },
      {
        fr: "Adaptation de l'architecture pour privilégier une intégration directe de Gemini depuis le frontend dans la version du hackathon.",
        en: "Adapted the architecture to prioritize direct Gemini integration from the frontend in the hackathon version.",
      },
    ],
    technicalDescription: {
      fr: "La version présentée lors du hackathon repose sur une application frontend développée avec React, TypeScript et Tailwind CSS. L'intégration de Gemini est effectuée directement depuis le frontend afin de simplifier le déploiement et d'accélérer les phases de test. Un backend a également été développé dans le projet, mais il n'est pas utilisé dans cette version de démonstration. Les données temporaires sont conservées localement pour faciliter les tests. Le comportement de l'IA est principalement encadré par le prompt engineering afin d'obtenir une analyse organisée et lisible à partir des informations fournies par l'utilisateur.",
      en: "The hackathon version is built as a frontend application using React, TypeScript, and Tailwind CSS. Gemini is integrated directly from the frontend to simplify deployment and accelerate testing. A backend was also implemented as part of the project, but it is not used in this demonstration version. Temporary data is stored locally to support testing scenarios. The AI's behavior is primarily guided through prompt engineering to produce structured and readable analyses based on user-provided information.",
    },
    techStack: [
      {
        category: {
          fr: "Frontend",
          en: "Frontend",
        },
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
        ],
      },
      {
        category: {
          fr: "Intelligence artificielle",
          en: "Artificial Intelligence",
        },
        technologies: [
          "Google Gemini API",
          "Generative AI",
          "Prompt Engineering",
          "Structured AI Outputs",
        ],
      },
      {
        category: {
          fr: "Gestion des données",
          en: "Data Management",
        },
        technologies: [
          "Browser Local Storage",
        ],
      },
      {
        category: {
          fr: "Déploiement",
          en: "Deployment",
        },
        technologies: [
          "Vercel",
          "Git",
          "GitHub",
        ],
      },
    ],
  },
  featured: false,
  published: true,
  order: 6,
},

  // 7. NEXORA
  {
    id: "nexora",
    title: {
      fr: "Nexora",
      en: "Nexora",
    },
    slug: {
      fr: "nexora",
      en: "nexora",
    },
    shortDescription: {
      fr: "Un projet SaaS orienté collaboration, conçu pour structurer le travail et faciliter le suivi des activités d'une équipe.",
      en: "A collaboration-focused SaaS concept designed to organize work and help teams track their activities.",
    },
    description: {
      fr: "Nexora est un projet de produit SaaS axé sur la collaboration et l'organisation du travail. Son objectif est de regrouper les informations utiles à une équipe dans une interface cohérente et de faciliter le suivi des activités. Cette fiche présente le positionnement général du projet ; les fonctionnalités détaillées doivent être adaptées à l'implémentation réelle avant publication.",
      en: "Nexora is a SaaS product project focused on collaboration and work organization. Its goal is to bring useful team information together in a coherent interface and make activity tracking easier. This entry describes the project's general direction; detailed features should be aligned with the actual implementation before publication.",
    },
    technologies: [
      "TypeScript",
      "React",
      "Web Application",
    ],
    features: [
      {
        fr: "Interface centralisée pour organiser les activités de travail.",
        en: "Centralized interface for organizing work activities.",
      },
      {
        fr: "Approche produit pensée autour des besoins d'une équipe.",
        en: "Product approach built around team needs.",
      },
    ],
    coverImage: "/images/projects/nexora/cover.webp",
    gallery: [
      "/images/projects/nexora/home.webp",
    ],
    category: ProjectCategories.saas,
    featured: false,
    published: false,
    order: 7,
  },

  // 8. SCHEMAFORGE
  {
    id: "schemaforge",
    title: {
      fr: "SchemaForge",
      en: "SchemaForge",
    },
    slug: {
      fr: "schemaforge",
      en: "schemaforge",
    },
    shortDescription: {
      fr: "Un projet SaaS dédié à la conception et à la structuration de schémas de données.",
      en: "A SaaS project focused on designing and structuring data schemas.",
    },
    description: {
      fr: "SchemaForge est un projet logiciel centré sur la conception de schémas de données. Il s'inscrit dans une démarche d'outillage des développeurs en cherchant à rendre la modélisation plus claire et plus organisée. La description des fonctionnalités spécifiques doit être complétée en fonction de ce qui est effectivement implémenté dans le produit.",
      en: "SchemaForge is a software project centered on data-schema design. It aims to support developers by making data modeling clearer and more organized. Specific feature descriptions should be completed according to what is actually implemented in the product.",
    },
    technologies: [
      "TypeScript",
      "React",
      "Data Modeling",
    ],
    features: [
      {
        fr: "Projet orienté vers la conception et la structuration de données.",
        en: "Project focused on data design and structuring.",
      },
      {
        fr: "Approche SaaS destinée à accompagner les workflows des développeurs.",
        en: "SaaS-oriented approach intended to support developer workflows.",
      },
    ],
    coverImage: "/images/projects/schemaforge/cover.webp",
    gallery: [
      "/images/projects/schemaforge/home.webp",
    ],
    category: ProjectCategories.saas,
    featured: false,
    published: false,
    order: 8,
  },
];
