// Day 1 — predict-the-output #2
// Topic: let/const and the Temporal Dead Zone
// Predict every labelled line BEFORE running: node day-01/02-let-const-tdz.js
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
  console.log("A1:", score);
  let score = 10;
});
/*
PREDICTION:
  A1:A threw ReferenceError: Cannot access 'score' before initialization
WHY:score is hoisted but stays in the TDZ until let score = 10 runs, so reading it first throws a ReferenceError.

*/

// ---------- Snippet B ----------
run("B", () => {
  console.log("B1:", typeof ghost);
  console.log("B2:", typeof planet);
  let planet = "earth";
});
/*
PREDICTION:
  B1: undefined
  B2:B threw Reference Error
WHY: b1 printed undefined because typeof returs undefined if it is not able to find a undeclared variable , 
it is for safety reasons. b2 was un initialized before code tried to access it so threw reference error.


*/

// ---------- Snippet C ----------
run("C", () => {
  let level = "outer";
  {
    console.log("C1:", level);
    let level = "inner";
  }
});
/*
PREDICTION:
  C1:Reference Error
WHY: cause let is block scoped and ther eis a let defined in that block where we are consoling level before it is initialized with a value so on hoisting it gets into TDZ which results i reference error

*/

// ---------- Snippet D ----------
run("D", () => {
  function show() {
    return limit;
  }
  const limit = 99;
  console.log("D1:", show());
});
/*
PREDICTION:
  D1: 99
WHY: cause limit is initialized and defined before show is consoled and at the time of console it was present due to it lexical scope so it prints 99

*/

// ---------- Snippet E ----------
run("E", () => {
  function show() {
    return max;
  }
  console.log("E1:", show());
  const max = 100;
});
/*
PREDICTION:
  E1:reference error 
WHY:before max is is initialized with the value 100 the code tried to access it so it throws reference error 

*/

// ---------- Snippet F ----------
run("F", () => {
  const rate = 1;
  rate = 2;
  console.log("F1:", rate);
});
run("F", () => {
  const user = { name: "Hemant" };
  user.name = "Parihar"; 
  console.log("F2:", user.name);
});
/*
PREDICTION:
  F1: Type Error
  F2: parihar
WHY: cause in the first one we are reassigning the const variable with a complete new value which is not allowed and in the second one we are not reassigning the variable anything different we are just mutaing the state of it 

*/

// ---------- Snippet G ----------
run("G", () => {
  function area(width = height, height = 5) {
    return width * height;
  } 
  console.log("G1:", area());
});
/*
PREDICTION:
  G1:Reference Error
WHY: cause width and height function default parameters and ,
 these are evaluated left to right , so accessing any variable that is not initialized yet will result in reference error , 
 TDZ concept applies here

*/

// ---------- Snippet H ----------
run("H", () => {
  let counter = counter + 1;
  console.log("H1:", counter);
});
/*
PREDICTION:
  H1:Reference error cause cause we are trying to access counter in calculation part when its initial value is not defined  
WHY:

*/

// ---------- Think about (can't run — breaks the whole file) ----------
// What happens with this line, and WHY is it different from every
// snippet above?   const pi;
/*
ANSWER: let and const both create an uninitialized binding during the creation phase; the difference is that let allows that binding to be initialized later (even to undefined), while const requires initialization at its declaration.

And this is why const behaving differently from let in:

const x;

is not really a TDZ difference. Both have the TDZ. The difference is a separate language rule requiring a const initializer.

*/

/*
ACTUAL (paste output of: node day-01/02-let-const-tdz.js):

CORRECT? __ / 10
*/
