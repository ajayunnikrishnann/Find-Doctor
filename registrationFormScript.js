// Function to validate the form
function validateForm() {
           
    clearErrors();

    
    let isValid = true;


    if (!validateField('firstname', 'first name')) {
        isValid = false;
    }

   
    if (!validateField('lastname', 'last name')) {
        isValid = false;
    }

   
    if (!validateDateOfBirth('dob')) {
        isValid = false;
    }

  
    if (!validateAge('age')) {
        isValid = false;
    }

  
    if (!validateGender('gender')) {
        isValid = false;
    }

   
    if (!validatePhoneNumber('phone')) {
        isValid = false;
    }

   
    if (!validateEmail('email')) {
        isValid = false;
    }

    
    if (!validateField('address', 'address')) {
        isValid = false;
    }

    
    if (!validateField('state', 'state')) {
        isValid = false;
    }

   
    if (!validateField('city', 'city')) {
        isValid = false;
    }

    
    if (!validateField('username', 'username')) {
        isValid = false;
    }

  
    if (!validatePassword('password')) {
        isValid = false;
    }

    
    if (!validateConfirmPassword('confirm_password')) {
        isValid = false;
    }

    // Redirect to login page after successful validation
    if (isValid) {
        window.location.href = '/loginForm.html';
    }

  

    return isValid = false;
}

// Function to calculate age based on date of birth
function calculateAge() {
    const dobField = document.getElementById('dob');
    const ageField = document.getElementById('age');
    const dob = new Date(dobField.value);
    const today = new Date();

    if (!isNaN(dob)) {
        let age = today.getFullYear() - dob.getFullYear();
        const monthDifference = today.getMonth() - dob.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        ageField.value = age;
    }
}

// Function to validate a field based on its ID and display name
function validateField(fieldId, fieldName) {
    const field = document.getElementById(fieldId);
    const errorSpan = document.getElementById(fieldId + 'Error');
    const value = field.value.trim(); // Get trimmed value of the field

    if (value === '') {
        errorSpan.textContent = `Please enter your ${fieldName}.`; // Display error message if field is empty
        return false;  // Return false indicating validation failure
    }

    return true; // Return true indicating validation success
}

// Function to validate date of birth field
function validateDateOfBirth(fieldId) {
    const field = document.getElementById(fieldId);
    const errorSpan = document.getElementById(fieldId + 'Error');
    const dob = new Date(field.value);
    const today = new Date();
    const maxAge = 100; 

    if (field.value === '' || isNaN(dob)) {
        errorSpan.textContent = 'Please enter a valid date of birth.';
        return false;
    }

    const age = today.getFullYear() - dob.getFullYear();
    if (age < 18 || age > maxAge) {
        errorSpan.textContent = `Age must be between 18 and ${maxAge} years.`;
        return false;
    }

    return true;
}

// Function to validate age field
function validateAge(fieldId) {
    const field = document.getElementById(fieldId);
    const errorSpan = document.getElementById(fieldId + 'Error');
    const age = parseInt(field.value);

    if (isNaN(age) || age <= 0) {
        errorSpan.textContent = 'Please enter a valid age.';
        return false;
    }

    return true;
}

// Function to validate gender field
function validateGender(fieldId) {
    const errorSpan = document.getElementById(fieldId + 'Error');
    const genderInputs = document.querySelectorAll(`input[name=${fieldId}]`);
    let isChecked = false;

    genderInputs.forEach(input => {
        if (input.checked) {
            isChecked = true;
        }
    });

    if (!isChecked) {
        errorSpan.textContent = 'Please select your gender.';
        return false;
    }

    return true;
}

// Function to validate phone number field
function validatePhoneNumber(fieldId) {
    const field = document.getElementById(fieldId);
    const errorSpan = document.getElementById(fieldId + 'Error');
    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(field.value)) {
        errorSpan.textContent = 'Please enter a valid 10-digit phone number.';
        return false;
    }

    return true;
}

// Function to validate email field
function validateEmail(fieldId) {
    const field = document.getElementById(fieldId);
    const errorSpan = document.getElementById(fieldId + 'Error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(field.value)) {
        errorSpan.textContent = 'Please enter a valid email address.';
        return false;
    }

    return true;
}

// Function to validate password field
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

// Function to validate confirm password field
function validateConfirmPassword(confirmFieldId) {
    const confirmPasswordField = document.getElementById(confirmFieldId);
    const passwordField = document.getElementById('password');
    const errorSpan = document.getElementById('confirmPasswordError');
    const confirmPassword = confirmPasswordField.value;
    const password = passwordField.value;

    if (confirmPassword !== password) {
        errorSpan.textContent = 'Passwords do not match.';
        return false;
    }

    return true;
}

// Function to clear all error messages
function clearErrors() {
    const errorSpans = document.querySelectorAll('.error');
    errorSpans.forEach(span => {
        span.textContent = '';
    });
}

// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.inputbox input, .inputbox select'); // Select all input and select elements in input boxes
    
    // Add event listeners for focus and blur events
    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.style.backgroundColor = '';  // Clear background color on focus
        });
        
        input.addEventListener('blur', function () {
            this.style.backgroundColor = ''; // Clear background color on blur
        });
    });
});

// Function to toggle the navigation menu (for mobile view)
function toggleMenu() {
    var nav = document.querySelector('.header nav ul');// Select the navigation menu
    nav.classList.toggle('show'); // Toggle the 'show' class to display/hide the menu
}

const citiesByState = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati"],
    "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat"],
    "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
    "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Korba"],
    "Goa": ["Panaji", "Vasco da Gama", "Margao"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    "Haryana": ["Faridabad", "Gurgaon", "Panipat", "Ambala"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Kullu"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
    "Karnataka": ["Bangalore", "Mysore", "Hubli", "Belgaum"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
    "Manipur": ["Imphal"],
    "Meghalaya": ["Shillong"],
    "Mizoram": ["Aizawl"],
    "Nagaland": ["Kohima", "Dimapur"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Puri"],
    "Punjab": ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar"],
    "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Kota"],
    "Sikkim": ["Gangtok"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
    "Tripura": ["Agartala"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi"],
    "Uttarakhand": ["Dehradun", "Haridwar", "Rishikesh", "Nainital"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri"]
};

const allStates = Object.keys(citiesByState);


// Function to populate the states dropdown
function populateStates() {
    const stateSelect = document.getElementById('state');
    
    allStates.forEach(state => {
        const option = document.createElement('option');
        option.textContent = state;
        option.value = state;
        stateSelect.appendChild(option);
    });
}

// Function to populate the cities dropdown based on selected state
function populateCities() {
    const stateSelect = document.getElementById('state');
    const citySelect = document.getElementById('city');
    const selectedState = stateSelect.value;

    // Clear existing city options
    citySelect.innerHTML = '<option value="">Select City</option>';

    // Populate cities based on the selected state
    if (selectedState !== '') {
        const cities = citiesByState[selectedState];
        if (cities) {
            cities.forEach(city => {
                const option = document.createElement('option');
                option.textContent = city;
                option.value = city;
                citySelect.appendChild(option);
            });
        }
    }
}

// Populate states dropdown on page load
document.addEventListener('DOMContentLoaded', function() {
    populateStates();
});
