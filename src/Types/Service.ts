import type { LocalizedText } from "./Common";

export type ServiceCategory =
  | "web-applications"
  | "business-websites"
  | "landing-pages"
  | "dashboards"
  | "ai-applications"
  | "saas-products"
  | "e-commerce"
  | "api-integrations"
  | "maintenance";

export interface Service {
  id: string;
  title: LocalizedText;
  slug: LocalizedText;
  category: ServiceCategory;
  shortDescription: LocalizedText;
  description: LocalizedText;
  features: LocalizedText[];
  technologies: string[];
  icon?: string;
  featured: boolean;
  available: boolean;
  order: number;
}