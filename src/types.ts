import type { ReactNode } from 'react';

export interface Tag {
  text: string;
  icon: ReactNode;
}

export interface CarouselImage {
  src: string;
  /** Optional screenshot of the same screen in dark mode, shown instead of `src` while dark mode is on */
  darkSrc?: string;
  alt: string;
  /** Shown in the carousel window bar and the lightbox; defaults to the alt text */
  caption?: string;
}

export interface Project {
  title: string;
  summary: string;
  tags?: Tag[];
  images: CarouselImage[];
  color: string;
  /** Lighter brand color used in dark mode when `color` is too dark to read */
  darkColor?: string;
  repo: string;
  link: string;
  /** Short label shown under the title, e.g. what makes the project stand out */
  badge?: string;
  /** Optional "How it works" steps shown under the summary */
  pipeline?: PipelineStep[];
}

export interface PipelineStep {
  label: string;
  detail: string;
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
  /** Lighter brand color used in dark mode when `color` is too dark to read */
  darkColor?: string;
  roles?: Role[];
  summary?: string;
  responsibilities?: string[];
  tags?: Tag[];
  highlights?: Highlight[];
}
