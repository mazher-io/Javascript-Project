Day 1: Variables, Scopes, and Closures


// Topics Covered

// Variables: Differences between var, let, and const.

//        var: Function-scoped, can be redeclared and updated.

//        let: Block-scoped, cannot be redeclared but can be updated.

//       const: Block-scoped, cannot be redeclared or updated.

// Scopes:

//      Global Scope: Variables declared outside any function.

//      Function Scope: Variables declared inside a function.

//      Block Scope: Variables declared with let or const inside a block.

// Closures:

//      A function that retains access to its outer scope even after the outer function has returned.


// -------------------------------------------------------------------------------------------------------------

Day 2: Arrays and Objects


// Topics Covered

// Arrays:

//         Common methods: push(), pop(), shift(), unshift(), slice(), splice().

//         Iterating with for, forEach(), map(), and filter().

// Objects:

//         Creating and accessing properties.

//         Methods: Object.keys(), Object.values(), Object.entries().


// -------------------------------------------------------------------------------------------------------------

// Day 3: ES6+ Features

// Arrow Functions:

//         Concise syntax.

//         Lexical this binding.

// Template Literals:

//         Multi-line strings and embedding expressions with ${}.

// Destructuring:

//         Extracting values from arrays or objects.

// Rest and Spread Operators:

//         Spread: Expanding arrays/objects.

//         Rest: Collecting function arguments.


// -------------------------------------------------------------------------------------------------------------

Day 4: Asynchronous JavaScript (Promises and async/await)

Promises:

        States: Pending, Fulfilled, Rejected.
        Methods: .then(), .catch(), .finally().

Async/Await:

        Writing cleaner asynchronous code.
        Handling errors with try...catch.

// -------------------------------------------------------------------------------------------------------------

Day 5: Error Handling and Debugging

// // Synchronous Error Handling
// try {
//     JSON.parse("{ invalid JSON }");
//   } catch (error) {
//     console.error("Caught an error:", error.message);
//   } finally {
//     console.log("Cleanup tasks");
//   }
  
//   // Asynchronous Error Handling
//   async function fetchWithError() {
//     try {
//       const response = await fetch("https://invalid.url");
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Async error:", error.message);
//     }
//   }
//   fetchWithError();
