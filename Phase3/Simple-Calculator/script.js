// First Create Function

function calculator() {
  const num1 = parseInt(prompt("Enter first number"));
  const num2 = parseInt(prompt("Enter second number"));
  const operator = prompt("Enter operator");

  switch (operator) {
    case "+":
      console.log(`Result : ${num1 + num2}`);
      break;

    case "-":
      console.log(`Result : ${num1 - num2}`);
      break;
    case "*":
      console.log(`Result : ${num1 * num2}`);
      break;
    case "/":
      if (num2 != 0) {
        console.log(`Result : ${num1 / num2}`);
      } else {
        console.log("Error! Division by zero is not allowed.");
      }
  }
}

calculator();
