// Day 2 — predict-the-output #3
// Topic: == vs === — the IsLooselyEqual algorithm
// Predict every labelled line BEFORE running: node day-02/03-loose-vs-strict-equality.js
//
// Every snippet runs inside run(), which catches errors so one throw
// doesn't stop the rest of the file. A snippet may print a value, throw,
// or print something and THEN throw. For a throw, predict the error type
// (ReferenceError / TypeError / ...) — the exact message is a bonus.
//
// For every == line, name the algorithm step that fires, e.g.
// "boolean → ToNumber", "object vs primitive → ToPrimitive", "null/undefined rule".

function run(label, fn) {
  try {
    fn();
  } catch (e) {
    console.log(`${label} threw ${e.name}: ${e.message}`);
  }
}

// ---------- Snippet A ----------
run("A", () => {
  console.log("A1:", 1 == "1");
  console.log("A2:", 1 === "1");
  console.log("A3:", 0 == "");
  console.log("A4:", 0 == "0");
  console.log("A5:", "" == "0");
  console.log("A6:", false == "0");
  console.log("A7:", false == "");
});
/*
PREDICTION:
  A1:
  A2:
  A3:
  A4:
  A5:
  A6:
  A7:
WHY:

*/

// ---------- Snippet B ----------
run("B", () => {
  console.log("B1:", null == 0);
  console.log("B2:", null >= 0);
  console.log("B3:", null > 0);
  console.log("B4:", undefined == 0);
  console.log("B5:", null == false);
  console.log("B6:", undefined == null);
  console.log("B7:", undefined >= 0);
});
/*
PREDICTION:
  B1:
  B2:
  B3:
  B4:
  B5:
  B6:
  B7:
WHY:

*/

// ---------- Snippet C ----------
run("C", () => {
  console.log("C1:", [] == false);
  console.log("C2:", [] == ![]);
  console.log("C3:", [0] == false);
  console.log("C4:", [1] == 1);
  console.log("C5:", [1, 2] == "1,2");
  console.log("C6:", ({}) == "[object Object]");
  console.log("C7:", [null] == "");
});
/*
PREDICTION:
  C1:
  C2:
  C3:
  C4:
  C5:
  C6:
  C7:
WHY:

*/

// ---------- Snippet D ----------
run("D", () => {
  const a = [];
  const b = a;
  console.log("D1:", [] == []);
  console.log("D2:", ({}) === ({}));
  console.log("D3:", a == b);
  console.log("D4:", [1] === [1]);
});
/*
PREDICTION:
  D1:
  D2:
  D3:
  D4:
WHY:

*/

// ---------- Snippet E ----------
run("E", () => {
  console.log("E1:", true == "1");
  console.log("E2:", true == "true");
  console.log("E3:", 2 == true);
});
/*
PREDICTION:
  E1:
  E2:
  E3:
WHY:

*/

// ---------- Think about ----------
// A3, A4 and A5 together show that == is not transitive. Explain.
// Then write IsLooselyEqual(x, y) from memory as a numbered list of steps
// (same type? null/undefined? number vs string? boolean? object vs primitive?).
/*
ANSWER:

*/

/*
ACTUAL (paste output of: node day-02/03-loose-vs-strict-equality.js):

CORRECT? __ / 28
*/
