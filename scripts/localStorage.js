const visits = document.querySelector(".visits");

let numVisits = Number(localStorage.getItem("numVisits")) || 0;

if (numVisits !== 0) {
  visits.textContent = `You have visited this site ${numVisits} times`;
} else {
  visits.textContent = `This is your first visit. Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-1s", numVisits);
