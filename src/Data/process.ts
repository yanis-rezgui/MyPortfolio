
import type { ProcessStep } from "../Types/Process";

export const developmentProcess: ProcessStep[] = [
  {
    id: "discovery",
    number: "01",
    title: {
      fr: "Découverte & Analyse",
      en: "Discovery & Analysis",
    },
    slug: {
      fr: "decouverte-analyse",
      en: "discovery-analysis",
    },
    stage: "discovery",
    shortDescription: {
      fr: "Comprendre votre vision, vos objectifs et les besoins de votre projet.",
      en: "Understanding your vision, goals, and project requirements.",
    },
    description: {
      fr: "Chaque projet commence par une discussion pour comprendre votre idée, votre activité et les problèmes que vous souhaitez résoudre. J'analyse vos besoins, identifie les fonctionnalités essentielles et définis les objectifs du produit.",
      en: "Every project starts with a discussion to understand your idea, business, and the problems you want to solve. I analyze your requirements, identify essential features, and define the product's objectives.",
    },
    activities: [
      {
        fr: "Échange autour de votre idée et de votre vision",
        en: "Discussing your idea and vision",
      },
      {
        fr: "Identification des besoins fonctionnels",
        en: "Identifying functional requirements",
      },
      {
        fr: "Définition du public cible et des objectifs",
        en: "Defining the target audience and objectives",
      },
      {
        fr: "Identification des contraintes techniques",
        en: "Identifying technical constraints",
      },
    ],
    deliverables: [
      {
        fr: "Cahier des besoins",
        en: "Project requirements",
      },
      {
        fr: "Liste des fonctionnalités principales",
        en: "Core feature list",
      },
      {
        fr: "Objectifs et périmètre du projet",
        en: "Project goals and scope",
      },
    ],
    icon: "lightbulb",
    featured: true,
    order: 1,
  },

  {
    id: "planning",
    number: "02",
    title: {
      fr: "Planification & Architecture",
      en: "Planning & Architecture",
    },
    slug: {
      fr: "planification-architecture",
      en: "planning-architecture",
    },
    stage: "planning",
    shortDescription: {
      fr: "Définir la structure technique et organiser les différentes étapes du développement.",
      en: "Defining the technical structure and organizing the development roadmap.",
    },
    description: {
      fr: "Une fois les besoins définis, je construis le plan technique du projet. Je sélectionne les technologies adaptées, réfléchis à l'architecture frontend et backend, à la structure des données et aux interactions entre les différents composants.",
      en: "Once the requirements are clear, I build the project's technical plan. I select suitable technologies and define the frontend and backend architecture, data structure, and interactions between components.",
    },
    activities: [
      {
        fr: "Choix de la stack technique",
        en: "Selecting the technology stack",
      },
      {
        fr: "Conception de l'architecture frontend et backend",
        en: "Designing the frontend and backend architecture",
      },
      {
        fr: "Modélisation de la base de données",
        en: "Database modeling",
      },
      {
        fr: "Organisation des fonctionnalités et priorités",
        en: "Organizing features and priorities",
      },
    ],
    deliverables: [
      {
        fr: "Architecture technique",
        en: "Technical architecture",
      },
      {
        fr: "Modèle de données",
        en: "Data model",
      },
      {
        fr: "Plan de développement",
        en: "Development roadmap",
      },
    ],
    icon: "workflow",
    featured: true,
    order: 2,
  },

  {
    id: "design",
    number: "03",
    title: {
      fr: "UI/UX Design",
      en: "UI/UX Design",
    },
    slug: {
      fr: "conception-ui-ux",
      en: "ui-ux-design",
    },
    stage: "design",
    shortDescription: {
      fr: "Concevoir une expérience intuitive avec une interface moderne et cohérente.",
      en: "Creating an intuitive user experience with a modern and consistent interface.",
    },
    description: {
      fr: "Je transforme la structure du projet en une expérience utilisateur claire et agréable. Je réfléchis à l'organisation des pages, à la navigation, à la hiérarchie visuelle et à l'adaptation de l'interface à tous les écrans.",
      en: "I turn the project structure into a clear and engaging user experience. I focus on page layouts, navigation, visual hierarchy, and adapting the interface to different screen sizes.",
    },
    activities: [
      {
        fr: "Organisation des pages et des parcours utilisateurs",
        en: "Planning pages and user journeys",
      },
      {
        fr: "Conception de l'identité visuelle de l'interface",
        en: "Defining the interface's visual direction",
      },
      {
        fr: "Création des composants et éléments d'interface",
        en: "Designing interface components and elements",
      },
      {
        fr: "Conception responsive",
        en: "Responsive design planning",
      },
    ],
    deliverables: [
      {
        fr: "Structure des interfaces",
        en: "Interface layouts",
      },
      {
        fr: "Direction visuelle",
        en: "Visual direction",
      },
      {
        fr: "Parcours utilisateurs",
        en: "User journeys",
      },
    ],
    icon: "palette",
    featured: true,
    order: 3,
  },

  {
    id: "development",
    number: "04",
    title: {
      fr: "Développement",
      en: "Development",
    },
    slug: {
      fr: "developpement",
      en: "development",
    },
    stage: "development",
    shortDescription: {
      fr: "Donner vie au projet en développant ses fonctionnalités frontend et backend.",
      en: "Bringing the project to life through frontend and backend development.",
    },
    description: {
      fr: "C'est ici que les différentes pièces prennent forme. Je développe l'interface utilisateur, la logique métier, les API et les interactions avec la base de données. Je peux également intégrer des services externes et des fonctionnalités basées sur l'intelligence artificielle selon les besoins du projet.",
      en: "This is where the different pieces come together. I build the user interface, business logic, APIs, and database interactions. I can also integrate external services and AI-powered features depending on the project's requirements.",
    },
    activities: [
      {
        fr: "Développement des interfaces frontend",
        en: "Building frontend interfaces",
      },
      {
        fr: "Développement du backend et des API",
        en: "Building backend services and APIs",
      },
      {
        fr: "Intégration et gestion des bases de données",
        en: "Integrating and managing databases",
      },
      {
        fr: "Implémentation des fonctionnalités métier",
        en: "Implementing business logic",
      },
      {
        fr: "Intégration de services tiers et d'IA si nécessaire",
        en: "Integrating third-party services and AI when needed",
      },
    ],
    deliverables: [
      {
        fr: "Application fonctionnelle",
        en: "Functional application",
      },
      {
        fr: "API et services backend",
        en: "APIs and backend services",
      },
      {
        fr: "Fonctionnalités implémentées",
        en: "Implemented features",
      },
    ],
    icon: "code-2",
    featured: true,
    order: 4,
  },

  {
    id: "testing",
    number: "05",
    title: {
      fr: "Tests & Optimisation",
      en: "Testing & Optimization",
    },
    slug: {
      fr: "tests-optimisation",
      en: "testing-optimization",
    },
    stage: "testing",
    shortDescription: {
      fr: "Vérifier la fiabilité du produit et améliorer ses performances avant sa mise en ligne.",
      en: "Ensuring product reliability and improving performance before launch.",
    },
    description: {
      fr: "Avant le lancement, je vérifie le comportement de l'application, teste ses fonctionnalités et corrige les problèmes identifiés. Je porte une attention particulière à la sécurité, aux performances, à la compatibilité et à l'expérience utilisateur.",
      en: "Before launch, I verify the application's behavior, test its features, and fix identified issues. I pay particular attention to security, performance, compatibility, and user experience.",
    },
    activities: [
      {
        fr: "Tests fonctionnels et vérification des parcours",
        en: "Functional testing and user journey validation",
      },
      {
        fr: "Détection et correction des bugs",
        en: "Identifying and fixing bugs",
      },
      {
        fr: "Vérifications de sécurité",
        en: "Security checks",
      },
      {
        fr: "Optimisation des performances et du responsive",
        en: "Performance and responsive optimization",
      },
    ],
    deliverables: [
      {
        fr: "Version testée et corrigée",
        en: "Tested and refined application",
      },
      {
        fr: "Améliorations de performance",
        en: "Performance improvements",
      },
      {
        fr: "Validation avant lancement",
        en: "Pre-launch validation",
      },
    ],
    icon: "shield-check",
    featured: true,
    order: 5,
  },

  {
    id: "deployment",
    number: "06",
    title: {
      fr: "Déploiement & Lancement",
      en: "Deployment & Launch",
    },
    slug: {
      fr: "deploiement-lancement",
      en: "deployment-launch",
    },
    stage: "deployment",
    shortDescription: {
      fr: "Mettre votre application en ligne et la rendre accessible à vos utilisateurs.",
      en: "Taking your application live and making it accessible to users.",
    },
    description: {
      fr: "Une fois le produit validé, je prépare son environnement de production et procède au déploiement. Configuration du serveur, variables d'environnement, base de données, domaine et services nécessaires : je veille à ce que votre application soit prête à être utilisée.",
      en: "Once the product is validated, I prepare its production environment and deploy it. From server configuration and environment variables to databases, domains, and required services, I make sure your application is ready for real-world use.",
    },
    activities: [
      {
        fr: "Configuration de l'environnement de production",
        en: "Configuring the production environment",
      },
      {
        fr: "Déploiement du frontend et du backend",
        en: "Deploying frontend and backend services",
      },
      {
        fr: "Configuration du domaine et des services",
        en: "Configuring domains and services",
      },
      {
        fr: "Vérifications après déploiement",
        en: "Post-deployment verification",
      },
    ],
    deliverables: [
      {
        fr: "Application accessible en ligne",
        en: "Live application",
      },
      {
        fr: "Environnement de production configuré",
        en: "Configured production environment",
      },
      {
        fr: "Livraison du projet",
        en: "Project handover",
      },
    ],
    icon: "rocket",
    featured: true,
    order: 6,
  },

  {
    id: "maintenance",
    number: "07",
    title: {
      fr: "Maintenance & Évolution",
      en: "Maintenance & Growth",
    },
    slug: {
      fr: "maintenance-evolution",
      en: "maintenance-growth",
    },
    stage: "maintenance",
    shortDescription: {
      fr: "Accompagner votre produit après son lancement et le faire évoluer dans le temps.",
      en: "Supporting your product after launch and helping it evolve over time.",
    },
    description: {
      fr: "Le lancement n'est pas la fin du projet. Je peux continuer à intervenir pour assurer les mises à jour, résoudre les problèmes, améliorer les fonctionnalités et adapter l'application aux nouveaux besoins de votre activité.",
      en: "Launch is not the end of the project. I can continue supporting it through updates, issue resolution, feature improvements, and adaptations to your business's evolving needs.",
    },
    activities: [
      {
        fr: "Correction des problèmes après lancement",
        en: "Resolving post-launch issues",
      },
      {
        fr: "Mises à jour techniques",
        en: "Technical updates",
      },
      {
        fr: "Ajout et amélioration de fonctionnalités",
        en: "Adding and improving features",
      },
      {
        fr: "Suivi des performances et de la fiabilité",
        en: "Monitoring performance and reliability",
      },
    ],
    deliverables: [
      {
        fr: "Application maintenue et actualisée",
        en: "Maintained and updated application",
      },
      {
        fr: "Nouvelles fonctionnalités",
        en: "New features",
      },
      {
        fr: "Améliorations continues",
        en: "Continuous improvements",
      },
    ],
    icon: "refresh-cw",
    featured: false,
    order: 7,
  },
];
