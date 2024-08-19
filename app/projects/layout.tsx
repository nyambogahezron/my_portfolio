import type { Metadata } from 'next';
import '../../assets/css/globals.css';

export const metadata: Metadata = {
  title: 'My Projects',
  description: 'Hezron Nyamboga Recent Projects',
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
