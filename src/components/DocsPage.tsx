/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from 'preact';
import type { DocItem } from '../data/docs-nav.js';
import { DocsBreadcrumbs } from './DocsBreadcrumbs.js';
import { DocsPagination } from './DocsPagination.js';

export interface HeadingItem {
  level?: number;
  id?: string;
  text?: string;
}

export interface DocsPageProps {
  title: string;
  category?: string;
  summary?: string;
  markdownHtml: string;
  headings?: HeadingItem[];
  prev?: DocItem;
  next?: DocItem;
}

export function DocsPage({
  title,
  category = 'Documentation',
  summary = '',
  markdownHtml,
  headings = [],
  prev,
  next,
}: DocsPageProps) {
  const filteredHeadings = (headings || []).filter(
    (h): h is Required<HeadingItem> => (h.level === 2 || h.level === 3) && Boolean(h.id && h.text)
  );

  return (
    <div class="w-full max-w-[1320px] mx-auto px-6 py-10 lg:px-10 flex gap-10 xl:gap-12">
      {/* Center/Left Main Content Article */}
      <article class="flex-1 min-w-0 max-w-4xl">
        {/* Breadcrumbs */}
        <DocsBreadcrumbs category={category} title={title} />

        {/* Header Block */}
        <header class="mb-10 pb-8 border-b border-[#222226]">
          {category && (
            <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[11px] font-mono text-neutral-400 bg-[#121215] border border-[#222226] mb-3.5">
              <span>{category}</span>
            </div>
          )}

          <h1 class="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            {title}
          </h1>

          {summary && (
            <p class="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-3xl">
              {summary}
            </p>
          )}
        </header>

        {/* Markdown Content */}
        <div
          class="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: markdownHtml }}
        />

        {/* Previous / Next Pagination Cards */}
        <DocsPagination prev={prev} next={next} />
      </article>

      {/* Right Table of Contents (Desktop Sticky) */}
      {filteredHeadings.length > 0 && (
        <aside class="hidden xl:block w-60 shrink-0">
          <div class="sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto pl-4 border-l border-[#222226] text-xs">
            <h5 class="text-[11px] font-mono font-medium uppercase tracking-wider text-neutral-400 mb-3.5">
              On This Page
            </h5>
            <ul class="space-y-1.5">
              {filteredHeadings.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    class={`doc-toc-link block text-neutral-400 hover:text-white transition-colors py-0.5 leading-snug ${
                      item.level === 3 ? 'pl-3.5 text-[11px] text-neutral-500 hover:text-neutral-300' : 'font-medium'
                    }`}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}
    </div>
  );
}
