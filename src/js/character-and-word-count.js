const textField = document.querySelector("#text");
const characterCount = document.querySelector("#character-count");
const wordCount = document.querySelector("#word-count");

const updateCharacterCount = function (e) {
  characterCount.textContent = textField.value.length;
  wordCount.textContent = textField.value.match(/\S+/g).length;

  // Split also works but need to reduce the index by 1
  // wordCount.textContent = textField.value.split(/\S+/g).length - 1;
};

textField.addEventListener("input", updateCharacterCount);
