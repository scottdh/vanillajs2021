const app = document.querySelector("#app");
const dragonTrainerAPI = "https://vanillajsacademy.com/api/dragons.json";

const renderPage = function (articles) {
  let html = `
  <ul class="flow flow-space-1200">
  ${articles
    .map(function (article, index) {
      let html = `
      <li>
        <article class="flow flow-space-400">
          <header>`;
      index === 0
        ? (html += `<h2>${article.title}</h2>`)
        : (html += `<h3>${article.title}</h3>`);

      html += `
      <div class="byline subtitle">
            <address class="author" style="display: inline-block;">By <a rel="author" href="#">${article.author}</a></address> 
            on ${article.pubdate}
        </div>
    </header>
    <div class="article-content">
    <p>${article.article}</p>
    </div>
        </article></li>`;
      return html;
    })
    .join(" ")}
  </ul>
  `;
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
    console.log(data);

    app.innerHTML = renderPage(data.articles);
  } catch (error) {
    console.error(error);
  }
};

getArticles();
