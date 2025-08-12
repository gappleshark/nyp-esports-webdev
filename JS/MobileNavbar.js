// When the page is ready
document.addEventListener("DOMContentLoaded", function () {
  // Get the button that opens/closes the menu
  const button = document.getElementById("menu-toggle");

  // Get the menu links area
  const menu = document.querySelector(".nav-links");

  // Get the icon that changes between ☰ and X
  const icon = document.getElementById("menu-icon");

  // When the button is clicked
  button.addEventListener("click", function () {
    // Check if the menu is shown
    if (menu.classList.contains("active")) {
      // If it is shown, hide it
      menu.classList.remove("active");
      // Change icon to hamburger ☰
      icon.textContent = "☰";
    } else {
      // If it is hidden, show it
      menu.classList.add("active");
      // Change icon to X
      icon.textContent = "X";
    }
  });
});


