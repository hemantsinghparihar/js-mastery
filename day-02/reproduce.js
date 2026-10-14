// Day 2 — exit check: "what does [] + {} evaluate to and why?"
// Walk through the actual coercion steps out loud, not just the answer.

console.log([] + {}); // ?

/*
STEP-BY-STEP (fill in before running):

  1. The + operator first calls ToPrimitive on both operands, with hint:
  2. ToPrimitive([]):
       valueOf() returns            → is that a primitive?
       toString() returns           → result:
  3. ToPrimitive({}):
       valueOf() returns            → is that a primitive?
       toString() returns           → result:
  4. Is either primitive a string? So + does:
  5. Final result:

ACTUAL (node day-02/reproduce.js):

FOLLOW-UPS (answer out loud too):
  - Why does `{} + []` typed at the start of a REPL line give 0?
  - What does [] + [] give? {} + {} inside console.log?
  - What changes if the array is [1, 2]?
*/
