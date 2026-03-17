---
name: a11y
description: Expert web accessibility auditing + remediation for French RGAA 4.1.2 and WCAG 2.1.---
---

# a11y skill (WCAG + RGAA 4.1.2)

This skill equips the agent to **fix** web pages against:
- **RGAA 4.1.2** (French criteria/tests methodology)
- **WCAG 2.1** alignment (RGAA 4.1.2 references WCAG success criteria and techniques)

It also equips the agent to propose **extra hardening toward WCAG 2.2** (best-effort suggestions), even when those improvements are not strictly required by RGAA 4.1.2.

Primary source in this skill folder:
- [Référentiel RGAA 4.1.2.md](Referentiel-RGAA-4.1.2.md) (authoritative for RGAA test wording/methodology)

## When to use
Use this skill when the user asks to:
- fix accessibility issues (keyboard, focus, forms, ARIA, images, headings, contrast…)
- map issues to **RGAA theme/criterion/test** (e.g. “1.1.1”, “7.3.1”, “11.10.1”…)
- suggest improvements beyond RGAA (toward WCAG 2.2)

## Non-goals / safety
- Do not claim full legal compliance for a whole site unless the user explicitly provides an official audit scope and asks for that.
- Do not invent RGAA test requirements: when in doubt, **look up the exact test** in the local referential file.
- Prefer semantic HTML over ARIA. Follow the “first rule of ARIA”: **use native elements whenever possible**.

## Minimal inputs to request (only if missing)
If the user did not provide these, ask briefly:
1) Where the issue occurs (URL/route/file, component name)
2) Expected behavior and how it fails (keyboard? screen reader? zoom? contrast?)
3) Constraints (framework, design system, cannot change markup, etc.)

Default assumption if not provided: fix the issue in the files/pages in the current workspace, prioritizing RGAA 4.1.2 compatibility.

## How to use the RGAA referential file
RGAA is structured: **Thématique → Critère → Tests**.

### Locating a specific test
To avoid mistakes, locate tests by their identifier in the referential file:
- Search for headings like `#### 1.1.1` (test) or `### 1.1` (criterion).

### Recording results
For each applicable test, record:
- **Status**: Conforme / Non conforme / Non applicable
- **Evidence**: exact element(s), selector/DOM path, screenshot description, or reproduced steps
- **Impact**: which users are blocked and how (keyboard-only, screen reader, low vision, cognitive…)
- **Fix**: concrete code change(s) + verification step

## Remediation workflow (RGAA-first)

### 1) Reproduce the issue
- Identify the failing UI and the interaction that breaks (keyboard sequence, SR announcement, zoom level, etc.).
- Confirm whether it is a markup issue (semantics/labels), a behavior issue (JS), or a styling issue (focus/contrast/layout).

### 2) Map to RGAA test(s)
- Find the exact test(s) in [Référentiel RGAA 4.1.2.md](Referentiel-RGAA-4.1.2.md)
- Follow the test methodology steps to avoid over/under-fixing.

### 3) Implement the smallest correct fix
Priority order:
1) Native HTML/semantics
2) Keyboard and focus behavior
3) Minimal ARIA (only if needed; must remain accurate over time)

### 4) Verify
- Keyboard-only verification
- “Name / Role / Value” sanity check
- Regression check for nearby components

### 5) Suggest WCAG 2.2 improvements (bonus)
If relevant, propose enhancements aligning to WCAG 2.2 new success criteria (see section below).

## Common remediation patterns (quick reference)
These are patterns; validate against the exact RGAA test(s) before finalizing.

### Images (RGAA theme 1)
- Informative `<img>`: provide an accessible name via `alt` (prefer), or `aria-label`/`aria-labelledby`.
- Decorative `<img>`: `alt=""` and **no** `title`, `aria-label`, `aria-labelledby`.
- Informative `<svg>`: `role="img"` + accessible name (`<title>` or `aria-label`/`aria-labelledby`).
- Decorative `<svg>`: `aria-hidden="true"` and ensure no `<title>/<desc>` or labeling attributes.

