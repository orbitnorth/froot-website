/** @jsxImportSource preact */
import { highlightCode } from 'frootkit';

const CODE_SNIPPETS: Record<string, string> = {
  frootkit: `import type { ComponentChildren } from 'preact';

export default function RootLayout({ children }: { children: ComponentChildren }) {
  return (
    <html lang="en" class="dark">
      <head>
        <meta charset="UTF-8" />
        <title>FrootKit App</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-[#030712] text-slate-100">
        {children}
      </body>
    </html>
  );
}`,

  backend: `import { Froot } from 'frootjs';

const app = new Froot();

// Tier 1 Static Route (< 25ns Monomorphic Lookup)
app.get('/health', (c) => c.text('OK'));

// Tier 2 Dynamic Route with JSON Response
app.get('/api/users/:id', (c) => {
  return c.json({ id: c.param('id'), active: true });
});

// Stream Server-Sent Events (SSE)
app.get('/api/events', (c) => {
  return c.streamSSE(async (stream) => {
    await stream.writeSSE({ data: 'Connected to Froot' });
  });
});

app.listen(3000);`,

  docs: `import { getDoc } from 'frootkit';

export async function generateStaticParams() {
  return [{ slug: 'overview' }, { slug: 'quickstart' }];
}

export default async function DocPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const { frontmatter, html, headings } = await getDoc(slug);

  return (
    <article class="prose prose-invert">
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}`,

  tailwind: `@import "tailwindcss";

@theme {
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --color-brand-froot: #00e676;
}

@layer components {
  .glass-card {
    background: rgba(13, 19, 31, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
}`,
};

