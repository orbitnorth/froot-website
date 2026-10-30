/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from 'preact';
import { getDoc } from 'frootkit';
import { DocsPage } from '../../components/DocsPage.js';
import { getAdjacentDocs } from '../../data/docs-nav.js';

export const metadata = {
  title: 'Ecosystem Overview — Froot & FrootKit Documentation',
  description: 'Complete guide to the Froot Ecosystem: 124,000 req/sec backend engine and FrootKit Next.js alternative.',
};

export default async function DocsOverviewPage() {
  const { frontmatter, html, headings } = await getDoc('overview');
  const { prev, next } = getAdjacentDocs('overview');

  return (
    <DocsPage
      title={frontmatter['title'] || 'Ecosystem Overview'}
      category={frontmatter['category'] || 'Getting Started'}
      summary={frontmatter['summary'] || 'Complete introduction to Froot and FrootKit architecture.'}
      markdownHtml={html}
      headings={headings}
      prev={prev}
      next={next}
    />
  );
}
