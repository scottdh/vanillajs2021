---
title: "Toggle password fields in multiple forms"
date: "2021-06-04"
script: "toggle-passwords-multiple-forms.js"
---

<form class="flow form--block">
<h2>Change Username</h2>
<p class="subtitle">Enter your username and password to change your username.</p>
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
		<button type="submit" data-type="primary">Change Username</button>
	</p>
</form>
<form class="flow form--block">
<h2>Change Password</h2>
<p class="subtitle">Enter your current password and new password below.</p>
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
		<button type="submit" data-type="primary">Change Passwords</button>
	</p>
</form>
