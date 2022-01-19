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

      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
      console.log(data.name, data.weather);
    })
  );
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
