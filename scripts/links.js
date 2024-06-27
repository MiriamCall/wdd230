const baseURL = "https://MiriamCall.github.io/wdd230/";

const linksURL = "https://MiriamCall.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  console.log(data);
  displayLearningList(data.weeks);
}
getLinks();

function displayLearningList(weeks) {
  const learningList = document.querySelector("#learning-list");

  // Clear any existing content from the list
  learningList.innerHTML = "";

  // Loop through the weeks
  weeks.forEach((weekData) => {
    // Create a list item for each week.
    // Give class name 'learning-card-list-item' to each item
    const weekItem = document.createElement("li");
    weekItem.classList.add("learning-card-list-item");
    weekItem.textContent = `Week ${weekData.week}: `;

    weekData.links.forEach((link, index) => {
      // Create a element for each link
      const linkElement = document.createElement("a");
      linkElement.setAttribute("href", link.url);
      linkElement.classList.add("learning-link");
      linkElement.textContent = link.title;

      // Append the link to the week item
      weekItem.appendChild(linkElement);

      // If not the last link, add a separator
      if (index < weekData.links.length - 1) {
        weekItem.appendChild(document.createTextNode(" | "));
      }
    });

    // Append the week item to the learning list ul
    learningList.appendChild(weekItem);
  });
}
