
import type { LocalizedText } from "./Common";

// ─── Existing types ─────────────────────────────

export interface Category {
  name: LocalizedText;
  description: LocalizedText;
  slug: string;
}

// ─── Project details types ──────────────────────

export type ProjectStatus =
  | "online"
  | "in-progress"
  | "completed"
  | "offline";

export interface ProjectService {
  name: LocalizedText;
  slug: string;
  url?: string;
}

export interface ProjectInfo {
  client?: string;
  industry?: LocalizedText;
  projectType?: LocalizedText;
  role?: LocalizedText;
  status?: ProjectStatus;
  completionDate?: string;
}

export interface ProjectSection {
  title: LocalizedText;
  content: LocalizedText;
  image?: string;
}

export interface ProjectTestimonial {
  content: LocalizedText;
  author: string;
  position?: LocalizedText;
  company?: string;
  avatar?: string;
}

export interface ProjectTechGroup {
  category: LocalizedText;
  technologies: string[];
}

export interface ProjectDetails {
  // Project overview
  info?: ProjectInfo;
  service?: ProjectService;

  // Case study content
  introduction?: LocalizedText;
  problem?: LocalizedText;
  solution?: LocalizedText;
  results?: LocalizedText[];

  // Work completed
  contributions?: LocalizedText[];

  // Client feedback
  testimonial?: ProjectTestimonial;

  // Technical information
  technicalDescription?: LocalizedText;
  techStack?: ProjectTechGroup[];
}

// ─── Main Project ───────────────────────────────

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

  // Detailed case study
  details?: ProjectDetails;

  featured: boolean;
  published: boolean;
  order: number;
}
