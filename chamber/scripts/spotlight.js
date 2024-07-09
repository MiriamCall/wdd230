const url =
  "https://https://raw.githubusercontent.com/MiriamCall/wdd230/main/data/links.json";

async function getMemberData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Filter members with silver or gold membership
    const filteredMembers = data.filter(
      (member) => member.membership === "silver" || member.membership === "gold"
    );

    // Randomly select 2 or 3 members
    function getRandomMembers(arr, num) {
      const shuffled = arr.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    }

    const spotlightMembers = getRandomMembers(filteredMembers, 3);

    // Display selected members on the home page
    const spotlightContainer = document.getElementById("spotlights");
    spotlightMembers.forEach((member) => {
      const memberDiv = document.createElement("div");
      memberDiv.textContent = `${member.name} (${member.membership})`;
      spotlightContainer.appendChild(memberDiv);
    });
  } catch (error) {
    console.error("Error fetching member data:", error);
  }
}

// Call the function to fetch and display member data
getMemberData();
