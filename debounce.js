import _ from "lodash"

function validateEmail() {
    // Validate email here and show error message if not valid
}

var emailInput = document.getElementById("email-field");
emailInput.addEventListener("keyup", _.debounce(validateEmail, 500));
console.log(result)