const input = document.querySelector("#favchap");

const button = document.querySelector("button");

const list = document.querySelector("#list");

button.addEventListener("click", (e) => {
  //prevent the default action of the button
  e.preventDefault();

  if (input.value) {
    // create an li element
    const li = document.createElement("li");

    //create a delete button
    const deleteButton = document.createElement("button");

    // populate the li elements
    li.textContent = input.value;

    // populate the delete button with ❌
    deleteButton.textContent = "❌";

    // append li element with delete button
    li.appendChild(deleteButton);

    //append the li element to list in HTML
    list.appendChild(li);

    // add event listener to delete button
    deleteButton.addEventListener("click", () => {
      list.removeChild(li);

      clearInput();
    });
  } else {
    input.focus();
  }
  clearInput();
});

function clearInput() {
  //send focus to input element
  input.focus();

  //change the input value to nothing or the empty string to clean up the interface for the user
  input.value = "";
}

const chaptersArray = getChapterList() || [];
