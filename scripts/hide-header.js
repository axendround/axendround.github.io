document.addEventListener("DOMContentLoaded", () => {
  const homeButton = document.getElementById("homeButton");
  const header = document.getElementById("header");
  const homePage = document.getElementById("homePage");

  if (homeButton) {
    homeButton.addEventListener("click", function () {
      header.style.opacity = "0";
      header.style.pointerEvents = "none";

      setTimeout(() => {
        header.style.display = "none";
        homePage.style.display = "block";
        setTimeout(() => {
          homePage.style.opacity = "1";
        }, 100);
      }, 800);
    });
  }
});

