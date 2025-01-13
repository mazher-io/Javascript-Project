const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');


// Show error message
function showError(input ,message) {
    const formControl1 = input.parentElement;
    const small = formControl1.querySelector('.error');
    input.classList.add('error-border');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl1 = input.parentElement;
    const small = formControl1.querySelector('.error');
    input.classList.remove('error-border');
    input.classList.add('success');
    small.innerText = '';
    
}