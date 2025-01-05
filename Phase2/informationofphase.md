Day 6: Event Loop and Callbacks

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



// ------------------------------------------------------------------------------------------------------------------

Day 7: Object-Oriented Programming (Quick Revision Notes)


1. Introduction to Object-Oriented Programming (OOP)

// OOP: A programming paradigm using objects to model real-world entities.
// Focuses on Encapsulation, Inheritance, Polymorphism, and Abstraction.

2. Objects and Prototypes in JavaScript

// Objects in JavaScript can have properties (data) and methods (functions).
// Every object in JavaScript has an internal link to another object called its prototype.

3. Prototype Chain and Inheritance

// Prototype Chain: Allows objects to inherit methods and properties from their prototype.
// Example: obj.__proto__ points to the prototype of obj.

4. Constructor Functions and new Keyword

// Constructor functions are templates for creating objects.

Example:

function Person(name) {
  this.name = name;
}
const person1 = new Person('Alice');

// The new keyword:
// Creates a new object.
// Sets its prototype to the constructor's prototype.
// Calls the constructor function with this bound to the new object.


5. Prototypal Inheritance
// Objects inherit directly from other objects using the prototype chain.

Example:

const animal = {
  speak() {
    console.log('Animal speaks');
  }
};
const dog = Object.create(animal);
dog.speak(); // Inherits speak method


6. ES6 Classes and Syntax

// class: Cleaner syntax for creating objects and managing inheritance.
// Features:
// constructor(): Initializes properties.
// Instance methods for functionality.

Example:
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}`);
  }
}


7. Extending Classes (Inheritance in ES6)

// extends: Enables inheritance.
// super(): Calls the parent class constructor.
Example:

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks!`);
  }
}

8. Encapsulation and Abstraction

// Encapsulation: Hiding internal details using private properties (#).
// Abstraction: Exposing only necessary details through methods.
Example:

class Account {
  #balance = 0;
  deposit(amount) { this.#balance += amount; }
  getBalance() { return this.#balance; }
}

9. Polymorphism in JavaScript

// The same method behaves differently depending on the object calling it.
Example:

class Animal {
  speak() { console.log('Animal speaks'); }
}
class Dog extends Animal {
  speak() { console.log('Dog barks'); }
}

10. Static Methods and Properties
// Belong to the class itself, not individual instances.
// Useful for utility methods.
Example:

class MathUtils {
  static add(a, b) { return a + b; }
}
console.log(MathUtils.add(2, 3)); // 5


11. Getters and Setters

// Control access to properties with methods.
// get: Access computed values or masked data.
// set: Validate and modify properties.
Example:

class User {
  #password;
  get password() { return '******'; }
  set password(pwd) { if (pwd.length >= 6) this.#password = pwd; }
}

// -----------------------------------------------------------------------------------------------------

Day 8: ES6 Classes and Static Methods - Quick Notes

1. Introduction to ES6 Classes

// ES6 Classes simplify creating objects and inheritance in JavaScript.

// A template for creating objects with properties and methods.

// Syntax is easier to read and looks similar to object-oriented languages.

2. Class Constructors

// Special method called constructor() runs when an object is created.

// Initializes object properties.

3. Class Methods

// Functions defined inside a class.

// Can be called using objects of the class.


4. Static Methods and Properties

// Static Methods belong to the class itself, not instances.

// Used for utility functions that don’t need object data.

// Accessed directly by the class name.



5. Private Fields and Methods (Encapsulation)

// Introduced with # prefix to make properties private.

// Accessible only inside the class.


6. Inheritance with extends and super()

// Inheritance allows a child class to reuse properties and methods of a parent class.

// extends connects child to parent class.

// super() calls the parent constructor.


7. Method Overriding

// Child class can override parent methods.

// Use super.method() to call the parent’s version.


8. Getters and Setters in ES6 Classes

// get retrieves values like properties.

// set validates or modifies values before setting them.


9. Polymorphism in ES6 Classes

// Polymorphism allows the same method name to behave differently based on the object.



10. Abstract Classes (Simulated) (Optional)

// Used to enforce rules for inheritance.
// Cannot be instantiated directly.

// -----------------------------------------------------------------------------------------------------

Day 9: Functional Programming Basics

1. Introduction to Functional Programming

Functional Programming is a style of coding based on functions.

Focuses on pure functions, immutability, and avoiding side effects.

Makes code predictable and easier to test.

2. Pure Functions and Side Effects

Pure Functions:

Always return the same output for the same input.

No side effects (doesn’t change external variables).

// Example:

// function add(a, b) {
//   return a + b; // Pure function
// }

Side Effects:

Changes global variables, logs, or updates DOM.

// Example:

// let total = 0;
// function addToTotal(num) {
//   total += num; // Side effect
// }

3. First-Class and Higher-Order Functions

First-Class Functions:

Functions are treated as values (stored in variables or passed as arguments).

// Example:

// const greet = function() {
//   console.log('Hello');
// };

Higher-Order Functions:

Takes functions as arguments or returns functions.

// Example:

// function repeat(func, times) {
//   for (let i = 0; i < times; i++) {
//     func();
//   }
// }
// repeat(() => console.log('Hi'), 3);

4. Callback Functions in Functional Programming

A callback function is passed as an argument and executed later.

// Example:

// function fetchData(callback) {
//   setTimeout(() => {
//     callback('Data received');
//   }, 1000);
// }

fetchData(console.log);

5. Array Methods: map(), filter(), and reduce()

map()

Transforms each element of an array.

Example:

// const numbers = [1, 2, 3];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6]

filter()

Filters elements based on a condition.

Example:

// const numbers = [1, 2, 3, 4];
// const evens = numbers.filter(num => num % 2 === 0);
// console.log(evens); // [2, 4]

reduce()

Combines values into a single result.

Example:

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum); // 10

6. Function Composition and Chaining

Composition combines multiple functions.

Example:

// const double = x => x * 2;
// const square = x => x * x;
// const result = square(double(3));
// console.log(result); // 36

Chaining applies methods one after another.

Example:

// const numbers = [1, 2, 3, 4];
// const result = numbers
//   .map(num => num * 2)
//   .filter(num => num > 4)
//   .reduce((sum, num) => sum + num, 0);
// console.log(result); // 14

7. Closures and Lexical Scope

Lexical Scope: Functions can access variables defined outside their block.

// Example:

// function outer() {
//   let count = 0;
//   function inner() {
//     count++;
//     console.log(count);
//   }
//   return inner;
// }
// const counter = outer();
// counter(); // 1
// counter(); // 2

8. Immutability and Avoiding Mutation

Immutability: Do not change data directly.

// Example (Immutable):

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4]; // Creates new array
// console.log(newNumbers); // [1, 2, 3, 4]

9. Currying and Partial Application

Currying

Splits a function into smaller functions, each taking one argument.

// Example:

// const add = a => b => c => a + b + c;
// console.log(add(1)(2)(3)); // 6

Partial Application

Pre-fills some arguments.

// Example:

// const multiply = (a, b) => a * b;
// const double = multiply.bind(null, 2);
// console.log(double(5)); // 10

10. Recursion in Functional Programming

Recursion: A function calls itself until it completes a task.

// Example: Factorial

// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }
// console.log(factorial(5)); // 120


// -----------------------------------------------------------------------------------------------------


Day 10: Higher-Order Functions and Currying - Quick Revision Notes

1. Introduction to Higher-Order Functions

// Definition: Functions that can take other functions as arguments or return functions as outputs.

// Examples: map(), filter(), reduce() are higher-order functions.

// Benefits:

// Reusability: Write general-purpose code.

// Simplify Logic: Replace loops with built-in methods.

// Example:

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6, 8]

