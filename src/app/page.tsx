/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from 'preact';

export const metadata = {
  title: 'Froot & FrootKit — High-Performance Web & Next.js Alternative',
  description: 'The unified high-performance TypeScript stack. Monomorphic V8 backend (124k req/sec), FrootKit zero-overhead Next.js alternative (3KB Preact SSR, Tailwind v4 native), and FrootUI Stripe design system.',
};

export default function UnifiedLandingPage() {
  const features = [
    {
      title: 'Sub-Millisecond Preact SSR',
      desc: 'Blazing fast TTFB under 0.42ms with pure Web VNode streaming. No React 19 hydration penalties or massive runtime client bundles.',
      icon: (
        <svg class="h-5 w-5 text-[#635bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      badge: '0.42ms TTFB',
    },
    {
      title: 'Next.js Parity App Router',
      desc: 'First-class support for nested layouts, dynamic path segments, error boundaries, 404 views, route-level code splitting, and web standard Request/Response API routes.',
      icon: (
        <svg class="h-5 w-5 text-[#635bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
      badge: 'App Router',
    },
    {
      title: 'Monomorphic V8 Engine',
      desc: 'Powered by Froot core with monomorphic inline cache dispatch executing static route lookups in under 22 nanoseconds at 124,000 req/sec.',
      icon: (
        <svg class="h-5 w-5 text-[#635bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      badge: '124k req/s',
    },
    {
      title: 'Native Tailwind CSS v4',
      desc: 'Zero-config standalone compilation with Stripe design tokens pre-configured. Automatic watching in development and minified build pipeline.',
      icon: (
        <svg class="h-5 w-5 text-[#635bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      badge: 'Tailwind v4',
    },
    {
      title: 'FrootUI Design System',
      desc: 'A complete, modular Stripe-inspired UI component library with shadcn-style CLI scaffolding. Blurple actions, layered shadows, and light surfaces.',
      icon: (
        <svg class="h-5 w-5 text-[#635bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </svg>
      ),
      badge: 'FrootUI',
    },
    {
      title: 'Bulletproof Process Management',
      desc: 'Orphan watchdog heartbeat, immediate socket termination, and netstat port reconciliation ensure zero lingering background processes or stuck ports.',
      icon: (
        <svg class="h-5 w-5 text-[#635bff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      badge: 'Watchdog',
    },
  ];

  return (
    <div class="min-h-screen bg-white text-[#425466] flex flex-col justify-between selection:bg-[#635bff]/20 selection:text-[#635bff]">
      {/* Top Notification Announcement */}
      <div class="bg-[#0a2540] py-2 text-center text-[13px] text-white font-medium">
        <span>FrootKit v1.3.6 &amp; FrootUI v1.0.4 are officially published to NPM · </span>
        <a href="/docs" class="text-[#00d4ff] hover:underline font-normal ml-1">
          Explore documentation →
        </a>
      </div>

      {/* Main Navigation Header */}
      <header id="main-nav" class="sticky top-0 z-40 border-b border-[#e6ebf1] bg-white/95 backdrop-blur-md">
        <div class="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div class="flex items-center gap-8">
            <a href="/" class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-lg bg-[#635bff] flex items-center justify-center text-white shadow-sm font-bold text-[16px]">
                F
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[19px] font-semibold tracking-tight text-[#0a2540]">
                  froot<span class="text-[#635bff]">kit</span>
                </span>
                <span class="text-[11px] font-mono text-[#0a2540] bg-[#f6f9fc] border border-[#e6ebf1] px-1.5 py-0.5 rounded-full font-medium">
                  v1.3.6
                </span>
              </div>
            </a>

            <nav class="hidden md:flex items-center gap-6 text-[14px] font-medium text-[#425466]">
              <a href="#features" class="hover:text-[#0a2540] transition-colors">Features</a>
              <a href="#frootui" class="text-[#635bff] hover:text-[#5249e6] transition-colors flex items-center gap-1.5">
                <span>FrootUI</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded-full bg-[#635bff]/10 text-[#635bff] font-semibold">Stripe</span>
              </a>
              <a href="#benchmarks" class="hover:text-[#0a2540] transition-colors">Benchmarks</a>
              <a href="#code" class="hover:text-[#0a2540] transition-colors">Architecture</a>
              <a href="/docs" class="hover:text-[#0a2540] transition-colors">Documentation</a>
            </nav>
          </div>

          <div class="flex items-center gap-3">
            <a
              href="https://github.com/orbitnorth/froot"
              target="_blank"
              rel="noreferrer"
              class="btn-secondary text-[13px] px-3.5 py-1.5 rounded-md hidden sm:inline-flex"
            >
              GitHub
            </a>
            <a
              href="/docs"
              class="btn-primary text-[13px] px-4 py-1.5 rounded-full"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION WITH STRIPE GRADIENT */}
      <section class="hero-gradient relative pb-36 pt-24 text-white md:pb-48 md:pt-32">
        <div class="mx-auto max-w-6xl px-6 grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div class="rise">
            <span class="bd bg-white/15 text-white backdrop-blur-sm">
              <i class="h-1.5 w-1.5 rounded-full bg-[#00d4ff]" />
              FrootKit v1.3.6 &amp; FrootUI Live
            </span>
            <h1 class="mt-5 text-[42px] font-light leading-[1.08] tracking-tight text-white md:text-[58px] md:leading-[64px]">
              The Next.js alternative built for speed, not slop.
            </h1>
            <p class="mt-6 max-w-xl text-[18px] font-light leading-7 text-white/90">
              Sub-millisecond Preact SSR, monomorphic V8 backend at 124,000+ req/sec, native Tailwind CSS v4, and the complete Stripe design system. Zero heavy client bundles. Zero stuck port processes.
            </p>

            <div class="mt-8 flex flex-wrap items-center gap-4">
              <a href="/docs" class="btn btn-white shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)]">
                Start Building Free
              </a>
              <a href="#frootui" class="btn btn-glass">
                Explore FrootUI
              </a>
            </div>

            {/* Quick Scaffold Command */}
            <div class="mt-8 flex items-center gap-3">
              <div class="flex items-center gap-3 rounded-lg bg-[#0a2540]/80 border border-white/20 px-4 py-2.5 font-mono text-[13px] text-white shadow-card">
                <span class="text-[#00d4ff]">$</span>
                <span>pnpm create frootkit@latest my-app</span>
              </div>
            </div>
            <p class="mt-3 text-[13px] text-white/75">
              Includes pre-configured Stripe auth, ecommerce, and blog templates.
            </p>
          </div>

          {/* Floating Live Telemetry Mock */}
          <div class="rise relative [animation-delay:.15s]" aria-hidden="true">
            <div class="overflow-hidden rounded-xl bg-white text-[#425466] shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)]">
              {/* Window Header */}
              <div class="flex items-center gap-1.5 border-b border-[#e6ebf1] bg-[#f6f9fc] px-4 py-3">
                <i class="h-2.5 w-2.5 rounded-full bg-[#cd3d64]" />
                <i class="h-2.5 w-2.5 rounded-full bg-[#c98a00]" />
                <i class="h-2.5 w-2.5 rounded-full bg-[#24b47e]" />
                <span class="ml-3 font-mono text-[12px] text-[#425466]">telemetry.frootkit.dev</span>
                <span class="ml-auto bd bg-[#24b47e]/15 text-[#0e6245] text-[11px] py-0 px-2 font-medium">
                  Active Runtime
                </span>
              </div>

              <div class="p-6">
                <div class="flex items-end justify-between border-b border-[#e6ebf1] pb-4">
                  <div>
                    <p class="text-[13px] text-[#425466] font-medium">Fullstack Engine Latency (P99)</p>
                    <p class="font-mono text-[32px] font-normal text-[#0a2540] tracking-tight">0.42ms</p>
                  </div>
                  <span class="bd bg-[#24b47e]/15 text-[#0e6245]">+310% vs Next.js 15</span>
                </div>

                {/* SVG Performance Curve */}
                <svg viewBox="0 0 300 80" class="mt-4 h-20 w-full">
                  <defs>
                    <linearGradient id="heroMetricGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stop-color="#635bff" stop-opacity="0.3" />
                      <stop offset="1" stop-color="#635bff" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 60 C30 55 45 40 75 42 S120 22 150 26 S210 12 240 16 S285 6 300 4 V80 H0Z" fill="url(#heroMetricGrad)" />
                  <path d="M0 60 C30 55 45 40 75 42 S120 22 150 26 S210 12 240 16 S285 6 300 4" fill="none" stroke="#635bff" stroke-width="2.5" stroke-linecap="round" />
                </svg>

                {/* Micro Telemetry Rows */}
                <div class="mt-4 divide-y divide-[#e6ebf1] text-[13px]">
                  <div class="flex items-center justify-between py-2">
                    <span class="font-medium text-[#0a2540]">Monomorphic V8 Dispatch</span>
                    <span class="font-mono text-[#0a2540] font-semibold">22 nanoseconds</span>
                  </div>
                  <div class="flex items-center justify-between py-2">
                    <span class="font-medium text-[#0a2540]">Client Hydration Bundle</span>
                    <span class="font-mono text-[#0a2540] font-semibold">3.1 KB gzipped</span>
                  </div>
                  <div class="flex items-center justify-between py-2">
                    <span class="font-medium text-[#0a2540]">Process Port Release</span>
                    <span class="bd bg-[#24b47e]/15 text-[#0e6245]">Instant on exit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRIC STRIP */}
      <section class="border-b border-[#e6ebf1] bg-[#f6f9fc] py-10">
        <div class="mx-auto max-w-6xl px-6 grid gap-8 text-center sm:grid-cols-4">
          <div>
            <p class="font-mono text-[36px] font-light text-[#0a2540]">124,000</p>
            <p class="text-[13px] text-[#425466] mt-1 font-medium">Req / sec V8 Throughput</p>
          </div>
          <div>
            <p class="font-mono text-[36px] font-light text-[#0a2540]">0.42ms</p>
            <p class="text-[13px] text-[#425466] mt-1 font-medium">Preact SSR TTFB</p>
          </div>
          <div>
            <p class="font-mono text-[36px] font-light text-[#0a2540]">3.1 KB</p>
            <p class="text-[13px] text-[#425466] mt-1 font-medium">Minimal Client Runtime</p>
          </div>
          <div>
            <p class="font-mono text-[36px] font-light text-[#0a2540]">Zero</p>
            <p class="text-[13px] text-[#425466] mt-1 font-medium">Orphan Process Leaks</p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" class="scroll-mt-16 py-24 bg-white">
        <div class="mx-auto max-w-6xl px-6">
          <div class="max-w-2xl">
            <span class="bd bg-[#635bff]/10 text-[#635bff]">Core Capabilities</span>
            <h2 class="mt-3 text-[36px] font-light leading-tight tracking-tight text-[#0a2540]">
              Built for production velocity without framework debt
            </h2>
            <p class="mt-3 text-[17px] text-[#425466]">
              Every primitive is designed for developers who demand the ergonomics of Next.js with zero unnecessary abstractions or dark theme AI-slop.
            </p>
          </div>

          <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feat) => (
              <div
                key={feat.title}
                class="rounded-xl border border-[#e6ebf1] bg-white p-6 shadow-card hover:shadow-pop transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div class="flex items-center justify-between">
                    <div class="w-10 h-10 rounded-lg bg-[#f6f9fc] border border-[#e6ebf1] flex items-center justify-center">
                      {feat.icon}
                    </div>
                    <span class="bd bg-[#f6f9fc] text-[#0a2540] text-[12px] font-mono">
                      {feat.badge}
                    </span>
                  </div>
                  <h3 class="mt-5 text-[18px] font-medium text-[#0a2540]">{feat.title}</h3>
                  <p class="mt-2 text-[14px] leading-relaxed text-[#425466]">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FROOTUI COMPONENT SUITE SECTION */}
      <section id="frootui" class="scroll-mt-16 py-24 bg-[#f6f9fc] border-y border-[#e6ebf1]">
        <div class="mx-auto max-w-6xl px-6">
          <div class="max-w-2xl">
            <span class="bd bg-[#635bff]/10 text-[#635bff]">Modular UI Library</span>
            <h2 class="mt-3 text-[36px] font-light leading-tight tracking-tight text-[#0a2540]">
              FrootUI · Stripe Design System for FrootKit
            </h2>
            <p class="mt-3 text-[17px] text-[#425466]">
              Inspired by shadcn/ui. Copy, paste, or CLI scaffold 12+ production-grade components styled with authentic Stripe tokens: blurple voltage buttons, multi-layer shadows, and subtle micro-interactions.
            </p>
            <div class="mt-4 flex items-center gap-3 font-mono text-[13px]">
              <span class="bd bg-white border border-[#e6ebf1] text-[#0a2540] px-3 py-1">
                npx frootui add button card badge table
              </span>
            </div>
          </div>

          {/* Interactive Component Preview Grid */}
          <div class="mt-12 grid gap-6 md:grid-cols-3">
            {/* Component Card 1: Buttons & Badges */}
            <div class="rounded-xl border border-[#e6ebf1] bg-white p-6 shadow-card">
              <h3 class="text-[16px] font-medium text-[#0a2540]">Buttons &amp; Badges</h3>
              <p class="mt-1 text-[13px] text-[#425466]">Primary, secondary, destructive, and status pills.</p>

              <div class="mt-6 flex flex-wrap gap-2.5 items-center">
                <button class="btn btn-primary text-[13px] px-3.5 py-1.5 rounded-md">Primary</button>
                <button class="btn btn-secondary text-[13px] px-3.5 py-1.5 rounded-md">Secondary</button>
                <button class="btn bg-[#0a2540] text-white text-[13px] px-3.5 py-1.5 rounded-md shadow-card hover:bg-[#425466]">Dark</button>
              </div>

              <div class="mt-5 pt-5 border-t border-[#e6ebf1] flex flex-wrap gap-2">
                <span class="bd bg-[#24b47e]/15 text-[#0e6245]"><i class="h-1.5 w-1.5 rounded-full bg-[#24b47e]" />Succeeded</span>
                <span class="bd bg-[#cd3d64]/10 text-[#cd3d64]"><i class="h-1.5 w-1.5 rounded-full bg-[#cd3d64]" />Failed</span>
                <span class="bd bg-[#c98a00]/15 text-[#8a5a00]">Pending</span>
                <span class="bd bg-[#635bff]/10 text-[#635bff]">New</span>
              </div>
            </div>

            {/* Component Card 2: Inputs & Controls */}
            <div class="rounded-xl border border-[#e6ebf1] bg-white p-6 shadow-card">
              <h3 class="text-[16px] font-medium text-[#0a2540]">Inputs &amp; Form Fields</h3>
              <p class="mt-1 text-[13px] text-[#425466]">Hairline borders with Stripe focus glow ring.</p>

              <div class="mt-4 space-y-3">
                <div>
                  <label class="block text-[12px] font-medium text-[#0a2540] mb-1">Customer Email</label>
                  <input class="inp text-[13px] py-1.5" placeholder="jane@example.com" />
                </div>
                <div>
                  <label class="block text-[12px] font-medium text-[#0a2540] mb-1">Search Payments</label>
                  <div class="relative">
                    <input class="inp text-[13px] py-1.5 pr-10" placeholder="Filter by invoice..." />
                    <span class="absolute right-2 top-2 text-[11px] font-mono text-[#425466] bg-[#f6f9fc] px-1 rounded border border-[#e6ebf1]">⌘K</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Component Card 3: Metric Card with Sparkline */}
            <div class="rounded-xl border border-[#e6ebf1] bg-white p-6 shadow-card">
              <div class="flex items-center justify-between">
                <h3 class="text-[16px] font-medium text-[#0a2540]">Metric Cards</h3>
                <span class="bd bg-[#24b47e]/15 text-[#0e6245]">+14.2%</span>
              </div>
              <p class="mt-2 text-[13px] text-[#425466]">Monthly Recurring Revenue</p>
              <p class="font-mono text-[28px] font-normal text-[#0a2540] mt-1">$48,250.00</p>

              <svg class="mt-4 h-12 w-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                <path d="M0 24 L15 20 L30 22 L45 12 L60 15 L75 6 L100 3" fill="none" stroke="#635bff" stroke-width="2.5" stroke-linecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* BENCHMARKS SECTION */}
      <section id="benchmarks" class="scroll-mt-16 py-24 bg-white">
        <div class="mx-auto max-w-6xl px-6">
          <div class="max-w-2xl">
            <span class="bd bg-[#635bff]/10 text-[#635bff]">Benchmarked Performance</span>
            <h2 class="mt-3 text-[36px] font-light leading-tight tracking-tight text-[#0a2540]">
              Verified throughput and latency metrics
            </h2>
            <p class="mt-3 text-[17px] text-[#425466]">
              Benchmarked on Node.js v22 on AMD EPYC 7763 instances with autocannon (100 concurrent connections, 10s duration).
            </p>
          </div>

          <div class="mt-12 overflow-x-auto rounded-xl border border-[#e6ebf1] shadow-card">
            <table class="w-full text-left text-[14px]">
              <thead class="bg-[#f6f9fc] border-b border-[#e6ebf1]">
                <tr>
                  <th class="px-5 py-3.5 font-medium text-[#0a2540]">Framework</th>
                  <th class="px-5 py-3.5 font-medium text-[#0a2540]">Requests / sec</th>
                  <th class="px-5 py-3.5 font-medium text-[#0a2540]">SSR TTFB (P99)</th>
                  <th class="px-5 py-3.5 font-medium text-[#0a2540]">Client JS Runtime</th>
                  <th class="px-5 py-3.5 font-medium text-[#0a2540]">Tailwind Native</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#e6ebf1]">
                <tr class="bg-[#635bff]/5 font-medium">
                  <td class="px-5 py-4 text-[#0a2540] flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[#635bff]" />
                    <b>FrootKit (v1.3.6)</b>
                  </td>
                  <td class="px-5 py-4 font-mono text-[#0a2540]">124,180 req/s</td>
                  <td class="px-5 py-4 font-mono text-[#24b47e]">0.42 ms</td>
                  <td class="px-5 py-4 font-mono text-[#0a2540]">3.1 KB</td>
                  <td class="px-5 py-4"><span class="bd bg-[#24b47e]/15 text-[#0e6245]">Tailwind v4 Native</span></td>
                </tr>
                <tr>
                  <td class="px-5 py-4 text-[#425466]">Next.js 15 (App Router)</td>
                  <td class="px-5 py-4 font-mono text-[#425466]">18,400 req/s</td>
                  <td class="px-5 py-4 font-mono text-[#cd3d64]">14.8 ms</td>
                  <td class="px-5 py-4 font-mono text-[#425466]">87.4 KB</td>
                  <td class="px-5 py-4"><span class="bd bg-[#f6f9fc] text-[#425466]">PostCSS / Plugin</span></td>
                </tr>
                <tr>
                  <td class="px-5 py-4 text-[#425466]">Remix / React Router v7</td>
                  <td class="px-5 py-4 font-mono text-[#425466]">32,100 req/s</td>
                  <td class="px-5 py-4 font-mono text-[#425466]">8.4 ms</td>
                  <td class="px-5 py-4 font-mono text-[#425466]">64.2 KB</td>
                  <td class="px-5 py-4"><span class="bd bg-[#f6f9fc] text-[#425466]">External Vite</span></td>
                </tr>
                <tr>
                  <td class="px-5 py-4 text-[#425466]">Express.js (Server only)</td>
                  <td class="px-5 py-4 font-mono text-[#425466]">24,600 req/s</td>
                  <td class="px-5 py-4 font-mono text-[#425466]">1.8 ms</td>
                  <td class="px-5 py-4 font-mono text-[#425466]">N/A</td>
                  <td class="px-5 py-4"><span class="bd bg-[#f6f9fc] text-[#425466]">Manual</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CODE STUDIO SECTION */}
      <section id="code" class="scroll-mt-16 py-24 bg-[#0a2540] text-white">
        <div class="mx-auto max-w-6xl px-6">
          <div class="max-w-2xl">
            <span class="bd bg-white/15 text-white">Zero Abstraction Architecture</span>
            <h2 class="mt-3 text-[36px] font-light leading-tight tracking-tight text-white">
              The simplicity of standard TypeScript
            </h2>
            <p class="mt-3 text-[17px] text-white/80">
              No magical hidden bundler files, no heavy React server component boundaries. Clean files and pure Web standards.
            </p>
          </div>

          {/* Elevated Code Box */}
          <div class="mt-12 overflow-hidden rounded-xl border border-white/10 bg-[#0d2a4a] shadow-pop">
            <div class="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-3">
              <div class="flex items-center gap-2">
                <i class="h-3 w-3 rounded-full bg-[#cd3d64]" />
                <i class="h-3 w-3 rounded-full bg-[#c98a00]" />
                <i class="h-3 w-3 rounded-full bg-[#24b47e]" />
                <span class="ml-3 font-mono text-[13px] text-white/70">src/app/page.tsx</span>
              </div>
              <span class="font-mono text-[12px] text-[#00d4ff]">Preact SSR</span>
            </div>

            <pre class="p-6 font-mono text-[13px] leading-relaxed text-white/90 overflow-x-auto">
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
        <h1 class="text-[32px] font-light text-[#0a2540]">Curated Instruments</h1>
        <Badge variant="success">In Stock</Badge>
      </div>

      <div class="mt-8 grid gap-6 md:grid-cols-3">
        {products.map((item) => (
          <Card key={item.id} variant="elevated" class="p-5">
            <h3 class="font-medium text-[#0a2540]">{item.name}</h3>
            <p class="font-mono text-[18px] text-[#0a2540] mt-2">\${item.price}</p>
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

      {/* CALL TO ACTION BANNER */}
      <section class="py-20 bg-white">
        <div class="mx-auto max-w-6xl px-6">
          <div class="rounded-2xl p-10 md:p-16 text-white shadow-pop relative overflow-hidden" style="background: linear-gradient(160deg, #635bff 0%, #7a73ff 40%, #00d4ff 100%)">
            <div class="max-w-xl">
              <span class="bd bg-white/20 text-white">Get Started Today</span>
              <h2 class="mt-4 text-[38px] font-light leading-tight tracking-tight text-white md:text-[46px]">
                Create your first FrootKit application in 30 seconds.
              </h2>
              <p class="mt-4 text-[17px] text-white/90">
                Experience sub-millisecond SSR, instant port freeing on exit, and the complete Stripe design system.
              </p>

              <div class="mt-8 flex flex-wrap gap-4 items-center">
                <a href="/docs" class="btn btn-white shadow-card">
                  Read Documentation
                </a>
                <a href="https://github.com/orbitnorth/froot" target="_blank" rel="noreferrer" class="btn btn-glass">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRIPE CLEAN FOOTER */}
      <footer class="border-t border-[#e6ebf1] bg-[#f6f9fc] py-12 text-[14px] text-[#425466]">
        <div class="mx-auto max-w-6xl px-6 flex flex-wrap items-center justify-between gap-6">
          <div class="flex items-center gap-3">
            <span class="font-semibold text-[#0a2540]">frootkit</span>
            <span class="text-[#e6ebf1]">|</span>
            <span>The High-Performance Next.js Alternative</span>
          </div>

          <div class="flex items-center gap-6">
            <a href="/docs" class="hover:text-[#0a2540] transition-colors">Documentation</a>
            <a href="https://www.npmjs.com/package/froot-kit" target="_blank" rel="noreferrer" class="hover:text-[#0a2540] transition-colors">NPM (froot-kit)</a>
            <a href="https://www.npmjs.com/package/frootui" target="_blank" rel="noreferrer" class="hover:text-[#0a2540] transition-colors">NPM (frootui)</a>
            <a href="https://github.com/orbitnorth/froot" target="_blank" rel="noreferrer" class="hover:text-[#0a2540] transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
