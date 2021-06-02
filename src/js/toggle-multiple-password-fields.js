const showPasswords = document.querySelector("#show-passwords");
const passwordFields = document.querySelectorAll("[data-password]");

const showPasswordChangeHandler = function (e) {
  if (passwordFields) {
    for (let field of passwordFields) {
      field.type === "password"
        ? (field.type = "text")
        : (field.type = "password");
    }
  }
  return;
};

showPasswords.addEventListener("change", showPasswordChangeHandler);