2. Using Functions as Arguments and Return Values

// Functions as Arguments: Pass functions into other functions.

// Functions as Return Values: Return functions for flexibility.

// Example:

// function greet(name) {
//   return `Hello, ${name}!`;
// }

// function processGreeting(func, name) {
//   return func(name);
// }
// console.log(processGreeting(greet, 'Mazher')); // Hello, Mazher!

3. Practical Examples of Higher-Order Functions

// Filtering Data:

// const evens = [1, 2, 3, 4, 5].filter(num => num % 2 === 0);
// console.log(evens); // [2, 4]

// Sorting Data:

// const names = ['Zara', 'Adam', 'Eve'];
// const sorted = names.sort();
// console.log(sorted); // ['Adam', 'Eve', 'Zara']

// Mapping Data:

// const prices = [10, 20].map(price => price * 1.1);
// console.log(prices); // [11, 22]

4. Currying

// Definition: Breaking a function into multiple smaller functions that take one argument at a time.

// Syntax:

// const add = a => b => c => a + b + c;
// console.log(add(1)(2)(3)); // 6

// Benefits:

// Reusability: Create reusable functions with preset values.

// Flexible Composition: Easy chaining and function composition.

5. Implementing Currying

// Curried Multiply Function:

// const multiply = a => b => a * b;
// console.log(multiply(2)(3)); // 6

// Real-World Example: URL Builder

// const buildUrl = domain => path => query => `${domain}/${path}?${query}`;
// const api = buildUrl('https://api.example.com');
// console.log(api('users')('id=1')); // https://api.example.com/users?id=1

6. Partial Application vs Currying

// Currying: Processes arguments one-by-one.

// Partial Application: Fixes some arguments, leaving others.

// Example:

// const multiply = (a, b) => a * b;
// const double = multiply.bind(null, 2);
// console.log(double(4)); // 8

7. Benefits of Currying

// Reusable Functions: Create specific reusable functions.

// Simplified Logic: Break complex tasks into smaller steps.

// Chaining and Composition: Combine functions easily.



8. Function Composition

// Combines multiple functions into a pipeline for processing data.

// Example:

// const toUpper = str => str.toUpperCase();
// const exclaim = str => `${str}!`;
// const greet = str => `Hello, ${str}`;

// const compose = (...funcs) => input => funcs.reduceRight((acc, func) => func(acc), input);
// const excitedGreeting = compose(exclaim, toUpper, greet);

// console.log(excitedGreeting('Mazher')); // HELLO, MAZHER!

