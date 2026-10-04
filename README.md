# js-mastery

I'm doing 30 days of JavaScript depth. Commits will be small and daily.

This is not a tutorial follow-along. Every day is two focused hours: learn a concept, then prove it by **predicting output before running code** or **implementing it from scratch**: polyfills, utilities and a Promise of my own. The commit history is the record.

## The plan

| Week | Focus | By the end of the week I can… |
| --- | --- | --- |
| **1** | Hoisting, TDZ, scope, closures, `this`, currying | Predict any hoisting/closure snippet cold; write `call` / `apply` / `bind` and a generic `curry` from memory |
| **2** | Objects, prototypes, collections, polyfills | Write `deepClone` (circular refs, dates), `map` / `filter` / `reduce` polyfills, and explain `__proto__` vs `prototype` |
| **3** | Event loop, Promises, async/await | Predict task/microtask ordering; implement `Promise.all` & friends, a `MyPromise` class, `debounce`, `throttle`, `retry`, `asyncLimit` |
| **4** | TypeScript depth + interview simulation | Write generics, mapped and conditional types with `infer`; pass a timed 60-minute interview simulation |

## Progress

| Day | Topic | Status |
| --- | --- | --- |
| [01](day-01/) | Hoisting, TDZ, scope | In progress |
| 02 | Primitives, coercion, equality | |
| 03 | Functions: declarations, expressions, arrows, HOFs | |
| 04 | Closures | |
| 05 | `this`, `call` / `apply` / `bind` polyfills | |
| 06 | Currying, `compose`, `pipe` | |
| 07 | Week 1 review | |

Weeks 2–4 get added here as I reach them.

## Repo structure

```text
js-mastery/
├── day-01/              one folder per day
│   ├── NOTES.md         the day's plan, checklist and what I learned in my own words
│   ├── 01-*.js          one topic per file
│   └── reproduce.js     the snippet I have to explain before closing the laptop
├── day-02/ …
├── utils/               (Day 20) my own async utility library
└── scratch/             experiments: every idea gets tried here first
```

## How each exercise works

Every predict-the-output file follows the same loop:

```js
// ---------- Snippet B ----------
console.log("B1:", typeof ghost);
/*
PREDICTION:
  B1: …          ← written before running anything
WHY:
  …              ← memory phase vs execution phase, in my own words
*/
```

1. **Predict:** write what each labelled line prints.
2. **Run:** `node day-01/02-let-const-tdz.js`
3. **Explain:** write the reason down, and keep the wrong guesses in. A miss is where the learning happens.

Snippets that throw run inside a small `run()` helper. It catches the error, so one throw doesn't stop the rest of the file.

## Running it

Requires [Node.js](https://nodejs.org/) (v22+). No dependencies.

```bash
git clone <this-repo>
cd js-mastery
node day-01/01-var-hoisting.js
```

## Resources

- [Namaste JavaScript](https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP) by Akshay Saini
- [javascript.info](https://javascript.info)
- [jscodechallenges.vercel.app](https://jscodechallenges.vercel.app)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) by Kyle Simpson
- Jake Archibald, ["In the Loop"](https://www.youtube.com/watch?v=cCOL7MC4Pl0) (JSConf.Asia)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript) by Basarat Ali, and [Type Challenges](https://github.com/type-challenges/type-challenges)
