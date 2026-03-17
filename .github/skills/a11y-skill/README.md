# a11y skill (RGAA 4.1.2 + WCAG)

Agent skill for **web accessibility auditing and remediation** with a RGAA-first workflow:
- Maps issues to [France's **RGAA 4.1.2**](https://accessibilite.numerique.gouv.fr/) (thématique → critère → tests)
- Aligns fixes with **WCAG 2.1** expectations
- Optionally suggests best-effort hardening toward **WCAG 2.2** (when requested)

## Contents
- `SKILL.md`: operating instructions (how the agent should audit, map to RGAA tests, and implement fixes)
- `Referentiel-RGAA-4.1.2.md`: local copy of the RGAA 4.1.2 criteria/tests wording & methodology used as the primary reference

## How to use
1. Put this folder in your agent “skills” directory.
2. When you ask for accessibility help, explicitly reference RGAA when needed, e.g.:
   - “Audit this page against RGAA 4.1.2 and list failing tests with evidence.”
   - “Fix the keyboard/focus issues and cite the RGAA test ids you targeted.”
   - “Go beyond RGAA and suggest WCAG 2.2 improvements.”

Expected output style (recommended):
- RGAA test id(s) → status (Conforme / Non conforme / Non applicable)
- Evidence (selectors/steps)
- Concrete code changes + a short verification checklist (keyboard + SR sanity)

## Source / licensing note
`Referentiel-RGAA-4.1.2.md` is derived from the [official RGAA documentation](https://github.com/DISIC/accessibilite.numerique.gouv.fr). (MIT)
