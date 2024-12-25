// Array Example
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Object Example
const user = {
  name: "Mazher",
  age: 25,
  greet() {
    return `Hello, ${this.name}`;
  },
};
console.log(user.greet()); // Output: Hello, Mazher


  // Example 2 
// const information = {
//   name: "Mazher",
//   age:  25,
//   greet(){
//     return `Hello, ${this.name} , I am ${this.age} years old`;
//   }

// };
// console.log(information.greet()); // Output: Hello, Mazher , I am 25 years
