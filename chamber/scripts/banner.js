function showBanner() {
  const today = new Date().getDay();
  if (today === 1 || today === 2 || today === 3) {
    // Monday, Tuesday, or Wednesday
    document.getElementById("banner").style.display = "block";
  }
}

function closeBanner() {
  document.getElementById("banner").style.display = "none";
}

// Run the function to check the day and possibly show the banner
showBanner();
