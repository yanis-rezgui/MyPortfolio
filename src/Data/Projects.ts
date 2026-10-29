
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
  // 1. ANCIENT WISDOM
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
    githubUrl : "https://github.com/yanis-rezgui/AncientWisdomV2",
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
      "https://res.cloudinary.com/dub4fhabm/image/upload/v1793305768/Capture_d_%C3%A9cran_du_2026-10-29_21-26-32_jglk9e.png"
    ],
    liveUrl: "https://ancient-wisdom-ivory.vercel.app",
    category: ProjectCategories.webApps,
    featured: true,
    published: true,
    order: 1,
  },

  // 2. EL AHLEM
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
    coverImage: "/images/projects/el-ahlem/cover.webp",
    gallery: [
      "/images/projects/el-ahlem/home.webp",
      "/images/projects/el-ahlem/properties.webp",
      "/images/projects/el-ahlem/property-details.webp",
      "/images/projects/el-ahlem/admin.webp",
    ],
    liveUrl: "https://el-ahlem.vercel.app",
    category: ProjectCategories.webApps,
    featured: true,
    published: true,
    order: 2,
  },

  // 3. DRIVEFLOW
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
      fr: "Une application de réservation de véhicules avec catalogue, parcours de réservation et espace d'administration.",
      en: "A vehicle rental application featuring a vehicle catalog, booking flow, and administration area.",
    },
    description: {
      fr: "DriveFlow est une application web consacrée à la location de véhicules. Elle propose une expérience structurée pour découvrir les véhicules, consulter les services et effectuer une demande de réservation. Le projet comprend également un espace d'administration destiné à gérer les informations et les opérations liées à l'activité. L'interface a été pensée pour rendre le parcours utilisateur clair, de la découverte des véhicules à la prise de contact.",
      en: "DriveFlow is a web application focused on vehicle rental. It provides a structured experience for discovering vehicles, browsing services, and submitting a booking request. The project also includes an administration area for managing information and rental operations. Its interface is designed to guide users from vehicle discovery to contacting the business.",
    },
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
    ],
    features: [
      {
        fr: "Catalogue de véhicules et consultation des informations.",
        en: "Vehicle catalog and detailed vehicle information.",
      },
      {
        fr: "Parcours de demande de réservation.",
        en: "Vehicle booking request flow.",
      },
      {
        fr: "Pages dédiées aux services et à la prise de contact.",
        en: "Dedicated services and contact pages.",
      },
      {
        fr: "Espace d'administration pour la gestion de l'application.",
        en: "Administration area for application management.",
      },
    ],
    coverImage: "/images/projects/driveflow/cover.webp",
    gallery: [
      "/images/projects/driveflow/home.webp",
      "/images/projects/driveflow/vehicles.webp",
      "/images/projects/driveflow/booking.webp",
      "/images/projects/driveflow/admin.webp",
    ],
    liveUrl: "https://drive-flow-ten.vercel.app",
    category: ProjectCategories.webApps,
    featured: false,
    published: true,
    order: 3,
  },

  // 4. BRICKSTORE
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
      fr: "BrickStore est une application e-commerce full-stack conçue pour le marché algérien. Elle associe une interface de boutique moderne à une API backend et à une base de données MongoDB. Les utilisateurs peuvent explorer le catalogue, filtrer les produits, gérer leur panier et passer commande. Côté administration, le tableau de bord permet de gérer les produits, les stocks, les commandes et les utilisateurs. Le projet comprend également la gestion des images, l'authentification par jetons et la génération de confirmations de commande au format PDF.",
      en: "BrickStore is a full-stack e-commerce application designed for the Algerian market. It combines a modern storefront with a backend API and a MongoDB database. Users can browse and filter the catalog, manage their cart, and place orders. On the administration side, a dashboard supports product, inventory, order, and user management. The project also includes image management, token-based authentication, and PDF order confirmations.",
    },
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "HTTP-only Cookies",
      "Cloudinary",
    ],
    features: [
      {
        fr: "Catalogue de produits avec recherche et filtres.",
        en: "Product catalog with search and filtering.",
      },
      {
        fr: "Panier et parcours de commande adaptés à la boutique.",
        en: "Shopping cart and store checkout flow.",
      },
      {
        fr: "Tableau de bord pour gérer produits, stocks, commandes et utilisateurs.",
        en: "Dashboard for managing products, inventory, orders, and users.",
      },
      {
        fr: "Authentification sécurisée et génération de confirmations PDF.",
        en: "Secure authentication and PDF order confirmation generation.",
      },
    ],
    coverImage: "/images/projects/brickstore/cover.webp",
    gallery: [
      "/images/projects/brickstore/home.webp",
      "/images/projects/brickstore/catalog.webp",
      "/images/projects/brickstore/cart.webp",
      "/images/projects/brickstore/admin.webp",
    ],
    category: ProjectCategories.websites,
    featured: true,
    published: true,
    order: 4,
  },

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
      fr: "Un agent IA d'aide à la décision pour comparer des fournisseurs, évaluer les risques et analyser des options d'approvisionnement.",
      en: "An AI-powered procurement assistant for comparing suppliers, assessing risks, and analyzing sourcing options.",
    },
    description: {
      fr: "SupplyPilot est un projet d'intelligence artificielle orienté vers l'analyse des achats et de l'approvisionnement. Il combine un modèle Gemini avec l'appel de fonctions, une recherche de fournisseurs et la collecte d'informations complémentaires sur le web. Le système structure l'analyse autour de la comparaison des prix, des certifications, de la conformité et des risques, puis produit des recommandations explicables à partir des critères utilisés. Le prototype s'appuie en partie sur un jeu de fournisseurs organisé pour la démonstration : il ne remplace pas un système réel d'approvisionnement ou de validation des fournisseurs.",
      en: "SupplyPilot is an AI project focused on procurement and sourcing analysis. It combines a Gemini model with function calling, supplier search, and additional web information gathering. The system structures its analysis around price comparison, certifications, compliance, and risk, then generates explainable recommendations based on the criteria used. The prototype relies partly on a curated supplier dataset for demonstration and does not replace a real procurement or supplier-validation system.",
    },
    technologies: [
      "Python",
      "Gemini 2.5 Flash",
      "Function Calling",
      "MongoDB",
      "Tavily",
      "Cheerio",
      "Web Scraping",
      "AI Agents",
    ],
    features: [
      {
        fr: "Recherche de fournisseurs à partir des données disponibles.",
        en: "Supplier search using the available dataset.",
      },
      {
        fr: "Collecte d'informations complémentaires depuis le web.",
        en: "Additional information gathering from the web.",
      },
      {
        fr: "Comparaison des prix, certifications et critères de conformité.",
        en: "Comparison of prices, certifications, and compliance criteria.",
      },
      {
        fr: "Évaluation des risques et recommandations explicables.",
        en: "Risk assessment and explainable recommendations.",
      },
    ],
    coverImage: "/images/projects/supplypilot/cover.webp",
    gallery: [
      "/images/projects/supplypilot/home.webp",
      "/images/projects/supplypilot/analysis.webp",
      "/images/projects/supplypilot/comparison.webp",
      "/images/projects/supplypilot/recommendations.webp",
    ],
    category: ProjectCategories.aiData,
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
      fr: "Un assistant IA expérimental qui analyse des exigences d'importation à partir des spécifications d'un produit et d'un pays de destination.",
      en: "An experimental AI assistant that analyzes import requirements using product specifications and a destination country.",
    },
    description: {
      fr: "Gemini-Trade est un prototype développé dans le cadre d'un hackathon. Il utilise l'IA générative pour structurer une première analyse de conformité à l'importation à partir des caractéristiques techniques d'un produit et du pays de destination. L'application vise à organiser les informations pertinentes et à présenter un raisonnement lisible pour aider l'utilisateur à explorer les exigences potentielles. Ses résultats sont indicatifs et doivent être vérifiés auprès de sources officielles ou de professionnels qualifiés ; ils ne constituent pas une décision juridique ou douanière officielle.",
      en: "Gemini-Trade is a prototype developed as part of a hackathon. It uses generative AI to structure an initial import-compliance analysis from a product's technical specifications and destination country. The application aims to organize relevant information and present readable reasoning to help users explore potential requirements. Its outputs are indicative and must be verified against official sources or with qualified professionals; they are not official legal or customs decisions.",
    },
    technologies: [
      "JavaScript",
      "Gemini API",
      "Generative AI",
      "Prompt Engineering",
      "Structured AI Outputs",
      "REST API",
      "Web Development",
    ],
    features: [
      {
        fr: "Analyse à partir des caractéristiques techniques du produit.",
        en: "Analysis based on a product's technical specifications.",
      },
      {
        fr: "Prise en compte du pays de destination.",
        en: "Destination-country input for the analysis.",
      },
      {
        fr: "Génération d'une analyse structurée par l'IA.",
        en: "AI-generated structured analysis.",
      },
      {
        fr: "Présentation des résultats comme aide exploratoire, sans valeur de décision officielle.",
        en: "Results presented as exploratory guidance, not as an official decision.",
      },
    ],
    coverImage: "/images/projects/gemini-trade/cover.webp",
    gallery: [
      "/images/projects/gemini-trade/home.webp",
      "/images/projects/gemini-trade/product-input.webp",
      "/images/projects/gemini-trade/analysis.webp",
    ],
    category: ProjectCategories.aiData,
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
