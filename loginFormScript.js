function validateForm() {
    let isValid = true;
    clearErrors();

    if (!validateField('username', 'username')) {
        isValid = false;
    }

    if (!validatePassword('password')) {
        isValid = false;
    }
    if (isValid) {

window.location.href = 'homepage.html'; 
}
    return isValid = false;
}

function validateField(fieldId, fieldName) {
    const field = document.getElementById(fieldId);
    const errorSpan = document.getElementById(fieldId + 'Error');
    const value = field.value.trim();

    if (value === '') {
        errorSpan.textContent = `Please enter your ${fieldName}.`;
        return false;
    }

    return true;
}

function validatePassword(fieldId) {
    const field = document.getElementById(fieldId);
    const errorSpan = document.getElementById(fieldId + 'Error');
    const password = field.value;

   
    if (password.length < 8) {
        errorSpan.textContent = 'Password must be at least 8 characters long.';
        return false;
    }

    return true;
}

function clearErrors() {
    const errorSpans = document.querySelectorAll('.error');
    errorSpans.forEach(span => {
        span.textContent = '';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.inputbox input, .inputbox select');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.style.backgroundColor = '';
        });
        
        input.addEventListener('blur', function () {
            this.style.backgroundColor = '';
        });
    });
});

function toggleMenu() {
    var nav = document.querySelector('.header nav ul');
    nav.classList.toggle('show');
}