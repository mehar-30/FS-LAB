document.getElementById("studentForm").addEventListener("submit", function(e) {
  let valid = true;

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let phone = document.getElementById("phone").value.trim();
  let age = document.getElementById("age").value;
  let gender = document.querySelector('input[name="gender"]:checked');

  // Name validation
  if (name.length < 3) {
    alert("Name must be at least 3 characters long.");
    valid = false;
  }

  // Email validation
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    valid = false;
  }

  // Password validation
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    valid = false;
  }

  // Confirm password validation
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    valid = false;
  }

  // Phone number validation (must be 10 digits)
  let phonePattern = /^[0-9]{10}$/;
  if (!phone.match(phonePattern)) {
    alert("Please enter a valid 10-digit phone number.");
    valid = false;
  }

  // Age validation
  if (age < 15 || age > 100) {
    alert("Age must be between 15 and 100.");
    valid = false;
  }

  // Gender validation
  if (!gender) {
    alert("Please select your gender.");
    valid = false;
  }

  if (!valid) e.preventDefault();
});
