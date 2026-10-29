import type { LocalizedText } from "./Common";

export type ProcessStage =
  | "discovery"
  | "planning"
  | "design"
  | "development"
  | "testing"
  | "deployment"
  | "maintenance";

export interface ProcessStep {
  id: string;
  number: string;
  title: LocalizedText;
  slug: LocalizedText;
  stage: ProcessStage;
  shortDescription: LocalizedText;
  description: LocalizedText;
  activities: LocalizedText[];
  deliverables: LocalizedText[];
  icon?: string;
  featured: boolean;
  order: number;
}