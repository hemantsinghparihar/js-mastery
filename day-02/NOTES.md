# Day 2 — Tuesday · Primitives, coercion, equality

## Session plan (2h)
- [ ] [20m] MDN "Equality comparisons and sameness" — read the actual algorithm (IsLooselyEqual), not the summary
- [ ] [60m] Every challenge in the Primitives section of jscodechallenges, cold. MDN only, no tutorials → `06-jscodechallenges-primitives.js`
- [ ] [30m] Write 10 tricky coercion snippets, predict all 10 → `05-my-coercion-snippets.js`. Missed more than 2? Review, then write 10 more
- [ ] [10m] Log the session, commit today's work

## Predict-the-output files
- [ ] `01-primitives-typeof.js`
- [ ] `02-nan.js`
- [ ] `03-loose-vs-strict-equality.js`
- [ ] `04-plus-and-to-primitive.js`

## Concepts to master today
- [ ] The 7 primitives: string, number, bigint, boolean, undefined, null, symbol
- [ ] Coercion rules for `==` vs `===` (memorize the sane ones, look up the crazy ones)
- [ ] NaN: what it is, why `NaN !== NaN`, `Number.isNaN` vs `isNaN`
- [ ] `typeof` quirks: `typeof null === "object"`, and why

## Exit check
- [ ] `reproduce.js` — walk through `[] + {}` step by step (ToPrimitive → valueOf → toString → concatenation), not just the answer

## One thing learned (in my own words)

