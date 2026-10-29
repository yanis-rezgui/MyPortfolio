
import type { Service } from "../Types/Service";

export const services: Service[] = [
  {
    id: "complex-web-applications",
    title: {
      fr: "Applications Web Complexes",
      en: "Complex Web Applications",
    },
    slug: {
      fr: "applications-web-complexes",
      en: "complex-web-applications",
    },
    category: "web-applications",
    shortDescription: {
      fr: "Des applications web sur mesure, conçues pour répondre à des besoins métier complexes.",
      en: "Custom-built web applications engineered to handle complex business requirements.",
    },
    description: {
      fr: "Je conçois et développe des applications web complètes, adaptées à vos processus et à vos objectifs. De l'architecture technique à l'interface utilisateur, chaque composant est pensé pour offrir une solution fiable, évolutive et performante.",
      en: "I design and develop complete web applications tailored to your business processes and goals. From technical architecture to user interfaces, every component is engineered to deliver a reliable, scalable, and high-performing solution.",
    },
    features: [
      {
        fr: "Architecture frontend et backend sur mesure",
        en: "Custom frontend and backend architecture",
      },
      {
        fr: "Systèmes d'authentification et gestion des utilisateurs",
        en: "Authentication and user management systems",
      },
      {
        fr: "Bases de données et gestion des données",
        en: "Database design and data management",
      },
      {
        fr: "API et fonctionnalités métier personnalisées",
        en: "Custom APIs and business logic",
      },
      {
        fr: "Déploiement et mise en production",
        en: "Deployment and production setup",
      },
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    icon: "code-2",
    featured: true,
    available: true,
    order: 1,
  },

  {
    id: "business-websites",
    title: {
      fr: "Sites Web Professionnels",
      en: "Business Websites",
    },
    slug: {
      fr: "sites-web-professionnels",
      en: "business-websites",
    },
    category: "business-websites",
    shortDescription: {
      fr: "Une présence en ligne professionnelle pour présenter votre activité et attirer vos clients.",
      en: "A professional online presence to showcase your business and reach more customers.",
    },
    description: {
      fr: "Je crée des sites web modernes pour les entreprises, commerces, indépendants et professionnels. Que votre activité soit physique ou entièrement en ligne, votre site devient une vitrine accessible, claire et adaptée à votre identité.",
      en: "I build modern websites for businesses, local shops, independent professionals, and online brands. Whether your business operates physically or entirely online, your website becomes a polished, accessible showcase that reflects your identity.",
    },
    features: [
      {
        fr: "Design moderne et adapté à votre identité",
        en: "Modern design tailored to your brand",
      },
      {
        fr: "Interface responsive pour mobile, tablette et desktop",
        en: "Responsive layouts for mobile, tablet, and desktop",
      },
      {
        fr: "Présentation de vos services et de votre activité",
        en: "Business and service presentation",
      },
      {
        fr: "Formulaires de contact et intégrations utiles",
        en: "Contact forms and useful integrations",
      },
      {
        fr: "Optimisation SEO et performances",
        en: "SEO and performance optimization",
      },
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    icon: "globe",
    featured: true,
    available: true,
    order: 2,
  },

  {
    id: "landing-pages",
    title: {
      fr: "Landing Pages",
      en: "Landing Pages",
    },
    slug: {
      fr: "landing-pages",
      en: "landing-pages",
    },
    category: "landing-pages",
    shortDescription: {
      fr: "Des pages ciblées pour présenter une offre, promouvoir un produit et convertir vos visiteurs.",
      en: "Focused pages designed to promote an offer, showcase a product, and convert visitors.",
    },
    description: {
      fr: "Je développe des landing pages pensées autour d'un objectif précis : générer des prospects, promouvoir un lancement, présenter une offre ou encourager une action. Le design, le contenu et la structure sont organisés pour guider naturellement vos visiteurs.",
      en: "I develop landing pages built around a specific goal: generating leads, promoting a launch, presenting an offer, or encouraging an action. Design, content, and structure work together to guide visitors toward conversion.",
    },
    features: [
      {
        fr: "Design orienté conversion",
        en: "Conversion-focused design",
      },
      {
        fr: "Structure claire et appels à l'action stratégiques",
        en: "Clear structure and strategic calls to action",
      },
      {
        fr: "Présentation de produits et d'offres",
        en: "Product and offer presentation",
      },
      {
        fr: "Formulaires de génération de prospects",
        en: "Lead generation forms",
      },
      {
        fr: "Chargement rapide et responsive design",
        en: "Fast loading and responsive design",
      },
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    icon: "panels-top-left",
    featured: false,
    available: true,
    order: 3,
  },

  {
    id: "admin-dashboards",
    title: {
      fr: "Dashboards & Interfaces d'Administration",
      en: "Dashboards & Admin Panels",
    },
    slug: {
      fr: "dashboards-administration",
      en: "dashboards-admin-panels",
    },
    category: "dashboards",
    shortDescription: {
      fr: "Des interfaces centralisées pour piloter votre activité et gérer vos opérations.",
      en: "Centralized interfaces to monitor your business and manage daily operations.",
    },
    description: {
      fr: "Je développe des tableaux de bord et des espaces d'administration qui simplifient la gestion de votre activité. Visualisez vos données, gérez vos utilisateurs, contrôlez vos contenus et centralisez vos opérations depuis une interface intuitive.",
      en: "I build dashboards and admin panels that simplify business management. Visualize your data, manage users, control content, and centralize operations through an intuitive interface.",
    },
    features: [
      {
        fr: "Tableaux de bord et visualisation des données",
        en: "Dashboards and data visualization",
      },
      {
        fr: "Gestion des utilisateurs et des permissions",
        en: "User and permission management",
      },
      {
        fr: "Gestion de contenu et opérations CRUD",
        en: "Content management and CRUD operations",
      },
      {
        fr: "Filtres, recherche et statistiques",
        en: "Filters, search, and analytics",
      },
      {
        fr: "Authentification et accès sécurisés",
        en: "Authentication and secure access control",
      },
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    icon: "layout-dashboard",
    featured: true,
    available: true,
    order: 4,
  },

  {
    id: "ai-powered-applications",
    title: {
      fr: "Applications Intégrant l'IA",
      en: "AI-Powered Applications",
    },
    slug: {
      fr: "applications-intelligence-artificielle",
      en: "ai-powered-applications",
    },
    category: "ai-applications",
    shortDescription: {
      fr: "Des applications enrichies par l'intelligence artificielle pour automatiser et améliorer vos processus.",
      en: "AI-enhanced applications that automate workflows and create smarter user experiences.",
    },
    description: {
      fr: "J'intègre des modèles d'intelligence artificielle à des applications web pour créer des fonctionnalités intelligentes et utiles. Chatbots, assistants, génération de contenu ou analyse de documents : l'IA devient une véritable fonctionnalité de votre produit.",
      en: "I integrate artificial intelligence models into web applications to build useful, intelligent features. From chatbots and assistants to content generation and document analysis, AI becomes a practical part of your product.",
    },
    features: [
      {
        fr: "Intégration d'API de modèles IA",
        en: "AI model API integration",
      },
      {
        fr: "Chatbots et assistants intelligents",
        en: "AI chatbots and intelligent assistants",
      },
      {
        fr: "Génération et traitement de contenu",
        en: "Content generation and processing",
      },
      {
        fr: "Analyse de documents et extraction d'informations",
        en: "Document analysis and information extraction",
      },
      {
        fr: "Intégration de fonctionnalités IA dans des applications existantes",
        en: "AI feature integration into existing applications",
      },
    ],
    technologies: ["Gemini API", "LLM APIs", "React", "TypeScript", "Node.js"],
    icon: "brain-circuit",
    featured: true,
    available: true,
    order: 5,
  },

  {
    id: "saas-products",
    title: {
      fr: "Produits SaaS",
      en: "SaaS Products",
    },
    slug: {
      fr: "produits-saas",
      en: "saas-products",
    },
    category: "saas-products",
    shortDescription: {
      fr: "Des plateformes accessibles en ligne, conçues pour évoluer avec vos utilisateurs et votre activité.",
      en: "Cloud-based platforms designed to grow with your users and business.",
    },
    description: {
      fr: "Je développe des produits SaaS de bout en bout, depuis la conception des fonctionnalités jusqu'à leur mise en production. Gestion des comptes, espaces utilisateurs, abonnements et architecture évolutive : chaque élément est pensé pour construire un produit durable.",
      en: "I build end-to-end SaaS products, from feature planning to production deployment. User accounts, dedicated workspaces, subscription workflows, and scalable architecture are designed to support a sustainable product.",
    },
    features: [
      {
        fr: "Architecture applicative évolutive",
        en: "Scalable application architecture",
      },
      {
        fr: "Comptes utilisateurs et espaces personnalisés",
        en: "User accounts and personalized workspaces",
      },
      {
        fr: "Gestion des rôles et des permissions",
        en: "Roles and permission management",
      },
      {
        fr: "Intégration de paiements et abonnements selon les besoins",
        en: "Payment and subscription integration when required",
      },
      {
        fr: "Déploiement et maintenance de la plateforme",
        en: "Platform deployment and maintenance",
      },
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "MongoDB"],
    icon: "cloud",
    featured: true,
    available: true,
    order: 6,
  },

  {
    id: "e-commerce-solutions",
    title: {
      fr: "Solutions E-commerce",
      en: "E-commerce Solutions",
    },
    slug: {
      fr: "solutions-e-commerce",
      en: "e-commerce-solutions",
    },
    category: "e-commerce",
    shortDescription: {
      fr: "Des boutiques en ligne pour présenter, vendre et gérer vos produits.",
      en: "Online stores to showcase, sell, and manage your products.",
    },
    description: {
      fr: "Je crée des expériences e-commerce adaptées à votre catalogue et à votre manière de vendre. De la présentation des produits à la gestion des commandes, votre boutique dispose des fonctionnalités nécessaires pour développer votre activité en ligne.",
      en: "I build e-commerce experiences tailored to your catalog and sales process. From product presentation to order management, your online store gets the essential features needed to grow your business.",
    },
    features: [
      {
        fr: "Catalogue et fiches produits",
        en: "Product catalogs and product pages",
      },
      {
        fr: "Panier et processus de commande",
        en: "Shopping cart and checkout workflow",
      },
      {
        fr: "Gestion des commandes et des produits",
        en: "Product and order management",
      },
      {
        fr: "Tableau de bord administrateur",
        en: "Admin dashboard",
      },
      {
        fr: "Intégration de solutions de paiement ou paiement à la livraison",
        en: "Payment gateway or cash-on-delivery integration",
      },
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    icon: "shopping-bag",
    featured: false,
    available: true,
    order: 7,
  },

  {
    id: "api-integrations",
    title: {
      fr: "API & Intégrations",
      en: "API & Integrations",
    },
    slug: {
      fr: "api-integrations",
      en: "api-integrations",
    },
    category: "api-integrations",
    shortDescription: {
      fr: "Connectez vos outils et services grâce à des API et des intégrations personnalisées.",
      en: "Connect your tools and services through APIs and custom integrations.",
    },
    description: {
      fr: "Je développe et intègre des API pour permettre à vos applications de communiquer avec des services externes. Automatisation de flux, synchronisation de données et connexion à des plateformes tierces : vos outils fonctionnent ensemble.",
      en: "I build and integrate APIs that allow your applications to communicate with external services. Workflow automation, data synchronization, and third-party integrations help your tools work together.",
    },
    features: [
      {
        fr: "Développement d'API REST",
        en: "REST API development",
      },
      {
        fr: "Intégration de services tiers",
        en: "Third-party service integration",
      },
      {
        fr: "Authentification et autorisation",
        en: "Authentication and authorization",
      },
      {
        fr: "Synchronisation et échange de données",
        en: "Data synchronization and exchange",
      },
    ],
    technologies: ["Node.js", "Express", "REST APIs", "JWT"],
    icon: "workflow",
    featured: false,
    available: true,
    order: 8,
  },

  {
    id: "maintenance-optimization",
    title: {
      fr: "Maintenance & Optimisation",
      en: "Maintenance & Optimization",
    },
    slug: {
      fr: "maintenance-optimisation",
      en: "maintenance-optimization",
    },
    category: "maintenance",
    shortDescription: {
      fr: "Améliorez la fiabilité, les performances et la sécurité de votre application existante.",
      en: "Improve the reliability, performance, and security of your existing application.",
    },
    description: {
      fr: "J'interviens sur des applications web existantes pour corriger des problèmes, améliorer leurs performances et faire évoluer leurs fonctionnalités. L'objectif est de maintenir un produit fiable et adapté à vos besoins.",
      en: "I work on existing web applications to fix issues, improve performance, and extend their functionality. The goal is to keep your product reliable and aligned with your evolving needs.",
    },
    features: [
      {
        fr: "Correction de bugs et résolution de problèmes",
        en: "Bug fixing and troubleshooting",
      },
      {
        fr: "Optimisation des performances",
        en: "Performance optimization",
      },
      {
        fr: "Amélioration de fonctionnalités existantes",
        en: "Existing feature improvements",
      },
      {
        fr: "Mises à jour et évolutions techniques",
        en: "Technical updates and enhancements",
      },
      {
        fr: "Déploiement et suivi technique",
        en: "Deployment and technical support",
      },
    ],
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "PostgreSQL"],
    icon: "settings",
    featured: false,
    available: true,
    order: 9,
  },
];
