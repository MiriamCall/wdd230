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
