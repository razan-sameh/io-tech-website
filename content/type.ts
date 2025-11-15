import { enmContact } from "./enum";

export type typHeroSlide = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  media: string;
  order: number;
  BackgroundImage: string;
};

export type typHeroSection = {
  id: number;
  documentId: string;
  hero_slides: typHeroSlide[];
  autoplay?: boolean;
  interval?: number;
};
export type typContactLink = {
  type: enmContact;
  value: string;
  icon?: string;
};
export type typTeam = {
  id: number;
  documentId: string;
  name: string;
  role: string;
  photo: string;
  contactLinks: typContactLink[];
};
export type typClient = {
  id: number;
  documentId: string;
  name: string;
  jobTitle: string;
  comment: string;
  photo: string;
};
export interface typSection {
  id: number;
  title: string;
  content: string;
}
export type typService = {
  id: number;
  documentId: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  sections: typSection[];
};
