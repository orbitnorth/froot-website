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
      <body class="bg-[#06090f] text-slate-100 antialiased">
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
      <h1 class="text-3xl font-bold text-white mb-6">{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}`,

  tailwind: `/* src/styles.css — Zero-config Tailwind CSS v4 */
@import "tailwindcss";

@theme {
  --color-brand-primary: #10b981;
  --font-mono: 'JetBrains Mono', monospace;
}

@layer components {
  .surface-card {
    background-color: #0a0f18;
    border: 1px solid #1a2333;
  }
}`,
};

export default function UnifiedLandingPage() {
  return (
    <div class="min-h-screen bg-[#06090f] text-slate-100 flex flex-col justify-between">
      {/* Navigation Header */}
      <header class="sticky top-0 z-50 bg-[#06090f]/95 border-b border-[#1a2333]" id="main-nav">
        <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" class="flex items-center gap-3 group">
            <div class="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 transition-colors">
              <svg class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-base font-bold text-white tracking-tight">
                Froot<span class="text-emerald-400">Kit</span>
              </span>
              <span class="text-[11px] font-mono text-slate-400 border border-[#1a2333] px-2 py-0.5 rounded-md bg-[#0a0f18]">
                v1.3.1
              </span>
            </div>
          </a>

          <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#ecosystem" class="hover:text-white transition-colors">Ecosystem</a>
            <a href="#benchmarks" class="hover:text-white transition-colors">Benchmarks</a>
            <a href="#code" class="hover:text-white transition-colors">Architecture</a>
            <a href="/docs" class="text-emerald-400 hover:text-emerald-300 transition-colors font-semibold">
              Documentation
            </a>
          </nav>

          <div class="flex items-center gap-3">
            <a
              href="https://github.com/orbitnorth/froot"
              target="_blank"
              rel="noreferrer"
              class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#0a0f18] border border-[#1a2333] hover:border-slate-700 text-slate-200 hover:text-white transition-colors"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a href="/docs" class="btn-primary">
              Get Started →
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Asymmetric Hero Section */}
        <section class="border-b border-[#1a2333] pt-16 pb-20 md:pt-24 md:pb-28 bg-grid-mesh">
          <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Value Proposition & Commands (7 cols) */}
            <div class="lg:col-span-7">
              <div class="text-xs font-mono font-medium text-emerald-400 mb-4 tracking-wide uppercase">
                Monomorphic V8 Engine • Next.js App Router Architecture
              </div>

              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Fast by Architecture. The TypeScript Fullstack Stack.
              </h1>

              <p class="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
                Achieve <strong class="text-white font-semibold">124,000+ req/sec</strong> on the backend with sub-25ns monomorphic routing, paired with a <strong class="text-white font-semibold">3 KB Preact SSR</strong> web runtime featuring Next.js App Router conventions and zero hydration overhead.
              </p>

              <div class="flex flex-wrap items-center gap-4 mb-8">
                <a href="/docs" class="btn-primary">
                  Read Documentation →
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
                  <span class="text-emerald-400 font-mono text-sm select-none">$</span>
                  <code class="text-xs font-mono text-slate-200 group-hover:text-white transition-colors truncate">
                    npm create frootkit@latest
                  </code>
                  <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 ml-auto border border-emerald-500/20">
                    Web (Next.js Alt)
                  </span>
                </div>

                <div
                  class="command-bar cursor-pointer group flex-1"
                  {...{ onclick: "copyInstallCmd('npm create frootjs@latest')" }}
                  title="Click to copy Backend command"
                >
                  <span class="text-cyan-400 font-mono text-sm select-none">$</span>
                  <code class="text-xs font-mono text-slate-200 group-hover:text-white transition-colors truncate">
                    npm create frootjs@latest
                  </code>
                  <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-300 ml-auto border border-cyan-500/20">
                    API (Microservice)
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Architectural Inspector Chrome (5 cols) */}
            <div class="lg:col-span-5">
              <div class="code-window shadow-xl">
                <div class="code-window-header flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
                    <span class="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
                    <span class="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
                    <span class="ml-2 text-xs font-mono text-slate-400">engine-telemetry.ts</span>
                  </div>
                  <span class="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Active (V8 JIT)
                  </span>
                </div>

                <div class="p-5 font-mono text-xs space-y-4 text-slate-300">
                  <div class="pb-3 border-b border-[#1a2333]">
                    <div class="text-[11px] text-slate-400 uppercase tracking-wider mb-1 font-semibold">Router Pipeline</div>
                    <div class="text-emerald-400 font-bold">Tri-Tier Monomorphic Dispatch</div>
                    <div class="text-slate-400 text-[11px] mt-1">→ O(1) Hash Map • Compressed Radix • RegExp</div>
                  </div>

                  <div class="grid grid-cols-2 gap-3 pb-3 border-b border-[#1a2333]">
                    <div>
                      <div class="text-[11px] text-slate-400">Lookup Latency</div>
                      <div class="text-white font-bold text-sm mt-0.5">&lt; 24.8 ns</div>
                    </div>
                    <div>
                      <div class="text-[11px] text-slate-400">Throughput</div>
                      <div class="text-emerald-400 font-bold text-sm mt-0.5">124,820 RPS</div>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 gap-3 pb-3 border-b border-[#1a2333]">
                    <div>
                      <div class="text-[11px] text-slate-400">Web SSR Size</div>
                      <div class="text-white font-bold text-sm mt-0.5">3.1 KB (Preact)</div>
                    </div>
                    <div>
                      <div class="text-[11px] text-slate-400">Client Hydration</div>
                      <div class="text-emerald-400 font-bold text-sm mt-0.5">0 KB Default</div>
                    </div>
                  </div>

                  <div class="pt-1 text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Heap Allocations per Request:</span>
                    <span class="text-white font-bold font-mono">0 bytes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Framework Architecture Section */}
        <section class="py-20 border-b border-[#1a2333]" id="ecosystem">
          <div class="max-w-6xl mx-auto px-6">
            <div class="mb-12">
              <span class="text-xs font-mono font-medium text-emerald-400 tracking-wide uppercase">ARCHITECTURAL DESIGN</span>
              <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-3">
                Two Dedicated Engines. One Cohesive Ecosystem.
              </h2>
              <p class="text-slate-300 text-base max-w-2xl leading-relaxed">
                Whether deploying cloud microservices or fullstack web applications, the Froot ecosystem eliminates framework overhead at every layer.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: FrootKit */}
              <div class="surface-card p-8 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-4">
                    <span class="text-xs font-mono px-2.5 py-1 rounded bg-[#0f1624] text-emerald-400 border border-[#1a2333] font-semibold">
                      Fullstack Web Framework
                    </span>
                    <span class="text-xs font-mono text-slate-400">frootkit CLI</span>
                  </div>

                  <h3 class="text-2xl font-bold text-white mb-3">FrootKit</h3>
                  <p class="text-slate-300 text-sm leading-relaxed mb-6">
                    Next.js App Router conventions with 3KB Preact SSR, native Tailwind CSS v4, dynamic API routes, and instantaneous static site export.
                  </p>

                  <ul class="space-y-3 text-xs text-slate-300 mb-8 font-mono">
                    <li class="flex items-start gap-2.5">
                      <span class="text-emerald-400 font-bold">&check;</span>
                      <span>Next.js-style file-based routing (<code class="text-slate-200">layout.tsx</code>, <code class="text-slate-200">page.tsx</code>)</span>
                    </li>
                    <li class="flex items-start gap-2.5">
                      <span class="text-emerald-400 font-bold">&check;</span>
                      <span>Dynamic Route Handlers in <code class="text-slate-200">src/app/api/**/route.ts</code></span>
                    </li>
                    <li class="flex items-start gap-2.5">
                      <span class="text-emerald-400 font-bold">&check;</span>
                      <span>Native Tailwind CSS v4 with zero config files</span>
                    </li>
                    <li class="flex items-start gap-2.5">
                      <span class="text-emerald-400 font-bold">&check;</span>
                      <span>Automatic static export via <code class="text-slate-200">frootkit build</code> in &lt; 900ms</span>
                    </li>
                  </ul>
                </div>

                <div class="pt-6 border-t border-[#1a2333] flex items-center justify-between">
                  <span class="text-xs font-mono text-slate-400">Starter, Blog, Store, Auth</span>
                  <a href="/docs/frootkit" class="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
                    FrootKit Guide →
                  </a>
                </div>
              </div>

              {/* Card 2: Frootjs Core */}
              <div class="surface-card p-8 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-4">
                    <span class="text-xs font-mono px-2.5 py-1 rounded bg-[#0f1624] text-cyan-400 border border-[#1a2333] font-semibold">
                      Backend HTTP Micro-Framework
                    </span>
                    <span class="text-xs font-mono text-slate-400">124k+ req/sec</span>
                  </div>

                  <h3 class="text-2xl font-bold text-white mb-3">Frootjs</h3>
                  <p class="text-slate-300 text-sm leading-relaxed mb-6">
                    Monomorphic V8 inline cache architectures delivering sub-25ns routing lookups with zero heap allocation per request.
                  </p>

                  <ul class="space-y-3 text-xs text-slate-300 mb-8 font-mono">
                    <li class="flex items-start gap-2.5">
                      <span class="text-cyan-400 font-bold">✓</span>
                      <span>Tri-Tier routing engine with O(1) static route table</span>
                    </li>
                    <li class="flex items-start gap-2.5">
                      <span class="text-cyan-400 font-bold">✓</span>
                      <span>Zero V8 hidden class transitions during execution</span>
                    </li>
                    <li class="flex items-start gap-2.5">
                      <span class="text-cyan-400 font-bold">✓</span>
                      <span>Built-in JWT, AES-GCM, WebSockets &amp; Server-Sent Events</span>
                    </li>
                    <li class="flex items-start gap-2.5">
                      <span class="text-cyan-400 font-bold">✓</span>
                      <span>Standard Fetch API compatibility (Request / Response)</span>
                    </li>
                  </ul>
                </div>

                <div class="pt-6 border-t border-[#1a2333] flex items-center justify-between">
                  <span class="text-xs font-mono text-slate-400">npm create frootjs@latest</span>
                  <a href="/docs/quickstart" class="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                    Backend Guide →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benchmarks Section */}
        <section class="py-20 border-b border-[#1a2333]" id="benchmarks">
          <div class="max-w-6xl mx-auto px-6">
            <div class="mb-12">
              <span class="text-xs font-mono font-medium text-emerald-400 tracking-wide uppercase">EMPIRICAL VERIFICATION</span>
              <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-3">
                Performance Benchmarks
              </h2>
              <p class="text-slate-300 text-base max-w-2xl leading-relaxed">
                Measured on Node.js v22 on AMD EPYC 7763 hardware with 100 concurrent HTTP keep-alive connections.
              </p>
            </div>

            <div class="overflow-x-auto surface-card">
              <table class="w-full text-left border-collapse text-sm">
                <thead>
                  <tr class="border-b border-[#1a2333] bg-[#0f1624] text-xs font-mono text-slate-400 uppercase tracking-wider">
                    <th class="p-4 font-semibold">Engine / Metric</th>
                    <th class="p-4 font-semibold">Next.js 15 / Express</th>
                    <th class="p-4 font-semibold">Fastify / Hono</th>
                    <th class="p-4 text-emerald-400 font-semibold">Froot / FrootKit</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#1a2333]/80">
                  <tr class="hover:bg-[#0f1624]/50 transition-colors">
                    <td class="p-4 font-medium text-white">HTTP Throughput</td>
                    <td class="p-4 text-slate-400 font-mono">15,400 req/s</td>
                    <td class="p-4 text-slate-400 font-mono">78,200 req/s</td>
                    <td class="p-4 text-emerald-400 font-bold font-mono">124,820 req/s</td>
                  </tr>
                  <tr class="hover:bg-[#0f1624]/50 transition-colors">
                    <td class="p-4 font-medium text-white">Route Lookup Latency</td>
                    <td class="p-4 text-slate-400 font-mono">240 ns</td>
                    <td class="p-4 text-slate-400 font-mono">85 ns</td>
                    <td class="p-4 text-emerald-400 font-bold font-mono">&lt; 25 ns (O(1))</td>
                  </tr>
                  <tr class="hover:bg-[#0f1624]/50 transition-colors">
                    <td class="p-4 font-medium text-white">Web SSR Runtime Size</td>
                    <td class="p-4 text-slate-400 font-mono">85 KB (React 19)</td>
                    <td class="p-4 text-slate-400 font-mono">N/A (API only)</td>
                    <td class="p-4 text-emerald-400 font-bold font-mono">3.1 KB (Preact)</td>
                  </tr>
                  <tr class="hover:bg-[#0f1624]/50 transition-colors">
                    <td class="p-4 font-medium text-white">Default Client JS</td>
                    <td class="p-4 text-slate-400 font-mono">86.4 KB (gzipped)</td>
                    <td class="p-4 text-slate-400 font-mono">N/A</td>
                    <td class="p-4 text-emerald-400 font-bold font-mono">0 KB (Zero JS)</td>
                  </tr>
                  <tr class="hover:bg-[#0f1624]/50 transition-colors">
                    <td class="p-4 font-medium text-white">Cold SSG Export Duration</td>
                    <td class="p-4 text-slate-400 font-mono">4,850 ms</td>
                    <td class="p-4 text-slate-400 font-mono">N/A</td>
                    <td class="p-4 text-emerald-400 font-bold font-mono">&lt; 900 ms</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Architecture & Code Showcase Section */}
        <section class="py-20 border-b border-[#1a2333]" id="code">
          <div class="max-w-6xl mx-auto px-6">
            <div class="mb-12">
              <span class="text-xs font-mono font-medium text-emerald-400 tracking-wide uppercase">DEVELOPER WORKFLOW</span>
              <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-3">
                Simple, Ergonomic Primitives
              </h2>
              <p class="text-slate-300 text-base max-w-2xl leading-relaxed">
                Inspect how App Router layouts, backend route handlers, markdown pages, and native Tailwind v4 integrate seamlessly.
              </p>
            </div>

            <div class="code-window">
              <div class="code-window-header flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
                  <span class="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
                  <span class="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
                  <span class="ml-2 text-xs font-mono text-slate-400">workspace</span>
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

              <div class="p-6 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-slate-200">
                <pre><code id="code-snippet-pre" class="language-typescript" dangerouslySetInnerHTML={{ __html: highlightCode(CODE_SNIPPETS['frootkit']!, 'typescript') }} /></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Installation & Next Steps Section */}
        <section class="py-20">
          <div class="max-w-4xl mx-auto px-6 text-center">
            <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Start Building with Froot Today
            </h2>
            <p class="text-slate-300 text-base mb-8 max-w-xl mx-auto">
              Choose your starter template or scaffold a bare-metal API microservice in seconds.
            </p>
            <div class="flex flex-wrap items-center justify-center gap-4">
              <a href="/docs/quickstart" class="btn-primary">
                Quickstart Guide →
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
      <footer class="border-t border-[#1a2333] bg-[#06090f] py-10 px-6">
        <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div class="flex items-center gap-2">
            <span class="font-bold text-white">Froot Ecosystem</span>
            <span>•</span>
            <span>OrbitNorth LLC</span>
          </div>
          <div class="flex items-center gap-6">
            <a href="/docs" class="hover:text-white transition-colors">Docs</a>
            <a href="https://github.com/orbitnorth/froot" class="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.npmjs.com/package/create-frootkit" class="hover:text-white transition-colors">NPM</a>
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
            navigator.clipboard.writeText(cmd).then(() => {
              alert('Copied to clipboard: ' + cmd);
            });
          }
        `,
        }}
      />
    </div>
  );
}
