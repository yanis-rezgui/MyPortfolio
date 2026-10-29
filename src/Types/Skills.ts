import type { LocalizedText } from "./Common";


export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "tools"
  | "ai-ml";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  icon?: string;
  description?: LocalizedText;
  featured: boolean;
  order: number;
}
