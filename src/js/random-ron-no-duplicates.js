const blockQuote = document.querySelector("blockquote");
const getQuoteButton = document.querySelector("#get-quote");
const quoteGeneratorAPI = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

let shownQuotes = [];

const getNewQuote = function () {
  fetch(quoteGeneratorAPI)
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
      if (shownQuotes.includes(quote)) {
        getNewQuote();
      } else {
        shownQuotes.push(quote);
        blockQuote.textContent = quote;
      }
      // After 50, empty the shownQuotes array
      if (shownQuotes.length === 50) {
        shownQuotes.shift();
      }
    })
    .catch(function (error) {
      // There was an error
      console.warn(error);
      blockQuote.textContent = "Unable to load quote";
    });
};

if ((blockQuote.textContent = "...")) {
  getNewQuote();
}

getQuoteButton.addEventListener("click", getNewQuote);
