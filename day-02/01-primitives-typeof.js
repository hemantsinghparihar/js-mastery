// Day 2 — predict-the-output #1
// Topic: the 7 primitives, typeof and its quirks
// Predict every labelled line BEFORE running: node day-02/01-primitives-typeof.js
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
  console.log("A1:", typeof "hello");
  console.log("A2:", typeof 42);
  console.log("A3:", typeof 10n);
  console.log("A4:", typeof true);
  console.log("A5:", typeof undefined);
  console.log("A6:", typeof null);
  console.log("A7:", typeof Symbol("id"));
});
/*
PREDICTION:
  A1: string
  A2: number
  A3: bigint
  A4: boolean
  A5: undefined
  A6: object
  A7: symbol
WHY:

*/

// ---------- Snippet B ----------
run("B", () => {
  console.log("B1:", typeof NaN);
  console.log("B2:", typeof []);
  console.log("B3:", typeof function () {});
  console.log("B4:", typeof class {});
  console.log("B5:", typeof new String("x"));
  console.log("B6:", typeof String("x"));
});
/*
PREDICTION:
  B1: number
  B2: object
  B3: function
  B4: function
  B5: object
  B6: string
WHY:
  B3:
  B4:
  B5:
  B6:
WHY:

*/

// ---------- Snippet C ----------
run("C", () => {
  let s = "hi";
  s[0] = "H";
  console.log("C1:", s);
  console.log("C2:", s.toUpperCase());
  console.log("C3:", s);

  let n = 5;
  n.foo = 1;
  console.log("C4:", n.foo);
});
/*
PREDICTION:
  C1: Hi
  C2:HI
  C3:Hi
  C4:
WHY:

*/

// ---------- Snippet D ----------
run("D", () => {
  console.log("D1:", null == undefined);
  console.log("D2:", null === undefined);
  console.log("D3:", Number(null));
  console.log("D4:", Number(undefined));
  console.log("D5:", typeof notDeclaredAnywhere);
});
/*
PREDICTION:
  D1:true // cause loose equality have a rule to teat both null and undefined as equal, it is part of the algorithm
  D2:false
  D3: 0 //This is another special conversion rule: null converts to 0 when explicitly converted to a number.
  D4: NaN //null → intentional absence → 0
undefined → no value provided → NaN when converted to a number.
  D5: undefined //notDeclaredAnywhere is not defined anywhere, so typeof returns "undefined" instead of throwing a ReferenceError.
WHY:

*/

// ---------- Snippet E ----------
run("E", () => {
  const sym = Symbol("id");
  console.log("E1:", String(sym));
  console.log("E2:", "" + sym);
});
/*
PREDICTION:
  E1: Symbol(id)
  E2: TypeError: Cannot convert a Symbol value to a string.  //JavaScript does not implicitly convert a Symbol to a string in operations like +, because that could accidentally hide a mistake.
WHY:

*/

// ---------- Snippet F ----------
run("F", () => {
  console.log("F1:", 1n == 1);
  console.log("F2:", 1n === 1);
  console.log("F3:", 10n + 5);
});
/*
PREDICTION:
  F1: true
  F2: false // cause there types are different
  F3: it will be an type error, because you cannot mix BigInt and Number types in arithmetic operations.
WHY:

*/

// ---------- Think about ----------
// Why is typeof null === "object"? Is null actually an object?
// (Hint: look up how values were tagged in the very first JS engine.)
// And how would you reliably check "is this value null"?
/*
ANSWER:

*/

/*
ACTUAL (paste output of: node day-02/01-primitives-typeof.js):

CORRECT? __ / 27
*/
