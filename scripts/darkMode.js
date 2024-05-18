// Dark Mode//
const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("🌙")) {
    body.classList.add("dark-mode");
    modeButton.textContent = "🔆";
  } else {
    body.classList.remove("dark-mode");
    modeButton.textContent = "🌙";
  }
});
