const textField = document.querySelector("#text");
const characterCount = document.querySelector("#character-count");

const updateCharacterCount = function (e) {
  characterCount.textContent = textField.value.length;
};

textField.addEventListener("input", updateCharacterCount);
