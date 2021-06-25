const app = document.querySelector("#app");
const dragonTrainerAPI = "https://vanillajsacademy.com/api/dragons.json";
const dragonTrainerAuthorAPI =
  "https://vanillajsacademy.com/api/dragons-authors.json";

function isFeature(index) {
  return index === 0 ? `article-preview--feature` : ``;
}

function getBio(author, authors) {
  console.log(author, authors);

  let authorInfo = authors.find(function (item) {
    return item.author === author;
  });
  return authorInfo.bio;
}

const renderPage = function (articles, authors) {
  console.log(authors);

  let html = `${articles
    .map(function (article, index) {
      let html = `
        <article class="[ article-preview ${isFeature(index)} ]">
          <div class="article-preview__title">
          <h2><a href="${article.url}">${article.title}</a></h2>
          <p class="color-textSecondary subtitle">${article.pubdate}</p>
          </div>
          <div class="article-preview__content">
            <p>${article.article}</p>
          </div>
          <footer class="color-textSecondary gap-top-500">
          <p class="article-preview__title__meta subtitle text-400">By <a rel="author" href="#">${
            article.author
          }</a>, ${getBio(article.author, authors)}</p>
          </footer>
        </article>
     `;
      return html;
    })
    .join("")}`;
  console.log(html);
  return html;
};

const getArticles = async function () {
  try {
    let responses = await Promise.all([
      fetch(dragonTrainerAPI),
      fetch(dragonTrainerAuthorAPI),
    ]);

    console.log(responses);

    if (!responses || responses.length < 1) {
      throw "No response from API received";
    }

    let data = await Promise.all(
      responses.map(function (response) {
        return response.json();
      })
    );

    console.log(data);

    if (!data) {
      throw "No data";
    }

    app.innerHTML = renderPage(data[0].articles, data[1].authors);
  } catch (error) {
    app.innerHTML = "FAILED!";
    console.error(error);
  }
};

getArticles();
