let form = document.querySelector("form");
let formLoadTimeStamp = document.querySelector("#formLoadTimeStamp");
let name = document.querySelector("#name");
console.log("test");

const getFormLoadTimeStamp = () => {
  let timeStampValue = new Date().toISOString();
  formLoadTimeStamp.value = timeStampValue;
  console.log("Form Load Time Stamp: ", timeStampValue);
};

getFormLoadTimeStamp();
