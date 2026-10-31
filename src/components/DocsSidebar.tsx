/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from 'preact';
import { UNIFIED_DOCS_NAV } from '../data/docs-nav.js';

export function DocsSidebar({ currentSlug }: { currentSlug: string }) {
  const normCurrent = currentSlug.replace(/\/$/, '') || '/docs';

  return (
    <aside
      id="docs-sidebar"
      class="fixed inset-y-0 left-0 z-50 w-72 lg:w-80 bg-[#0d0e12] border-r border-white/[0.08] flex flex-col transition-transform duration-200 ease-in-out -translate-x-full md:translate-x-0"
    >
      {/* Sidebar Header */}
      <div class="h-14 px-5 border-b border-white/[0.08] flex items-center justify-between">
        <a href="/" class="flex items-center gap-2.5 group">
          <div class="w-7 h-7 rounded-md bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:border-indigo-400/50 transition-colors shrink-0">
            <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold text-white tracking-tight">Froot<span class="text-indigo-400">Kit</span></span>
            <span class="text-[10px] font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.06] px-1.5 py-0.5 rounded">v1.3.5</span>
          </div>
        </a>

        <a href="/" class="text-xs text-zinc-500 hover:text-zinc-200 transition-colors" title="Back to Home">
          ← Home
        </a>
      </div>

      {/* Search Filter Input */}
      <div class="p-3 border-b border-white/[0.08]">
        <div class="relative">
          <input
            type="text"
            placeholder="Filter documentation..."
            class="w-full px-3 py-1.5 pl-8 text-xs rounded-lg bg-[#08090a] border border-white/[0.08] text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
            {...{ oninput: 'filterDocsNav(this.value)' }}
          />
          <svg
            style="width: 13px; height: 13px;"
            class="text-zinc-500 absolute left-2.5 top-2.5 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Navigation Tree */}
      <nav id="docs-nav-tree" class="flex-1 overflow-y-auto px-3 py-4 space-y-5">
        {UNIFIED_DOCS_NAV.map((section) => (
          <div key={section.title} class="space-y-1">
            <h4 class="px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
              {section.title}
            </h4>
            <ul class="space-y-0.5">
              {section.items.map((item) => {
                const itemHref = item.id === 'overview' ? '/docs' : `/docs/${item.id}`;
                const isActive = normCurrent === itemHref || (item.id === 'overview' && normCurrent === '/docs/overview');

                return (
                  <li key={item.id}>
                    <a
                      href={itemHref}
                      data-title={item.title.toLowerCase()}
                      class={`doc-nav-link flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs transition-colors ${
                        isActive
                          ? 'bg-white/[0.08] text-white border border-white/[0.08] font-medium shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]'
                          : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
                      }`}
                    >
                      <span>{item.title}</span>
                      {item.badge && (
                        <span
                          class={`text-[9px] font-medium px-1.5 py-0.2 rounded-full ${
                            isActive ? 'bg-indigo-500/20 text-indigo-300' : 'bg-white/[0.04] text-zinc-500 border border-white/[0.06]'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer link */}
      <div class="p-3 border-t border-white/[0.08] bg-[#090a0f] flex items-center justify-between text-xs text-zinc-500">
        <a
          href="https://github.com/orbitnorth/froot"
          target="_blank"
          rel="noreferrer"
          class="flex items-center gap-1.5 hover:text-zinc-300 transition-colors"
        >
          <svg style="width: 13px; height: 13px;" class="fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span>GitHub</span>
        </a>
        <span class="text-[10px] font-mono text-zinc-500">Froot Ecosystem</span>
      </div>
    </aside>
  );
}
