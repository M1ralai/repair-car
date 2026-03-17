# Frontend Design System & Style Guide

## :star2: Core Philosophy
- **Clean & Airy**: High usage of whitespace, `sky` and `slate` colors.
- **Micro-Interactions**: Every actionable element should react (hover, tap, enter).
- **Consistent Depth**: Use `shadow-sm` for resting states, `shadow-md` for hover.
- **"Strict Grid"**: Tables and Lists should feel structured with visible but subtle borders.

---

## :art: Color System ("Sky & Slate")

We use a custom Tailwind configuration extending the default palette.

### Primary Colors
| Role | Class | Hex | Usage |
|------|-------|-----|-------|
| **Brand Primary** | `bg-primary` / `text-primary` | `#38bdf8` (Sky 400) | Main actions, active states, key highlights |
| **Brand Hover** | `hover:bg-primary/90` | - | Button hover states |
| **Background** | `bg-background` | `#f0f9ff` (Sky 50) | Global page background |
| **Surface** | `bg-white` | `#ffffff` | Card, Modal, and Sidebar backgrounds |

### Text Colors
| Role | Class | Color | Usage |
|------|-------|-------|-------|
| **Headings** | `text-text` / `text-slate-900` | Slate 900+ | Page titles, Card headers (`font-bold`) |
| **Body** | `text-slate-600` | Slate 600 | Standard paragraph text (`leading-relaxed`) |
| **Muted** | `text-textMuted` / `text-slate-500` | Slate 500 | Metadata, dates, helper text |
| **Disabled** | `text-gray-400` | Gray 400 | Disabled states, placeholders |

### Status Colors
- **Success**: `text-green-600`, `bg-green-50` (Habit Completion)
- **Warning**: `text-orange-500`, `bg-warning/20` (Streak Risk)
- **Error**: `text-red-600`, `bg-red-50` (Form Errors, Overdue)

### Borders & Dividers
- **Default Border**: `border-slate-100` (Use for Cards, Tables)
- **Layout Border**: `border-gray-200` (Sidebar separator, heavier dividers)
- **Focus Ring**: `ring-2 ring-blue-500 ring-offset-2`

---

## :jigsaw: Component Library

### 1. Primitives (Atoms)

#### Buttons (`src/components/ui/button.tsx`)
- **Default**: `bg-primary text-primary-foreground hover:bg-primary/80`
- **Shape**: `rounded-md`
- **Motion**: `whileHover={{ scale: 1.05 }}`, `whileTap={{ scale: 0.95 }}`

#### Inputs (`src/components/ui/input.tsx`)
- **Base**: `h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 shadow-sm`
- **Focus**: `focus-visible:ring-1 focus-visible:ring-ring`
- **Typography**: `text-sm`

#### Badges (`src/components/ui/badge.tsx`)
- **Base**: `inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold`
- **Variants**:
  - `default`: `bg-primary text-primary-foreground`
  - `secondary`: `bg-secondary text-secondary-foreground`
  - `outline`: `text-foreground`

---

### 2. Layout Components (Organisms)

#### Sidebar (`src/components/layout/Sidebar.tsx`)
- **Container**: `w-64 bg-white border-r border-gray-200`
- **Nav Item (Active)**: `bg-blue-50 text-blue-600`
- **Nav Item (Inactive)**: `text-textMuted hover:bg-gray-100`
- **Nav Item Layout**: `flex items-center gap-3 px-4 py-3 rounded-md`
- **Interaction**: `whileHover={{ x: 4 }}` (Slides slightly right on hover)

#### Modals / Dialogs (`src/components/ui/dialog.tsx`)
- **Overlay**: `bg-black/20 backdrop-blur-sm`
- **Content**: `bg-background p-6 shadow-lg sm:rounded-lg max-w-lg`
- **Animation**: `initial={{ opacity: 0, scale: 0.95 }}` -> `animate={{ opacity: 1, scale: 1 }}`

---

### 3. Feature Components (Molecules)

#### Feature Cards (e.g., `HabitCard.tsx`)
The application's most distinct pattern.
- **Container**: `relative bg-white border border-gray-200 rounded-xl p-6 overflow-hidden`
- **Hover State**: `hover:border-primary/30 hover:shadow-md hover:scale-[1.02]`
- **Completed State**: `border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg`
- **Title**: `text-lg font-semibold text-text`
- **Icon**: `text-3xl` size commonly used.

#### Quick Stats Grid (`src/components/dashboard/QuickStatsGrid.tsx`)
- **Container**: `bg-white p-4 rounded-xl shadow-sm border border-slate-100`
- **Icon Box**: `p-3 rounded-lg` with dynamic colors (`bg-orange-100 text-orange-600`, etc.)
- **Value**: `text-2xl font-bold text-slate-800`
- **Label**: `text-xs font-medium text-slate-500 uppercase tracking-wide`

---

### 4. Blog & Typography (`prose`)

Custom configuration in `BlogPost.tsx` to match the dashboard aesthetic.

- **Headings**: `font-bold text-slate-900 tracking-tight`
- **Paragraphs**: `text-slate-600 leading-8`
- **Blockquotes**: `border-l-4 border-blue-500 bg-blue-50/50 italic rounded-r-lg`
- **Code Blocks**:
  - `bg-white`
  - `border border-slate-100`
  - `rounded-xl`
  - `shadow-sm`
  - `p-6 font-mono text-[13px]`
- **Tables**:
  - `border-collapse`
  - `border border-slate-100`
  - `rounded-xl overflow-hidden`
  - `thead: bg-slate-50/50`
  - `th/td: border border-slate-100 p-4`

---

## :performing_arts: Animation & Motion Guidelines

We use **Framer Motion** extensively.

| Interaction | Prop | Pattern |
|-------------|------|---------|
| **Page Load** | `initial` | `{ opacity: 0, y: 20 }` |
| | `animate` | `{ opacity: 1, y: 0 }` |
| | `transition` | `{ duration: 0.3 }` |
| **List Stagger** | `transition` | `{ delay: index * 0.1 }` |
| **Button Tap** | `whileTap` | `{ scale: 0.95 }` |
| **Card Hover** | `whileHover` | `{ scale: 1.02, y: -2 }` |
| **Nav Hover** | `whileHover` | `{ x: 4 }` |

---

## :triangular_ruler: Spacing & Radius Tokens

- **Border Radius**:
  - `rounded-xl`: Cards, Modals, Large containers
  - `rounded-lg`: Inner sections, icon backgrounds
  - `rounded-md`: Buttons, Inputs
  - `rounded-full`: Badges, Avatars

- **Padding**:
  - Page Container: `p-4 md:p-8`
  - Card Content: `p-6`
  - Nav Item: `px-4 py-3`
Message mvp-hızlı-düşünceler