
const passwordField = document.getElementById("password");
passwordField.addEventListener("input", checkPasswordStrength);

function checkPasswordStrength() {
  const password = document.getElementById("password").value;
  let score = 0;

  const lengthCriteria = password.length >= 8;
  const uppercaseCriteria = /[A-Z]/.test(password);
  const lowercaseCriteria = /[a-z]/.test(password);
  const numberCriteria = /\d/.test(password);
  const symbolCriteria = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

  // Increment the score for each criterion met
  if (lengthCriteria) score++;
  if (uppercaseCriteria) score++;
  if (lowercaseCriteria) score++;
  if (numberCriteria) score++;
  if (symbolCriteria) score++;

  updateFeedback(
    score,
    lengthCriteria,
    lowercaseCriteria,
    uppercaseCriteria,
    numberCriteria,
    symbolCriteria
  );
}

function updateFeedback(
  score,
  lengthCriteria,
  lowercaseCriteria,
  uppercaseCriteria,
  numberCriteria,
  symbolCriteria
) {
  const feedback = document.getElementById("feedback");
  const criteria = [];

  if (!lengthCriteria) criteria.push("Add at least 8 characters");
  if (!lowercaseCriteria) criteria.push("Add at least one lowercase letter");
  if (!uppercaseCriteria) criteria.push("Add at least one uppercase letter");
  if (!numberCriteria) criteria.push("Add at least one number");
  if (!symbolCriteria) criteria.push("Add at least one special character");

  if (score <= 2) {
    feedback.textContent = `Weak. Suggestions: ${criteria.join(", ")}`;
    feedback.style.color = "red";
  } else if (score === 3) {
    feedback.textContent = `Moderate. Suggestions: ${criteria.join(", ")}`;
    feedback.style.color = "orange";
  } else {
    feedback.textContent = "Strong. Great password!";
    feedback.style.color = "green";
  }
}
