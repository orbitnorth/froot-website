/** @jsxImportSource preact */
import type { ComponentChildren } from 'preact';
import { DocsLayout } from '../../components/DocsLayout.js';

export default function SectionLayout({ children }: { children: ComponentChildren }) {
  return <DocsLayout>{children}</DocsLayout>;
}
