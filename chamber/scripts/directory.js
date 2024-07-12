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

  console.table(data);
  console.log(data[0].name);
  displayMembers(data);
}

function displayMembers(members) {
  memberCards = members.map((member) => {
    return `
    <div class="member-card">
      <img src="${member.image}" alt="${member.name}" height="50" />
      <h2>${member.name}</h2>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p>${member.website}</p>
    </div>
    `;
  });
  membersDisplay.innerHTML = memberCards.join("");
}

getMemberData();
