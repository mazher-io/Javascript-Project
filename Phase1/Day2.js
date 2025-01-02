const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Object Examples
const user = {
  name: "Mazher",
  age: 25,
  greet() {
    return `Hello, ${this.name}`;
  },
};
console.log(user.greet()); // Output: Hello, Mazher