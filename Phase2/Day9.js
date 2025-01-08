// 1. Student Data
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 72 },
  { name: "Charlie", grade: 90 },
  { name: "David", grade: 88 },
  { name: "Eve", grade: 100 },
];

// 2. Add Bonus Points - Using Map

const updatedScores = students.map((student) => ({
  name: student.name,
  score: student.grade + 5, // Adding 5 bonus points
}));

console.log("Updated Scores:", updatedScores);

const passingscores = updatedScores.filter((student) => student.grade >= 50);
console.log("Passing Scores:", passingscores);

// 4. Calculate Average Score - Using reduce
const averageScore =
  updatedScores.reduce((total, student) => total + student.score, 0) /
  updatedScores.length;

console.log("Average Score:", averageScore);

// 5. Find Top Scorer - Using reduce
const topScorer = updatedScores.reduce((top, student) =>
  student.score > top.score ? student : top
);

console.log("Top Scorer:", topScorer);

// 6. Greet Students - Using Higher-Order Function
function greetStudents(callback) {
  return passingStudents.map((student) => callback(student.name));
}

const greetings = greetStudents(
  (name) => `Congratulations ${name}! You passed!`
);
console.log("Greetings:", greetings);
