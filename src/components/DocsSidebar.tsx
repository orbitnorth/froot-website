/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from 'preact';
import { UNIFIED_DOCS_NAV } from '../data/docs-nav.js';

export function DocsSidebar({ currentSlug }: { currentSlug: string }) {
  const normCurrent = currentSlug.replace(/\/$/, '') || '/docs';

  return (
    <aside
      id="docs-sidebar"
      class="fixed inset-y-0 left-0 z-50 w-72 lg:w-80 bg-[#f6f9fc] border-r border-[#e6ebf1] flex flex-col transition-transform duration-200 ease-in-out -translate-x-full md:translate-x-0"
    >
      {/* Sidebar Header */}
      <div class="h-16 px-5 border-b border-[#e6ebf1] bg-white flex items-center justify-between">
        <a href="/" class="flex items-center gap-2.5">
          <div class="w-7 h-7 rounded-md bg-[#635bff] flex items-center justify-center text-white font-bold text-xs shadow-sm">
            F
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm font-semibold text-[#0a2540] tracking-tight">
              froot<span class="text-[#635bff]">kit</span>
            </span>
            <span class="text-[10px] font-mono text-[#0a2540] bg-[#f6f9fc] border border-[#e6ebf1] px-1.5 py-0.5 rounded-full font-medium">
              v1.3.6
            </span>
          </div>
        </a>

        <a href="/" class="text-xs font-medium text-[#425466] hover:text-[#0a2540] transition-colors" title="Back to Home">
          ← Home
        </a>
      </div>

      {/* Search Filter Input */}
      <div class="p-3 border-b border-[#e6ebf1] bg-white">
        <div class="relative">
          <input
            type="text"
            placeholder="Filter documentation..."
            class="w-full px-3 py-1.5 pl-8 text-xs rounded-md bg-[#f6f9fc] border border-[#e6ebf1] text-[#0a2540] placeholder-[#8898aa] focus:outline-none focus:border-[#635bff] focus:bg-white focus:ring-2 focus:ring-[#635bff]/20 transition-all"
            {...{ oninput: 'filterDocsNav(this.value)' }}
          />
          <svg
            style="width: 13px; height: 13px;"
            class="text-[#8898aa] absolute left-2.5 top-2.5 pointer-events-none"
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
            <h4 class="px-2 text-[11px] font-semibold uppercase tracking-wider text-[#0a2540]/60">
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
                          ? 'bg-white text-[#635bff] border border-[#e6ebf1] font-medium shadow-[0_1px_3px_rgba(50,50,93,0.08),0_1px_0_rgba(0,0,0,0.02)]'
                          : 'text-[#425466] hover:text-[#0a2540] hover:bg-white/70'
                      }`}
                    >
                      <span>{item.title}</span>
                      {item.badge && (
                        <span
                          class={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${
                            isActive
                              ? 'bg-[#635bff]/10 text-[#635bff]'
                              : 'bg-white text-[#425466] border border-[#e6ebf1]'
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
      <div class="p-3 border-t border-[#e6ebf1] bg-white flex items-center justify-between text-xs text-[#425466]">
        <a
          href="https://github.com/orbitnorth/froot"
          target="_blank"
          rel="noreferrer"
          class="hover:text-[#0a2540] flex items-center gap-1 font-medium transition-colors"
        >
          <span>GitHub</span>
          <svg style="width: 10px; height: 10px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <span class="text-[11px] font-mono text-[#8898aa]">MIT</span>
      </div>
    </aside>
  );
}
