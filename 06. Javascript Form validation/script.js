document.addEventListener('DOMContentLoaded', function () {
    // Attach input event listeners to trigger validation in real-time
    var usernameInput = document.getElementsByName("username")[0];
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementsByName("password")[0];

    usernameInput.addEventListener('input', function () {
        validateUsername();
    });

    emailInput.addEventListener('input', function () {
        validateEmail();
    });

    passwordInput.addEventListener('input', function () {
        validatePassword();
    });
});

function validateForm() {
    // Validate all fields
    validateUsername();
    validateEmail();
    validatePassword();

    // Check if any validation errors exist
    var errorElements = document.querySelectorAll(".error-message");
    for (var i = 0; i < errorElements.length; i++) {
        if (errorElements[i].textContent !== "") {
            return false;
        }
    }

    // Form is valid
    alert("Form submitted successfully");
    return true;
}

function validateUsername() {
    var username = document.getElementsByName("username")[0].value;
    displayErrorMessage(username.trim() === "" ? "Username cannot be empty." : "", "username-error");
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("email-error");

    if (email.trim() === "") {
        displayErrorMessage("Email cannot be empty.", "email-error");
    } else if (!isValidEmail(email)) {
        displayErrorMessage("Invalid Email.", "email-error");
    } else {
        displayErrorMessage("", "email-error");
    }
}

function validatePassword() {
    var password = document.getElementsByName("password")[0].value;
    displayErrorMessage(password.trim() === "" ? "Password cannot be empty." : "", "password-error");
}

function displayErrorMessage(message, errorId) {
    var errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
}

function isValidEmail(email) {
    // Basic email validation using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
