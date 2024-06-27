const URL =
  "https://raw.githubusercontent.com/MiriamCall/wdd230/main/chamber/data/members.json";

async function getMemberData() {
  const response = await fetch(url);
  const data = await response.json();

  console.table(data.members);
  displayProphets(data.members);
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#article");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}
