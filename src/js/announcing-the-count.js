const textField = document.querySelector("#text");
const characterCount = document.querySelector("#character-count");
const wordCount = document.querySelector("#word-count");

const updateCharacterAndWordCount = function (e) {
  characterCount.textContent = textField.value.length + " characters ";

  wordCount.textContent = textField.value.split(/\S+/g).length - 1 + " words";

  // Match works but doesn't return word count to zero when deleting all text. Hmm
  // wordCount.textContent = textField.value.match(/\S+/g || []).length;
};

textField.addEventListener("input", updateCharacterAndWordCount);
