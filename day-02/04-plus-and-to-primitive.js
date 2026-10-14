// Day 2 — predict-the-output #4
// Topic: the + operator, ToPrimitive, valueOf / toString, Symbol.toPrimitive
// Predict every labelled line BEFORE running: node day-02/04-plus-and-to-primitive.js
//
// Every snippet runs inside run(), which catches errors so one throw
// doesn't stop the rest of the file. A snippet may print a value, throw,
// or print something and THEN throw. For a throw, predict the error type
// (ReferenceError / TypeError / ...) — the exact message is a bonus.
//
// show() prints strings WITH quotes, so "1" and 1 look different.
// Your prediction must get the type right too: "1" is not 1.

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

// ---------- Snippet A ----------
run("A", () => {
  show("A1:", 1 + "2");
  show("A2:", "3" - 1);
  show("A3:", "3" * "4");
  show("A4:", true + 1);
  show("A5:", "5" + null);
  show("A6:", +"");
  show("A7:", +" 42 ");
  show("A8:", +"4 2");
  show("A9:", 1 + 2 + "3");
  show("A10:", "1" + 2 + 3);
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
  A8:
  A9:
  A10:
WHY:

*/

// ---------- Snippet B ----------
run("B", () => {
  show("B1:", [] + []);
  show("B2:", [] + {});
  show("B3:", ({}) + []);
  show("B4:", [1, 2] + [3]);
  show("B5:", [] + 1);
  show("B6:", [2] * [3]);
  show("B7:", [] - 1);
  show("B8:", ({}) - 1);
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
  B8:
WHY:

*/

// ---------- Snippet C ----------
run("C", () => {
  const obj = {
    valueOf() {
      return 42;
    },
    toString() {
      return "str";
    },
  };
  show("C1:", obj + 1);
  show("C2:", `${obj}`);
  show("C3:", obj + "");
  show("C4:", String(obj));
  show("C5:", obj * 2);
});
/*
PREDICTION:
  C1:
  C2:
  C3:
  C4:
  C5:
WHY:

*/

// ---------- Snippet D ----------
// Each line first logs the hint it receives, THEN show() prints the result.
// Predict both: the hint ("number" / "string" / "default") and the result.
run("D", () => {
  const t = {
    [Symbol.toPrimitive](hint) {
      console.log("  hint:", hint);
      if (hint === "number") return 10;
      if (hint === "string") return "ten";
      return "default!";
    },
  };
  show("D1:", +t);
  show("D2:", `${t}`);
  show("D3:", t + "");
});
/*
PREDICTION:
  hint:       D1:
  hint:       D2:
  hint:       D3:
WHY:

*/

// ---------- Snippet E ----------
run("E", () => {
  show("E1:", typeof (new Date(0) + 0));
  show("E2:", typeof (new Date(0) - 0));
});
/*
PREDICTION:
  E1:
  E2:
WHY:

*/

// ---------- Snippet F ----------
// eval runs the string as a statement, the same way a REPL line does.
run("F", () => {
  show("F1:", eval("{} + []"));
  show("F2:", eval("({} + [])"));
});
/*
PREDICTION:
  F1:
  F2:
WHY:

*/

// ---------- Think about ----------
// B2 and F1 look like the same expression but give different results.
// What does the parser decide `{}` is at the start of a statement?
/*
ANSWER:

*/

/*
ACTUAL (paste output of: node day-02/04-plus-and-to-primitive.js):

CORRECT? __ / 33
*/
