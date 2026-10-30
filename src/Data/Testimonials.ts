
import type { Testimonial } from "../Types/Testimonial";

export const testimonials: Testimonial[] = [
  {
    id: "mourad-bouraba",
    name: "Mourad Bouraba",
    role: {
      en: "Manager",
      fr: "Gérant",
    },
    company: "El Ahlem",
    relationship: "supervisor",
    message: {
      en: "Yanis demonstrated strong technical skills, dedication, and a genuine commitment to delivering quality work throughout the development of our real estate platform. His ability to understand business needs and translate them into practical solutions was particularly appreciated.",
      fr: "Yanis a fait preuve de solides compétences techniques, de sérieux et d'un réel engagement dans le développement de notre plateforme immobilière. Sa capacité à comprendre les besoins de l'entreprise et à les traduire en solutions concrètes a été particulièrement appréciée.",
    },
    featured: true,
    published: true,
    order: 1,
  },
  {
    id: "salvatore-aloisio",
    name: "Salvatore Aloisio",
    role: {
      en: "Former Director of Operations",
      fr: "Ancien directeur des opérations",
    },
    company: "ABB Algeria",
    relationship: "supervisor",
    message: {
      en: "Yanis contributed to a project exploring the use of generative AI to streamline regulatory analysis for sensitive equipment imports. He demonstrated curiosity, analytical thinking, and an ability to approach complex technical challenges with innovative solutions.",
      fr: "Yanis a contribué à un projet explorant l'utilisation de l'intelligence artificielle générative pour faciliter l'analyse réglementaire liée à l'importation d'équipements sensibles. Il a démontré de la curiosité, un esprit analytique et une capacité à aborder des problématiques techniques complexes avec des solutions innovantes.",
    },
    featured: true,
    published: true,
    order: 2,
  },
  {
    id: "samir-hameg",
    name: "Samir Hameg",
    role: {
      en: "Algorithms & Data Structures Professor",
      fr: "Professeur d'algorithmique et de structures de données",
    },
    company: "University of Algiers 1",
    relationship: "professor",
    message: {
      en: "Yanis demonstrated a strong understanding of algorithmic concepts and data structures, alongside a consistent willingness to deepen his knowledge and tackle challenging problems. His analytical approach and dedication to learning are noteworthy.",
      fr: "Yanis a démontré une bonne maîtrise des concepts algorithmiques et des structures de données, ainsi qu'une volonté constante d'approfondir ses connaissances et de relever des problèmes complexes. Son approche analytique et son investissement dans l'apprentissage sont à souligner.",
    },
    featured: true,
    published: true,
    order: 3,
  },
  {
    id: "sara-madi",
    name: "Sara Madi",
    role: {
      en: "Computer Architecture Professor",
      fr: "Professeure d'architecture des ordinateurs",
    },
    company: "University of Algiers 1",
    relationship: "professor",
    message: {
      en: "Yanis showed an interest in understanding the fundamental principles of computer architecture and their practical applications. His commitment to developing his technical knowledge and broadening his understanding of computer science is appreciated.",
      fr: "Yanis a manifesté un intérêt pour la compréhension des principes fondamentaux de l'architecture des ordinateurs et de leurs applications pratiques. Son engagement dans le développement de ses connaissances techniques et l'approfondissement de sa compréhension de l'informatique est apprécié.",
    },
    featured: true,
    published: true,
    order: 4,
  },
];
