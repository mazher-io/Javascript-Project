const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// Show error message
function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('.error');
  input.classList.add('error-border');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('.error');
  input.classList.remove('error-border');
  input.classList.add('success');
  small.innerText = '';
}

// Check email format
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Validate inputs
function validateInputs() {
  let isValid = true;

  // Username validation
  if (username.value.trim() === '') {
    showError(username, 'Username is required.');
    isValid = false;
  } else if (username.value.trim().length < 3) {
    showError(username, 'Username must be at least 3 characters.');
    isValid = false;
  } else {
    showSuccess(username);
  }

  // Email validation
  if (email.value.trim() === '') {
    showError(email, 'Email is required.');
    isValid = false;
  } else if (!isValidEmail(email.value.trim())) {
    showError(email, 'Email is not valid.');
    isValid = false;
  } else {
    showSuccess(email);
  }

  // Password validation
  if (password.value.trim() === '') {
    showError(password, 'Password is required.');
    isValid = false;
  } else if (password.value.trim().length < 6) {
    showError(password, 'Password must be at least 6 characters.');
    isValid = false;
  } else {
    showSuccess(password);
  }

  // Confirm Password validation
  if (confirmPassword.value.trim() === '') {
    showError(confirmPassword, 'Please confirm your password.');
    isValid = false;
  } else if (confirmPassword.value.trim() !== password.value.trim()) {
    showError(confirmPassword, 'Passwords do not match.');
    isValid = false;
  } else {
    showSuccess(confirmPassword);
  }

  return isValid;
}

// Form submit event
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validateInputs()) {
    alert('Form submitted successfully!');
    form.reset();
    // Remove styles after submission
    document.querySelectorAll('input').forEach(input => {
      input.classList.remove('success', 'error-border');
    });
  }
});
