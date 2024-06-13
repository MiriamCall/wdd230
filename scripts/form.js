// Password Validation

const p1 = document.querySelector("#password");
const p2 = document.querySelector("#password2");
const message = document.querySelector("#message");

p2.addEventListener("focusout", checkSame);

function checkSame() {
  if (p1.value !== p2.value) {
    message.textContent = "Passwords do not match";
    message.style.visibility = "show";
    p2.style.backgroundColor = "red";
    p2.value = "";
    p1.value = "";
    p1.focus();
  } else {
    message.style.display = "none";
    p2.style.backgroundColor = "white";
    p2.style.color = "black";
  }
}

// Page Rating
const rangevalue = document.querySelector("#rangevalue");
const range = document.querySelector("#rating");

range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
  rangevalue.innerHTML = range.value;
}
