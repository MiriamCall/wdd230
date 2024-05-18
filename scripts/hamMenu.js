//hamburger menu//
const hamburger = document.querySelector(".nav");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
  hamburger.classList.toggle("show");
  hambutton.classList.toggle("show");
});
