function getLastModified() {
  const date = new Date(document.lastModified);
  document.querySelector("#lastModified").innerHTML = date.toLocaleString();
}

getLastModified();
