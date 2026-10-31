---
title: FrootUI & Stripe Design System
summary: Modular, shadcn-style component library and CLI powered by the Stripe Design System for FrootKit.
---

# FrootUI — Stripe Design System for FrootKit

FrootUI is a structured, modular UI library and CLI tool inspired by **shadcn/ui** and crafted around the **Stripe Design System**.

It gives you the best of both worlds:
1. **Importable NPM Package (`frootui`)**: Ready-to-use, typed Preact and React components.
2. **Shadcn-Style Copy CLI (`npx frootui add <component>`)**: Installs pure, zero-lock-in component source files directly into `src/components/ui/` with zero runtime dependencies.

---

## ⚡ Stripe Design System Tokens

FrootUI implements the design tokens from Stripe's internal developer platform and financial checkout systems:

- **Voltage Interactive Accent (`#533afd`)**: High-voltage single-CTA button hierarchy, focused micro-bevels, and active glow rings (`0 0 0 4px rgba(83, 58, 253, 0.2)`).
- **Deep Navy Hierarchy**: Headings (`#0a2540` / `#061b31`), secondary labels (`#425466`), and muted captions (`#6b7c93`).
- **Dark Mode Matrix**: Obsidian canvas (`#0a0b0d`), card surfaces (`#111318`), and hairline borders (`rgba(255, 255, 255, 0.08)`).
- **Multi-Layer Blue-Tinted Shadows**:
  - `shadow-sm`: `0 1px 3px rgba(50, 50, 93, 0.12), 0 1px 0 rgba(0, 0, 0, 0.02)`
  - `shadow-md`: `0 4px 6px rgba(50, 50, 93, 0.08), 0 1px 3px rgba(0, 0, 0, 0.08)`
  - `shadow-lg`: `0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3)`
- **Tabular Figures (`tabular-nums`)**: Strict alignment across monetary values, metrics, and data tables.
- **Angled Mesh Gradients**: Slanted background ribbons (`skewY(-6deg)`) and vibrant mesh gradients (`#533afd` → `#7a5af8` → `#00d4b2`).

---

## 🚀 Quickstart via CLI (shadcn-style)

### 1. Initialize FrootUI in your project
```bash
npx frootui init
```
This generates `frootui.json`, initializes `src/components/ui/`, creates standalone `src/utils/cn.ts`, and injects Stripe tokens into your `styles.css`.

### 2. Add individual components
```bash
npx frootui add button card badge input table metric-card
```

Or install all components at once:
```bash
npx frootui add --all
```

---

## 📦 Using as an NPM Package

You can also install `frootui` directly:

```bash
npm install frootui
```

```tsx
import { Button, Card, Badge, MetricCard, Input } from 'frootui';

export default function CheckoutPage() {
  return (
    <Card accentTop>
      <div class="p-6 space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-[#0a2540] dark:text-white">Payment Method</h3>
          <Badge variant="voltage">Instant Settlement</Badge>
        </div>
        <Input label="Cardholder Name" placeholder="Alex Rivera" />
        <Button variant="primary" size="lg" class="w-full">
          Confirm Payment ($149.00)
        </Button>
      </div>
    </Card>
  );
}
```

---

## 🎨 Component Catalog

| Component | Variants / Sizes | Description |
| :--- | :--- | :--- |
| `Button` | `primary`, `secondary`, `outline`, `ghost`, `danger`, `link` (xs, sm, md, lg) | Stripe Voltage button with micro-bevel and shadow elevation. Supports `isLoading` with animated SVG spinner. |
| `Badge` | `success`, `warning`, `danger`, `info`, `voltage`, `neutral` (sm, md) | Semantic status indicator with optional pulsing dot. |
| `Card` | `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` | Surface container with hairline borders, optional top gradient accent, and multi-layer shadows. |
| `Input` | Standard, with `label`, `error`, `helperText`, `leftAddon`, `rightAddon` | Form input with smooth transition to Stripe indigo focus ring. |
| `Table` | `TableHeader`, `TableBody`, `TableRow`, `TableHead`, `TableCell` | Stripe Dashboard financial reconciliation table with tabular figures. |
| `MetricCard` | With `label`, `value`, `change`, `isPositive`, `sparklineData` | Stripe Analytics KPI card with trend pill and SVG sparklines. |
| `Tabs` | `underline`, `pills` | Stripe Dashboard tab switchers. |
| `Dialog` | `DialogHeader`, `DialogTitle`, `DialogBody`, `DialogFooter` | Accessible modal dialog with backdrop blur. |
| `Alert` | `info`, `success`, `warning`, `danger` | Status alert banner with SVG icons. |
| `Avatar` | `sm`, `md`, `lg` with `online`, `offline`, `busy` status dots | User avatar with fallback initials. |
| `Separator` | `horizontal`, `vertical`, with optional text label | Hairline divider. |
| `StripeMesh` | `mesh`, `voltage`, `sunset`, `aurora` gradients | Slanted ribbon background container (`skewY(-6deg)`). |
