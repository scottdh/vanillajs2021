const blockQuote = document.querySelector("blockquote");
const getQuoteButton = document.querySelector("#get-quote");
const quoteGeneratorAPI = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

let shownQuotes = [];

const getNewQuote = async function () {
  try {
    let response = await fetch(quoteGeneratorAPI);

    // If the call failed, throw an error
    if (!response.ok) {
      throw "No response from " + quoteGeneratorAPI + "received";
    }

    // Otherwise, get the post JSON
    let data = await response.json();

    let quote = data[0];
    if (shownQuotes.includes(quote)) {
      getNewQuote();
    } else {
      shownQuotes.push(quote);
      blockQuote.textContent = quote;
    }
    // Prevent seeing a quote that was shown within the last 50 quotes
    if (shownQuotes.length === 50) {
      shownQuotes.shift();
    }
  } catch (error) {
    console.warn(error);
    blockQuote.textContent = "Unable to load quote";
  }
};

if ((blockQuote.textContent = "...")) {
  getNewQuote();
}

getQuoteButton.addEventListener("click", getNewQuote);
