/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment, type ComponentChildren } from 'preact';

export default function RootLayout({ children }: { children: ComponentChildren }) {
  return (
    <html lang="en" class="scroll-smooth">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Froot &amp; FrootKit — High-Performance TypeScript Framework &amp; Preact SSR</title>
        <meta
          name="description"
          content="The unified high-performance TypeScript stack. Froot monomorphic V8 backend (124k req/sec), FrootKit zero-overhead Next.js alternative (3KB Preact SSR, Tailwind v4 native), and FrootUI Stripe design system."
        />
        <meta name="theme-color" content="#635bff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-white text-[#425466] font-sans antialiased selection:bg-[#635bff]/20 selection:text-[#635bff] min-h-screen">
        {children}
      </body>
    </html>
  );
}
