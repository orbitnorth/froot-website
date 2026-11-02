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
      <div class="flex-1 min-w-0 md:pl-64 flex flex-col min-h-screen bg-black">
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
        <main class="flex-1 w-full min-w-0">
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

      {/* Client-side script for sidebar toggle, filter & copy button */}
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

            document.addEventListener('keydown', function(e) {
              if (e.key === 'Escape') {
                const sidebar = document.getElementById('docs-sidebar');
                const backdrop = document.getElementById('docs-backdrop');
                if (sidebar && !sidebar.classList.contains('-translate-x-full')) {
                  sidebar.classList.add('-translate-x-full');
                  backdrop?.classList.add('hidden');
                }
              }
            });

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

            function fallbackCopy(text, cb) {
              try {
                const ta = document.createElement('textarea');
                ta.value = text;
                ta.style.position = 'fixed';
                ta.style.opacity = '0';
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
                cb();
              } catch (e) {}
            }

            function copyCode(btn) {
              if (!btn) return;
              const card = btn.closest('.code-card') || btn.closest('.code-window') || btn.parentElement;
              if (!card) return;
              const codeEl = card.querySelector('code') || card.querySelector('pre');
              const text = codeEl ? (codeEl.innerText || codeEl.textContent || '') : '';
              if (!text) return;
              function onSuccess() {
                const prev = btn.textContent;
                btn.textContent = 'Copied!';
                btn.classList.add('text-white', 'border-white/40');
                setTimeout(function() {
                  btn.textContent = prev;
                  btn.classList.remove('text-white', 'border-white/40');
                }, 2000);
              }
              if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text.trim()).then(onSuccess).catch(function() {
                  fallbackCopy(text.trim(), onSuccess);
                });
              } else {
                fallbackCopy(text.trim(), onSuccess);
              }
            }
            window.copyCode = copyCode;

            // Client Active Nav Link Sync
            (function() {
              const pathname = window.location.pathname.replace(/\/$/, '') || '/docs';
              const links = document.querySelectorAll('.doc-nav-link');
              let hasActive = false;
              links.forEach(link => {
                const href = link.getAttribute('href')?.replace(/\/$/, '') || '';
                const isCurrent = href === pathname || (href === '/docs' && (pathname === '/docs' || pathname === '/docs/overview'));
                if (isCurrent) {
                  hasActive = true;
                  link.classList.add('bg-[#18181c]', 'text-white', 'border', 'border-[#2e2e34]', 'font-medium');
                  link.classList.remove('text-neutral-400');
                } else {
                  link.classList.remove('bg-[#18181c]', 'text-white', 'border', 'border-[#2e2e34]', 'font-medium');
                  link.classList.add('text-neutral-400');
                }
              });
            })();

            // Table of Contents Scrollspy
            (function() {
              const tocLinks = document.querySelectorAll('.doc-toc-link');
              if (!tocLinks.length) return;
              const headings = document.querySelectorAll('article h2[id], article h3[id]');
              if (!headings.length) return;

              const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                  if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    if (!id) return;
                    tocLinks.forEach(function(link) {
                      if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('text-white', 'font-medium');
                        link.classList.remove('text-neutral-400', 'text-neutral-500');
                      } else {
                        link.classList.remove('text-white');
                        if (link.classList.contains('pl-3.5')) {
                          link.classList.add('text-neutral-500');
                        } else {
                          link.classList.add('text-neutral-400');
                        }
                      }
                    });
                  }
                });
              }, { rootMargin: '0px 0px -75% 0px', threshold: 0.1 });

              headings.forEach(function(h) { observer.observe(h); });
            })();
          `,
        }}
      />
    </div>
  );
}
