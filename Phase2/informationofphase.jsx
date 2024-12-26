// Day 6: Event Loop and Callbacks

1. Introduction to the Event Loop in JavaScript

// JavaScript is a single-threaded language, which means it can execute one task at a time. 
// However, JavaScript can handle asynchronous operations 
// (like reading a file, making a network request, or a user event) without blocking the main 
// execution thread. This is where the Event Loop comes in.



// -------------------------------------------------------------------------------------------

2. Call Stack

// Imagine a stack of plates. When you want to use a plate (or run a function), you put it on top of the stack. 
// When you're done with it, you take it off the top. The Call Stack works the same way: it keeps track of which functions are running.
// The last function you added is the first one to be taken off and executed.


// How the Call Stack works:
// Global Execution Context: When the program starts, the global code (like variable declarations, function definitions) is executed, and the global execution context is pushed onto the stack.
// Function Execution: When a function is invoked, a new execution context is created for it and pushed onto the stack.
// Stack Unwinding: Once a function completes, its execution context is popped off the stack, and the program continues from where it left off.



// -------------------------------------------------------------------------------------------

3. Task Queue (Callback Queue)

// The Task Queue (also called the Callback Queue) is a queue where asynchronous tasks are placed after they finish executing in the Web APIs (like setTimeout, fetch, etc.). 
// These tasks are waiting for the main thread (Call Stack) to be free to execute their callbacks.


// -------------------------------------------------------------------------------------------

4. Microtasks vs Macrotasks

// In JavaScript, there are two types of tasks: microtasks and macrotasks. The main difference lies in their execution priority when they are scheduled.

// Execution Order:
// Synchronous code is executed first.
// After the synchronous code, the Event Loop checks and executes all microtasks.
// After microtasks are completed, the Event Loop moves on to the macrotasks (Task Queue).


// ------------------------------------------------------------------------------------------------

5. Callbacks and Asynchronous Execution

// A callback is a function that is passed into another function as an argument to be executed later, usually after an asynchronous operation has completed.

// In JavaScript, most I/O operations are asynchronous (e.g., reading files, fetching data), and callbacks are a way to handle the result of these operations without blocking the execution of the program.

// ------------------------------------------------------------------------------------------------

6. Callback Hell and Solutions

// Callback Hell refers to a situation where callbacks are nested within other callbacks, making the code hard to read and maintain. This usually happens when 
// you're working with multiple asynchronous operations and chaining callbacks in a deeply nested fashion.

Solutions to Callback Hell:

1. Named Functions:
2. Modularization
3. Promises
4. Async/Await


// ------------------------------------------------------------------------------------------------

7. setTimeout and setInterval


// Both setTimeout and setInterval are used to schedule asynchronous operations in JavaScript, but they behave differently.

setTimeout:
Syntax:
setTimeout(callback, delay);


setInterval:

setInterval allows you to execute a function repeatedly, at a specified interval (in milliseconds).


Syntax:
setInterval(callback, interval);


// ------------------------------------------------------------------------------------------------

8. Promises and async/await


// A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises allow you to write cleaner asynchronous code without deeply nesting callbacks.



// Chaining Promises:

// You can chain .then() to execute multiple asynchronous operations in sequence.



// async/await:

// async/await is syntactic sugar built on top of Promises, allowing you to write asynchronous code in a more synchronous style.

// async: A function marked with async always returns a Promise.
// await: Used inside an async function to wait for the resolution of a Promise.



    