const showPasswordToggles = document.querySelectorAll(
  "[data-showPasswordToggle]"
);
const passwordFields = document.querySelectorAll("input[type='password']");

// check if item clicked is in the showPasswordToggle NodeList
const targetIsShowPasswordToggle = function (el) {
  let result = [...showPasswordToggles].includes(el) ? true : false;
  return result;
};

const togglePasswordFieldsInForm = function (togglesForm) {
  // Create an array of password fields that share same form as the toggle from the  passwordFields NodeList
  let formPasswordFields = [...passwordFields].filter(
    (field) => field.closest("form") === togglesForm
  );
  if (formPasswordFields) {
    formPasswordFields.forEach((field) => {
      field.type === "password"
        ? (field.type = "text")
        : (field.type = "password");
    });
  }
  return;
};

const changeHandler = function (e) {
  if (targetIsShowPasswordToggle(e.target)) {
    togglePasswordFieldsInForm(e.target.closest("form"));
  }
  return;
};

document.addEventListener("change", changeHandler);
