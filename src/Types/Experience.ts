
import type { LocalizedText } from "./Common";

export type ExperienceType =
  | "freelance"
  | "internship"
  | "employment"
  | "collaboration";

export type WorkMode = "onsite" | "remote" | "hybrid";

export interface Experience {
  id: string;

  company: string;
  role: LocalizedText;
  type: ExperienceType;

  location?: string;
  workMode?: WorkMode;

  description: LocalizedText;
  responsibilities: LocalizedText[];
  technologies: string[];

  startDate: string; // YYYY-MM
  endDate: string | null;
  currentlyWorking: boolean;

  featured: boolean;
  order: number;
}
