import type { Education } from "../Types/Education";

export const educationData: Education[] = [
  {
    id: "alger-1",
    institution: "Université d'Alger 1",
    institutionWebsite: "https://www.univ-alger.dz/",
    institutionLogo : "https://res.cloudinary.com/dub4fhabm/image/upload/v1793359712/d2f5c511-10a5-487d-b8a4-e2474b3f8d8a.png",
    degree: {
      en: "Bachelor's Degree in Computer Science",
      fr: "Licence en Informatique",
    },
    field: {
      en: "Computer Science",
      fr: "Informatique",
    },
    type: "university",
    location: "Algiers, Algeria",
    startDate: "2024-09",
    endDate: null,
    currentlyStudying: true,
    description: {
      en: "Third-Year Computer Science undergraduate, developing a strong foundation in algorithms, programming, software engineering, and computer systems.",
      fr: "Étudiant en troisième année de licence informatique, développant de solides bases en algorithmique, programmation, génie logiciel et systèmes informatiques.",
    },
    achievements: [
      {
        en: "Completed coursework in Algorithms, C programming, Object-Oriented Programming, and Operating Systems.",
        fr: "Formation en algorithmique, programmation C, programmation orientée objet et systèmes d'exploitation.",
      },
      {
        en: "Consistently achieved strong academic results.",
        fr: "Obtention régulière de bons résultats académiques.",
      },
    ],
    featured: true,
    order: 1,
  },
  {
    id: "harvard-cs50x",
    institution: "Harvard University",
    institutionLogo: "https://res.cloudinary.com/dub4fhabm/image/upload/v1793359071/kisspng-harvard-university-department-of-english-radcliffe-harvard-logo-harvard-symbol-meaning-history-and-1713951342778_ltvyqr.webp",
    institutionWebsite: "https://cs50.harvard.edu/x/",
    degree: {
      en: "CS50x: Introduction to Computer Science",
      fr: "CS50x : Introduction à l'informatique",
    },
    field: {
      en: "Computer Science",
      fr: "Informatique",
    },
    type: "certification",
    location: "Online",
    startDate: "2025-09",
    endDate: "2026-02",
    currentlyStudying: false,
    description: {
      en: "Completed Harvard University's CS50x course, covering foundational computer science concepts, programming in C, Python, JavaScript, and web development.",
      fr: "Formation CS50x de Harvard University couvrant les fondamentaux de l'informatique, la programmation en C, Python, JavaScript et le développement web.",
    },
    achievements: [
      {
        en: "Completed the full CS50x curriculum.",
        fr: "Achèvement complet du programme CS50x.",
      },
      {
        en: "Developed practical programming and problem-solving skills.",
        fr: "Développement de compétences pratiques en programmation et en résolution de problèmes.",
      },
    ],
    certificationImage: "https://res.cloudinary.com/dub4fhabm/image/upload/v1793359139/ecf16c3f-da22-4de6-8e69-3d8654fd8e83.png",
    credentialUrl: "https://certificates.cs50.io/207de59a-e101-4d0c-9773-f3b3ac20c39c.pdf?size=letter",
    featured: true,
    order: 2,
  },
  {
    id: "harvard-cs50p",
    institution: "Harvard University",
    institutionLogo: "https://res.cloudinary.com/dub4fhabm/image/upload/v1793359071/kisspng-harvard-university-department-of-english-radcliffe-harvard-logo-harvard-symbol-meaning-history-and-1713951342778_ltvyqr.webp",
    institutionWebsite: "https://cs50.harvard.edu/python/",
    degree: {
      en: "CS50P: Introduction to Programming with Python",
      fr: "CS50P : Introduction à la programmation avec Python",
    },
    field: {
      en: "Python Programming",
      fr: "Programmation Python",
    },
    type: "certification",
    location: "Online",
    startDate: "2026-05",
    endDate: "2026-07",
    currentlyStudying: false,
    description: {
      en: "Completed CS50P, covering Python fundamentals, object-oriented programming, data structures, file I/O, exceptions, testing, and modular programming.",
      fr: "Formation CS50P couvrant les fondamentaux de Python, la programmation orientée objet, les structures de données, la gestion des fichiers, les exceptions, les tests et la programmation modulaire.",
    },
    achievements: [
      {
        en: "Built a modular Python Store Management System as the final project, featuring product, customer, inventory, and sales management.",
        fr: "Développement d'un système modulaire de gestion de magasin en Python comme projet final, avec gestion des produits, clients, stocks et ventes.",
      },
      {
        en: "Implemented JSON persistence and automated tests using pytest.",
        fr: "Mise en place de la persistance JSON et de tests automatisés avec pytest.",
      },
    ],
    certificationImage: "https://res.cloudinary.com/dub4fhabm/image/upload/v1793359139/ecf16c3f-da22-4de6-8e69-3d8654fd8e83.png",
    credentialUrl: "https://certificates.cs50.io/63f32464-2b28-48e9-bc32-73f975b82e29.pdf?size=letter",
    featured: true,
    order: 3,
  },
  {
    id: "harvard-cs50ai",
    institution: "Harvard University",
    institutionLogo: "https://res.cloudinary.com/dub4fhabm/image/upload/v1793359071/kisspng-harvard-university-department-of-english-radcliffe-harvard-logo-harvard-symbol-meaning-history-and-1713951342778_ltvyqr.webp",
    institutionWebsite: "https://cs50.harvard.edu/ai/",
    degree: {
      en: "CS50AI: Introduction to Artificial Intelligence with Python",
      fr: "CS50AI : Introduction à l'intelligence artificielle avec Python",
    },
    field: {
      en: "Artificial Intelligence",
      fr: "Intelligence artificielle",
    },
    type: "certification",
    location: "Online",
    startDate: "2026-07",
    endDate: "2026-08",
    currentlyStudying: false,
    description: {
      en: "Completed Harvard University's CS50AI course, exploring search algorithms, knowledge representation, uncertainty, optimization, machine learning, neural networks, and natural language processing.",
      fr: "Formation CS50AI de Harvard University portant sur les algorithmes de recherche, la représentation des connaissances, l'incertitude, l'optimisation, le machine learning, les réseaux de neurones et le traitement du langage naturel.",
    },
    achievements: [
      {
        en: "Developed an image classification model for traffic signs using the German Traffic Sign Recognition Benchmark (GTSRB).",
        fr: "Développement d'un modèle de classification d'images de panneaux de signalisation avec le jeu de données GTSRB.",
      },
      {
        en: "Achieved 98.76% accuracy on the traffic sign recognition project.",
        fr: "Obtention d'une précision de 98,76 % sur le projet de reconnaissance des panneaux.",
      },
    ],
    certificationImage: "https://res.cloudinary.com/dub4fhabm/image/upload/v1793359167/b2998d5d-11df-4887-99db-3e5fe1d54ce3.png",
    credentialUrl: "https://certificates.cs50.io/9aa4bd7c-b88a-45c9-b487-6c84a321a518.pdf?size=letter",
    featured: true,
    order: 4,
  },
  {
    id: "microsoft-generative-ai",
    institution: "Microsoft",
    institutionLogo: "https://res.cloudinary.com/dub4fhabm/image/upload/v1793359091/images_lruybd.png",
    institutionWebsite: "https://www.microsoft.com/",
    degree: {
      en: "Preparing Your Career in Generative AI",
      fr: "Preparing Your Career in Generative AI",
    },
    field: {
      en: "Generative Artificial Intelligence",
      fr: "Intelligence artificielle générative",
    },
    type: "certification",
    location: "Online",
    startDate: "2025-06",
    endDate: "2025-06",
    currentlyStudying: false,
    description: {
      en: "Completed the Generative AI learning path offered by Microsoft and LinkedIn, gaining foundational knowledge of generative AI and its professional applications.",
      fr: "Formation proposée par Microsoft et LinkedIn permettant d'acquérir des connaissances fondamentales en intelligence artificielle générative et ses applications professionnelles.",
    },
    achievements: [
      {
        en: "Developed foundational knowledge of generative AI concepts and applications.",
        fr: "Acquisition de connaissances fondamentales sur les concepts et les applications de l'IA générative.",
      },
    ],
    certificationImage: "https://res.cloudinary.com/dub4fhabm/image/upload/v1793359203/7643f28a-2fe0-44d9-98c8-59089c9297d7.png",
    credentialUrl: "https://www.linkedin.com/learning/certificates/0104a8a14f1da965c2b29a9826b9e82199f94792db06190ffaa2be6bb807fd00",
    featured: true,
    order: 5,
  },
];