### Links and buttons (name/role/value)
- Use `<button>` for actions; `<a href>` for navigation.
- Ensure accessible name matches visible label (avoid `aria-label` that contradicts visible text).
- Avoid `div`/`span` with click handlers; if unavoidable, add full keyboard support + role + focusability.

### Forms
- Every control needs an explicit label: `<label for>` or wrapping `<label>`.
- Group related fields with `<fieldset><legend>`.
- Help text and errors: associate via `aria-describedby`; ensure errors are programmatically determinable.
- Required fields: use native `required` where possible and expose requirement in text.

### Headings and landmarks
- Ensure a logical heading hierarchy (`h1` then `h2`…; don’t skip levels without reason).
- Use landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`) appropriately.
- Provide a skip link to main content if page has repeated navigation.

### Keyboard and focus
- Visible focus indicator must not be removed.
- Modals/dialogs: focus moves into dialog, is trapped while open, ESC closes (if appropriate), focus returns.
- Don’t use positive `tabindex` (creates confusing tab order).

## WCAG 2.2 “bonus” fixes to suggest (beyond RGAA 4.1.2)
RGAA 4.1.2 is aligned to WCAG 2.1; WCAG 2.2 adds additional expectations that are often worth implementing.

When the user asks “go beyond RGAA”, prioritize these (when applicable):

### Focus visibility and obstruction
- **2.4.11 Focus Not Obscured (Minimum) (AA)**: ensure focused element isn’t hidden by sticky headers/footers, overlays, cookie banners.
	- Typical fix: add `scroll-margin-top` on focusable elements/anchors, or adjust sticky layout; ensure overlays don’t cover focus.
- (Optional) **2.4.12 (AAA)** and **2.4.13 (AAA)**: improved focus appearance and non-obscured focus.

### Dragging alternatives
- **2.5.7 Dragging Movements (AA)**: if an action requires drag (slider, drag-and-drop), provide a non-drag alternative (buttons, keyboard, stepper input).

### Target size
- **2.5.8 Target Size (Minimum) (AA)**: ensure touch targets have sufficient size/spacing.
	- Typical fix: increase padding/line-height, ensure clickable area matches visual affordance, avoid tiny icon-only targets.

### Consistent help
- **3.2.6 Consistent Help (A)**: help mechanisms (contact link, chat, FAQ) should be placed consistently across pages where present.

### Redundant entry
- **3.3.7 Redundant Entry (A)**: avoid requiring users to re-enter information already provided.
	- Typical fix: auto-fill from previous step, provide “same as” checkbox, persist values.

### Accessible authentication
- **3.3.8 Accessible Authentication (Minimum) (AA)**: don’t rely on cognitive function tests (remembering passwords, puzzles) without alternatives.
	- Typical fix: allow password managers/paste, use “email magic link”, passkeys, or one-time codes; avoid blocking copy/paste.
- (Optional) **3.3.9 (AAA)**: stronger version.

### Dynamic updates
- For inline status updates (e.g., “added to cart”), use a proper live region (`aria-live`) when needed.
- Don’t spam screen readers: prefer `polite` for non-critical updates.

### Language
- Set `<html lang="…">` for the default language.
- Mark language changes in content with `lang`.

## Quality bar before declaring a fix “done”
- The element has correct **name/role/value** in the accessibility tree.
- All functionality is reachable and operable with keyboard alone.
- Screen reader output is understandable (no duplicate/contradictory labels).
- RGAA tests that were failing are re-run and now pass.

## How to communicate fixes (recommended)
When responding, include:
- RGAA test id(s) targeted
- What changed (file/component)
- Why it satisfies the test methodology
- A quick “how to verify” checklist (keyboard + SR sanity)
