---
title: "Announcing the count"
date: "2021-06-13"
script: "announcing-the-count.js"
---

<form class="flow form--block">
  <div class="field">
    <label for="text">Enter your text below</label>
    <textarea id="text"></textarea>
    <p>You've written <strong id="word-count" aria-live="polite">0 words</strong> and <strong id="character-count" aria-live="polite">0 characters</strong>.</p>
  </div>
  <button type="submit" data-type="primary">Send</button>
</form>