export default function UnifiedLandingPage() {
  return (
    <div class="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden">
      {/* Ambient background glow */}
      <div class="ambient-glow glow-top-left" aria-hidden="true" />
      <div class="ambient-glow glow-top-right" aria-hidden="true" />
      <div class="ambient-glow glow-center" aria-hidden="true" />

      {/* Main Landing Navbar */}
      <header class="sticky top-0 z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-white/[0.08]" id="main-nav">
        <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
              <svg class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-base font-bold text-white tracking-tight">
                Froot<span class="text-emerald-400">Kit</span>
              </span>
              <span class="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded-full">
                Ecosystem
              </span>
            </div>
          </a>

          <nav class="hidden md:flex items-center gap-7 text-sm text-slate-300 font-medium">
            <a href="#ecosystem" class="hover:text-emerald-400 transition-colors">Ecosystem</a>
            <a href="#benchmarks" class="hover:text-emerald-400 transition-colors">Benchmarks</a>
            <a href="#code" class="hover:text-emerald-400 transition-colors">Code</a>
            <a href="/docs" class="text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 font-semibold">
              <span>Docs</span>
            </a>
          </nav>

          <div class="flex items-center gap-3">
            <a
              href="https://github.com/orbitnorth/froot"
              target="_blank"
              rel="noreferrer"
              class="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/[0.04] border border-white/[0.08] hover:border-emerald-500/50 hover:bg-white/[0.08] hover:text-white transition-all text-slate-200"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a href="/docs" class="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold btn-primary-glow">
              <span>Explore Docs &rarr;</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main class="relative z-10">
        <section class="relative pt-20 pb-24 md:pt-28 md:pb-36 bg-grid-pattern">
          <div class="max-w-5xl mx-auto px-6 text-center">
            {/* Pill Badge */}
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-medium text-emerald-400 mb-8 backdrop-blur-md">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Froot Monomorphic V8 Engine &bull; FrootKit Zero-Overhead Next.js Alternative</span>
            </div>

            {/* Headline */}
            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              The Peak Performance<br />
              <span class="gradient-text">TypeScript Stack</span>
            </h1>

            {/* Subheading */}
            <p class="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
              High-throughput backend APIs with <strong class="text-white font-semibold">124,000+ req/sec</strong> and a zero-overhead Next.js alternative powered by <strong class="text-white font-semibold">3 KB Preact SSR</strong> and native Tailwind CSS v4.
            </p>

            {/* Dual Command Scaffolding Pills */}
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <div
                class="command-pill cursor-pointer group"
                {...{ onclick: "copyInstallCmd('npm create frootkit@latest')" }}
                title="Click to copy FrootKit command"
              >
                <span class="text-emerald-400 font-mono text-sm select-none">$</span>
                <code class="text-xs sm:text-sm font-mono text-slate-200 group-hover:text-white transition-colors">
                  npm create frootkit@latest
                </code>
                <span class="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 ml-2">Web</span>
              </div>

              <div
                class="command-pill cursor-pointer group"
                {...{ onclick: "copyInstallCmd('npm create frootjs@latest')" }}
                title="Click to copy Froot API command"
              >
                <span class="text-cyan-400 font-mono text-sm select-none">$</span>
                <code class="text-xs sm:text-sm font-mono text-slate-200 group-hover:text-white transition-colors">
                  npm create frootjs@latest
                </code>
                <span class="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 ml-2">API</span>
              </div>

              <a href="/docs" class="btn-primary-glow px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2">
                <span>Browse Docs</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Ecosystem Stats Bar */}
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto p-5 rounded-2xl bg-[#0b1324] border border-slate-700/80 shadow-2xl shadow-black/50 backdrop-blur-md">
              <div class="p-3 text-center">
                <div class="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-emerald-400">124k+</div>
                <div class="text-xs uppercase tracking-wider text-slate-300 mt-1.5 font-semibold">Backend RPS</div>
              </div>

              <div class="p-3 text-center border-l border-slate-700/80">
                <div class="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">&lt; 25ns</div>
                <div class="text-xs uppercase tracking-wider text-slate-300 mt-1.5 font-semibold">Route Lookup</div>
              </div>

              <div class="p-3 text-center border-l border-slate-700/80">
                <div class="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-emerald-400">~3 KB</div>
                <div class="text-xs uppercase tracking-wider text-slate-300 mt-1.5 font-semibold">SSR Footprint</div>
              </div>

              <div class="p-3 text-center border-l border-slate-700/80">
                <div class="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">&lt; 1 sec</div>
                <div class="text-xs uppercase tracking-wider text-slate-300 mt-1.5 font-semibold">SSG Build Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Engine Showcase Section */}
        <section class="py-20 md:py-28 max-w-7xl mx-auto px-6" id="ecosystem">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">TWO ENGINES, ONE ECOSYSTEM</span>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-3 mb-4">
              Pure Speed on the Backend. Zero Bloat on the Web.
            </h2>
            <p class="text-slate-400 text-base sm:text-lg">
              Choose the dedicated backend micro-framework for APIs or the App Router meta-framework for web applications.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: FrootKit */}
            <div class="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between border-emerald-500/30">
              <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400 mb-6">
                  <span>FULLSTACK &bull; NEXT.JS ALTERNATIVE</span>
                </div>
                <h3 class="text-2xl font-bold text-white mb-3">🍏 FrootKit</h3>
                <p class="text-slate-300 text-sm leading-relaxed mb-6">
                  Next.js App Router conventions (<code>src/app/layout.tsx</code>, <code>page.tsx</code>) with 3KB Preact SSR, native Tailwind CSS v4, built-in Markdown doc loader, and hidden <code>.froot/</code> build outputs.
                </p>

                <ul class="space-y-2.5 text-xs text-slate-300 font-mono mb-8">
                  <li class="flex items-center gap-2">
                    <span class="text-emerald-400">&check;</span> Zero wrapper boilerplate (no server.tsx, app.tsx, build.ts)
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-emerald-400">&check;</span> Zero mandatory client-side JS hydration
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-emerald-400">&check;</span> Native Tailwind CSS v4 (@theme in styles.css)
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-emerald-400">&check;</span> Markdown &amp; getDoc(slug) with auto Table of Contents
                  </li>
                </ul>
              </div>

              <div class="pt-6 border-t border-slate-800 flex items-center justify-between">
                <code class="text-xs font-mono text-emerald-400">frootkit dev / build / start</code>
                <a href="/docs/frootkit" class="text-xs font-semibold text-white hover:text-emerald-400 transition-colors">
                  Explore FrootKit &rarr;
                </a>
              </div>
            </div>

            {/* Card 2: Froot Core */}
            <div class="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between border-cyan-500/30">
              <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-400 mb-6">
                  <span>BACKEND HTTP &bull; 124K REQ/SEC</span>
                </div>
                <h3 class="text-2xl font-bold text-white mb-3">⚡ Frootjs</h3>
                <p class="text-slate-300 text-sm leading-relaxed mb-6">
                  High-performance TypeScript micro-framework powered by monomorphic V8 inline cache architectures. Executes static routing lookups in under 25 nanoseconds with zero heap churn.
                </p>

                <ul class="space-y-2.5 text-xs text-slate-300 font-mono mb-8">
                  <li class="flex items-center gap-2">
                    <span class="text-cyan-400">&check;</span> Tri-Tier Router (O(1) Hash Map, Compressed Radix, RegExp)
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-cyan-400">&check;</span> Monomorphic fixed context shapes (0 deoptimizations)
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-cyan-400">&check;</span> Built-in JWT, AES-GCM crypto, WebSockets &amp; Pub/Sub Hub
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-cyan-400">&check;</span> OpenAPI 3.1 &amp; Scalar interactive documentation
                  </li>
                </ul>
              </div>

              <div class="pt-6 border-t border-slate-800 flex items-center justify-between">
                <code class="text-xs font-mono text-cyan-400">npm create frootjs@latest</code>
                <a href="/docs/quickstart" class="text-xs font-semibold text-white hover:text-cyan-400 transition-colors">
                  Explore Backend &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benchmarks Section */}
        <section class="py-20 md:py-28 max-w-5xl mx-auto px-6" id="benchmarks">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">VERIFIED PERFORMANCE</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3 mb-4">
              Real-World Benchmarks
            </h2>
            <p class="text-slate-400 text-base">
              Comparing cold static export speeds, runtime footprints, and raw HTTP throughput.
            </p>
          </div>

          <div class="overflow-x-auto mb-12">
            <table class="w-full text-left border-collapse border border-slate-800 bg-[#070b13] rounded-xl overflow-hidden">
              <thead>
                <tr class="border-b border-slate-800 bg-white/[0.03] text-xs font-mono text-slate-400 uppercase tracking-wider">
                  <th class="p-4">Engine / Metric</th>
                  <th class="p-4">Next.js 15 / Express</th>
                  <th class="p-4">Fastify / Hono</th>
                  <th class="p-4 text-emerald-400 font-semibold">Froot / FrootKit</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/60 text-sm">
                <tr>
                  <td class="p-4 font-medium text-white">HTTP Throughput (RPS)</td>
                  <td class="p-4 text-slate-400">~15,000</td>
                  <td class="p-4 text-slate-400">75k - 85k</td>
                  <td class="p-4 text-emerald-400 font-bold font-mono">124,000+ RPS</td>
                </tr>
                <tr>
                  <td class="p-4 font-medium text-white">Routing Lookup Latency</td>
                  <td class="p-4 text-slate-400">150 - 500 ns</td>
                  <td class="p-4 text-slate-400">60 - 120 ns</td>
                  <td class="p-4 text-emerald-400 font-bold font-mono">&lt; 25 ns (O(1))</td>
                </tr>
                <tr>
                  <td class="p-4 font-medium text-white">Web SSR Runtime Size</td>
                  <td class="p-4 text-slate-400">~85 KB (React)</td>
                  <td class="p-4 text-slate-400">N/A (API only)</td>
                  <td class="p-4 text-emerald-400 font-bold font-mono">~3 KB (Preact)</td>
                </tr>
                <tr>
                  <td class="p-4 font-medium text-white">Default Client JS</td>
                  <td class="p-4 text-slate-400">86.4 KB (gzipped)</td>
                  <td class="p-4 text-slate-400">N/A</td>
                  <td class="p-4 text-emerald-400 font-bold font-mono">0 KB (Zero JS default)</td>
                </tr>
                <tr>
                  <td class="p-4 font-medium text-white">Cold SSG Build Time</td>
                  <td class="p-4 text-slate-400">4,800 ms</td>
                  <td class="p-4 text-slate-400">N/A</td>
                  <td class="p-4 text-emerald-400 font-bold font-mono">&lt; 900 ms (&gt; 5x faster)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Code Showcase Section */}
        <section class="py-20 md:py-28 max-w-6xl mx-auto px-6" id="code">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">DEVELOPER ERGONOMICS</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3 mb-4">
              Write Clean Code. Nothing Else.
            </h2>
            <p class="text-slate-400 text-base">
              Inspect how FrootKit layouts, backend API handlers, markdown loaders, and Tailwind v4 integrate.
            </p>
          </div>

          <div class="code-window">
            <div class="code-window-header flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span class="ml-3 text-xs font-mono text-slate-400">froot-project</span>
              </div>

              <div class="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0" id="code-tabs">
                <button
                  type="button"
                  class="tab-btn px-3 py-1 text-xs font-medium rounded-lg text-slate-300 hover:text-white transition-colors active"
                  data-tab="frootkit"
                  {...{ onclick: "switchCodeTab('frootkit')" }}
                >
                  src/app/layout.tsx (FrootKit)
                </button>
                <button
                  type="button"
                  class="tab-btn px-3 py-1 text-xs font-medium rounded-lg text-slate-400 hover:text-white transition-colors"
                  data-tab="backend"
                  {...{ onclick: "switchCodeTab('backend')" }}
                >
                  server.ts (Froot API)
                </button>
                <button
                  type="button"
                  class="tab-btn px-3 py-1 text-xs font-medium rounded-lg text-slate-400 hover:text-white transition-colors"
                  data-tab="docs"
                  {...{ onclick: "switchCodeTab('docs')" }}
                >
                  [slug]/page.tsx (Markdown)
                </button>
                <button
                  type="button"
                  class="tab-btn px-3 py-1 text-xs font-medium rounded-lg text-slate-400 hover:text-white transition-colors"
                  data-tab="tailwind"
                  {...{ onclick: "switchCodeTab('tailwind')" }}
                >
                  src/styles.css (Tailwind v4)
                </button>
              </div>
            </div>

            <div class="p-6 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-slate-200">
              <pre><code id="code-snippet-pre" class="language-typescript" dangerouslySetInnerHTML={{ __html: highlightCode(CODE_SNIPPETS['frootkit']!, 'typescript') }} /></pre>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section class="py-20 max-w-4xl mx-auto px-6 text-center">
          <div class="glass-card rounded-3xl p-10 md:p-14 relative overflow-hidden border border-emerald-500/25">
            <h3 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Build Without Compromise
            </h3>
            <p class="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Launch backend APIs with <code>create-frootjs</code> and fullstack web apps with <code>create-frootkit</code>.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/docs/overview" class="btn-primary-glow px-6 py-3 rounded-xl text-sm font-semibold">
                Explore Full Documentation &rarr;
              </a>
              <a
                href="https://github.com/orbitnorth/froot"
                target="_blank"
                rel="noreferrer"
                class="px-6 py-3 rounded-xl text-sm font-semibold bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.08] text-white transition-all"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer class="border-t border-slate-800/80 bg-[#05080e] py-12 px-6">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div class="flex items-center gap-2">
            <span class="font-bold text-white">Froot &amp; FrootKit</span>
            <span>&bull;</span>
            <span>The High-Performance TypeScript Ecosystem</span>
          </div>
          <div>Built with FrootKit SSG &bull; MIT License</div>
        </div>
      </footer>

      {/* Interactive Tabs & Copy Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          const SNIPPETS = ${JSON.stringify(CODE_SNIPPETS)};

          function switchCodeTab(tabKey) {
            document.querySelectorAll('#code-tabs .tab-btn').forEach(btn => {
              if (btn.getAttribute('data-tab') === tabKey) {
                btn.classList.add('active', 'text-white');
                btn.classList.remove('text-slate-400');
              } else {
                btn.classList.remove('active', 'text-white');
                btn.classList.add('text-slate-400');
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
