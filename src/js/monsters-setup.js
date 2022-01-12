// VARIABLES

const app = document.querySelector("#app");

const monsters = [
  {
    name: "monster1",
    img: "/images/monsters/monster1.svg",
    alt: "A cute yellow monster with a curled trunk and a feather shaped tail",
  },
  {
    name: "monster2",
    img: "/images/monsters/monster2.svg",
    alt: "A one eyed yellow monster with a sharp toothed grin with gangly arms atop skinny legs",
  },
  {
    name: "monster3",
    img: "/images/monsters/monster3.svg",
    alt: "A green mutant Venus fly-trap monster",
  },
  {
    name: "monster4",
    img: "/images/monsters/monster4.svg",
    alt: "A ghost like red monster with four arms",
  },
  {
    name: "monster5",
    img: "/images/monsters/monster5.svg",
    alt: "A short, round, glum looking monster",
  },
  {
    name: "monster6",
    img: "/images/monsters/monster6.svg",
    alt: "A green triangular monster with horns, a scary grimace and one eye beneath its mouth",
  },
  {
    name: "monster7",
    img: "/images/monsters/monster7.svg",
    alt: "A cute one-eyed purple  monster with tentacles for arms",
  },
  {
    name: "monster8",
    img: "/images/monsters/monster8.svg",
    alt: "A purple balloon shaped monster with one eye and a look of uncertainty",
  },
  {
    name: "monster9",
    img: "/images/monsters/monster9.svg",
    alt: "A blue winged insect monster with wide eyes",
  },
  {
    name: "monster10",
    img: "/images/monsters/monster10.svg",
    alt: "A small blue monster with wide eyes upon storks, protruding from a wide mouth full of sharp teeth",
  },
  {
    name: "monster11",
    img: "/images/monsters/monster11.svg",
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
      <img src="${item.img}" alt="${item.alt}" class="grid__item"></img>`;
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

app.innerHTML = renderMonsterGrid();
