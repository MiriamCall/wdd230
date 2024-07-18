// url to fetch the json data from
const memberurl =
  "https://raw.githubusercontent.com/MiriamCall/wdd230/main/chamber/data/members.json";

// select the spotlight section in the html
const spotlights = document.querySelector("#spotlights");

// fetch the json data
const getMemberData = async () => {
  // fetch the json data from the url
  const response = await fetch(memberurl);

  // store the json data in the data variable
  const data = await response.json();

  // console.log("Member data from fetch request:");
  // console.table(data);

  return data;
};

const displaySpotLights = async () => {
  try {
    // Get the member data
    const members = await getMemberData();

    // check if the data exists
    if (members === undefined) {
      // throw an error if the data does not exist
      throw new Error("No member data found");
    }

    // check if the data is an array
    if (!Array.isArray(members)) {
      // throw an error if the data is not an array
      throw new Error("Invalid member data");
    }

    // filter members with membership level of silver or gold
    const spotlightMembers = members.filter((member) => {
      return (
        // check if the membership level is silver or gold
        member.membershipLevel === "Silver" || member.membershipLevel === "Gold"
      );
    });

    // console log statement to check the spotlight members
    // console.log("Spotlight Members: ");
    // console.table(spotlightMembers);

    // check if there are no spotlight members
    if (spotlightMembers.length === 0) {
      throw new Error(
        "No spotlight members with Silver of Gold Memberships were found"
      );
    }

    // randomize the order of the spotlight members
    const randomizedSpotlightMembers = spotlightMembers.sort(
      () => Math.random() - 0.5
    );

    // console log statement to check the randomized spotlight members
    // console.log("Randomized Spotlight Members: ");
    // console.table(randomizedSpotlightMembers);

    let spotLightHtml =
      '';

    // loop through the first 3 spotlight members
    for (let i = 0; i < 3; i++) {
      // get the member at the current index of the randomized spotlight members
      const member =
        randomizedSpotlightMembers[i % randomizedSpotlightMembers.length];

      // console log statement to check the spotlight member
      // console.log("Spotlight Member: ");
      // console.table(member);

      // add the spotlight member to the spotlight html using string interpolation
      spotLightHtml += `
      <div class="spotlight">
        <h3>${member.name}</h3>
        <img src="${member.image}" alt="${member.name}" width="150"/>
      </div>
      `;
    }

    // console log statement to check the spotlight html
    // console.log("Spotlight HTML: ");
    // console.log(spotLightHtml);

    // set the inner html of the spotlight section to the spotlight html
    spotlights.innerHTML = spotLightHtml;
  } catch (error) {
    // log the error message to the console
    console.error(error.message);
  }
};

// call the displaySpotLights function
displaySpotLights();
