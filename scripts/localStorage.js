function getVisitCount() {
  // get visit count from local storage
  let count = localStorage.getItem("visitCount");

  if (count) {
    count++;
  } else {
    count = 1;
  }

  localStorage.setItem("visitCount", count);

  return count;
}

let visitCount = getVisitCount();

document.querySelector("#count").textContent = visitCount;
