// function to get the country name from api
function getCountryName() {
  let url = "https://restcountries.com/v3.1/all";
  fetch(url)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((val) => {
      displayData(val);
    })
    .catch((err) => {
      console.log(err);
    });

//   function to display the country list from response
  function displayData(response) {
    response.forEach((element) => {
      let display = document.getElementsByClassName("country")[0];

      let data = `<div class="card bg-light mt-5 mb-5">
    <option class="countryList">${element.name.common}</option></div>
    `;

      display.insertAdjacentHTML("beforeend", data);
    });

    getValue(response);
  }
}

getCountryName();

// function to get the value from dropdown
function getValue(response) {
  const countryDropdown = document.getElementsByClassName("country")[0];
  let buttonSubmit = document.getElementsByClassName("btn-primary")[0];

  buttonSubmit.addEventListener("click", () => {
    const selectedCountry = countryDropdown.value;

    getlatLon(response, selectedCountry);
  });
}

// function to get the lan and lon value
function getlatLon(response, selectedCountry) {
  for (i of response) {
    if (i.name.common === selectedCountry) {
      let lat = i.latlng[0];
      let lon = i.latlng[1];
      weatherData(lat, lon, selectedCountry);
    }
  }
}

// function to get the weather data from the api
function weatherData(lat, lon, selectedCountry) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=80836a1de1d836417c5982e04efbdf5b`
  )
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((val) => {
      displayWeather(val, selectedCountry);
    })
    .catch((err) => {
      console.log(err);
    });
}

// function to displayWeather in the bootstrap card
function displayWeather(data, selectedCountry) {
  let weatherCard = document.getElementsByClassName("container")[0];

  const temperature = (data.main.temp - 273.15).toFixed(2);
  const weatherDescription = data.weather[0].description;
  const humidity = data.main.humidity;
  weatherCard.innerHTML = `<div" class="card bg-light mt-4 text-white text-center border border-dark" style="width: 18rem;"><div class=" card-header bg-dark p-2">${selectedCountry}</div>
        <div class="card-body">
          <p class="card-text bg-info p-2 text-white">Weather : ${weatherDescription}</p>
          <p class="card-text bg-info p-2 text-white">Temperature : ${temperature} (in celcius)</p>
          <p class="card-text bg-info p-2 text-white">Humidity : ${humidity} %</p>`;
}