const baseURL = "https://github.com/MiriamCall/wdd230";

const linksURL = "https://github.com/MiriamCall/wdd230/data.links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  console.log(data);
  displayLinks(data);
}

function displayLinks(weeks) {
  const links = document.querySelector(".ul");
  weeks.forEach((link) => {
    const linkItem = document.createElement("li");
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", `${baseURL}/${link.path}`);
    linkElement.textContent = link.label;
    linkItem.appendChild(linkElement);
    links.appendChild(linkItem);
  });
}

getLinks();
