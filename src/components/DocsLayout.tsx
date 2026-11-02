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
    <div class="flex min-h-screen bg-black text-[#ededed] selection:bg-white selection:text-black">
      {/* Mobile Drawer Overlay */}
      <div
        id="docs-backdrop"
        class="fixed inset-0 bg-black/80 z-40 hidden md:hidden backdrop-blur-sm"
        {...{ onclick: 'toggleDocsSidebar()' }}
      />

      {/* LEFT SIDEBAR: Navigation */}
      <DocsSidebar currentSlug={activeSlug} />

      {/* RIGHT MAIN CONTENT AREA */}
      <div class="flex-1 min-w-0 md:ml-72 lg:ml-80 flex flex-col min-h-screen bg-black">
        {/* Mobile Top Bar */}
        <div class="md:hidden sticky top-0 z-30 bg-[#0a0a0c]/95 backdrop-blur-md border-b border-[#222226] p-3.5 flex items-center justify-between">
          <button
            type="button"
            class="flex items-center gap-2 text-neutral-300 hover:text-white"
            {...{ onclick: 'toggleDocsSidebar()' }}
          >
            <svg class="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span class="text-xs font-semibold">Docs Navigation</span>
          </button>

          <a href="/" class="text-xs text-neutral-400 hover:text-white flex items-center gap-1 font-medium">
            <span>← Home</span>
          </a>
        </div>

        {/* Main Document Body */}
        <main class="flex-1 max-w-4xl w-full mx-auto px-6 py-10 lg:px-12">
          {children}
        </main>

        {/* Minimal Docs Footer */}
        <footer class="mt-auto border-t border-[#222226] bg-[#070709] py-6 px-6 text-center text-xs text-neutral-500">
          <p>
            Froot &amp; FrootKit Documentation • Built with FrootKit SSG &amp; Preact SSR •{' '}
            <a href="https://github.com/orbitnorth/froot" class="text-neutral-300 hover:text-white hover:underline font-medium">
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
