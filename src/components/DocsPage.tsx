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
        <nav class="flex items-center gap-2 text-xs text-zinc-500 mb-6 font-medium">
          <a href="/docs" class="hover:text-zinc-300 transition-colors">
            Docs
          </a>
          <span>/</span>
          <span class="text-zinc-400">{category}</span>
          <span>/</span>
          <span class="text-zinc-200">{title}</span>
        </nav>

        {/* Header Block */}
        <header class="mb-10 pb-8 border-b border-white/[0.08]">
          <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <span>{category}</span>
          </div>

          <h1 class="text-3xl sm:text-4xl font-semibold text-white tracking-[-0.025em] mb-4">
            {title}
          </h1>

          {summary && (
            <p class="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl font-normal">
              {summary}
            </p>
          )}
        </header>

        {/* Markdown Content */}
        <div
          class="prose max-w-none text-zinc-300"
          dangerouslySetInnerHTML={{ __html: markdownHtml }}
        />

        {/* Previous / Next Pagination Cards */}
        {(prev || next) && (
          <div class="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prev ? (
              <a
                href={prev.id === 'overview' ? '/docs' : `/docs/${prev.id}`}
                class="group p-4 rounded-xl bg-[#0f1117] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
              >
                <span class="text-[11px] font-medium text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  ← Previous
                </span>
                <span class="text-sm font-semibold text-white mt-1 group-hover:text-zinc-100 transition-colors">
                  {prev.title}
                </span>
              </a>
            ) : (
              <div />
            )}

            {next && (
              <a
                href={next.id === 'overview' ? '/docs' : `/docs/${next.id}`}
                class="group p-4 rounded-xl bg-[#0f1117] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between text-right shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
              >
                <span class="text-[11px] font-medium text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  Next →
                </span>
                <span class="text-sm font-semibold text-white mt-1 group-hover:text-zinc-100 transition-colors">
                  {next.title}
                </span>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Right Table of Contents (Desktop sticky) */}
      {filteredHeadings.length > 0 && (
        <aside class="hidden xl:block fixed right-8 top-28 w-56 max-h-[calc(100vh-8rem)] overflow-y-auto pl-4 border-l border-white/[0.08] text-xs">
          <h5 class="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-3">
            On This Page
          </h5>
          <ul class="space-y-2">
            {filteredHeadings.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  class={`block text-zinc-400 hover:text-white transition-colors ${
                    item.level === 3 ? 'pl-2 text-[11px] text-zinc-500' : 'font-medium'
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
