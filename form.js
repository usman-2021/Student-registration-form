// Get the form
let form = document.querySelector("form");

// Run when the form is submitted
form.addEventListener("submit", function(event) {

    // Stop the form from refreshing the page
    event.preventDefault();

    // Get values from input fields
    let name = document.querySelector('input[name="Full name"]').value;
    let email = document.querySelector('input[name="Email"]').value;
    let password = document.querySelector('input[name="Password"]').value;
    let confirmPassword = document.querySelector('input[name="Confirm Password"]').value;
    let department = document.querySelector('select[name="Department"]').value;

    // Check empty fields
    if (name == "" || email == "" || password == "" ||
        confirmPassword == "" || department == "") {

        alert("Please fill all fields.");
        return;
    }

    // Check password
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // If everything is correct
    alert("Registration successful!");

});