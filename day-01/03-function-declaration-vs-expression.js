// Day 1 — predict-the-output #3
// Topic: function declarations (fully hoisted) vs function expressions (not)
// Predict every labelled line BEFORE running: node day-01/03-function-declaration-vs-expression.js
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
  console.log("A1:", sayHi());
  function sayHi() {
    return "hi";
  }
});
/*
PREDICTION:
  A1: hi
WHY: prints hi cause functions in js are hoisted completely , in the meomory allocation phase sayHi is assigned the whole function, so it happens before evemn one line of code is executed so calling a function before it is defined results in normal execution of function

*/

// ---------- Snippet B ----------
run("B", () => {
  console.log("B1:", typeof sayBye);
  console.log("B2:", sayBye());
  var sayBye = function () {
    return "bye";
  };
});
/*
PREDICTION:
  B1: undefined 
  B2: undefined -- this is wrong prediction 
  B2 : TypeError: sayBye is not a function because sayBye is hoisted with undefined and when we try to call it as a function it throws type error, this - undefined() gives type error.
WHY: a function expression defined with var behaves similer to a ariable defined with var it is hoisted with undefined , so the type of undefined is as well undefined and that is the reason why both above are undefined

*/

// ---------- Snippet C ----------
run("C", () => {
  console.log("C1:", wave());
  const wave = () => "wave";
});
/*
PREDICTION:
  C1:Reference Error  
WHY: cause wave is hoisted but stays in the TDZ until const wave = () => "wave" runs, so reading it first throws a ReferenceError.

*/

// ---------- Snippet D ----------
run("D", () => {
  var factorial = function inner(n) {
    return n <= 1 ? 1 : n * inner(n - 1); // 3*(2*(1)) )
  };
  console.log("D1:", typeof inner);
  console.log("D2:", factorial(3));
});
/*
PREDICTION:
  D1: function
  D2: 6
WHY: inner is a function so the type of inner will be a function and factorial of 3 is 6 

*/

// ---------- Snippet E ----------
run("E", () => {
  function pick() {
    return 1;
  }
  console.log("E1:", pick());
  function pick() {
    return 2;
  }
});
/*
PREDICTION:
  E1:2
WHY: cause the later pick function shadows the upper one when they are hoisted in order so the pick cal referes to the later pick.

*/

// ---------- Snippet F ----------
run("F", () => {
  function outer() {
    return inner();
    function inner() {
      return "inner ran";
    }
  }
  console.log("F1:", outer());
});
/*
PREDICTION:
  F1: inner ran
WHY: outer is caled and it returna inner function call which already returns the string "inner ran" ,since inner is function declaration so it is hoisted and calling it before it is initialized works perfectly fine.

*/

/*
ACTUAL (paste output of: node day-01/03-function-declaration-vs-expression.js):

CORRECT? __ / 8
*/
