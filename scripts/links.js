const baseURL = "https://MiriamCall.github.io/wdd230/";

const linksURL = "https://MiriamCall.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  console.log(data);
  displayLinks(data.weeks);
}
getLinks();

function displayLinks(data) {
  const links = document.querySelector("#links");
  data.forEach((week) => {
    const weekItem = document.createElement("li");
    weekItem.textContent = week.week;

    week.links.forEach((link) => {
      const linkItem = document.createElement("li");
      const linkElement = document.createElement("a");
      linkElement.setAttribute("href", `${baseURL}/${link.path}`);
      linkElement.textContent = link.label;
      linkItem.appendChild(linkElement);
      weekItem.appendChild(linkItem);
    });
    //   const linkElement = document.createElement("a");
    //   linkElement.setAttribute("href", `${baseURL}/${link.path}`);
    //   linkElement.textContent = link.label;
    //   linkItem.appendChild(linkElement);
    //   links.appendChild(linkItem);
  });
}
