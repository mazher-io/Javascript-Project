// Day 10: Higher-Order Functions and Currying Practice Program

// 1. Introduction to Higher-Order Functions
// Function that accepts another function as an argument and/or returns a function

function doSomething(arr , action){
    return arr.map(action);
}

// 2. Using Functions as Arguments
const square = (x) => x * x; // Makes a number square
const addOne = (x) => x + 1; // Adds 1 to a number

const numbers = [1, 2, 3, 4, 5]; 
const squares = doSomething( nums , square);
const addedOne = doSomething( nums , addOne);

// 3. Practical Example

const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 70 },
    { name: 'Charlie', grade: 90 },
    { name: 'David', grade: 65 }
];

const topStudents = students
    .filter(student => student.grade > 80)
    .map(student => student.name.toUpperCase());

// 4. What is Currying?


const multiply = (a) => (b) => a * b; // Split into steps
const times2 = multiply(2); // First step sets 2
const times3 = multiply(3); // First step sets 3


// 5. Currying Example
const add = (a) => (b) => (c) => a + b + c;
const result = add(1)(2)(3); // Add 1, 2, and 3 step-by-step

// 6. Real Example with Discounts
const discounts = (percent) => (price) => price - (price * percent / 100);
const tenOff = discounts(10); // 10% discount
const twentyOff = discounts(20); // 20% discount

// 7. Partial Application vs Currying
function addNums(a,b,c){
    return a + b + c;
}

const addTwo = addNums.bind(null, 1, 2); // Set 1 and 2
const addPartial = addTwo(3); // Add 3 later

// 8. Benefits - Combine Functions
const double = (x) => x * 2;
const increment = (x) => x + 1;
const combine = (f, g) => (x) => f(g(x));
const doubleAndAddOne = combine(increment, double);


// Test Outputs
console.log("Squares:", squares);
console.log("Added One:", addedOne);
console.log("Top Students:", topStudents);
console.log("2 x 5:", times2(5));
console.log("3 x 5:", times3(5));
console.log("Add 1+2+3:", result);
console.log("10% off 100:", tenOff(100));
console.log("20% off 200:", twentyOff(200));
console.log("Partial Add 1+2+3:", addPartial);
console.log("Double and Add One to 3:", doubleAndAddOne(3));
