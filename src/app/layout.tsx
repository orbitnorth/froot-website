/** @jsxImportSource preact */
import type { ComponentChildren } from 'preact';

export default function RootLayout({ children }: { children: ComponentChildren }) {
  return (
    <html lang="en" class="dark scroll-smooth">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Froot &amp; FrootKit — High-Performance Web &amp; Next.js Alternative</title>
        <meta
          name="description"
          content="The unified high-performance TypeScript stack. Froot monomorphic V8 backend (124k req/sec) and FrootKit zero-overhead Next.js alternative (3KB Preact SSR, Tailwind v4 native)."
        />
        <meta name="theme-color" content="#030712" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-[#030712] text-slate-100 font-sans antialiased selection:bg-emerald-500/25 selection:text-emerald-200 min-h-screen">
        {children}
      </body>
    </html>
  );
}
