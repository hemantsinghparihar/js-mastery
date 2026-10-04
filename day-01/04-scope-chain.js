// Day 1 — predict-the-output #4
// Topic: scope chain — how JS walks up looking for a variable
// Predict every labelled line BEFORE running: node day-01/04-scope-chain.js
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
  const planet = "earth";
  function a() {
    function b() {
      return planet;
    }
    return b();
  }
  console.log("A1:", a());
});
/*
PREDICTION:
  A1: earth 
WHY: cause function returned the call of function b, and the call is valid and planet variable is in lexical scope of function b so earth gets consoled. basically this concept of lexical scope is a chain of scopes that are created when functions are defined, not when they are called. So, when b is called, it looks for planet in its own scope, then in the scope of a, and finally finds it in the global scope.

*/

// ---------- Snippet B ----------
run("B", () => {
  const who = "outside";
  function speak() {
    return who;
  }
  function caller() {
    const who = "caller";
    return speak();
  }
  console.log("B1:", caller());
});
/*
PREDICTION:
  B1:outside 
WHY: cause when speak tries to search for who it searches from where speak function is defined not called, so speak first searches for it in its scope then looks out in global scope and finds it there.

*/ 

// ---------- Snippet C ----------
run("C", () => {
  let x = "outer"; 
  function middle() {
    let x = "middle";
    function inner() {
      return x;
    }
    return inner();
  }
  console.log("C1:", middle());
});
/*
PREDICTION:
  C1: middle
WHY: cause calling middle returns the x defined inside inner and since x is "middle" foe function inner so it consoles middle.

*/

// ---------- Snippet D ----------
run("D", () => {
  function find() {
    return missing;
  }
  console.log("D1:", find());
});
/*
PREDICTION:
  D1:ReferenceError: missing is not defined
WHY: cause missing is not defined at the time it is accessed by the code. 

*/

// ---------- Snippet E ----------
run("E", () => {
  function leak() {
    leaked = "oops";
  }
  leak();
  console.log("E1:", typeof leaked);
});
/*
PREDICTION:
  E1: string
WHY: cause leaked is assigned a value and becomes a property of the global object (window in browsers, global in Node.js). However in strict mode this would throw a ReferenceError because leaked is not declared with var, let, or const.

*/

// ---------- Snippet F ----------
run("F", () => {
  let n = 1;
  function inc() {
    n++;
  }
  inc();
  inc();
  console.log("F1:", n);
});
/*
PREDICTION:
  F1: 3
WHY: cause both the inc calls updates the same n variable that is in the outer scope on both.

*/

// ---------- Snippet G ----------
run("G", () => {
  let name = "outer";
  function greet(name) {
    return name;
  }
  console.log("G1:", greet());
});
/*
PREDICTION:
  G1: undefined
WHY: cause a parameter that was not passed at the time of calling function results in undefined not error. and since the inner name shadow the first one the returned value becomes undefined.

*/

/*
ACTUAL (paste output of: node day-01/04-scope-chain.js):

CORRECT? __ / 7
*/
