const blockQuote = document.querySelector("blockquote");
const getQuoteButton = document.querySelector("#get-quote");
const quoteGenerator = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

fetch(quoteGenerator)
  .then(function (response) {
    // If the response is successful, get the JSON
    if (response.ok) {
      return response.json();
    }
    // Otherwise, throw an error
    throw response.status;
  })
  .then(function (data) {
    let quote = data[0];
    blockQuote.textContent = quote;
  })
  .catch(function (error) {
    // There was an error
    console.warn(error);
    blockQuote.textContent = "Unable to load quote";
  });

const refresh = function (e) {
  location.reload();
};

getQuoteButton.addEventListener("click", refresh);
