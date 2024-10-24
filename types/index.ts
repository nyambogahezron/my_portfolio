
type category = 'Web' | 'Mobile' | 'Desktop' | 'Other';
export interface PortfolioItem {
  id: number;
  title: string;
  github: string;
  site: string;
  img: string;
  desc: string;
  category: category;
  stack?: any;
  features?: any;
  download?: any;
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

export interface PortfolioCardProps {
  item: PortfolioItem;
  styles: any;
  isForProject?: boolean;
}
