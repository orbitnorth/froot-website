/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment, type ComponentChildren } from 'preact';
import { DocsSidebar } from './DocsSidebar.js';

export interface DocsLayoutProps {
  currentPath?: string | undefined;
  currentSlug?: string | undefined;
  children: ComponentChildren;
}

export function DocsLayout({ currentPath, currentSlug, children }: DocsLayoutProps) {
  const activeSlug = currentSlug || currentPath || '/docs';

  return (
    <div class="flex min-h-screen bg-white text-[#425466] selection:bg-[#635bff]/20 selection:text-[#635bff]">
      {/* Mobile Drawer Overlay */}
      <div
        id="docs-backdrop"
        class="fixed inset-0 bg-[#0a2540]/50 z-40 hidden md:hidden backdrop-blur-sm"
        {...{ onclick: 'toggleDocsSidebar()' }}
      />

      {/* LEFT SIDEBAR: Navigation */}
      <DocsSidebar currentSlug={activeSlug} />

      {/* RIGHT MAIN CONTENT AREA */}
      <div class="flex-1 min-w-0 md:ml-72 lg:ml-80 flex flex-col min-h-screen">
        {/* Mobile Top Bar */}
        <div class="md:hidden sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#e6ebf1] p-3.5 flex items-center justify-between">
          <button
            type="button"
            class="flex items-center gap-2 text-[#0a2540] hover:text-[#635bff]"
            {...{ onclick: 'toggleDocsSidebar()' }}
          >
            <svg class="w-5 h-5 text-[#635bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span class="text-xs font-semibold">Docs Navigation</span>
          </button>

          <a href="/" class="text-xs text-[#425466] hover:text-[#0a2540] flex items-center gap-1 font-medium">
            <span>← Home</span>
          </a>
        </div>

        {/* Main Document Body */}
        <main class="flex-1 max-w-4xl w-full mx-auto px-6 py-10 lg:px-12">
          {children}
        </main>

        {/* Minimal Docs Footer */}
        <footer class="mt-auto border-t border-[#e6ebf1] bg-[#f6f9fc] py-6 px-6 text-center text-xs text-[#425466]">
          <p>
            Froot &amp; FrootKit Documentation • Built with FrootKit SSG &amp; Preact SSR •{' '}
            <a href="https://github.com/orbitnorth/froot" class="text-[#635bff] hover:underline font-medium">
              GitHub
            </a>
          </p>
        </footer>
      </div>

      {/* Client-side script for sidebar toggle & filter */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function toggleDocsSidebar() {
              const sidebar = document.getElementById('docs-sidebar');
              const backdrop = document.getElementById('docs-backdrop');
              if (!sidebar) return;
              const isHidden = sidebar.classList.contains('-translate-x-full');
              if (isHidden) {
                sidebar.classList.remove('-translate-x-full');
                backdrop?.classList.remove('hidden');
              } else {
                sidebar.classList.add('-translate-x-full');
                backdrop?.classList.add('hidden');
              }
            }

            function filterDocsNav(query) {
              const q = query.toLowerCase().trim();
              const links = document.querySelectorAll('.doc-nav-link');
              links.forEach(link => {
                const title = link.getAttribute('data-title') || '';
                const parentLi = link.closest('li');
                if (!parentLi) return;
                if (!q || title.includes(q)) {
                  parentLi.style.display = '';
                } else {
                  parentLi.style.display = 'none';
                }
              });
            }
          `,
        }}
      />
    </div>
  );
}
