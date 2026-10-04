// Day 1 — predict-the-output #1
// Topic: var hoisting (declared as undefined in the memory phase)
// Predict every labelled line BEFORE running: node day-01/01-var-hoisting.js
// None of these throw, so the whole file runs top to bottom.

// ---------- Snippet A ----------
console.log("A1:", x);
var x = 5;
console.log("A2:", x);
/*
PREDICTION:
  A1: undefined
  A2: 5
WHY:variable defined with var is undefined before it is initialized.

*/

// ---------- Snippet B ----------
var color = "red";
function paint() {
  console.log("B1:", color);
  var color = "blue";
  console.log("B2:", color);
}
paint();
console.log("B3:", color);
/*
PREDICTION:
  B1:undefined
  B2:blue 
  B3: red
WHY:

*/

// ---------- Snippet C ----------
function check() {
  console.log("C1:", flag);
  if (false) {
    var flag = true;
  }
  console.log("C2:", flag);
}
check();
/*
PREDICTION:
  C1: undefined
  C2: undefined
WHY: The variable `flag` is hoisted to the top of the function scope and initialized to `undefined`. Even though the `if` statement is false, the assignment `var flag = true;` is still executed due to hoisting.

*/

// ---------- Snippet D ----------
var count = 1;
var count;
console.log("D1:", count);
/*
PREDICTION: 
  D1:1 
WHY: Memory phase. JS scans the code and finds count declared twice. A variable can only exist once in a scope, so it creates count once and sets it to undefined. The second declaration adds nothing new.

*/

// ---------- Snippet E ----------
console.log("E1:", typeof greet);
var greet = "hello";
function greet() {
  return "hi";
}
console.log("E2:", typeof greet);
/*
PREDICTION:
  E1: undefined 
  E2: string
WHY: undefined cause greet was not defined at the time of console and the type of undefined is undefined. and since greet returns string , its type is string

*/

// ---------- Snippet F ----------
for (var i = 0; i < 3; i++) {}
console.log("F1:", i);
/*
PREDICTION:
  F1:3
WHY:cause by the time code consoled F1 the value of i became 3

*/

// ---------- Snippet G ----------
function outer() {
  var secret = 42;
} 
outer();
console.log("G1:", typeof secret);
/*
PREDICTION:
  G1: undefined
WHY: The variable `secret` is defined within the scope of the `outer` function and is not accessible from outside that function.

*/

// ---------- Snippet H ----------
var total = 10;
function add() {
  total = total + 5;
  return total;
  var total;
}
console.log("H1:", add());
console.log("H2:", total);
/*
PREDICTION:
  H1:NAN 
  H2:10
WHY: cause in add total is undefined . efore a function runs, JS makes a pass over its body and sets up the scope. It finds every var declaration and creates the variable, initialized to undefined. This is hoisting.
return total; ends the function at runtime, but the scope was built before any line ran. The unreachable var total; still counts.
H2 is 10 cause the total variable in the global scope is not affected by the local total variable in the add function.

*/

/*
ACTUAL (paste output of: node day-01/01-var-hoisting.js):

CORRECT? __ / 14
*/
