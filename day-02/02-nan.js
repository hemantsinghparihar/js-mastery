// Day 2 — predict-the-output #2
// Topic: NaN — what produces it, why NaN !== NaN, isNaN vs Number.isNaN
// Predict every labelled line BEFORE running: node day-02/02-nan.js
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
  console.log("A1:", NaN === NaN);
  console.log("A2:", NaN == NaN);
  console.log("A3:", Object.is(NaN, NaN));
  console.log("A4:", [NaN].includes(NaN));
  console.log("A5:", [NaN].indexOf(NaN));
});
/*
PREDICTION:
  A1: false // NaN doesn't equal anything
  A2:false
  A3: true // This is one of the important differences between Object.is() and ===.
  A4: true // includes uses SameValueZero equality algorithm, which treats NaN as equal to NaN.
  A5: -1 // indexOf() uses the traditional ===-style comparison. Therefore it can't find it and returns: -1
WHY:

*/

// ---------- Snippet B ----------
run("B", () => {
  console.log("B1:", isNaN("hello"));
  console.log("B2:", Number.isNaN("hello"));
  console.log("B3:", isNaN(undefined));
  console.log("B4:", Number.isNaN(undefined));
  console.log("B5:", isNaN(""));
  console.log("B6:", isNaN(null));
  console.log("B7:", isNaN([]));
  console.log("B8:", isNaN({}));
});
/*
PREDICTION:
  B1: true 
  B2: false Because Number.isNaN() is not asking "is this NOT a number?"
    It's asking a much more specific question:
    "Is this value the special numeric value NaN?"
  B3: true // isNaN(undefined) returns true because undefined is not a number.
  B4: false // Number.isNaN(undefined) returns false because undefined is not the special numeric value NaN.
  B5:false  // cause empty string converts to 0 and 0 is a number 
  B6: false // cause null converts to 0 and 0 is a number
  B7: false // cause empty array
  B8: true // cause object is not a number and empty object gets converted to string object object
WHY:

*/

// ---------- Snippet C ----------
run("C", () => {
  console.log("C1:", 0 / 0);
  console.log("C2:", "abc" * 2);
  console.log("C3:", parseInt("12px"));
  console.log("C4:", Number("12px"));
  console.log("C5:", undefined + 1);
  console.log("C6:", null + 1);
  console.log("C7:", Number(""));
  console.log("C8:", Number("   "));
});
/*
PREDICTION:
  C1: NaN
  C2: NaN
  C3: 12 
  C4: NaN
  C5: NaN
  C6: 1 // cause the + operator converts null to 0.
  C7: 0
  C8: 0
WHY:

*/

// ---------- Snippet D ----------
run("D", () => {
  const v = NaN;
  console.log("D1:", v !== v);
  console.log("D2:", Object.is(0, -0));
  console.log("D3:", 0 === -0);
  console.log("D4:", 1 / -0);
});
/*
PREDICTION:
  D1: true // NaN is the only value that is not equal to itself
  D2: false // Object.is() treats 0 and -0 as different values, so it returns false.
  D3: true // The === operator treats 0 and -0 as equal.
  D4: -Infinity // Dividing a positive number by negative zero results in negative infinity.
WHY: 

*/

// ---------- Think about ----------
// Write myIsNaN(x) that behaves exactly like Number.isNaN, WITHOUT using
// isNaN or Number.isNaN. (Hint: D1.) Then: why does includes find NaN
// but indexOf doesn't? Which equality algorithm does each one use?
/*
ANSWER:
 function myIsNaN(x){
   // so we take x here and then need to tell if it is a nan without using the inbuilt function
   // Nan is the only value that is not equals to itself
   return x !== x // true if it is NaN
  }
   // so what we will do is pass a value to this function and that will check if it is Nan and will return a boolean based on that 
   myIsNaN(2)
*/

/*
ACTUAL (paste output of: node day-02/02-nan.js):

CORRECT? __ / 25
*/
