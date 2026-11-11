import type { ReactNode } from 'react';

export interface Tag {
  text: string;
  icon: ReactNode;
}

export interface CarouselImage {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  summary: string;
  tags?: Tag[];
  images: CarouselImage[];
  color: string;
  repo: string;
  link: string;
}

export interface Role {
  title: string;
  start: string;
  end: string;
}

export interface Highlight {
  title: string;
  summary: string;
  impact?: string[];
  tags?: Tag[];
  images?: CarouselImage[];
}

export interface Job {
  company: string;
  logo?: string;
  link?: string;
  location?: string;
  color: string;
  roles?: Role[];
  summary?: string;
  responsibilities?: string[];
  tags?: Tag[];
  highlights?: Highlight[];
}
