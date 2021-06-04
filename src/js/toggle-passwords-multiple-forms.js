const showPasswordToggles = document.querySelectorAll(
  "[data-showPasswordToggle]"
);
const passwordFields = document.querySelectorAll("input[type='password']");

// check if item clicked is in the showPasswordToggle NodeList
const targetIsShowPasswordToggle = function (el) {
  let result = [...showPasswordToggles].includes(el) ? true : false;
  return result;
};

const togglePasswordFieldsInForm = function (showPasswordToggle) {
  // Grab the form the toggle's in
  let form = showPasswordToggle.closest("form");
  // Create an array of password fields that share same form as the toggle from the  passwordFields NodeList
  let formPasswordFields = [...passwordFields].filter(
    (el) => el.closest("form") === form
  );
  if (formPasswordFields) {
    formPasswordFields.forEach(function (field) {
      field.type === "password"
        ? (field.type = "text")
        : (field.type = "password");
    });
  }
  return;
};

const changeHandler = function (e) {
  if (targetIsShowPasswordToggle(e.target)) {
    togglePasswordFieldsInForm(e.target);
  }
  return;
};

document.addEventListener("change", changeHandler);
