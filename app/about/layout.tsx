import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'About Hezron Nyamboga ',
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
