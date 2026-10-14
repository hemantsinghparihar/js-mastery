// Day 2 — my own 10 tricky coercion snippets
// Write all 10 FIRST, predict all 10, THEN run: node day-02/05-my-coercion-snippets.js
// Missed more than 2? Review the missed rules, then fill in Round 2.
//
// show() prints strings WITH quotes, so "1" and 1 look different.

function run(label, fn) {
  try {
    fn();
  } catch (e) {
    console.log(`${label} threw ${e.name}: ${e.message}`);
  }
}

function show(label, value) {
  console.log(label, typeof value === "string" ? JSON.stringify(value) : value);
}

// ================= Round 1 =================

run("1", () => show("1:", undefined /* replace with your expression */));
run("2", () => show("2:", undefined));
run("3", () => show("3:", undefined));
run("4", () => show("4:", undefined));
run("5", () => show("5:", undefined));
run("6", () => show("6:", undefined));
run("7", () => show("7:", undefined));
run("8", () => show("8:", undefined));
run("9", () => show("9:", undefined));
run("10", () => show("10:", undefined));
/*
PREDICTION:
  1:
  2:
  3:
  4:
  5:
  6:
  7:
  8:
  9:
  10:

ACTUAL:

CORRECT? __ / 10

MISSED — which rule did I get wrong?

*/

// ================= Round 2 (only if Round 1 < 8/10) =================

/*
PREDICTION:

ACTUAL:

CORRECT? __ / 10
*/
