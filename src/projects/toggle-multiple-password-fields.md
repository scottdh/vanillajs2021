---
title: "Toggle multiple password fields"
date: "2021-06-02"
script: "toggle-multiple-password-fields.js"
---

<form class="flow">
  <div class="field">
    <label for="current-password">
      <span class="field-label">Current password</span>
    </label>
    <input type="password" name="current-password" id="current-password-field" data-password>
  </div>
  <div class="field">
    <label for="new-password">
      <span class="field-label">New password</span>
    </label>
    <input type="password" name="new-password" id="new-password-field" data-password>
  </div>
  <div class="field-checkbox">
    <label for="show-passwords">
      <input type="checkbox" name="show-passwords" id="show-passwords">
      <span class="field-label">Show passwords</span>
    </label>
  </div>
  <p>
    <button type="submit">Change passwords</button>
  </p>
</form>
