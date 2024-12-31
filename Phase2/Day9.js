// 1. Introduction to Functional Programming
// A program to process and analyze student data using functional programming principles

// 2. Pure Functions and Side Effects
function calculateAverage(grades) {
    // Pure Function - No Side Effects
    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

// 3. First-Class and Higher-Order Functions
function processStudents(students, callback) {
    return students.map(callback); // Higher-Order Function
}

// 4. Callback Functions in Functional Programming
const getNames = (student) => student.name; // Callback Function

// 5. Array Methods: map(), filter(), and reduce()
const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 70 },
    { name: 'Charlie', grade: 90 },
    { name: 'David', grade: 65 }
];

const highAchievers = students.filter(student => student.grade > 80);
const studentNames = students.map(getNames);
const totalGrades = students.reduce((sum, student) => sum + student.grade, 0);

// 6. Function Composition and Chaining
const processHighAchievers = students.filter(s => s.grade > 80)
    .map(s => s.name.toUpperCase());

// 7. Closures and Lexical Scope
function createMultiplier(multiplier) {
    return function (value) { // Closure
        return value * multiplier;
    };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);

// 8. Immutability and Avoiding Mutation
const updatedStudents = students.map(student => ({
    ...student, // Spread Operator for Immutability
    grade: student.grade + 5 // Incrementing grades without mutating
}));

// 9. Currying and Partial Application
const add = (a) => (b) => a + b; // Curried Function
const add5 = add(5);
const add10 = add(10);

// 10. Recursion in Functional Programming
function factorial(n) {
    if (n === 0) return 1; // Base case
    return n * factorial(n - 1); // Recursive call
}

// Output for testing
console.log("Average Grade:", calculateAverage([85, 70, 90, 65]));
console.log("High Achievers:", highAchievers);
console.log("Student Names:", studentNames);
console.log("Total Grades:", totalGrades);
console.log("Processed High Achievers:", processHighAchievers);
console.log("Double 5:", double(5));
console.log("Triple 5:", triple(5));
console.log("Updated Students:", updatedStudents);
console.log("Add 5 to 10:", add5(10));
console.log("Factorial of 5:", factorial(5));
