export interface DocItem {
  id: string;
  title: string;
  badge?: string;
  summary?: string;
}

export interface DocSection {
  title: string;
  items: DocItem[];
}

export const UNIFIED_DOCS_NAV: DocSection[] = [
  {
    title: 'Getting Started',
    items: [
      { id: 'overview', title: 'Ecosystem Overview', badge: 'Overview', summary: 'Introduction to Froot & FrootKit' },
      { id: 'quickstart', title: 'Froot Backend Quickstart', badge: 'API', summary: 'Scaffold high-throughput backend APIs' },
      { id: 'frootkit', title: 'FrootKit Web Quickstart', badge: 'Fullstack', summary: 'Scaffold App Router web apps with Preact' },
    ],
  },
  {
    title: 'FrootKit (Fullstack & Web UI)',
    items: [
      { id: 'app-router', title: 'App Router Conventions', badge: 'Routing', summary: 'File-based routing with layout.tsx and page.tsx' },
      { id: 'nested-layouts', title: 'Hierarchical Nested Layouts', badge: 'Layouts', summary: 'Root document shells and cascading sections' },
      { id: 'tailwind-v4', title: 'Tailwind CSS v4 Native', badge: 'CSS-First', summary: 'Pure CSS styling with @theme tokens' },
      { id: 'markdown-getdoc', title: 'Markdown & getDoc()', badge: 'Content', summary: 'Documentation loader with automated TOC' },
      { id: 'ssg-export', title: 'Static Site Generation (.froot)', badge: 'SSG', summary: 'Sub-second pre-rendering into .froot/' },
      { id: 'deployment', title: 'Deployment Guide', badge: 'Deploy', summary: 'Deploy to Cloudflare Pages, Vercel, Netlify' },
    ],
  },
  {
    title: 'Frootjs (Backend Engine)',
    items: [
      { id: 'templates', title: 'Architecture & Templates', badge: 'Scaffolding', summary: 'MVC, Modular, Streaming, WebSocket setups' },
      { id: 'router', title: 'Tri-Tier Router', badge: '< 25ns', summary: 'Monomorphic V8 hash maps & Radix routing' },
      { id: 'context', title: 'Zero-Allocation Context', badge: 'Memory', summary: 'Monomorphic request/response abstraction' },
      { id: 'middleware', title: 'Onion Middleware', badge: 'Pipeline', summary: 'Composable request interceptors and security' },
      { id: 'streaming', title: 'Streaming & SSE', badge: 'Realtime', summary: 'Server-Sent Events and binary TCP corking' },
      { id: 'websocket', title: 'WebSockets & Pub/Sub', badge: 'Low Latency', summary: 'Distributed pub/sub hubs and live sockets' },
      { id: 'openapi', title: 'OpenAPI 3.1 & Types', badge: 'Scalar UI', summary: 'Type-safe contracts and live documentation' },
      { id: 'jsx', title: 'JSX & Preact SSR', badge: 'HTML', summary: 'Server-side JSX components' },
      { id: 'database', title: 'Database Integrations', badge: 'ORM', summary: 'Drizzle ORM and Prisma setup' },
      { id: 'ai-agents', title: 'AI Agents & Rules', badge: 'LLM Ready', summary: 'AGENT.md and .cursorrules standards' },
      { id: 'testing', title: 'Testing Guide', badge: 'node:test', summary: 'In-memory testing without socket ports' },
    ],
  },
];

export const ALL_DOC_ITEMS: DocItem[] = UNIFIED_DOCS_NAV.flatMap((section) => section.items);

export function getAdjacentDocs(currentId: string): { prev?: DocItem; next?: DocItem } {
  const index = ALL_DOC_ITEMS.findIndex((item) => item.id === currentId);
  if (index === -1) return {};
  return {
    prev: index > 0 ? ALL_DOC_ITEMS[index - 1] : undefined,
    next: index < ALL_DOC_ITEMS.length - 1 ? ALL_DOC_ITEMS[index + 1] : undefined,
  };
}

