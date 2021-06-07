// ----------------------

const logo = document.querySelector(".logo");
const navmenu = document.querySelector(".navmenu");
const socialMedia = document.querySelector(".social-media");
const burgerDisplay = document.querySelector("#burger");
const burgerClose = document.querySelector("#burger-close");

burgerDisplay.addEventListener("click", () => {
  logo.classList.remove("hide");
  navmenu.classList.remove("hide");
  socialMedia.classList.remove("hide");
  burgerDisplay.style.display = "none";
  burgerClose.style.display = "block";
});
burgerClose.addEventListener("click", () => {
  logo.classList.add("hide");
  navmenu.classList.add("hide");
  socialMedia.classList.add("hide");
  burgerClose.style.display = "none";
  burgerDisplay.style.display = "block";
});

burgerClose.style.display = "none";
burgerDisplay.style.visibility = "none";
