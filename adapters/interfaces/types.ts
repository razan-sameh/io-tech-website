import { enmStrapiContact } from "./enums";

export interface StrapiImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText?: string;
  formats?: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
}

export interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface StrapiHeroSlide {
  id: number;
  documentId: string;
  title: string;
  description: string;
  order: number;
  media?: StrapiImage;
  BackgroundImage?: StrapiImage;
}

export interface StrapiHeroSection {
  id: number;
  documentId: string;
  hero_slides: StrapiHeroSlide[];
  autoplay?: boolean;
  interval?: number;
}
export interface StrapiContactLink {
  type: enmStrapiContact;
  value: string;
  icon?: StrapiImage;
}
export interface StrapiTeam {
  id: number;
  documentId: string;
  name: string;
  role: string;
  photo?: StrapiImage;
  contactLinks: StrapiContactLink[];
}
export interface StrapiClient {
  id: number;
  documentId: string;
  name: string;
  jobTitle: string;
  comment: string;
  photo?: StrapiImage;
}

export interface StrapiSection {
  id: number;
  title: string;
  content: string[];
}

export interface StrapiService {
  id: number;
  documentId: string;
  slug: string;
  title: string;
  description: string;
  image?: StrapiImage;
  sections?: StrapiSection[];
}
