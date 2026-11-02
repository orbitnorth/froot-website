---
title: FrootUI & Developer Design System
summary: Modular, shadcn-style component library and CLI powered by the modern developer design system (Next.js, Vercel, Render) for FrootKit.
---

# FrootUI — Modern Developer Design System for FrootKit

FrootUI is a structured, modular UI library and CLI tool inspired by **shadcn/ui** and crafted around the **modern developer design system** popularized by Next.js, Vercel, Render, and Replit.

It gives you the best of both worlds:
1. **Importable NPM Package (`frootui`)**: Ready-to-use, typed Preact and React components.
2. **Shadcn-Style Copy CLI (`npx frootui add <component>`)**: Installs pure, zero-lock-in component source files directly into `src/components/ui/` with zero runtime dependencies.

---

## Modern Developer Design System Tokens

FrootUI implements the design tokens from high-performance developer platforms and infrastructure consoles:

- **High-Contrast Monochrome CTA (`#ffffff` / `#000000`)**: Pure white interactive action buttons with crisp black typography, subtle hover transitions, and hairline focus states.
- **Deep Obsidian Canvas**: Pitch-black canvas (`#000000`), card surfaces (`#0a0a0c` / `#0e0e11`), and hairline borders (`#222226` / `#333338`).
- **Crisp Monospace Accents**: JetBrains Mono / Geist Mono for telemetry metrics, status pills, shortcuts, and route badges.
- **Micro Status Indicators**:
  - `Deployed / Succeeded`: Emerald (`#10b981`) with pulsing status dots.
  - `Running / Stream`: Cyan (`#06b6d4`) and Electric Blue (`#0070f3`).
  - `Queued / Notice`: Amber (`#f59e0b`).
  - `Failed / Error`: Rose (`#f43f5e`).
- **Precision Hairlines & Grids**: Minimalist 1px borders, subtle 40px grid patterns, and radial ambient spotlights.

---

## Quickstart via CLI (shadcn-style)

### 1. Initialize FrootUI in your project
```bash
npx frootui init
```
This generates `frootui.json`, initializes `src/components/ui/`, creates standalone `src/utils/cn.ts`, and injects modern developer tokens into your `styles.css`.

### 2. Add individual components
```bash
npx frootui add button card badge input table metric-card
```

Or install all components at once:
```bash
npx frootui add --all
```

---

## Using as an NPM Package

You can also install `frootui` directly:

```bash
npm install frootui
```

```tsx
import { Button, Card, Badge, MetricCard, Input } from 'frootui';

export default function ServicePage() {
  return (
    <Card class="border border-neutral-800 bg-neutral-900/60 p-6 rounded-xl">
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-white">Edge Deployment</h3>
          <Badge variant="success">Active Runtime</Badge>
        </div>
        <Input label="Environment Variable" placeholder="API_SECRET_KEY" />
        <Button variant="primary" size="lg" class="w-full">
          Deploy to Production
        </Button>
      </div>
    </Card>
  );
}
```

---

## Component Catalog

| Component | Variants / Sizes | Description |
| :--- | :--- | :--- |
| `Button` | `primary`, `secondary`, `outline`, `ghost`, `danger`, `link` (xs, sm, md, lg) | Monochromatic primary and dark secondary buttons with hairline borders. Supports `isLoading` with animated SVG spinner. |
| `Badge` | `success`, `warning`, `danger`, `info`, `neutral` (sm, md) | Monospace status indicator with optional pulsing dot. |
| `Card` | `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` | Surface container with hairline borders, dark background, and subtle hover states. |
| `Input` | Standard, with `label`, `error`, `helperText`, `leftAddon`, `rightAddon` | Form input with dark background and hairline focus ring. |
| `Table` | `TableHeader`, `TableBody`, `TableRow`, `TableHead`, `TableCell` | Clean telemetry and data comparison table with tabular figures. |
| `MetricCard` | With `label`, `value`, `change`, `isPositive`, `sparklineData` | Developer KPI card with trend pill and SVG sparklines. |
| `Tabs` | `underline`, `pills` | Clean developer tab switchers. |
| `Dialog` | `DialogHeader`, `DialogTitle`, `DialogBody`, `DialogFooter` | Accessible modal dialog with backdrop blur. |
| `Alert` | `info`, `success`, `warning`, `danger` | Status alert banner with SVG icons. |
| `Avatar` | `sm`, `md`, `lg` with `online`, `offline`, `busy` status dots | User avatar with fallback initials. |
| `Separator` | `horizontal`, `vertical`, with optional text label | Hairline divider. |
