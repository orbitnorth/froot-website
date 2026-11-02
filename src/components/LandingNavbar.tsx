/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from 'preact';

export function LandingNavbar() {
  return (
    <>
      {/* Top Notification Announcement (Vercel / Next.js Style) */}
      <aside aria-label="Announcement" class="relative z-50 border-b border-[#222226] bg-[#070709] py-2 text-center text-xs text-neutral-400">
        <div class="mx-auto max-w-6xl px-4 flex items-center justify-center gap-2">
          <span class="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
            <span class="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            v1.3.6
          </span>
          <span>FrootKit &amp; FrootUI are live on NPM</span>
          <span class="text-neutral-600 hidden sm:inline">·</span>
          <a href="/docs" class="text-neutral-200 hover:text-white font-medium hover:underline ml-1">
            Explore docs →
          </a>
        </div>
      </aside>

      {/* Main Navigation Header */}
      <header id="main-nav" class="sticky top-0 z-40 border-b border-[#222226] bg-black/80 backdrop-blur-md">
        <div class="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div class="flex items-center gap-8">
            <a href="/" class="flex items-center gap-2.5 group">
              <div class="w-7 h-7 rounded-md bg-white text-black flex items-center justify-center font-bold text-sm shadow-sm transition-transform group-hover:scale-105">
                ▲
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[17px] font-semibold tracking-tight text-white">
                  froot<span class="text-neutral-400 font-normal">kit</span>
                </span>
                <span class="text-[10px] font-mono text-neutral-400 bg-[#121215] border border-[#222226] px-1.5 py-0.5 rounded font-medium">
                  v1.3.6
                </span>
              </div>
            </a>

            <nav class="hidden md:flex items-center gap-6 text-[13px] font-medium text-neutral-400">
              <a href="#features" class="hover:text-white transition-colors">Features</a>
              <a href="#frootui" class="hover:text-white transition-colors flex items-center gap-1.5">
                <span>FrootUI</span>
                <span class="text-[9px] font-mono px-1.5 py-0.5 rounded border border-neutral-700 bg-neutral-800 text-neutral-300">New</span>
              </a>
              <a href="#benchmarks" class="hover:text-white transition-colors">Benchmarks</a>
              <a href="#code" class="hover:text-white transition-colors">Architecture</a>
              <a href="/docs" class="hover:text-white transition-colors">Documentation</a>
            </nav>
          </div>

          <div class="flex items-center gap-3">
            <a
              href="https://github.com/orbitnorth/froot"
              target="_blank"
              rel="noreferrer"
              class="btn-secondary text-xs px-3 py-1.5 rounded-md hidden sm:inline-flex items-center gap-1.5"
            >
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="/docs"
              class="btn-primary text-xs px-3.5 py-1.5 rounded-md"
            >
              Get Started
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              id="mobile-nav-toggle"
              aria-label="Toggle Navigation"
              class="md:hidden p-1.5 rounded-md border border-[#222226] text-neutral-400 hover:text-white hover:bg-[#141417] transition-colors"
              {...{ onclick: 'toggleMobileNav()' }}
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        <div
          id="mobile-nav-panel"
          class="hidden md:hidden border-t border-[#222226] bg-[#09090b]/98 px-6 py-4 space-y-3 text-sm font-medium"
        >
          <a href="#features" class="block text-neutral-300 hover:text-white py-1" {...{ onclick: 'toggleMobileNav()' }}>
            Features
          </a>
          <a href="#frootui" class="flex items-center justify-between text-neutral-300 hover:text-white py-1" {...{ onclick: 'toggleMobileNav()' }}>
            <span>FrootUI Primitives</span>
            <span class="text-[9px] font-mono px-1.5 py-0.5 rounded border border-neutral-700 bg-neutral-800 text-neutral-300">New</span>
          </a>
          <a href="#benchmarks" class="block text-neutral-300 hover:text-white py-1" {...{ onclick: 'toggleMobileNav()' }}>
            Benchmarks
          </a>
          <a href="#code" class="block text-neutral-300 hover:text-white py-1" {...{ onclick: 'toggleMobileNav()' }}>
            Architecture
          </a>
          <a href="/docs" class="block text-neutral-300 hover:text-white py-1">
            Documentation
          </a>
          <div class="pt-2 border-t border-[#222226] flex items-center justify-between text-xs text-neutral-400">
            <a href="https://github.com/orbitnorth/froot" target="_blank" rel="noreferrer" class="hover:text-white">
              GitHub Repository →
            </a>
            <span class="font-mono text-neutral-500">v1.3.6</span>
          </div>
        </div>
      </header>

      {/* Script for mobile navbar toggle */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function toggleMobileNav() {
              const panel = document.getElementById('mobile-nav-panel');
              if (panel) {
                panel.classList.toggle('hidden');
              }
            }
          `,
        }}
      />
    </>
  );
}
