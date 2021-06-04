---
title: "Toggle password fields in multiple forms"
date: "2021-06-04"
script: "toggle-passwords-multiple-forms.js"
---

<form class="flow form--block">
<h2>Change Username</h2>
<p>Enter your username and password to change your username.</p>
	<div class="field">
		<label for="username" class="field-label">Username</label>
		<input type="text" name="username" id="username">
	</div>
	<div class="field">
		<label for="password" class="field-label">Password</label>
		<input type="password" name="password" id="password">
	</div>
	<div class="field-checkbox">
		<label for="show-password" >
			<input type="checkbox" name="show-password" id="show-password" data-showPasswordToggle>
			Show password
		</label>
	</div>
	<p>
		<button type="submit">Change Username</button>
	</p>
</form>
<form class="flow form--block">
<h2>Change Password</h2>
<p>Enter your current password and new password below.</p>
	<div class="field">
		<label for="current-password" class="field-label">Current Password</label>
		<input type="password" name="current-password" id="current-password">
	</div>
	<div class="field">
		<label for="new-password" class="field-label">New Password</label>
		<input type="password" name="new-password" id="new-password">
	</div>
	<div class="field-checkbox">
		<label for="show-passwords">
			<input type="checkbox" name="show-passwords" id="show-passwords" data-showPasswordToggle>
			Show passwords
		</label>
	</div>
	<p>
		<button type="submit">Change Passwords</button>
	</p>
</form>
<pre>
  <code>

    const showPasswordToggles = document.querySelectorAll(
      "[data-showPasswordToggle]"
    );
    const passwordFields = document.querySelectorAll("input[type='password']");

    // check if item clicked is in the showPasswordToggle NodeList
    const targetIsShowPasswordToggle = function (el) {
      let result = [...showPasswordToggles].includes(el) ? true : false;
      return result;
    };

    const togglePasswordFieldsInForm = function (showPasswordToggle) {
      // Grab the form the toggle's in
      let form = showPasswordToggle.closest("form");
      // Create an array of password fields that share same form as the toggle from the  passwordFields NodeList
      let formPasswordFields = [...passwordFields].filter(
        (el) => el.closest("form") === form
      );
      if (formPasswordFields) {
        formPasswordFields.forEach(function (field) {
          field.type === "password"
            ? (field.type = "text")
            : (field.type = "password");
        });
      }
      return;
    };

    const changeHandler = function (e) {
      if (targetIsShowPasswordToggle(e.target)) {
        togglePasswordFieldsInForm(e.target);
      }
      return;
    };

    document.addEventListener("change", changeHandler);

  </code>
</pre>
