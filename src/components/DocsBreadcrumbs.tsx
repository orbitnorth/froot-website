/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from 'preact';

export interface DocsBreadcrumbsProps {
  category?: string;
  title: string;
}

export function DocsBreadcrumbs({ category = 'Documentation', title }: DocsBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumbs" class="flex items-center gap-1.5 text-xs text-neutral-500 mb-6 font-mono">
      <a href="/docs" class="text-neutral-400 hover:text-white transition-colors">
        docs
      </a>
      <span class="text-neutral-600">/</span>
      {category && (
        <>
          <span class="text-neutral-400">{category.toLowerCase()}</span>
          <span class="text-neutral-600">/</span>
        </>
      )}
      <span class="text-neutral-200 font-medium truncate">{title}</span>
    </nav>
  );
}
