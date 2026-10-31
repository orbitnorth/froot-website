/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from 'preact';
import { highlightCode } from 'frootkit';

const CODE_SNIPPETS: Record<string, string> = {
  frootkit: `// src/app/layout.tsx — Zero-hydration Preact SSR
import type { ComponentChildren } from 'preact';

export default function RootLayout({ children }: { children: ComponentChildren }) {
  return (
    <html lang="en" class="dark">
      <head>
        <meta charSet="UTF-8" />
        <title>FrootKit Production Application</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-[#08090a] text-zinc-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}`,

  backend: `// server.ts — Monomorphic V8 Engine with < 25ns dispatch
import { Froot } from 'frootjs';

const app = new Froot();

// Tier 1: Static Route (< 25ns Monomorphic Lookup)
app.get('/health', (c) => c.text('OK'));

// Tier 2: Dynamic Route with zero-alloc parameter parsing
app.get('/api/users/:id', (c) => {
  return c.json({ id: c.param('id'), active: true });
});

// Real-time Event Streaming
app.get('/api/events', (c) => {
  return c.streamSSE(async (stream) => {
    await stream.writeSSE({ data: 'Connected to Froot runtime' });
  });
});

app.listen(3000);`,

  docs: `// src/app/docs/[slug]/page.tsx — Static documentation loader
import { getDoc } from 'frootkit';

export async function generateStaticParams() {
  return [{ slug: 'overview' }, { slug: 'quickstart' }];
}

export default async function DocPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const { frontmatter, html } = await getDoc(slug);

  return (
    <article class="prose max-w-3xl mx-auto py-12">
      <h1 class="text-3xl font-semibold text-white mb-6">{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}`,

  tailwind: `/* src/styles.css — Zero-config Tailwind CSS v4 */
@import "tailwindcss";

@theme {
  --color-brand-primary: #6366f1;
  --font-mono: 'JetBrains Mono', monospace;
}

@layer components {
  .surface-card {
    background-color: #0f1117;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
}`,
};

