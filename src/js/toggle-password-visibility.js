const showPassword = document.querySelector("#show-password");
const passwordField = document.querySelector("#password-field");

const changeHandler = function (e) {
  if (e.target == showPassword) {
    if (showPassword.checked) {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  }

  return;
};

document.addEventListener("change", changeHandler);
