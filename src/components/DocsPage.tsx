/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from 'preact';
import type { DocItem } from '../data/docs-nav.js';

export interface HeadingItem {
  level: number;
  id: string;
  text: string;
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
  const filteredHeadings = (headings || []).filter((h) => h.level === 2 || h.level === 3);

  return (
    <div class="relative">
      <div class="xl:mr-64">
        {/* Breadcrumbs */}
        <nav class="flex items-center gap-2 text-xs text-[#425466] mb-6 font-medium">
          <a href="/docs" class="text-[#635bff] hover:underline">
            Docs
          </a>
          <span>/</span>
          <span class="text-[#425466]">{category}</span>
          <span>/</span>
          <span class="text-[#0a2540] font-semibold">{title}</span>
        </nav>

        {/* Header Block */}
        <header class="mb-10 pb-8 border-b border-[#e6ebf1]">
          <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-medium text-[#635bff] bg-[#635bff]/10 mb-4">
            <span>{category}</span>
          </div>

          <h1 class="text-3xl sm:text-4xl font-light text-[#0a2540] tracking-[-0.025em] mb-4">
            {title}
          </h1>

          {summary && (
            <p class="text-base sm:text-lg text-[#425466] leading-relaxed max-w-3xl font-normal">
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
          <div class="mt-16 pt-8 border-t border-[#e6ebf1] grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prev ? (
              <a
                href={prev.id === 'overview' ? '/docs' : `/docs/${prev.id}`}
                class="group p-5 rounded-xl bg-white border border-[#e6ebf1] shadow-card hover:shadow-pop transition-all flex flex-col justify-between"
              >
                <span class="text-[12px] font-medium text-[#8898aa] group-hover:text-[#635bff] transition-colors">
                  ← Previous
                </span>
                <span class="text-sm font-semibold text-[#0a2540] mt-1 group-hover:text-[#635bff] transition-colors">
                  {prev.title}
                </span>
              </a>
            ) : (
              <div />
            )}

            {next && (
              <a
                href={next.id === 'overview' ? '/docs' : `/docs/${next.id}`}
                class="group p-5 rounded-xl bg-white border border-[#e6ebf1] shadow-card hover:shadow-pop transition-all flex flex-col justify-between text-right"
              >
                <span class="text-[12px] font-medium text-[#8898aa] group-hover:text-[#635bff] transition-colors">
                  Next →
                </span>
                <span class="text-sm font-semibold text-[#0a2540] mt-1 group-hover:text-[#635bff] transition-colors">
                  {next.title}
                </span>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Right Table of Contents (Desktop sticky) */}
      {filteredHeadings.length > 0 && (
        <aside class="hidden xl:block fixed right-8 top-28 w-56 max-h-[calc(100vh-8rem)] overflow-y-auto pl-4 border-l border-[#e6ebf1] text-xs">
          <h5 class="text-[11px] font-semibold uppercase tracking-wider text-[#0a2540]/60 mb-3">
            On This Page
          </h5>
          <ul class="space-y-2">
            {filteredHeadings.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  class={`block text-[#425466] hover:text-[#635bff] transition-colors ${
                    item.level === 3 ? 'pl-2 text-[11px] text-[#8898aa]' : 'font-medium'
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
