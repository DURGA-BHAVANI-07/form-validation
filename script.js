document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById( "signupConfirmPassword").value;
    let emailError = document.getElementById("signupEmailError");
    let passwordError = document.getElementById("signupPasswordError");
    let confirmPasswordError = document.getElementById("signupConfirmPasswordError");
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    if (!email.includes("@") || !email.includes(".")) {
      emailError.textContent = "Invalid email format.";
    }

    if (password.length < 6 ||
      !/\d/.test(password) ||
      !/[!@#$%^&*]/.test(password)) {
      passwordError.textContent =
        "Password must be at least 6 characters, include a number and a special character.";
    }

    if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match.";
    }

    if (!emailError.textContent &&
      !passwordError.textContent &&
      !confirmPasswordError.textContent) {
      alert("Signup successful!");
    }
  });

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let emailError = document.getElementById("loginEmailError");
    let passwordError = document.getElementById("loginPasswordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    if (!email.includes("@") || !email.includes(".")) {
      emailError.textContent = "Invalid email format.";
    }

    if (password.trim() === "") {
      passwordError.textContent = "Password cannot be empty.";
    }

    if (!emailError.textContent && !passwordError.textContent) {
      alert("Login successful!");
    }
  });
