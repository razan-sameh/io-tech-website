import { enmContact } from "./enum";

export interface typHeroSlide {
  id: number;
  documentId: string;
  title: string;
  description: string;
  media: string;
  order: number;
  BackgroundImage: string;
}

export interface typHeroSection {
  id: number;
  documentId: string;
  hero_slides: typHeroSlide[];
  autoplay?: boolean;
  interval?: number;
}
export interface typContactLink {
  type: enmContact;
  value: string;
  icon?: string;
}
export interface typTeam {
  id: number;
  documentId: string;
  name: string;
  role: string;
  photo: string;
  contactLinks: typContactLink[];
}
export interface typClient {
  id: number;
  documentId: string;
  name: string;
  jobTitle: string;
  comment: string;
  photo: string;
}