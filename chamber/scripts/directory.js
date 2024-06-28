const url =
  "https://raw.githubusercontent.com/MiriamCall/wdd230/main/chamber/data/members.json";

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const membersDisplay = document.querySelector("#members-display");

gridbutton.addEventListener("click", () => {
  membersDisplay.classList.add("grid");
  membersDisplay.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
  membersDisplay.classList.add("list");
  membersDisplay.classList.remove("grid");
}

async function getMemberData() {
  const response = await fetch(url);
  const data = await response.json();

  console.table(data.members);
  console.log(data.members[0].image);
  displayMembers(data.members);
}

function displayMembers(members) {
  memberCards = members.map((member) => {
    return `
    <div class="member-card">
      <img src="images/${member.image}" alt="${member.name}" />
      <h2>${member.name}</h2>
      <p>${member.email}</p>
      <p>${member.website}</p>
    `;
  });
  membersDisplay.innerHTML = memberCards.join("");
}

getMemberData();
