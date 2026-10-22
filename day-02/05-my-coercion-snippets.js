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

run("1", () => show("1:", parseInt("12px") /* replace with your expression */));
run("2", () => show("2:", undefined + 1));
run("3", () => show("3:", NaN !== NaN));
run("4", () => show("4:", [] + []));

/*
PREDICTION:
  1: 12 // cause parse it cuts off other things then the number
  2: NaN // cause undefined represents a state of being uninitialized or non-existent
  3: true // cause NaN is not equals to anything while compared, even when compared to itself.
  4:  ""


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
