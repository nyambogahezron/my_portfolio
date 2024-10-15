'use client'

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'public/posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

async function getPostData(slug) {
  const postPath = path.join(process.cwd(), 'public/posts', `${slug}.md`);
  const fileContents = fs.readFileSync(postPath, 'utf8');

  // Parse the markdown frontmatter and content
  const { content, data } = matter(fileContents);

  // Convert markdown to HTML with GFM support
  const processedContent = await remark().use(html).use(gfm).process(content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    data,
  };
}

export default async function Post({ params }) {
  const { contentHtml, data } = await getPostData(params.slug);

  return (
    <article>
      <h1>{data.title}</h1>
      <div
        className='markdown-body'
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
      <style jsx>{`
        .markdown-body {
          box-sizing: border-box;
          min-width: 200px;
          max-width: 980px;
          margin: 0 auto;
          padding: 45px;
        }
        .markdown-body h1,
        .markdown-body h2,
        .markdown-body h3,
        .markdown-body h4,
        .markdown-body h5,
        .markdown-body h6 {
          margin-top: 24px;
          margin-bottom: 16px;
          font-weight: 600;
          line-height: 1.25;
        }
        .markdown-body p {
          margin-top: 0;
          margin-bottom: 16px;
        }
        .markdown-body a {
          color: #0366d6;
          text-decoration: none;
        }
        .markdown-body a:hover {
          text-decoration: underline;
        }
        .markdown-body ul,
        .markdown-body ol {
          padding-left: 2em;
        }
        .markdown-body blockquote {
          padding: 0 1em;
          color: #6a737d;
          border-left: 0.25em solid #dfe2e5;
        }
        .markdown-body code {
          background-color: rgba(27, 31, 35, 0.05);
          padding: 0.2em 0.4em;
          margin: 0;
          font-size: 85%;
          border-radius: 3px;
        }
        .markdown-body pre {
          background-color: rgba(27, 31, 35, 0.05);
          padding: 16px;
          overflow: auto;
          font-size: 85%;
          line-height: 1.45;
          border-radius: 3px;
        }
      `}</style>
    </article>
  );
}
