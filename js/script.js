'use strict';

  var searchButton = document.querySelector(".button");
	var openForm = document.querySelector(".form");

	searchButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	openForm.classList.toggle("form-show");});