export default function UnifiedLandingPage() {
  return (
    <div class="min-h-screen bg-[#08090a] text-zinc-100 flex flex-col justify-between selection:bg-indigo-500/20 selection:text-indigo-300">
      {/* Navigation Header */}
      <header class="sticky top-0 z-50 bg-[#08090a]/80 backdrop-blur-md border-b border-white/[0.08]" id="main-nav">
        <div class="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" class="flex items-center gap-2.5 group">
            <div class="w-7 h-7 rounded-md bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:border-indigo-400/50 transition-colors shrink-0">
              <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm font-semibold text-white tracking-tight">
                Froot<span class="text-indigo-400">Kit</span>
              </span>
              <span class="text-[10px] font-mono text-zinc-400 border border-white/[0.08] px-1.5 py-0.5 rounded bg-white/[0.03]">
                v1.3.5
              </span>
            </div>
          </a>

          <nav class="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
            <a href="#ecosystem" class="hover:text-white transition-colors">Ecosystem</a>
            <a href="#frootui" class="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors flex items-center gap-1">
              <span>FrootUI</span>
              <span class="text-[9px] px-1 py-0.2 rounded bg-indigo-500/10 border border-indigo-500/20 uppercase tracking-wider">Stripe</span>
            </a>
            <a href="#benchmarks" class="hover:text-white transition-colors">Benchmarks</a>
            <a href="#code" class="hover:text-white transition-colors">Architecture</a>
            <a href="/docs" class="text-zinc-200 hover:text-white transition-colors">
              Documentation
            </a>
          </nav>

          <div class="flex items-center gap-2.5">
            <a
              href="https://github.com/orbitnorth/froot"
              target="_blank"
              rel="noreferrer"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.16] text-zinc-300 hover:text-white transition-colors"
            >
              <svg style="width: 13px; height: 13px;" class="fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a href="/docs" class="btn-primary">
              <span>Get Started</span>
              <span class="text-zinc-500">→</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Asymmetric Hero Section */}
        <section class="border-b border-white/[0.08] pt-16 pb-20 md:pt-24 md:pb-28 bg-grid-mesh">
          <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Value Proposition & Commands (7 cols) */}
            <div class="lg:col-span-7">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6">
                <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                <span>Monomorphic V8 Engine • Next.js App Router Architecture</span>
              </div>

              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-[-0.03em] leading-[1.1] mb-6">
                Fast by Architecture. The TypeScript Fullstack Stack.
              </h1>

              <p class="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
                Achieve <strong class="text-zinc-100 font-medium">124,000+ req/sec</strong> on the backend with sub-25ns monomorphic routing, paired with a <strong class="text-zinc-100 font-medium">3 KB Preact SSR</strong> web runtime featuring Next.js App Router conventions and zero hydration overhead.
              </p>

              <div class="flex flex-wrap items-center gap-3.5 mb-8">
                <a href="/docs" class="btn-primary">
                  <span>Read Documentation</span>
                  <span class="text-zinc-500">→</span>
                </a>
                <a
                  href="#benchmarks"
                  class="btn-secondary"
                >
                  View Benchmarks
                </a>
              </div>

              {/* Scaffolding CLI Command Bars */}
              <div class="flex flex-col sm:flex-row gap-3">
                <div
                  class="command-bar cursor-pointer group flex-1"
                  {...{ onclick: "copyInstallCmd('npm create frootkit@latest')" }}
                  title="Click to copy Web command"
                >
                  <span class="text-indigo-400 font-mono text-xs select-none">$</span>
                  <code class="text-xs font-mono text-zinc-300 group-hover:text-white transition-colors truncate">
                    npm create frootkit@latest
                  </code>
                  <span class="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/[0.04] text-zinc-400 ml-auto border border-white/[0.06]">
                    Web (Next.js Alt)
                  </span>
                </div>

                <div
                  class="command-bar cursor-pointer group flex-1"
                  {...{ onclick: "copyInstallCmd('npm create frootjs@latest')" }}
                  title="Click to copy Backend command"
                >
                  <span class="text-indigo-400 font-mono text-xs select-none">$</span>
                  <code class="text-xs font-mono text-zinc-300 group-hover:text-white transition-colors truncate">
                    npm create frootjs@latest
                  </code>
                  <span class="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/[0.04] text-zinc-400 ml-auto border border-white/[0.06]">
                    API (Microservice)
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Architectural Inspector Chrome (5 cols) */}
            <div class="lg:col-span-5">
              <div class="code-window shadow-2xl relative overflow-hidden">
                <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
                <div class="code-window-header flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-white/[0.12] inline-block" />
                    <span class="w-2.5 h-2.5 rounded-full bg-white/[0.12] inline-block" />
                    <span class="w-2.5 h-2.5 rounded-full bg-white/[0.12] inline-block" />
                    <span class="ml-2 text-xs font-mono text-zinc-400">engine-telemetry.ts</span>
                  </div>
                  <span class="text-[10px] font-medium text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                    V8 JIT Monomorphic
                  </span>
                </div>

                <div class="p-5 font-mono text-xs space-y-4 text-zinc-300">
                  <div class="pb-3 border-b border-white/[0.06]">
                    <div class="text-[10px] text-zinc-500 uppercase tracking-wider mb-1 font-semibold">Router Pipeline</div>
                    <div class="text-zinc-100 font-medium">Tri-Tier Monomorphic Dispatch</div>
                    <div class="text-zinc-400 text-[11px] mt-1 font-sans">→ O(1) Hash Map • Compressed Radix • RegExp</div>
                  </div>

                  <div class="grid grid-cols-2 gap-3 pb-3 border-b border-white/[0.06]">
                    <div>
                      <div class="text-[10px] text-zinc-500 font-sans">Lookup Latency</div>
                      <div class="text-white font-medium text-sm mt-0.5 tabular-nums">&lt; 24.8 ns</div>
                    </div>
                    <div>
                      <div class="text-[10px] text-zinc-500 font-sans">Throughput</div>
                      <div class="text-zinc-100 font-medium text-sm mt-0.5 tabular-nums">124,820 RPS</div>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 gap-3 pb-3 border-b border-white/[0.06]">
                    <div>
                      <div class="text-[10px] text-zinc-500 font-sans">Web SSR Size</div>
                      <div class="text-white font-medium text-sm mt-0.5 tabular-nums">3.1 KB (Preact)</div>
                    </div>
                    <div>
                      <div class="text-[10px] text-zinc-500 font-sans">Client Hydration</div>
                      <div class="text-emerald-400 font-medium text-sm mt-0.5 tabular-nums">0 KB Default</div>
                    </div>
                  </div>

                  <div class="pt-1 text-[11px] text-zinc-500 flex items-center justify-between font-sans">
                    <span>Allocations per Request:</span>
                    <span class="text-zinc-200 font-medium font-mono">0 bytes heap</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Framework Architecture Section */}
        <section class="py-20 border-b border-white/[0.08]" id="ecosystem">
          <div class="max-w-6xl mx-auto px-6">
            <div class="mb-12">
              <span class="text-xs font-medium text-indigo-400 tracking-wide uppercase">Architectural Design</span>
              <h2 class="text-3xl sm:text-4xl font-semibold text-white tracking-[-0.025em] mt-2 mb-3">
                Two Dedicated Engines. One Cohesive Ecosystem.
              </h2>
              <p class="text-zinc-400 text-base max-w-2xl leading-relaxed">
                Whether deploying cloud microservices or fullstack web applications, the Froot ecosystem eliminates framework overhead at every layer.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: FrootKit */}
              <div class="surface-card p-7 sm:p-8 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-4">
                    <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      Fullstack Web Framework
                    </span>
                    <span class="text-xs font-mono text-zinc-500">frootkit CLI</span>
                  </div>

                  <h3 class="text-xl font-semibold text-white mb-2 tracking-tight">FrootKit</h3>
                  <p class="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                    Next.js App Router conventions with 3KB Preact SSR, native Tailwind CSS v4, dynamic API routes, and instantaneous static site export.
                  </p>

                  <ul class="space-y-3 text-xs text-zinc-300 mb-8">
                    <li class="flex items-start gap-2.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                      <span>Next.js-style file-based routing (<code class="text-zinc-200">layout.tsx</code>, <code class="text-zinc-200">page.tsx</code>)</span>
                    </li>
                    <li class="flex items-start gap-2.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                      <span>Dynamic Route Handlers in <code class="text-zinc-200">src/app/api/**/route.ts</code></span>
                    </li>
                    <li class="flex items-start gap-2.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                      <span>Native Tailwind CSS v4 with zero configuration files</span>
                    </li>
                    <li class="flex items-start gap-2.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                      <span>Automatic static export via <code class="text-zinc-200">frootkit build</code> in &lt; 900ms</span>
                    </li>
                  </ul>
                </div>

                <div class="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <span class="text-xs text-zinc-500">Starter, Blog, Store, Auth</span>
                  <a href="/docs/frootkit" class="text-xs font-medium text-zinc-200 hover:text-white transition-colors flex items-center gap-1 group">
                    <span>FrootKit Guide</span>
                    <span class="text-zinc-500 group-hover:translate-x-0.5 transition-transform">→</span>
                  </a>
                </div>
              </div>

              {/* Card 2: Frootjs Core */}
              <div class="surface-card p-7 sm:p-8 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-4">
                    <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/[0.04] text-zinc-300 border border-white/[0.08]">
                      Backend HTTP Micro-Framework
                    </span>
                    <span class="text-xs font-mono text-zinc-500">124k+ req/sec</span>
                  </div>

                  <h3 class="text-xl font-semibold text-white mb-2 tracking-tight">Frootjs</h3>
                  <p class="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                    Monomorphic V8 inline cache architectures delivering sub-25ns routing lookups with zero heap allocation per request.
                  </p>

                  <ul class="space-y-3 text-xs text-zinc-300 mb-8">
                    <li class="flex items-start gap-2.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-1.5 shrink-0" />
                      <span>Tri-Tier routing engine with O(1) static route table</span>
                    </li>
                    <li class="flex items-start gap-2.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-1.5 shrink-0" />
                      <span>Zero V8 hidden class transitions during execution</span>
                    </li>
                    <li class="flex items-start gap-2.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-1.5 shrink-0" />
                      <span>Built-in JWT, AES-GCM, WebSockets &amp; Server-Sent Events</span>
                    </li>
                    <li class="flex items-start gap-2.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-1.5 shrink-0" />
                      <span>Standard Fetch API compatibility (Request / Response)</span>
                    </li>
                  </ul>
                </div>

                <div class="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <span class="text-xs text-zinc-500 font-mono text-[11px]">npm create frootjs@latest</span>
                  <a href="/docs/quickstart" class="text-xs font-medium text-zinc-200 hover:text-white transition-colors flex items-center gap-1 group">
                    <span>Backend Guide</span>
                    <span class="text-zinc-500 group-hover:translate-x-0.5 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FrootUI (Stripe Design System & shadcn CLI) Showcase Section */}
        <section class="py-20 border-b border-white/[0.08] relative overflow-hidden" id="frootui">
          {/* Subtle Stripe ambient mesh in background */}
          <div class="absolute -right-32 top-10 w-96 h-96 rounded-full bg-[#533afd]/10 blur-3xl pointer-events-none" />

          <div class="max-w-6xl mx-auto px-6">
            <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#533afd]/10 border border-[#533afd]/25 text-indigo-400 text-xs font-medium mb-3">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#533afd]" />
                  <span>Stripe Design System • shadcn Component Architecture</span>
                </div>
                <h2 class="text-3xl sm:text-4xl font-semibold text-white tracking-[-0.025em] mb-2">
                  FrootUI: Modular Components with Zero Lock-In.
                </h2>
                <p class="text-zinc-400 text-base max-w-2xl leading-relaxed">
                  Crafted around Stripe&apos;s voltage palette (`#533afd`), multi-layer blue shadows, and tabular numbers. Copy component source directly into your project with the CLI or import as an NPM package.
                </p>
              </div>

              <div class="flex flex-wrap items-center gap-3">
                <a
                  href="/docs/frootui"
                  class="btn-primary"
                >
                  <span>Explore FrootUI Docs</span>
                  <span class="text-zinc-500">→</span>
                </a>
              </div>
            </div>

            {/* Interactive Stripe UI Mockup Grid */}
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Stripe Financial Card Preview (7 cols) */}
              <div class="lg:col-span-7 space-y-5">
                {/* Stripe Metric KPI Row */}
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="surface-card p-5 relative overflow-hidden">
                    <div class="flex items-center justify-between mb-3">
                      <span class="text-xs font-medium text-zinc-400">Gross Settlement Volume</span>
                      <span class="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span>↑</span>
                        <span class="tabular-nums">+18.4%</span>
                      </span>
                    </div>
                    <div class="flex items-baseline justify-between gap-4">
                      <div class="text-2xl sm:text-3xl font-semibold tracking-tight text-white tabular-nums">
                        $128,420
                      </div>
                      <svg width="80" height="24" viewBox="0 0 80 24" class="overflow-visible shrink-0 opacity-80">
                        <polyline
                          fill="none"
                          stroke="#00875a"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          points="0,20 16,16 32,18 48,10 64,8 80,4"
                        />
                      </svg>
                    </div>
                    <div class="mt-2 text-[11px] text-zinc-500">vs. $108,450 previous period</div>
                  </div>

                  <div class="surface-card p-5 relative overflow-hidden">
                    <div class="flex items-center justify-between mb-3">
                      <span class="text-xs font-medium text-zinc-400">Active API Keys</span>
                      <span class="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        <span>●</span>
                        <span>Live</span>
                      </span>
                    </div>
                    <div class="text-2xl sm:text-3xl font-semibold tracking-tight text-white tabular-nums">
                      4,821
                    </div>
                    <div class="mt-2 text-[11px] text-zinc-500">Sub-25ns monomorphic lookup</div>
                  </div>
                </div>

                {/* Stripe Live Table Component */}
                <div class="surface-card overflow-hidden">
                  <div class="p-4 px-5 border-b border-white/[0.06] flex items-center justify-between">
                    <div class="flex items-center gap-2.5">
                      <div class="w-2 h-2 rounded-full bg-emerald-400" />
                      <span class="text-xs font-semibold text-white">Recent Transactions</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                        Table Component
                      </span>
                    </div>
                  </div>

                  <table class="w-full text-left text-xs text-zinc-300">
                    <thead class="bg-white/[0.02] border-b border-white/[0.06] text-[11px] text-zinc-400 font-medium">
                      <tr>
                        <th class="py-3 px-5">Customer</th>
                        <th class="py-3 px-5">Method</th>
                        <th class="py-3 px-5">Status</th>
                        <th class="py-3 px-5 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-white/[0.04]">
                      <tr class="hover:bg-white/[0.02] transition-colors">
                        <td class="py-3.5 px-5 font-medium text-white">Acme Systems LLC</td>
                        <td class="py-3.5 px-5 text-zinc-400 font-mono text-[11px]">•••• 4242</td>
                        <td class="py-3.5 px-5">
                          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <span class="w-1 h-1 rounded-full bg-emerald-400" />
                            Succeeded
                          </span>
                        </td>
                        <td class="py-3.5 px-5 text-right font-medium text-white tabular-nums">$149.00</td>
                      </tr>
                      <tr class="hover:bg-white/[0.02] transition-colors">
                        <td class="py-3.5 px-5 font-medium text-white">Nordic Dev Studio</td>
                        <td class="py-3.5 px-5 text-zinc-400 font-mono text-[11px]">•••• 8821</td>
                        <td class="py-3.5 px-5">
                          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <span class="w-1 h-1 rounded-full bg-emerald-400" />
                            Succeeded
                          </span>
                        </td>
                        <td class="py-3.5 px-5 text-right font-medium text-white tabular-nums">$289.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right Column: Stripe Interactive Form Card & CLI Installer (5 cols) */}
              <div class="lg:col-span-5 space-y-5">
                <div class="surface-card p-6 relative overflow-hidden">
                  <div class="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#533afd] via-[#7a5af8] to-[#00d4b2]" />

                  <div class="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                    <div>
                      <h4 class="text-sm font-semibold text-white">Checkout Component</h4>
                      <p class="text-xs text-zinc-500 mt-0.5">Stripe Voltage Accent &amp; Micro-Bevels</p>
                    </div>
                    <span class="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[10px] font-medium">
                      #533afd
                    </span>
                  </div>

                  <div class="space-y-3.5">
                    <div>
                      <label class="block text-xs font-medium text-zinc-300 mb-1">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Sarah Connor"
                        class="w-full h-9 rounded bg-[#08090a] border border-white/[0.08] text-white text-xs px-3 focus:outline-none focus:border-[#533afd] focus:ring-2 focus:ring-[#533afd]/20 transition-all"
                        readOnly
                      />
                    </div>

                    <div>
                      <label class="block text-xs font-medium text-zinc-300 mb-1">
                        Payment Method
                      </label>
                      <div class="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs">
                        <div class="flex items-center gap-2">
                          <span class="px-1.5 py-0.5 rounded bg-white text-zinc-950 font-bold text-[10px]">VISA</span>
                          <span class="text-zinc-300 font-mono text-[11px]">•••• 4242</span>
                        </div>
                        <span class="text-zinc-500 text-[11px]">12/28</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      class="w-full py-2.5 rounded bg-[#533afd] text-white font-medium text-xs hover:bg-[#4326f5] transition-all shadow-[0_1px_2px_rgba(50,50,93,0.2),inset_0_1px_0_rgba(255,255,255,0.25)] flex items-center justify-center gap-2 mt-4"
                    >
                      <span>Confirm &amp; Pay $149.00</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>

                {/* CLI Command Box */}
                <div class="surface-card p-4">
                  <div class="flex items-center justify-between text-xs text-zinc-400 mb-2">
                    <span class="font-medium text-zinc-300">Shadcn-Style Component Scaffolder</span>
                    <span class="text-[10px] text-zinc-500 font-mono">frootui CLI</span>
                  </div>

                  <div
                    class="command-bar cursor-pointer group"
                    {...{ onclick: "copyInstallCmd('npx frootui add --all')" }}
                    title="Click to copy FrootUI command"
                  >
                    <span class="text-[#533afd] font-mono text-xs select-none">$</span>
                    <code class="text-xs font-mono text-zinc-300 group-hover:text-white transition-colors truncate">
                      npx frootui add --all
                    </code>
                    <span class="text-[10px] font-medium px-2 py-0.5 rounded bg-white/[0.06] text-zinc-300 ml-auto border border-white/[0.08]">
                      Copy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="py-20 border-b border-white/[0.08]" id="benchmarks">
          <div class="max-w-6xl mx-auto px-6">
            <div class="mb-12">
              <span class="text-xs font-medium text-indigo-400 tracking-wide uppercase">Empirical Verification</span>
              <h2 class="text-3xl sm:text-4xl font-semibold text-white tracking-[-0.025em] mt-2 mb-3">
                Performance Benchmarks
              </h2>
              <p class="text-zinc-400 text-base max-w-2xl leading-relaxed">
                Measured on Node.js v22 on AMD EPYC 7763 hardware with 100 concurrent HTTP keep-alive connections.
              </p>
            </div>

            <div class="overflow-x-auto surface-card">
              <table class="w-full text-left border-collapse text-xs">
                <thead>
                  <tr class="border-b border-white/[0.06] bg-white/[0.02] text-zinc-400">
                    <th class="py-3 px-5 font-medium">Engine / Metric</th>
                    <th class="py-3 px-5 font-medium">Next.js 15 / Express</th>
                    <th class="py-3 px-5 font-medium">Fastify / Hono</th>
                    <th class="py-3 px-5 text-indigo-300 font-semibold bg-indigo-500/[0.05]">Froot / FrootKit</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-white/[0.04]">
                  <tr class="hover:bg-white/[0.02] transition-colors">
                    <td class="py-3.5 px-5 font-medium text-white">HTTP Throughput</td>
                    <td class="py-3.5 px-5 text-zinc-400 font-mono">15,400 req/s</td>
                    <td class="py-3.5 px-5 text-zinc-400 font-mono">78,200 req/s</td>
                    <td class="py-3.5 px-5 text-zinc-100 font-semibold font-mono bg-indigo-500/[0.05] tabular-nums">124,820 req/s</td>
                  </tr>
                  <tr class="hover:bg-white/[0.02] transition-colors">
                    <td class="py-3.5 px-5 font-medium text-white">Route Lookup Latency</td>
                    <td class="py-3.5 px-5 text-zinc-400 font-mono">240 ns</td>
                    <td class="py-3.5 px-5 text-zinc-400 font-mono">85 ns</td>
                    <td class="py-3.5 px-5 text-zinc-100 font-semibold font-mono bg-indigo-500/[0.05] tabular-nums">&lt; 25 ns (O(1))</td>
                  </tr>
                  <tr class="hover:bg-white/[0.02] transition-colors">
                    <td class="py-3.5 px-5 font-medium text-white">Web SSR Runtime Size</td>
                    <td class="py-3.5 px-5 text-zinc-400 font-mono">85 KB (React 19)</td>
                    <td class="py-3.5 px-5 text-zinc-400 font-mono">N/A (API only)</td>
                    <td class="py-3.5 px-5 text-zinc-100 font-semibold font-mono bg-indigo-500/[0.05] tabular-nums">3.1 KB (Preact)</td>
                  </tr>
                  <tr class="hover:bg-white/[0.02] transition-colors">
                    <td class="py-3.5 px-5 font-medium text-white">Default Client JS</td>
                    <td class="py-3.5 px-5 text-zinc-400 font-mono">86.4 KB (gzipped)</td>
                    <td class="py-3.5 px-5 text-zinc-400 font-mono">N/A</td>
                    <td class="py-3.5 px-5 text-emerald-400 font-semibold font-mono bg-indigo-500/[0.05] tabular-nums">0 KB (Zero JS)</td>
                  </tr>
                  <tr class="hover:bg-white/[0.02] transition-colors">
                    <td class="py-3.5 px-5 font-medium text-white">Cold SSG Export Duration</td>
                    <td class="py-3.5 px-5 text-zinc-400 font-mono">4,850 ms</td>
                    <td class="py-3.5 px-5 text-zinc-400 font-mono">N/A</td>
                    <td class="py-3.5 px-5 text-zinc-100 font-semibold font-mono bg-indigo-500/[0.05] tabular-nums">&lt; 900 ms</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Architecture & Code Showcase Section */}
        <section class="py-20 border-b border-white/[0.08]" id="code">
          <div class="max-w-6xl mx-auto px-6">
            <div class="mb-12">
              <span class="text-xs font-medium text-indigo-400 tracking-wide uppercase">Developer Workflow</span>
              <h2 class="text-3xl sm:text-4xl font-semibold text-white tracking-[-0.025em] mt-2 mb-3">
                Simple, Ergonomic Primitives
              </h2>
              <p class="text-zinc-400 text-base max-w-2xl leading-relaxed">
                Inspect how App Router layouts, backend route handlers, markdown pages, and native Tailwind v4 integrate seamlessly.
              </p>
            </div>

            <div class="code-window">
              <div class="code-window-header flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-white/[0.12] inline-block" />
                  <span class="w-2.5 h-2.5 rounded-full bg-white/[0.12] inline-block" />
                  <span class="w-2.5 h-2.5 rounded-full bg-white/[0.12] inline-block" />
                  <span class="ml-2 text-xs font-mono text-zinc-400">workspace</span>
                </div>

                <div class="flex items-center gap-1.5 overflow-x-auto" id="code-tabs">
                  <button
                    type="button"
                    class="tab-btn active"
                    data-tab="frootkit"
                    {...{ onclick: "switchCodeTab('frootkit')" }}
                  >
                    src/app/layout.tsx
                  </button>
                  <button
                    type="button"
                    class="tab-btn"
                    data-tab="backend"
                    {...{ onclick: "switchCodeTab('backend')" }}
                  >
                    server.ts
                  </button>
                  <button
                    type="button"
                    class="tab-btn"
                    data-tab="docs"
                    {...{ onclick: "switchCodeTab('docs')" }}
                  >
                    [slug]/page.tsx
                  </button>
                  <button
                    type="button"
                    class="tab-btn"
                    data-tab="tailwind"
                    {...{ onclick: "switchCodeTab('tailwind')" }}
                  >
                    src/styles.css
                  </button>
                </div>
              </div>

              <div class="p-6 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-zinc-300">
                <pre><code id="code-snippet-pre" class="language-typescript" dangerouslySetInnerHTML={{ __html: highlightCode(CODE_SNIPPETS['frootkit']!, 'typescript') }} /></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Installation & Next Steps Section */}
        <section class="py-20">
          <div class="max-w-4xl mx-auto px-6 text-center">
            <h2 class="text-3xl sm:text-4xl font-semibold text-white tracking-[-0.025em] mb-4">
              Start Building with Froot Today
            </h2>
            <p class="text-zinc-400 text-base mb-8 max-w-xl mx-auto">
              Choose your starter template or scaffold a bare-metal API microservice in seconds.
            </p>
            <div class="flex flex-wrap items-center justify-center gap-3.5">
              <a href="/docs/quickstart" class="btn-primary">
                <span>Quickstart Guide</span>
                <span class="text-zinc-500">→</span>
              </a>
              <a
                href="https://github.com/orbitnorth/froot"
                target="_blank"
                rel="noreferrer"
                class="btn-secondary"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Semantic Accessible Footer */}
      <footer class="border-t border-white/[0.08] bg-[#08090a] py-8 px-6">
        <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div class="flex items-center gap-2">
            <span class="font-medium text-zinc-300">Froot Ecosystem</span>
            <span>•</span>
            <span>OrbitNorth LLC</span>
          </div>
          <div class="flex items-center gap-6">
            <a href="/docs" class="hover:text-zinc-300 transition-colors">Docs</a>
            <a href="https://github.com/orbitnorth/froot" class="hover:text-zinc-300 transition-colors">GitHub</a>
            <a href="https://www.npmjs.com/package/create-frootkit" class="hover:text-zinc-300 transition-colors">NPM</a>
          </div>
        </div>
      </footer>

      {/* Script for Tab Switching & Copy Feedback */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          const SNIPPETS = ${JSON.stringify(CODE_SNIPPETS)};

          function switchCodeTab(tabKey) {
            document.querySelectorAll('#code-tabs .tab-btn').forEach(btn => {
              if (btn.getAttribute('data-tab') === tabKey) {
                btn.classList.add('active');
              } else {
                btn.classList.remove('active');
              }
            });
            const pre = document.getElementById('code-snippet-pre');
            if (pre && SNIPPETS[tabKey]) {
              pre.textContent = SNIPPETS[tabKey];
            }
          }

          function copyInstallCmd(cmd) {
            navigator.clipboard.writeText(cmd);
          }
        `,
        }}
      />
    </div>
  );
}
