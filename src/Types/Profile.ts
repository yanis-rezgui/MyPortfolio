
import type { LocalizedText } from "./Common";

export interface Profile {
  name: string;
  headline: LocalizedText;
  shortBio: LocalizedText;
  about: LocalizedText;

  location: string;
  avatar: string;
  resumeUrl?: string;

stats: {
  name: LocalizedText;
  number: number;
  description: LocalizedText;
}[];
  
  availability: {
    freelance: boolean;
    internship: boolean;
    fullTime: boolean;
  };

  languages: {
    name: LocalizedText;
    level: LocalizedText;
  }[];
}



export interface Contact {
  phone: string;
  email: string;
  whatsappNumber : string;
  socials: {
    name: string;
    link: string;
  }[];
}
