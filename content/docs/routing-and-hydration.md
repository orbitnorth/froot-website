---
title: Routing Contract & Preact Hydration
description: Comprehensive specifications for FrootKit App Router contracts, nested layouts, error boundaries, data loaders, state serialization, and Preact hydration.
badge: Core Architecture
---

# Routing Contract & Preact Hydration

FrootKit provides a Next.js-compatible App Router engine built on top of high-speed monomorphic V8 dispatch and Preact. This guide covers the routing contract, server data loading, state serialization, and client-side hydration.

---

## 1. File-Based Routing Contract

Every file inside `src/app/` maps directly to an explicit architectural role:

| File Name | Purpose | Example |
|---|---|---|
| `layout.tsx` | Hierarchical UI Shell | `src/app/layout.tsx` (Root shell), `src/app/dashboard/layout.tsx` |
| `page.tsx` | Route Leaf View | `src/app/page.tsx`, `src/app/blog/[slug]/page.tsx` |
| `route.ts` | Backend API Route (HTTP verbs) | `src/app/api/auth/route.ts` (Zero SSR overhead) |
| `not-found.tsx` | Custom 404 View | `src/app/not-found.tsx` |
| `error.tsx` | 500 Error Boundary | `src/app/error.tsx` |

### Dynamic Parameter Conventions
- **Single Segment**: `[slug]` maps to `:slug`, accessible via `params.slug`.
- **Catch-All Segment**: `[...slug]` matches all subpaths, accessible via `params.slug` or `params.wildcard`.
- **Optional Catch-All**: `[[...slug]]` matches both `/docs` and `/docs/*`.
- **Route Groups**: Folders named `(marketing)` organize routes without altering the URL path.

---

## 2. Server Functions & Data Loading

FrootKit supports two complementary data-loading models:

### Model 1: Async Server Components
In FrootKit, page components can execute asynchronous server work directly:

```tsx
export default async function DashboardPage({ params, searchParams, c }) {
  const metrics = await db.queryMetrics();
  return <MetricsGrid metrics={metrics} />;
}
```

### Model 2: Page `loader()` with Automatic Hydration
Export a `loader()` function when server state must be passed to the client for Preact hydration:

```tsx
import type { LoaderContext, PageProps } from 'frootkit';

export async function loader({ params, request }: LoaderContext) {
  const users = await db.users.findMany();
  return { users };
}

export default function UsersPage({ data }: PageProps<never, { users: User[] }>) {
  return (
    <div>
      <h1>Active Users</h1>
      <ul>{data.users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
    </div>
  );
}
```

When `loader` is exported:
1. FrootKit executes `loader()` prior to rendering.
2. The resolved data is passed directly into `Page({ data })`.
3. The data is safely serialized into `<script id="__FROOT_DATA__" type="application/json">` before `</body>`.

### Server Actions (`action()`)
Export an `action()` function to handle `POST` form submissions or mutations:

```tsx
export async function action({ request }) {
  const formData = await request.formData();
  await db.createUser(formData.get('email'));
  return Response.redirect('/dashboard', 303);
}
```

---

## 3. Reliable Preact SSR & Hydration State Serialization

Preact supports rendering components to an HTML string on the server (`renderToString`) and mounting them in the browser via `hydrate(vnode, container)`.

### Safe State Serialization
Direct string interpolation like `<script>window.__DATA__ = ${JSON.stringify(data)}</script>` is unsafe and vulnerable to Cross-Site Scripting (XSS) or parser breaks if the data contains `</script>`.

FrootKit utilizes strict JSON serialization via `serializeState(data)`:
```ts
export function serializeState(data: unknown): string {
  if (data === undefined) return 'null';
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}
```

### Injected Hydration Payload
The server outputs state inside a standard non-executable JSON script:
```html
<script id="__FROOT_DATA__" type="application/json">
  {"data":{"users":[{"id":1,"name":"Alice"}]},"params":{},"currentPath":"/users"}
</script>
</body>
```

### Client-Side Hydration
In your client entry point, read the serialized state and hydrate:
```tsx
import { hydrate } from 'preact';
import { getHydrationData } from 'frootkit';
import UsersPage from './UsersPage';

const hydrationState = getHydrationData();
const rootElement = document.getElementById('root');

if (rootElement) {
  hydrate(<UsersPage data={hydrationState?.data} />, rootElement);
}
```

---

## 4. 404s & Error Boundaries

### 404 Not Found (`notFound()`)
Call `notFound()` anywhere in your page or loader to abort rendering and trigger the custom `not-found.tsx` view wrapped in the root layout:

```tsx
import { notFound } from 'frootkit';

export default async function ProductPage({ params }) {
  const product = await db.getProduct(params.id);
  if (!product) {
    notFound();
  }
  return <div>{product.name}</div>;
}
```

### Error Boundaries (`error.tsx`)
Catch unhandled exceptions during data fetching or SSR:

```tsx
export default function ErrorBoundary({ error, reset }: { error: Error; reset?: () => void }) {
  return (
    <div class="p-8 rounded-xl bg-[#0a0f18] border border-[#1a2333]">
      <h2 class="text-xl font-bold text-rose-400">Application Error</h2>
      <p class="text-slate-300 text-sm mt-2">{error.message}</p>
      {reset && (
        <button onClick={reset} class="mt-4 px-4 py-2 bg-emerald-500 text-black font-semibold rounded-lg">
          Try Again
        </button>
      )}
    </div>
  );
}
```
