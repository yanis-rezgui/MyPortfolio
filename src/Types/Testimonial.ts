
import type { LocalizedText } from "./Common";

export type TestimonialRelationship =
  | "client"
  | "colleague"
  | "supervisor"
  | "professor";

export interface Testimonial {
  id: string;
  name: string;
  role: LocalizedText;
  company?: string;
  relationship: TestimonialRelationship;
  message: LocalizedText;
  avatar?: string;
  date?: string;
  featured: boolean;
  published: boolean;
  order: number;
}
