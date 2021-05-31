---
title: "Toggle password visibility"
date: "2021-05-31"
script: "toggle-password-visibility.js"
---

<form class="flow">
  <div class="field">
    <label for="username">
    <span class="field-label">Username</span>  
    </label>
    <input type="text" name="username" id="username">
  </div>
  <div class="field">
    <label for="password">
      <span class="field-label">Password</span>
      <span class="field-hint">Must contain 8+ characters with at least 1 number</span>
    </label>
    <input type="password" name="password" id="password-field">
  </div>
  <div class="field-checkbox">
    <label for="show-password">
      <input type="checkbox" name="show-passwords" id="show-password">
      <span class="field-label">Show password</span>
    </label>
  </div>
  <p>
    <button type="submit">Log In</button>
  </p>
</form>
<pre>
  <code>
    
    const showPassword = document.querySelector("#show-password");
    const passwordField = document.querySelector("#password-field");
    
    const changeHandler = function (e) {
      if (e.target == showPassword) {
        if (showPassword.checked) {
          passwordField.type = "text";
        } else {
          passwordField.type = "password";
        }
      }
    
      return;
    };
    
    document.addEventListener("change", changeHandler);

  </code>
</pre>
