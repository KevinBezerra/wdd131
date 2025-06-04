document.addEventListener("DOMContentLoaded", () => {

  const menuButton = document.getElementById("menu");
  const navMenu = document.getElementById("navMenu");

  if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
      navMenu.classList.toggle("open");

      if (navMenu.classList.contains("open")) {
        menuButton.innerHTML = "&times;";
      } else {
        menuButton.innerHTML = "&#9776;";
      }
    });
  }

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Last Modified Date
  const lastModifiedP = document.getElementById("lastModified");
  if (lastModifiedP) {
    lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;
  }
});