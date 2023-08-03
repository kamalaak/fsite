document.addEventListener("DOMContentLoaded", function () {
  // JavaScript to handle the mobile menu toggle
  var navbarToggle = document.getElementById("navbar-toggle");
  var navbarMenu = document.getElementById("navbar-menu");

  navbarToggle.addEventListener("click", function () {
    if (navbarMenu.classList.contains("hidden")) {
      navbarMenu.classList.remove("hidden");
      navbarMenu.classList.add("block");
      navbarMenu.classList.add("text-center");
    } else {
      navbarMenu.classList.remove("block");
      navbarMenu.classList.add("hidden");
    }
  });
});

const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const modal = document.getElementById("joinBspModal");

openModalButton.addEventListener("click", function () {
  window.open("./asse/login.html", "_blank");
});

closeModalButton.addEventListener("click", function () {
  modal.classList.add("hidden");
});
