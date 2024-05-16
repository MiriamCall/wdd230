// Function to get the current year and insert it into the footer
function getYear() {
  const date = new Date();
  currentYear = date.getFullYear();
  document.querySelector("#year").innerHTML = currentYear;
}

// Function to get the last modified date and insert it into the footer
function getLastModified() {
  const date = new Date(document.lastModified);
  document.querySelector("#lastModified").innerHTML = date.toLocaleString();
}

getYear();
getLastModified();

// Dark Mode//
const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("🕶️")) {
    body.style.background = "#000";
    body.style.color = "#fff";
    modeButton.textContent = "🔆";
  } else {
    body.style.background = "#fff";
    body.style.color = "#000";
    modeButton.textContent = "🕶️";
  }
});

//hamburger menu//
const hamburger = document.querySelector(".nav");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
  hamburger.classList.toggle("show");
  hambutton.classList.toggle("show");
});
