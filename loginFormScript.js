
// Function to validate the form
function validateForm() {
    let isValid = true;
    clearErrors();

     // Validate the 'username' field
    if (!validateField('username', 'username')) {
        isValid = false;
    }
    // Validate the 'password' field
    if (!validatePassword('password')) {
        isValid = false;
    }
     // If the form is valid, redirect to the homepage
    if (isValid) {
    window.location.href = 'homepage.html'; 
    }
    return isValid = false; // Prevent form submission by default
}

// Function to validate a field by its ID and name
function validateField(fieldId, fieldName) {
    const field = document.getElementById(fieldId); // Get the field element
    const errorSpan = document.getElementById(fieldId + 'Error'); // Get the corresponding error span
    const value = field.value.trim(); // Get the trimmed value of the field

     // Check if the field is empty
    if (value === '') {
        errorSpan.textContent = `Please enter your ${fieldName}.`; // Display error message
        return false; // Return false if validation fails
    }

    return true; // Return true if validation passes
} 

// Function to validate the 'password' field
function validatePassword(fieldId) {
    const field = document.getElementById(fieldId); // Get the field element
    const errorSpan = document.getElementById(fieldId + 'Error'); // Get the corresponding error span
    const password = field.value; // Get the value of the field

   // Check if the password length is less than 8 characters
    if (password.length < 8) {
        errorSpan.textContent = 'Password must be at least 8 characters long.';
        return false;
    }

    return true; // Return true if validation passes
}

// Function to clear all error messages
function clearErrors() {
    const errorSpans = document.querySelectorAll('.error'); // Select all error spans
    errorSpans.forEach(span => {
        span.textContent = ''; // Clear the text content of each error span
    });
}

// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.inputbox input, .inputbox select');  // Select all input and select elements in input boxes
    
    // Add event listeners for focus and blur events
    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.style.backgroundColor = ''; // Clear background color on focus
        });
        
        input.addEventListener('blur', function () {
            this.style.backgroundColor = ''; // Clear background color on blur
        });
    });
});

// Function to toggle the navigation menu (for mobile view)
function toggleMenu() {
    var nav = document.querySelector('.header nav ul'); // Select the navigation menu
    nav.classList.toggle('show'); // Toggle the 'show' class to display/hide the menu
}