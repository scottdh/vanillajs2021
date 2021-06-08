const textField = document.querySelector("#text");
const characterCount = document.querySelector("#character-count");

const updateCharacterCount = function (e) {
  console.log("moo");
  characterCount.textContent = textField.value.length;
};

textField.addEventListener("input", updateCharacterCount);
