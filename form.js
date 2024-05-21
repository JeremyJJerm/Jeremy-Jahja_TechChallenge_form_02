document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("cpassword");
    var ageInput = document.getElementById("age");
    var maleInput = document.getElementById("male");
    var femaleInput = document.getElementById("female");
    var agreeInput = document.getElementById("agree");

    var errorMessages = document.querySelectorAll(".error");
    errorMessages.forEach(function(error) {
      error.textContent = "";
    });
  
    if (nameInput.value.trim() === "") {
      document.getElementById("nameError").textContent = "Name is required";
    } else if (nameInput.value.trim().length <= 5) {
      document.getElementById("nameError").textContent = "Name must have more than 5 characters";
    }
  
    if (emailInput.value.trim() === "") {
      document.getElementById("emailError").textContent = "Email is required";
    } else if (!emailInput.value.trim().endsWith("@gmail.com")) {
      document.getElementById("emailError").textContent = "Email must end with @gmail.com";
    }
  
    if (passwordInput.value.trim() === "") {
      document.getElementById("passError").textContent = "Password is required";
    } else if (!isAlphaNum(passwordInput.value.trim())) {
      document.getElementById("passError").textContent = "Password must be alphanumeric";
    }
  
    if (confirmPasswordInput.value.trim() === "") {
      document.getElementById("cpassError").textContent = "Confirm Password is required";
    } else if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
      document.getElementById("cpassError").textContent = "Passwords do not match";
    }
  
    if (ageInput.value.trim() === "") {
      document.getElementById("ageError").textContent = "Age is required";
    } else if (parseInt(ageInput.value.trim()) < 1) {
      document.getElementById("ageError").textContent = "Age must be a positive number";
    }
  
    if (!maleInput.checked && !femaleInput.checked) {
      document.getElementById("genderError").textContent = "Gender is required";
    }
  
    if (!agreeInput.checked) {
      document.getElementById("agreeError").textContent = "Please agree to Terms and Conditions";
    }
});

function isAlphaNum(element) {
    for (let i = 0; i < element.length; i++) {
      if (
        (element[i] >= "a" && element[i] <= "z") ||
        (element[i] >= "A" && element[i] <= "Z") ||
        (element[i] >= "0" && element[i] <= "9")
      ) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }
