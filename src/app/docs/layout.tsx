/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment, type ComponentChildren } from 'preact';
import { DocsLayout } from '../../components/DocsLayout.js';

export interface SectionLayoutProps {
  children: ComponentChildren;
  currentPath?: string | undefined;
  params?: Record<string, string> | undefined;
}

export default function SectionLayout({ children, currentPath, params }: SectionLayoutProps) {
  const activeSlug = params?.slug ? `/docs/${params.slug}` : currentPath;
  return <DocsLayout currentPath={activeSlug || currentPath}>{children}</DocsLayout>;
}

