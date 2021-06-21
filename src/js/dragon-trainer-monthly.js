const app = document.querySelector("#app");
const dragonTrainerAPI = "https://vanillajsacademy.com/api/dragons.json";

const renderPage = function (articles) {
  let html = ``;
  html += `
  <ul class="flow flow-space-1200">
  ${articles
    .map(function (article, index) {
      const byline = `
      <footer class="byline text-400">
        By <a rel="author" href="#">${article.author}</a> on ${article.pubdate}
      </footer>`;
      let html = `
      <li>
        <article class="flow flow-space-400">
          <header>`;
      index === 0
        ? (html += `<h2>${article.title}</h2>${byline}</header>`)
        : (html += `<h3>${article.title}</h3>${byline}</header>`);

      html += `
          <div class="article-content">
            <p>${article.article}</p>
          </div>
        </article>
      </li>`;
      return html;
    })
    .join("")}
  </ul>`;
  console.log(html);
  return html;
};

const getArticles = async function () {
  try {
    let response = await fetch(dragonTrainerAPI);

    if (!response.ok) {
      throw "No response from API received";
    }

    let data = await response.json();
    if (!data) {
      throw "No data";
    }
    app.innerHTML = renderPage(data.articles);
  } catch (error) {
    console.error(error);
  }
};

getArticles();
