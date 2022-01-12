// VARIABLES

const app = document.querySelector("#app");
const imgPath = "/images/monsters/";
const doorImg = imgPath + "door.svg";

const monsters = [
  {
    name: "monster1",
    alt: "A cute yellow monster with a curled trunk and a feather shaped tail",
  },
  {
    name: "monster2",
    alt: "A one eyed yellow monster with a sharp toothed grin with gangly arms atop skinny legs",
  },
  {
    name: "monster3",
    alt: "A green mutant Venus fly-trap monster",
  },
  {
    name: "monster4",
    alt: "A ghost like red monster with four arms",
  },
  {
    name: "monster5",
    alt: "A short, round, glum looking monster",
  },
  {
    name: "monster6",
    alt: "A green triangular monster with horns, a scary grimace and one eye beneath its mouth",
  },
  {
    name: "monster7",
    alt: "A cute one-eyed purple  monster with tentacles for arms",
  },
  {
    name: "monster8",
    alt: "A purple balloon shaped monster with one eye and a look of uncertainty",
  },
  {
    name: "monster9",
    alt: "A blue winged insect monster with wide eyes",
  },
  {
    name: "monster10",
    alt: "A small blue monster with wide eyes upon storks, protruding from a wide mouth full of sharp teeth",
  },
  {
    name: "monster11",
    alt: "A friendly grey monster covered in fur",
  },
  { name: "sock", img: "/images/monsters/sock.svg", alt: "Dirty socks" },
];

const shuffledMonsters = shuffle(Array.from(monsters));

// HELPER FUNCTIONS

/**
 * Sanitize and encode all HTML in a user-submitted string
 * https://portswigger.net/web-security/cross-site-scripting/preventing
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
function sanitizeHTML(str) {
  return str.replace(/javascript:/gi, "").replace(/[^\w-_. ]/gi, function (c) {
    return `&#${c.charCodeAt(0)};`;
  });
}

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// RENDERED ELEMENTS
function gridItems(arr) {
  return arr
    .map(function (item) {
      return `
      <a href="#" role="button" data-card><img src="${doorImg}" alt="A locked door" class="grid__item" data-monster="${item.name}"></img></a>`;
    })
    .join("");
}

// RENDER UI
function renderMonsterGrid() {
  return `
  <div class="grid">
  ${gridItems(shuffledMonsters)}
  </div>`;
}

function clickHandler(e) {
  if (!e.target.closest("[data-card]")) return;

  // get the clicked monster's object from the monster array

  const cardImg = e.target.closest("[data-card]").querySelector("img");
  cardImg.src = imgPath + cardImg.dataset.monster + ".svg";
  card;
}

app.innerHTML = renderMonsterGrid();
app.addEventListener("click", clickHandler);
