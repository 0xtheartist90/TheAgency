# AGENTS.md

This file defines how agents should work in this repository.

It is also written so Richie can use it as a change checklist before editing code.

## Mission

Make safe, well-scoped changes with clear reasoning, real verification, and useful review.

When `superpowers` skills are available in the current Codex session, agents should prefer those workflows for planning, debugging, review, and verification.
Agents should explicitly announce which `superpowers` skill they are using before doing substantive work.

## Core Rules

1. Plan before editing.
2. Debug by finding root cause, not by guessing.
3. Make the smallest change that solves the actual problem.
4. Verify before claiming success.
5. Review for regressions and edge cases, not just style.
6. Leave the codebase clearer than you found it.
7. Prefer `superpowers` workflows when available.
8. State the chosen `superpowers` skill out loud at the start of the task.

## Standard Operating Procedure

### 1. Understand the task

Before editing:
- restate the goal clearly
- inspect the relevant files
- identify constraints
- identify likely risks

### 2. Write a plan

Every non-trivial change needs a brief written plan.

Minimum plan format:

```md
Goal:
Files to inspect:
Implementation steps:
Risks:
Verification:
```

Do not start implementation until the task is understood well enough to produce this.

### 3. Choose the right mode of work

#### Feature work

Use when behavior is being added or changed.

Required:
- inspect similar code first
- define expected user-facing behavior
- keep scope tight
- verify in browser and with commands

#### Bugfix work

Use when current behavior is incorrect.

Required:
- reproduce the issue first
- document symptom and expected behavior
- identify root cause before editing
- verify the original failure is resolved

Forbidden:
- speculative fixes without evidence

#### Refactor work

Use when behavior should remain the same.

Required:
- keep behavior unchanged
- separate from feature work where possible
- run lint and type-check after changes

#### Review work

Use when checking proposed changes.

Primary focus:
- correctness
- regressions
- missing error handling
- edge cases
- excessive complexity
- insufficient verification

Style comments are secondary to correctness.

## Debugging Procedure

When something is broken:

1. Reproduce it.
2. Capture the exact symptom.
3. Identify where it originates.
4. Compare expected vs actual behavior.
5. Form a root-cause hypothesis.
6. Confirm the hypothesis with code or runtime evidence.
7. Apply the smallest fix.
8. Re-verify the original scenario.

Debugging notes format:

```md
Symptom:
Expected:
Actual:
Source file(s):
Root cause:
Fix:
Verification:
```

## Verification Requirements

Do not claim work is complete without fresh verification.

Default verification commands for this repo:

```bash
npm run lint
npm run type-check
```

Use this when relevant:

```bash
npm run build
```

If a browser-visible change was made, also verify the UI behavior manually in dev mode.

## Code Review Standard

A proper review must ask:

- Does the change solve the requested problem?
- Can it break existing behavior?
- Are there missing empty, loading, or error states?
- Is the change larger than necessary?
- Is the naming clear and maintainable?
- Was the work actually verified?

Review output should prioritize findings, not compliments.

Suggested finding format:

```md
Severity:
File:
Issue:
Why it matters:
Suggested correction:
```

## Scope Control

Agents must avoid:
- unrelated refactors
- wide renames without need
- touching multiple subsystems unnecessarily
- mixing bugfixes and cleanup unless justified

Prefer:
- one problem at a time
- one clear objective per change
- one verification story per objective

## Repo-Specific Notes

- Main app code lives in `src/app`, `src/components`, `src/hooks`, and `src/lib`.
- Use `npm` for commands in this project.
- The dev server runs with `npm run dev`.
- This repository currently looks like a Next.js starter, so agents should inspect existing patterns before introducing new structure.
- When available, prefer `superpowers` support for:
  - planning before implementation
  - step-by-step debugging
  - code review
  - verification before completion
- Do not silently imitate `superpowers`. If using it, say which skill is being used.
- Current glassmorphism direction:
  - prioritize strong frosted readability over performance for now
  - avoid transparent panels that let the background read clearly through text areas
  - the current baseline uses very strong backdrop blur with dense smoked fill in [src/app/globals.css](/Users/richieparinya/Documents/New%20project/TheAgency/src/app/globals.css)
  - treat this as the visual default unless the user explicitly asks to re-tune it

## Richie-Friendly Change Checklist

Before coding:
- I know what the task is.
- I inspected the relevant files.
- I wrote a short plan.

While coding:
- I am changing only what is needed.
- I can explain why each edit exists.
- I am not guessing at the fix.

Before finishing:
- I tested the real behavior.
- I ran lint.
- I ran type-check.
- I reviewed for regressions.

## Default Expectation For Agents

If the request is vague, do not jump into big edits.

Instead:
1. inspect context
2. propose or write a short plan
3. execute in small safe steps
4. verify with evidence

This repository should favor disciplined execution over speed theater.

When `superpowers` is available, default to that workflow instead of improvising a process.
Example:
- "I’m using the `superpowers:systematic-debugging` skill for this bug."
- "I’m using the `superpowers:writing-plans` skill before implementation."
- "I’m using the `superpowers:verification-before-completion` skill before I claim this is done."
