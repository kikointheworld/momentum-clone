const API_KEY = "b4c11f36efce5b888330d041eee671b3";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector(".weather--weather");
      const city = document.querySelector(".weather--city");
      const icon = document.querySelector(".weather--icon");

      icon.src =
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";

      // clear weather icon is bad, so I use custom icon only if weather is clear.
      if (data.weather[0].icon == "01d") {
        icon.src = "img/" + "sunny.png";
        icon.classList.add("clearIconProperty");
      } else if (data.weather[0].icon == "01n") {
        icon.src = "img/" + "moon.png";
        icon.classList.add("clearIconProperty");
        // https://www.flaticon.com/search?word=moon&order_by=4&type=icon
      } else {
        icon.classList.remove("clearIconProperty");
      }
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
    })
  );
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
