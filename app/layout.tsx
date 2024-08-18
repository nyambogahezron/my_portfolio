import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hezron Nyamboga - Portfolio',
  description: 'Hezron Nyamboga Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <link
          rel='icon'
          href='/icon?<generated>'
          type='image/png'
          sizes='32x32'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Hezron Nyamboga Portfolio' />
        <meta
          name='keywords'
          content='Hezron Nyamboga, Hezron Nyamboga Portfolio, Nyamboga Hezron, nyambogahezron'
        />
        <meta name='author' content='Hezron Nyamboga' />
        <meta property='og:title' content='Hezron Nyamboga Portfolio' />
        <meta
          property='og:description'
          content='Hezron Nyamboga portfolio website'
        />
        <meta property='og:image' content='images/hero.png' />
        <meta property='og:url' content='https://nyambogahezron.vercel.app/' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Hezron Nyamboga Portfolio' />
        <meta name='twitter:site' content='@nyambogahezron' />
        <meta
          name='twitter:description'
          content='Hezron Nyamboga portfolio website.'
        />
        <meta
          name='twitter:image'
          content='https://twitter.com/nyambogahezron/photo'
        />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
