const inputs = document.querySelectorAll(".hero__form input");

// Add event listeners to each input field
inputs.forEach((input) => {
  // When the input is focused
  input.addEventListener("focus", function () {
    // Add the 'focused' class to the parent label
    input.parentElement.classList.add("is-focused");

    // Remove 'is-not-focused' class from the focused input
    input.parentElement.classList.remove("is-not-focused");

    // Add 'is-not-focused' class to all other inputs
    inputs.forEach((otherInput) => {
      if (otherInput !== input) {
        otherInput.parentElement.classList.add("is-not-focused");
      }
    });
  });

  // When the input loses focus
  input.addEventListener("blur", function () {
    // Remove the 'focused' class from the parent label
    input.parentElement.classList.remove("is-focused");

    // Remove 'is-not-focused' class from all inputs
    inputs.forEach((otherInput) => {
      otherInput.parentElement.classList.remove("is-not-focused");
    });
  });
});

/* ****************************************************************
Trigger class .is-open on the menu when the user clicks it
**************************************************************** */

document.addEventListener("DOMContentLoaded", function () {
  const navLink = document.querySelector(".page-header__nav__link");

  navLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    this.classList.toggle("is-open");
  });
});
