const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherImgWrapper = document.querySelector("#weather-img-wrapper");
const captionDesc = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=43.82298397846127&lon=-111.79384857810895&appid=a1078278c70be949e15364ecfc53d10e&units=imperial";

const forecastUrl =
  "https://api.openweathermap.org/data/2.5/forecast?lat=43.82298397846127&lon=-111.79384857810895&appid=a1078278c70be949e15364ecfc53d10e&units=imperial";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data);
    } else {
      throw Error(await response.text());
    }

    const forecastResponse = await fetch(forecastUrl);
    if (forecastResponse.ok) {
      const forecastData = await forecastResponse.json();
      displayWeatherForecast(forecastData);
    } else {
      throw Error(await forecastResponse.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;

  // Create img element and set attributes
  let weatherImg = document.createElement("img");
  weatherImg.setAttribute("src", iconsrc);
  weatherImg.setAttribute("alt", desc);
  weatherImgWrapper.appendChild(weatherImg);
  captionDesc.textContent = desc;
}

function displayWeatherForecast(data) {
  const weatherForecast = document.getElementById("weather-forecast");
  weatherForecast.innerHTML = "<h2>3-Day Forecast</h2>";

  const forecast = {};
  data.list.forEach((item) => {
    const date = new Date(item.dt_txt).toDateString();
    if (!forecast[date]) {
      forecast[date] = [];
    }
    forecast[date].push(item.main.temp);
  });

  const forecastKeys = Object.keys(forecast).slice(0, 3); // Get the first 3 days
  forecastKeys.forEach((day) => {
    const temps = forecast[day];
    const avgTemp = temps.reduce((a, b) => a + b, 0) / temps.length;

    const forecastDay = document.createElement("div");
    forecastDay.className = "forecast-day";
    forecastDay.innerHTML = `<p>${day}: Average Temperature: ${avgTemp.toFixed(
      0
    )}°F</p>`;

    weatherForecast.appendChild(forecastDay);
  });
}

// Fetch weather data on page load
apiFetch();
