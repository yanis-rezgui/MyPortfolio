import type { LocalizedText } from "./Common";



export interface Category {
  name: LocalizedText;
  description: LocalizedText;
  slug: string;
}

export interface Project {
  id: string;

  title: LocalizedText;
  slug: LocalizedText;

  shortDescription: LocalizedText;
  description: LocalizedText;

  technologies: string[];
  features: LocalizedText[];

  coverImage: string;
  gallery: string[];

  liveUrl?: string;
  githubUrl?: string;

  category: Category;

  featured: boolean;
  published: boolean;
  order: number;
}
