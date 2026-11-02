/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from 'preact';
import type { DocItem } from '../data/docs-nav.js';

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
    <div class="relative">
      <div class="xl:mr-64">
        {/* Breadcrumbs */}
        <nav class="flex items-center gap-2 text-xs text-neutral-500 mb-6 font-mono">
          <a href="/docs" class="text-neutral-400 hover:text-white transition-colors">
            docs
          </a>
          <span>/</span>
          <span class="text-neutral-400">{category.toLowerCase()}</span>
          <span>/</span>
          <span class="text-white font-medium">{title}</span>
        </nav>

        {/* Header Block */}
        <header class="mb-10 pb-8 border-b border-[#222226]">
          <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[11px] font-mono text-neutral-300 bg-[#121215] border border-[#222226] mb-4">
            <span>{category}</span>
          </div>

          <h1 class="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
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
        {(prev || next) && (
          <div class="mt-16 pt-8 border-t border-[#222226] grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prev ? (
              <a
                href={prev.id === 'overview' ? '/docs' : `/docs/${prev.id}`}
                class="group p-5 rounded-xl bg-[#0a0a0c] border border-[#222226] hover:border-[#333338] hover:bg-[#0e0e11] transition-all flex flex-col justify-between"
              >
                <span class="text-[11px] font-mono text-neutral-500 group-hover:text-white transition-colors">
                  ← Previous
                </span>
                <span class="text-sm font-semibold text-neutral-200 mt-2 group-hover:text-white transition-colors">
                  {prev.title}
                </span>
              </a>
            ) : (
              <div />
            )}

            {next && (
              <a
                href={next.id === 'overview' ? '/docs' : `/docs/${next.id}`}
                class="group p-5 rounded-xl bg-[#0a0a0c] border border-[#222226] hover:border-[#333338] hover:bg-[#0e0e11] transition-all flex flex-col justify-between text-right"
              >
                <span class="text-[11px] font-mono text-neutral-500 group-hover:text-white transition-colors">
                  Next →
                </span>
                <span class="text-sm font-semibold text-neutral-200 mt-2 group-hover:text-white transition-colors">
                  {next.title}
                </span>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Right Table of Contents (Desktop sticky) */}
      {filteredHeadings.length > 0 && (
        <aside class="hidden xl:block fixed right-8 top-28 w-56 max-h-[calc(100vh-8rem)] overflow-y-auto pl-4 border-l border-[#222226] text-xs">
          <h5 class="text-[11px] font-mono font-medium uppercase tracking-wider text-neutral-500 mb-3">
            On This Page
          </h5>
          <ul class="space-y-2">
            {filteredHeadings.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  class={`block text-neutral-400 hover:text-white transition-colors ${
                    item.level === 3 ? 'pl-2 text-[11px] text-neutral-500' : 'font-medium'
                  }`}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
}
