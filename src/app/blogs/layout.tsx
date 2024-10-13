import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Post',
  description: 'Recent blog posts from Nyamboga Hezron',
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
