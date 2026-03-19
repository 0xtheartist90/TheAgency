# Translation Pass Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Translate the remaining English page, card, button, and shared UI copy into Dutch and Thai while keeping service names, package names, and project names in English.

**Architecture:** Keep the existing locale-record pattern already used by `site-content.ts`, `services-content.ts`, and `work-with-us-content.ts`. Add focused content modules for story, portfolio UI, and service-detail UI instead of scattering new inline translation objects across page files. Pass translated labels into shared components so they stay reusable and thin.

**Tech Stack:** Next.js App Router, TypeScript, existing locale record helpers in `src/app`

---

### Task 1: Add story page locale content

**Files:**
- Create: `src/app/story-content.ts`
- Modify: `src/app/[locale]/story/page.tsx`
- Modify: `src/app/components/TeamShowcase.tsx`

- [ ] Define locale-aware story page content in `src/app/story-content.ts`
- [ ] Move `storyBody`, `team`, `uspValues`, `foundationItems`, footer labels, and metadata description into locale records
- [ ] Keep names and core titles like `Mission`, `Vision`, `Values` in English only where requested; translate surrounding explanatory copy
- [ ] Update `src/app/[locale]/story/page.tsx` to read all story/team/foundation/footer labels from the new content module
- [ ] Update `src/app/components/TeamShowcase.tsx` to accept translated UI labels for section heading, intro, `Contribution`, and `Focus`

### Task 2: Add portfolio UI locale content

**Files:**
- Create: `src/app/portfolio-ui-content.ts`
- Modify: `src/app/portfolio-content.ts`
- Modify: `src/app/[locale]/work/page.tsx`
- Modify: `src/app/[locale]/work/[slug]/page.tsx`
- Modify: `src/app/components/PortfolioSlider.tsx`

- [ ] Define locale-aware portfolio UI content in `src/app/portfolio-ui-content.ts`
- [ ] Convert `portfolio-content.ts` project summaries, intros, overviews, and deliverables to locale-aware data while keeping project names/categories in English
- [ ] Update `src/app/[locale]/work/page.tsx` to use translated section labels and footer copy
- [ ] Update `src/app/[locale]/work/[slug]/page.tsx` to use translated labels like `Case overview`, `Back to ...`, `Start your project`, `Project`, `Number`, `Category`, and `Deliverables`
- [ ] Update `src/app/components/PortfolioSlider.tsx` to receive translated button/placeholder/ARIA labels (`View project`, `Prev`, `Next`, pagination labels, placeholder copy)

### Task 3: Add service detail locale content

**Files:**
- Create: `src/app/service-detail-content.ts`
- Modify: `src/app/[locale]/services/[service]/page.tsx`
- Modify: `src/app/components/BrandScopeSection.tsx` (only if translated labels must be passed in)

- [ ] Define locale-aware copy for custom service detail sections in `src/app/service-detail-content.ts`
- [ ] Translate section labels such as `What we do`, `How we work`, `Work`, and `Next`
- [ ] Translate scope item details, process intros, work intros, work preview labels, CTA body copy, and footer labels
- [ ] Keep service names and package names in English
- [ ] Update `src/app/[locale]/services/[service]/page.tsx` to read all custom-service copy from the new content module

### Task 4: Translate remaining shared UI labels

**Files:**
- Modify: `src/app/site-content.ts`
- Modify: `src/app/[locale]/page.tsx`
- Modify: `src/app/components/SiteHeader.tsx`
- Modify: `src/app/components/InteriorHero.tsx`
- Modify: `src/app/components/ProcessSection.tsx`
- Modify: `src/app/components/ServicesShowcase.tsx`

- [ ] Add any missing shared labels to `site-content.ts` if they are reused across pages (`Home`, `Explore`, slider buttons, footer labels, stats labels)
- [ ] Replace hardcoded homepage labels like `Projects`, `Countries`, `Industries`, and `Years`
- [ ] Translate `Home` in the top nav and interior hero CTA
- [ ] Translate `Prev` / `Next` / pagination ARIA text in `ProcessSection.tsx`
- [ ] Translate `Explore` in `ServicesShowcase.tsx` while keeping service names in English

### Task 5: Verification

**Files:**
- Verify only

- [ ] Run `npm run lint`
- [ ] Run `npm run type-check`
- [ ] Spot-check `/en`, `/nl`, and `/th` for:
  - [ ] `/`
  - [ ] `/story`
  - [ ] `/work`
  - [ ] `/work/[slug]`
  - [ ] `/services/brand`
  - [ ] `/services/build`
- [ ] Review for leftover hardcoded English in page labels, buttons, cards, and obvious footer/navigation surfaces
