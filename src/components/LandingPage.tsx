/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from 'preact';
import { LandingNavbar } from './LandingNavbar.js';

export function LandingPage() {
  const features = [
    {
      title: 'Sub-Millisecond Preact SSR',
      desc: 'Blazing fast TTFB under 0.42ms with pure Web VNode streaming. No heavy React 19 hydration penalties or oversized client JavaScript bundles.',
      icon: (
        <svg class="h-5 w-5 text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      badge: '0.42ms TTFB',
    },
    {
      title: 'Next.js Parity App Router',
      desc: 'First-class support for nested layouts, dynamic path segments, error boundaries, 404 handlers, route-level code splitting, and standard Request/Response API routes.',
      icon: (
        <svg class="h-5 w-5 text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
      badge: 'App Router',
    },
    {
      title: 'Monomorphic V8 Engine',
      desc: 'Froot core uses monomorphic inline cache dispatch to execute static route lookups in under 22 nanoseconds at over 124,000 req/sec.',
      icon: (
        <svg class="h-5 w-5 text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      badge: '124k req/s',
    },
    {
      title: 'Native Tailwind CSS v4',
      desc: 'Zero-config standalone CSS engine compilation with pure @theme tokens. Lightning-fast live reload in dev and optimized minified output for production.',
      icon: (
        <svg class="h-5 w-5 text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      badge: 'Tailwind v4',
    },
    {
      title: 'FrootUI Developer Primitives',
      desc: 'Modular, copy-paste components and CLI scaffolding designed for modern developer tools. Crisp monochrome contrast, hairline borders, and dark surfaces.',
      icon: (
        <svg class="h-5 w-5 text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      badge: 'Primitives',
    },
    {
      title: 'Bulletproof Process Management',
      desc: 'Orphan watchdog heartbeat, immediate socket termination, and netstat port reconciliation guarantee zero lingering background processes or locked ports.',
      icon: (
        <svg class="h-5 w-5 text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      badge: 'Watchdog',
    },
  ];

  return (
    <div class="min-h-screen bg-black text-[#ededed] flex flex-col justify-between selection:bg-white selection:text-black">
      <LandingNavbar />

      {/* HERO SECTION WITH VERCEL / NEXT.JS DEVELOPER AESTHETIC */}
      <section class="relative overflow-hidden pt-20 pb-28 md:pt-28 md:pb-36 bg-grid-pattern">
        {/* Ambient Top Glow */}
        <div class="glow-radial-top absolute inset-x-0 top-0 h-[600px] pointer-events-none" />

        <div class="relative mx-auto max-w-6xl px-6 grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div class="rise">
            {/* Status Announcement Pill */}
            <a
              href="/docs"
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-neutral-300 border border-[#222226] bg-[#0c0c0e]/90 hover:border-[#333338] transition-colors"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>FrootKit v1.3.6 · Next.js Alternative</span>
              <span class="text-neutral-500">→</span>
            </a>

            {/* High-Impact Geometric Headline */}
            <h1 class="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              The Next.js alternative <br class="hidden sm:inline" />
              <span class="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                built for pure speed.
              </span>
            </h1>

            <p class="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-neutral-400">
              Sub-millisecond Preact SSR, monomorphic V8 backend at 124,000+ req/sec, native Tailwind CSS v4, and clean developer primitives. Zero bloated client bundles. Zero stuck port processes.
            </p>

            {/* CTAs */}
            <div class="mt-8 flex flex-wrap items-center gap-3.5">
              <a href="/docs" class="btn btn-primary text-sm px-5 py-2.5 rounded-md font-semibold">
                Start Building Free
              </a>
              <a href="#frootui" class="btn btn-secondary text-sm px-5 py-2.5 rounded-md">
                Explore Primitives
              </a>
            </div>

            {/* Interactive Terminal Command Box */}
            <div class="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
              <div class="flex items-center gap-3 rounded-lg bg-[#0a0a0d] border border-[#222226] px-4 py-2.5 font-mono text-xs text-neutral-300">
                <span class="text-emerald-400">$</span>
                <span class="text-white">pnpm create frootkit@latest my-app</span>
              </div>
              <span class="text-xs text-neutral-500 font-mono">
                TypeScript · Tailwind v4 · SSR
              </span>
            </div>
          </div>

          {/* Floating Vercel-Style Live Telemetry Window */}
          <div class="rise relative [animation-delay:.15s]" aria-hidden="true">
            <div class="overflow-hidden rounded-xl border border-[#222226] bg-[#09090b] shadow-2xl">
              {/* Window Header */}
              <div class="flex items-center gap-2 border-b border-[#222226] bg-[#0d0d10] px-4 py-3">
                <span class="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                <span class="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                <span class="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                <span class="ml-2 font-mono text-xs text-neutral-400">telemetry.frootkit.dev</span>
                <span class="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  <span class="w-1 h-1 rounded-full bg-emerald-400" />
                  Active V8 Runtime
                </span>
              </div>

              <div class="p-6">
                <div class="flex items-end justify-between border-b border-[#222226] pb-4">
                  <div>
                    <p class="text-xs font-mono text-neutral-400 uppercase tracking-wider">Engine Latency (P99)</p>
                    <p class="font-mono text-3xl font-semibold text-white tracking-tight mt-1">0.42ms</p>
                  </div>
                  <span class="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
                    +310% vs Next.js 15
                  </span>
                </div>

                {/* SVG Performance Sparkline */}
                <svg viewBox="0 0 300 80" class="mt-4 h-20 w-full" fill="none">
                  <defs>
                    <linearGradient id="devMetricGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stop-color="#ffffff" stop-opacity="0.15" />
                      <stop offset="1" stop-color="#ffffff" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 60 C30 55 45 40 75 42 S120 22 150 26 S210 12 240 16 S285 6 300 4 V80 H0Z" fill="url(#devMetricGrad)" />
                  <path d="M0 60 C30 55 45 40 75 42 S120 22 150 26 S210 12 240 16 S285 6 300 4" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
                </svg>

                {/* Micro Telemetry Rows */}
                <div class="mt-4 divide-y divide-[#222226] text-xs">
                  <div class="flex items-center justify-between py-2.5">
                    <span class="text-neutral-400">Monomorphic V8 Dispatch</span>
                    <span class="font-mono text-neutral-200">22 nanoseconds</span>
                  </div>
                  <div class="flex items-center justify-between py-2.5">
                    <span class="text-neutral-400">Client Hydration Bundle</span>
                    <span class="font-mono text-neutral-200">3.1 KB gzipped</span>
                  </div>
                  <div class="flex items-center justify-between py-2.5">
                    <span class="text-neutral-400">Process Port Release</span>
                    <span class="font-mono text-emerald-400">Instant on exit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRIC STRIP (High Contrast Developer Grid) */}
      <section class="border-y border-[#222226] bg-[#070709] py-10">
        <div class="mx-auto max-w-6xl px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-left">
          <div class="border-l border-[#222226] pl-5">
            <p class="font-mono text-3xl font-semibold text-white tracking-tight">124,000</p>
            <p class="text-xs text-neutral-400 mt-1 font-medium uppercase tracking-wider">Req / sec Throughput</p>
          </div>
          <div class="border-l border-[#222226] pl-5">
            <p class="font-mono text-3xl font-semibold text-white tracking-tight">0.42ms</p>
            <p class="text-xs text-neutral-400 mt-1 font-medium uppercase tracking-wider">Preact SSR TTFB</p>
          </div>
          <div class="border-l border-[#222226] pl-5">
            <p class="font-mono text-3xl font-semibold text-white tracking-tight">3.1 KB</p>
            <p class="text-xs text-neutral-400 mt-1 font-medium uppercase tracking-wider">Client Runtime Bundle</p>
          </div>
          <div class="border-l border-[#222226] pl-5">
            <p class="font-mono text-3xl font-semibold text-emerald-400 tracking-tight">Zero</p>
            <p class="text-xs text-neutral-400 mt-1 font-medium uppercase tracking-wider">Orphan Process Leaks</p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION (Bento Grid) */}
      <section id="features" class="scroll-mt-16 py-24 bg-black">
        <div class="mx-auto max-w-6xl px-6">
          <div class="max-w-2xl">
            <span class="bd">Core Primitives</span>
            <h2 class="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Built for developer velocity without framework debt
            </h2>
            <p class="mt-3 text-base text-neutral-400 leading-relaxed">
              Every primitive is engineered for engineers who demand the ergonomics of Next.js with zero hydration tax, instant process cleanups, and native CSS.
            </p>
          </div>

          <div class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feat) => (
              <div
                key={feat.title}
                class="rounded-xl border border-[#222226] bg-[#0a0a0c] p-6 hover:border-[#333338] hover:bg-[#0e0e11] transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div class="flex items-center justify-between">
                    <div class="w-9 h-9 rounded-lg bg-[#141417] border border-[#222226] flex items-center justify-center group-hover:border-neutral-600 transition-colors">
                      {feat.icon}
                    </div>
                    <span class="font-mono text-[11px] text-neutral-400 bg-[#121215] border border-[#222226] px-2 py-0.5 rounded">
                      {feat.badge}
                    </span>
                  </div>
                  <h3 class="mt-5 text-base font-semibold text-white">{feat.title}</h3>
                  <p class="mt-2 text-sm leading-relaxed text-neutral-400">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FROOTUI COMPONENT SUITE SECTION (Developer Design System) */}
      <section id="frootui" class="scroll-mt-16 py-24 bg-[#070709] border-y border-[#222226]">
        <div class="mx-auto max-w-6xl px-6">
          <div class="max-w-2xl">
            <span class="bd">Modular UI Primitives</span>
            <h2 class="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              FrootUI · Modern Developer Primitives
            </h2>
            <p class="mt-3 text-base text-neutral-400 leading-relaxed">
              Inspired by shadcn/ui and modern developer tools like Next.js and Vercel. Copy, paste, or CLI scaffold 12+ production-grade components styled with dark surfaces, hairline borders, and monospace accents.
            </p>
            <div class="mt-5 flex items-center gap-3">
              <div class="inline-flex items-center gap-2 rounded-md bg-[#0e0e11] border border-[#222226] px-3.5 py-1.5 font-mono text-xs text-neutral-300">
                <span class="text-neutral-500">$</span>
                <span>npx frootui add button card badge input table</span>
              </div>
            </div>
          </div>

          {/* Interactive Component Preview Grid */}
          <div class="mt-12 grid gap-6 md:grid-cols-3">
            {/* Component Card 1: Buttons & Badges */}
            <div class="rounded-xl border border-[#222226] bg-[#0a0a0c] p-6 flex flex-col justify-between">
              <div>
                <h3 class="text-sm font-semibold text-white">Buttons &amp; Badges</h3>
                <p class="mt-1 text-xs text-neutral-400">High-contrast monochrome actions &amp; status indicators.</p>

                <div class="mt-6 flex flex-wrap gap-2 items-center">
                  <button class="btn btn-primary text-xs px-3 py-1.5 rounded-md">Primary White</button>
                  <button class="btn btn-secondary text-xs px-3 py-1.5 rounded-md">Outline</button>
                  <button class="btn btn-ghost text-xs px-2.5 py-1.5 rounded-md">Ghost</button>
                </div>
              </div>

              <div class="mt-6 pt-5 border-t border-[#222226] flex flex-wrap gap-2">
                <span class="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Deployed
                </span>
                <span class="inline-flex items-center gap-1.5 font-mono text-[11px] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded">
                  <span class="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Running
                </span>
                <span class="inline-flex items-center gap-1.5 font-mono text-[11px] text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                  Queued
                </span>
                <span class="font-mono text-[11px] text-neutral-400 bg-[#141417] border border-[#222226] px-2 py-0.5 rounded">
                  v1.3.6
                </span>
              </div>
            </div>

            {/* Component Card 2: Command Palette & Inputs */}
            <div class="rounded-xl border border-[#222226] bg-[#0a0a0c] p-6 flex flex-col justify-between">
              <div>
                <h3 class="text-sm font-semibold text-white">Command Palette &amp; Inputs</h3>
                <p class="mt-1 text-xs text-neutral-400">Hairline borders with dark focus states and shortcut badges.</p>

                <div class="mt-5 space-y-3">
                  <div>
                    <label class="block font-mono text-[11px] text-neutral-400 mb-1">Quick Search</label>
                    <div class="relative">
                      <input class="inp text-xs py-1.5 pr-12" placeholder="Search documentation..." />
                      <span class="absolute right-2 top-2 font-mono text-[10px] text-neutral-400 bg-[#16161a] border border-[#222226] px-1.5 py-0.5 rounded">
                        ⌘K
                      </span>
                    </div>
                  </div>
                  <div>
                    <label class="block font-mono text-[11px] text-neutral-400 mb-1">Endpoint Path</label>
                    <input class="inp text-xs py-1.5 font-mono" placeholder="/api/v1/metrics" />
                  </div>
                </div>
              </div>

              <div class="mt-4 flex items-center gap-2 font-mono text-[11px] text-neutral-500">
                <span>Tab autocomplete enabled</span>
              </div>
            </div>

            {/* Component Card 3: Metric Card with Sparkline */}
            <div class="rounded-xl border border-[#222226] bg-[#0a0a0c] p-6 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between">
                  <h3 class="text-sm font-semibold text-white">Live Telemetry Card</h3>
                  <span class="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    +14.2%
                  </span>
                </div>
                <p class="mt-1 text-xs text-neutral-400">Preact Stream Throughput</p>
                <p class="font-mono text-2xl font-semibold text-white mt-2">124,180 req/s</p>

                <svg class="mt-4 h-12 w-full" viewBox="0 0 100 30" preserveAspectRatio="none" fill="none">
                  <path d="M0 24 L15 20 L30 22 L45 12 L60 15 L75 6 L100 3" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
                </svg>
              </div>

              <div class="mt-4 pt-3 border-t border-[#222226] flex items-center justify-between font-mono text-[11px] text-neutral-400">
                <span>P99: 0.42ms</span>
                <span>Buffer: Corked</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENCHMARKS SECTION (Render/Vercel Clean Comparison Table) */}
      <section id="benchmarks" class="scroll-mt-16 py-24 bg-black">
        <div class="mx-auto max-w-6xl px-6">
          <div class="max-w-2xl">
            <span class="bd">Verified Benchmarks</span>
            <h2 class="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Raw throughput &amp; latency comparisons
            </h2>
            <p class="mt-3 text-base text-neutral-400 leading-relaxed">
              Benchmarked on Node.js v22 on AMD EPYC 7763 instances with autocannon (100 concurrent connections, 10s duration).
            </p>
          </div>

          <div class="mt-12 overflow-x-auto rounded-xl border border-[#222226] bg-[#09090b]">
            <table class="w-full text-left text-xs sm:text-sm">
              <thead class="bg-[#0e0e11] border-b border-[#222226]">
                <tr>
                  <th class="px-5 py-3.5 font-semibold text-neutral-200">Framework</th>
                  <th class="px-5 py-3.5 font-semibold text-neutral-200">Requests / sec</th>
                  <th class="px-5 py-3.5 font-semibold text-neutral-200">SSR TTFB (P99)</th>
                  <th class="px-5 py-3.5 font-semibold text-neutral-200">Client JS Runtime</th>
                  <th class="px-5 py-3.5 font-semibold text-neutral-200">Tailwind Native</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#222226]">
                <tr class="bg-white/[0.03] font-medium">
                  <td class="px-5 py-4 text-white flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-400" />
                    <span class="font-bold">FrootKit (v1.3.6)</span>
                  </td>
                  <td class="px-5 py-4 font-mono text-white font-semibold">124,180 req/s</td>
                  <td class="px-5 py-4 font-mono text-emerald-400 font-semibold">0.42 ms</td>
                  <td class="px-5 py-4 font-mono text-neutral-200 font-semibold">3.1 KB</td>
                  <td class="px-5 py-4">
                    <span class="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                      Tailwind v4 Native
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="px-5 py-4 text-neutral-300">Next.js 15 (App Router)</td>
                  <td class="px-5 py-4 font-mono text-neutral-400">18,400 req/s</td>
                  <td class="px-5 py-4 font-mono text-rose-400">14.8 ms</td>
                  <td class="px-5 py-4 font-mono text-neutral-400">87.4 KB</td>
                  <td class="px-5 py-4"><span class="font-mono text-[11px] text-neutral-500">PostCSS / Plugin</span></td>
                </tr>
                <tr>
                  <td class="px-5 py-4 text-neutral-300">Remix / React Router v7</td>
                  <td class="px-5 py-4 font-mono text-neutral-400">32,100 req/s</td>
                  <td class="px-5 py-4 font-mono text-neutral-400">8.4 ms</td>
                  <td class="px-5 py-4 font-mono text-neutral-400">64.2 KB</td>
                  <td class="px-5 py-4"><span class="font-mono text-[11px] text-neutral-500">External Vite</span></td>
                </tr>
                <tr>
                  <td class="px-5 py-4 text-neutral-300">Express.js (Server only)</td>
                  <td class="px-5 py-4 font-mono text-neutral-400">24,600 req/s</td>
                  <td class="px-5 py-4 font-mono text-neutral-400">1.8 ms</td>
                  <td class="px-5 py-4 font-mono text-neutral-400">N/A</td>
                  <td class="px-5 py-4"><span class="font-mono text-[11px] text-neutral-500">Manual</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CODE STUDIO SECTION (Modern Dark Terminal) */}
      <section id="code" class="scroll-mt-16 py-24 bg-[#070709] border-t border-[#222226]">
        <div class="mx-auto max-w-6xl px-6">
          <div class="max-w-2xl">
            <span class="bd">Zero Abstraction Architecture</span>
            <h2 class="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              The clarity of standard TypeScript
            </h2>
            <p class="mt-3 text-base text-neutral-400 leading-relaxed">
              No hidden bundler artifacts, no heavyweight React server component boundaries. Clean files and pure Web standards.
            </p>
          </div>

          {/* Elevated Code Box */}
          <div class="mt-12 overflow-hidden rounded-xl border border-[#222226] bg-[#08080a] shadow-2xl">
            <div class="flex items-center justify-between border-b border-[#222226] bg-[#0d0d10] px-4 py-3">
              <div class="flex items-center gap-2">
                <span class="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                <span class="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                <span class="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                <span class="ml-3 font-mono text-xs text-neutral-400">src/app/page.tsx</span>
              </div>
              <span class="font-mono text-[11px] text-neutral-400 bg-[#16161a] border border-[#222226] px-2 py-0.5 rounded">
                Preact SSR
              </span>
            </div>

            <pre class="p-6 font-mono text-xs sm:text-[13px] leading-relaxed text-neutral-300 overflow-x-auto">
{`// src/app/page.tsx — High-Performance Preact SSR with App Router
import { Button, Card, Badge } from 'frootui';

export const metadata = {
  title: 'Production Store · FrootKit',
  description: 'Sub-millisecond SSR with zero hydration overhead',
};

export default async function StorePage() {
  const products = await db.query.products.findMany();

  return (
    <div class="max-w-6xl mx-auto px-6 py-12">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold tracking-tight text-white">Curated Instruments</h1>
        <Badge variant="success">In Stock</Badge>
      </div>

      <div class="mt-8 grid gap-6 md:grid-cols-3">
        {products.map((item) => (
          <Card key={item.id} class="p-5 border border-neutral-800 bg-neutral-900/60 rounded-xl">
            <h3 class="font-semibold text-white">{item.name}</h3>
            <p class="font-mono text-xl text-neutral-200 mt-2">\${item.price}</p>
            <Button variant="primary" class="w-full mt-4">Add to Cart</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER (Vercel/Render Clean Box) */}
      <section class="py-20 bg-black">
        <div class="mx-auto max-w-6xl px-6">
          <div class="rounded-2xl p-10 md:p-16 border border-[#222226] bg-gradient-to-b from-[#0e0e12] to-[#070709] relative overflow-hidden">
            <div class="glow-spotlight absolute inset-0 pointer-events-none" />

            <div class="relative max-w-xl">
              <span class="bd">Get Started</span>
              <h2 class="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Create your first FrootKit application in 30 seconds.
              </h2>
              <p class="mt-4 text-base text-neutral-400 leading-relaxed">
                Experience sub-millisecond SSR, instant port release on exit, and modern developer primitives.
              </p>

              <div class="mt-8 flex flex-wrap gap-3.5 items-center">
                <a href="/docs" class="btn btn-primary text-sm px-5 py-2.5 rounded-md font-semibold">
                  Read Documentation
                </a>
                <a
                  href="https://github.com/orbitnorth/froot"
                  target="_blank"
                  rel="noreferrer"
                  class="btn btn-secondary text-sm px-5 py-2.5 rounded-md"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLEEK DEVELOPER FOOTER */}
      <footer class="border-t border-[#222226] bg-[#070709] py-12 text-xs text-neutral-400">
        <div class="mx-auto max-w-6xl px-6 flex flex-wrap items-center justify-between gap-6">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white tracking-tight">▲ frootkit</span>
            <span class="text-neutral-700">|</span>
            <span>The High-Performance Next.js Alternative</span>
          </div>

          <div class="flex items-center gap-6">
            <a href="/docs" class="hover:text-white transition-colors">Documentation</a>
            <a href="https://www.npmjs.com/package/froot-kit" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">NPM (froot-kit)</a>
            <a href="https://www.npmjs.com/package/frootui" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">NPM (frootui)</a>
            <a href="https://github.com/orbitnorth/froot" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
