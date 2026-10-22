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
  A1: true // cause loose equality performs coersion first before comparing
  A2: false // no type coercion
  A3: true // cause empty string coerces to 0 
  A4: true
  A5: false
  A6: true // cause == converts false to number 0 and string "0" converts to 0
  A7: true // cause false gets converted to 0 and empty string gets converted to 0 as well 
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
  B1: false // null do not get converted to 0
  B2: true   Comparison operators (<, >, <=, >=) convert both sides to numbers:
                null >= 0
                → Number(null) >= 0
                → 0 >= 0
                → true

  B3: false // cause this comparision operator will convert null to 0
  B4: false // cause null and undefined are only loosley equals to themselves
  B5: false 
  B6: true // cause loose equality returns truth if undefined or null are on either side 
  B7: false // cause undefined will become NaN on converting it to number 
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
  C1: true // cause empty array gets converted "" and this gets converted to 0 and false also gets converted to 0 
  C2: true // arrays are objects and all objects are truthy in js , so the chain is 
   [] == ![] -->   "" == !true   -->   0 == false   -->   0 == 0    --> true  
  C3: true // array gets converted to primitive so "0" == false   -->   0 == 0   -->  true 
  C4: true
  C5: true // the left array gets converted to primitive which is to string 
  C6: true // cause an empty string evaluates to "[object, object]"
  C7: true // When JavaScript needs to compare an object with a primitive using ==, it generally needs to convert the object into a primitive value.
  For an ordinary Array, its default primitive conversion ends up using its toString() behavior.
  arrays stringify their elements using a comma-separated representation:
    [1, 2, 3].toString()
    // "1,2,3"

    [1].toString()
    // "1"

    [null].toString()
    // ""

    [undefined].toString()

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
  D1: false // since both sides are objects so there is no coercion happens there and comparision between two objects and they are compared via identity not by content.
  D2: false // cause both the objects are different , this is called object identity concept. 
  D3: true  // cause both points towards the same array
  D4: false  // cause it is being compared using tripple equals so it will be false even though the contents of array are same.
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
  E1: true // cause string one will get converted to 1 and true will get converted to 1
  E2: false // cause left true will get converted to number which will be 1 but converting string true to a number will result in NaN thus comparision is falls
  E3: false // cause boolean gets converted to number which will be 1 , and it won't be equals to LHS
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
