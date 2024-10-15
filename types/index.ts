export interface PortfolioItem {
  id: number;
  title: string;
  desc: string;
  img: string;
  site: string;
  github: string;
  category: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  Icon: React.ComponentType;
}

export interface AboutItem {
  id: number;
  name: string;
  item: string;
}

export interface AboutLanguageItem extends Omit<AboutItem, 'item'> {
  percent: string;
}

export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  body: string;
}

export interface EducationItem extends TimelineItem {}

export interface Link {
  name: string;
  label: string;
  link?: string;
}

export interface LanguageItem {
  id: number;
  name: string;
  Icon: React.ComponentType;
}
