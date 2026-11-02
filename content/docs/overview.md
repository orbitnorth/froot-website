---
title: Ecosystem Overview
category: Getting Started
summary: Complete introduction to Froot (124k req/sec backend) and FrootKit (zero-overhead Next.js alternative).
badge: Core Concept
---

# Froot Ecosystem Overview

The **Froot Ecosystem** is an ultra-fast, modern TypeScript stack consisting of two complementary engines:

| FrootKit (Fullstack & Web UI) | Frootjs (Backend Engine) |
| :--- | :--- |
| **Next.js App Router Parity** | **Monomorphic V8 Inline Caches** |
| File-based routing with layout.tsx and page.tsx | Zero polymorphic de-optimizations in hot paths |
| **Hierarchical Nested Layouts** | **Sub-25ns Route Lookup** |
| Root document shells and cascading section layouts | Tier-1 O(1) hash maps and Radix tree dispatch |
| **Preact SSR Runtime (~3 KB)** | **124,000+ req/sec Throughput** |
| Tiny footprint vs 85 KB React client bundles | Pre-allocated contexts and zero-copy TCP corking |
| **Native Tailwind CSS v4** | **Batteries Included** |
| Pure CSS @theme design tokens with zero PostCSS | Built-in JWT, AES-GCM crypto, OpenAPI 3.1 Scalar docs |
| **Markdown Content Engine** | **Realtime Primitives** |
| Built-in frontmatter parsing and automated TOC | Distributed WebSockets, Pub/Sub hub, SSE streaming |
| **Static Site Generation (.froot/)** | **Minimal Heap Churn** |
| Sub-second static pre-rendering into .froot/ | Zero-allocation request and response abstraction |

---

## 1. FrootKit (Fullstack & Next.js Alternative)

**FrootKit** pairs the familiar file-based App Router conventions of Next.js with the raw speed and tiny footprint of Preact SSR and Tailwind CSS v4.

- **Zero-Wrapper CLI**: No `server.tsx`, `build.ts`, or `app.tsx` needed. Run with `frootkit dev`, `build`, or `start`.
- **3 KB SSR Runtime**: Replaces 85KB React runtime bundles with Preact's razor-thin footprint and zero mandatory client-side JS hydration.
- **Hidden `.froot/` Build Output**: Clean production SSG pre-rendering into `.froot/` (exactly like Next.js creates `.next/`).
- **Scaffold**: `npm create frootkit@latest my-app`

---

## 2. Frootjs (Backend Engine & HTTP Micro-Framework)

**Frootjs** is a high-throughput, TypeScript-native web framework engineered for sub-25ns routing and zero heap churn.

- **Monomorphic V8 Execution**: Object shapes for request contexts, headers, and parameter maps are fixed to prevent V8 polymorphic de-optimizations.
- **Tri-Tier Router**: O(1) hash map for static routes, compressed Radix trees for parametric segments, and compiled RegExp dispatch for complex patterns.
- **Batteries Included**: Native JWT, AES-GCM Crypto, Server-Sent Events (SSE), WebSockets with Pub/Sub Hubs, and OpenAPI 3.1 Scalar/Swagger documentation.
- **Scaffold**: `npm create frootjs@latest my-api`

---

## Ecosystem Comparison

| Capability | Next.js 15 / Express | Froot Ecosystem |
| :--- | :--- | :--- |
| **Backend Throughput** | ~15,000 req/sec | **124,000+ req/sec (Froot)** |
| **Route Lookup Latency** | Radix / Regex (150 - 500ns) | **Monomorphic Inline Cache (< 25ns)** |
| **Fullstack SSR Runtime** | ~85 KB (React + DOM) | **~3 KB (FrootKit Preact SSR)** |
| **Client JS Hydration** | Mandatory unless server-only | **Zero Client JS by Default** |
| **Tailwind Support** | Requires postcss.config & plugins | **Native Tailwind v4 Built-in** |
| **Boilerplate Files** | `next.config.ts`, `postcss.config.js` | **Zero config files** |

---

## Quick Navigation

- **Backend Development**:
  - [Froot Quickstart](/docs/quickstart): Launch your first high-performance API in 30 seconds.
  - [Tri-Tier Router](/docs/router): Deep dive into the monomorphic routing engine.
  - [Templates & Add-ons](/docs/templates): Explore MVC, Modular, Streaming, and WebSocket templates.
- **Fullstack Web Development**:
  - [FrootKit Quickstart](/docs/frootkit): Scaffold an App Router project with Preact and Tailwind v4.
  - [App Router & Special Files](/docs/app-router): Learn about `layout.tsx`, `page.tsx`, and dynamic segments.
  - [Nested Layouts](/docs/nested-layouts): Understand root document shells and cascading section layouts.
  - [Tailwind CSS v4 Native](/docs/tailwind-v4): Configure design tokens with pure CSS `@theme`.
  - [Static Site Generation](/docs/ssg-export): Pre-render HTML and export directly into `.froot/`.
