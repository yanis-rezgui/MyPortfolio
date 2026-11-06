
import type { LocalizedText } from "./Common";

export type EducationType =
  | "university"
  | "certification"
  | "course"
  | "bootcamp";

export interface Education {
  id: string;

  institution: string;
  institutionLogo?: string;
  institutionWebsite?: string;

  degree: LocalizedText;
  field: LocalizedText;
  type: EducationType;
  location?: string;

  startDate: string; // YYYY-MM
  endDate: string | null;
  currentlyStudying: boolean;

  description?: LocalizedText;
  achievements: LocalizedText[];
  certificationImage? : string;
  credentialUrl?: string;

  featured: boolean;
  order: number;
}
