/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from 'preact';
import { UNIFIED_DOCS_NAV } from '../data/docs-nav.js';

export function DocsSidebar({ currentSlug }: { currentSlug: string }) {
  const normCurrent = currentSlug.replace(/\/$/, '') || '/docs';

  return (
    <aside
      id="docs-sidebar"
      class="fixed inset-y-0 left-0 z-50 w-64 bg-[#09090b] border-r border-[#222226] flex flex-col transition-transform duration-200 ease-in-out -translate-x-full md:translate-x-0"
    >
      {/* Sidebar Header */}
      <div class="h-16 px-5 border-b border-[#222226] bg-[#09090b] flex items-center justify-between">
        <a href="/" class="flex items-center gap-2.5 group">
          <div class="w-6 h-6 rounded-md bg-white text-black flex items-center justify-center font-bold text-xs shadow-sm transition-transform group-hover:scale-105">
            ▲
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm font-semibold text-white tracking-tight">
              froot<span class="text-neutral-400 font-normal">kit</span>
            </span>
            <span class="text-[10px] font-mono text-neutral-400 bg-[#121215] border border-[#222226] px-1.5 py-0.5 rounded font-medium">
              v1.3.6
            </span>
          </div>
        </a>

        <a href="/" class="text-xs font-medium text-neutral-400 hover:text-white transition-colors" title="Back to Home">
          ← Home
        </a>
      </div>

      {/* Search Filter Input */}
      <div class="p-3 border-b border-[#222226] bg-[#09090b]">
        <div class="relative">
          <input
            type="text"
            placeholder="Filter documentation..."
            class="w-full px-3 py-1.5 pl-8 text-xs rounded-md bg-[#121215] border border-[#222226] text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all font-mono"
            {...{ oninput: 'filterDocsNav(this.value)' }}
          />
          <svg
            style="width: 13px; height: 13px;"
            class="text-neutral-500 absolute left-2.5 top-2.5 pointer-events-none"
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
            <h4 class="px-2 text-[11px] font-mono font-medium uppercase tracking-wider text-neutral-500">
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
                      class={`doc-nav-link flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs transition-all ${
                        isActive
                          ? 'bg-[#18181c] text-white border border-[#2e2e34] font-medium'
                          : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <span>{item.title}</span>
                      {item.badge && (
                        <span
                          class={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                            isActive
                              ? 'bg-white/10 text-white'
                              : 'bg-[#141417] text-neutral-400 border border-[#222226]'
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
      <div class="p-3 border-t border-[#222226] bg-[#09090b] flex items-center justify-between text-xs text-neutral-400">
        <a
          href="https://github.com/orbitnorth/froot"
          target="_blank"
          rel="noreferrer"
          class="hover:text-white flex items-center gap-1 font-medium transition-colors"
        >
          <span>GitHub</span>
          <svg style="width: 10px; height: 10px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <span class="text-[11px] font-mono text-neutral-500">MIT</span>
      </div>
    </aside>
  );
}
