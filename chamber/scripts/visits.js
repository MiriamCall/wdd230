function getMessage() {
  // get current date
  let currentDate = new Date();
  let storedDate;
  let message;

  // get the date from local storage
  let date = localStorage.getItem("date");

  if (date) {
    // convert the stored date to a date object
    storedDate = new Date(parseInt(date));
  }

  // compare the dates
  if (date) {
    let differenceInTime = currentDate.getTime() - storedDate.getTime();
    if (differenceInTime < 86400000) {
      message = "Back so soon!";
    } else {
      let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
      message = `Welcome back! It's been ${differenceInDays} days since your last visit.`;
    }
  } else {
    message = "Welcome! Let us know if you have any questions.";
  }

  localStorage.setItem("date", currentDate.getTime());

  return message;
}
let displayMessage = getMessage();
document.querySelector("#message").textContent = displayMessage;
