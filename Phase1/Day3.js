// Arrow Function
const add = (a, b) => a + b;
console.log(add(5, 10)); // Output: 15

// Template Literals
const name = "Mazher";
console.log(`Welcome, ${name}!`); // Output: Welcome, Mazher!

// Destructuring
const user = { name: "Mazher", age: 25 };
const { name: userName, age } = user;
console.log(userName, age); // Output: Mazher 25

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]