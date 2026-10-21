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
  A1: 12 // cause one operand is string so js. coerce number to string and concatinate it 
  A2: 2 // string 3 will get converted to number 3 and the final will be 2
  A3: 12 // cause both sides will get converted to numbers and then multiplied
  A4: 2 // true will be converted to number which is 1
  A5: 5null // cause null gets converted to string and then they get concatinated
  A6: 0 // converting an empty string into number results to 0
  A7: 42 // unary + operator converts the string to number
  A8: NaN // the gap between 4 and 2 makes it not a number
  A9: "33" // the evaluation happens left to right, first 1 + 2 = 3 and then 3 + "3" = "33" 
  A10: "123" // cause the initial data type is string so the later number coerces to string and gets concatinated.
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
  B1: "" // it gets converted to empty string
  B2: "" + "[object,object]" -> "[object,object]"
  B3: "[object Object]"
  B4: "1, 2" + "3" -> "1,23"
  B5: "1"
  B6: 6
  B7: -1
  B8: NaN
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
  C1: 43 // the plus operator directly can not add an object to a primitive value so to convert the object to primitive value an object first calls its valueOf() method and then further based on the needs it might call toString() operator.
  C2:str // obj the object is inside the string template literals which explicitly tries to convert obj to string -> String(obj) which calls toString method of object
  C3:"42" // first oject will be simply converted to primitive and for that valueOf() will be used and later for concatination it will be a string.
  C4: str // cause it explicitly calls toString
  C5: 84 // calls valueOf().
WHY:

*/



// ---------- Snippet E ----------
run("E", () => {
  show("E1:", typeof (new Date(0) + 0));
  show("E2:", typeof (new Date(0) - 0));
});
/*
PREDICTION:
  E1: "Jan 1 1970 0" -> STRING // new date(0) - returns the date of jan 1 1970 cause it is the standard starting time mutually agreed based on the unix developmenyt in 1970
  E2: 0 -> NUMBER // cause the - operator will need the object to be a number , and valueOf Date(0) returns 0.
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
