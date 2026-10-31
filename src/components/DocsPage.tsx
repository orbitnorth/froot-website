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
        <nav class="flex items-center gap-2 text-xs text-slate-400 mb-6 font-medium">
          <a href="/docs" class="hover:text-emerald-400 transition-colors">
            Docs
          </a>
          <span>/</span>
          <span class="text-slate-300">{category}</span>
          <span>/</span>
          <span class="text-emerald-400">{title}</span>
        </nav>

        {/* Header Block */}
        <header class="mb-10 pb-8 border-b border-slate-800/80">
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 mb-4">
            <span>{category}</span>
          </div>

          <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {title}
          </h1>

          {summary && (
            <p class="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
              {summary}
            </p>
          )}
        </header>

        {/* Markdown Content (Syntax Highlighted) */}
        <div
          class="prose prose-invert prose-emerald max-w-none text-slate-300"
          dangerouslySetInnerHTML={{ __html: markdownHtml }}
        />

        {/* Previous / Next Pagination Cards */}
        {(prev || next) && (
          <div class="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prev ? (
              <a
                href={prev.id === 'overview' ? '/docs' : `/docs/${prev.id}`}
                class="group p-4 rounded-xl bg-[#070b13] border border-slate-800/80 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <span class="text-[11px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-emerald-400 transition-colors">
                  ← Previous
                </span>
                <span class="text-sm font-semibold text-white mt-1 group-hover:text-emerald-300 transition-colors">
                  {prev.title}
                </span>
              </a>
            ) : (
              <div />
            )}

            {next && (
              <a
                href={next.id === 'overview' ? '/docs' : `/docs/${next.id}`}
                class="group p-4 rounded-xl bg-[#070b13] border border-slate-800/80 hover:border-emerald-500/40 transition-all flex flex-col justify-between text-right"
              >
                <span class="text-[11px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-emerald-400 transition-colors">
                  Next →
                </span>
                <span class="text-sm font-semibold text-white mt-1 group-hover:text-emerald-300 transition-colors">
                  {next.title}
                </span>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Right Table of Contents (Desktop sticky) */}
      {filteredHeadings.length > 0 && (
        <aside class="hidden xl:block fixed right-8 top-28 w-56 max-h-[calc(100vh-8rem)] overflow-y-auto pl-4 border-l border-slate-800/80 text-xs">
          <h5 class="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
            On This Page
          </h5>
          <ul class="space-y-2">
            {filteredHeadings.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  class={`block text-slate-400 hover:text-emerald-400 transition-colors ${
                    item.level === 3 ? 'pl-3 text-[11px] text-slate-400' : 'font-medium'
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
