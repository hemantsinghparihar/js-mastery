// Day 1 — predict-the-output #5
// Topic: block scope vs function scope
// Predict every labelled line BEFORE running: node day-01/05-block-vs-function-scope.js
//
// Every snippet runs inside run(), which catches errors so one throw
// doesn't stop the rest of the file. A snippet may print a value, throw,
// or print something and THEN throw. For a throw, predict the error type
// (ReferenceError / TypeError / ...) — the exact message is a bonus.

function run(label, fn) {
  try {
    fn();
  } catch (e) {
    console.log(`${label} threw ${e.name}: ${e.message}`);
  }
}

// ---------- Snippet A ----------
run("A", () => {
  if (true) {
    var a = 1;
    let b = 2;
  }
  console.log("A1:", a);
  console.log("A2:", typeof b);
});
/*
PREDICTION:
  A1: 1
  A2: undefined  
WHY: var is function-scoped, so a is accessible outside the if block. let is block-scoped, so b is not accessible outside the if block. and type of returns undefined when something is not accessible in scope.

*/

// ---------- Snippet B ----------
run("B", () => {
  {
    let inside = 5;
  }
  console.log("B1:", inside);
});
/*
PREDICTION:
  B1: Reference error: inside is not defined
WHY: since inside is defined with let it is block scoped and accessing outside is not possible so it throws reference error.

*/

// ---------- Snippet C ----------
run("C", () => {
  var v = 1;
  {
    var v = 2;
  }
  console.log("C1:", v);

  let w = 1;
  {
    let w = 2;
  }
  console.log("C2:", w);
});
/*
PREDICTION:
  C1:2
  C2:1
WHY: var is functional scoped so the  later var updates the first value of v to 2 but w is let defined so the later w is a different variable and does not update the first value of w so it remains 1.

*/

// ---------- Snippet D ----------
run("D", () => {
  for (let j = 0; j < 2; j++) {}
  console.log("D1:", typeof j);
});
/*
PREDICTION:
  D1: undefined 
WHY: cause j is defined with let and it is block scoped so it is not accessible outside the for loop and the type of returns undefined for such cases.

*/

// ---------- Snippet E ----------
run("E", () => {
  switch (2) {
    case 1:
      let msg = "one";
      break;
    case 2:
      msg = "two";
      console.log("E1:", msg);
  }
});
/*
PREDICTION:
  E1: reference error: msg is not defined
WHY: The variable msg is declared with let in the case 1 block, but when the code reaches case 2, msg is not defined in that scope, leading to a ReferenceError.

*/

// ---------- Snippet F ----------
run("F", () => {
  function outer() {
    var x = 1;
    function inner() {
      var x = 2;
    }
    inner();
    return x;
  }
  console.log("F1:", outer());
});
/*
PREDICTION:
  F1: 1
WHY: The variable x in the outer function is not affected by the inner function's x, as they are in different scopes. Therefore, outer() returns the value of x from its own scope, which is 1.

*/

// ---------- Snippet G ----------
run("G", () => {
  try {
    throw new Error("boom");
  } catch (err) {
    var fromCatch = "caught";
    let onlyHere = 1;
  }
  console.log("G1:", fromCatch);
  console.log("G2:", typeof onlyHere);
});
/*
PREDICTION:
  G1:caught
  G2: undefined
WHY: i think the throw part takes code control to catch variable assignements occure there and next the console part gets executed

*/

// ---------- Think about (can't run — breaks the whole file) ----------
// Why does this fail before ANY line of the file runs?
//   switch (x) { case 1: let m = 1; break; case 2: let m = 2; }
/*
ANSWER:

*/

/*
ACTUAL (paste output of: node day-01/05-block-vs-function-scope.js):

CORRECT? __ / 10
*/
