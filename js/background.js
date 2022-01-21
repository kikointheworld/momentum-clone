// Downloaded at this website
// https://www.wallpaperbetter.com/ko/search?q=mac+os

const images = [
  "morningWallpaper.jpg",
  "daytimeWallpaper.jpg",
  "eveningWallpaper.jpg",
  "nightWallpaper.jpg",
];

// const bgImage = document.createElement("img");

// const chosenImage = images[Math.floor(Math.random() * images.length)];
// bgImage.src = `img/${chosenImage}`;

const bgDate = new Date();
const bgHours = bgDate.getHours();

let image = "";

if (bgHours >= 6 && bgHours <= 10) {
  image = `img/${images[0]}`;
} else if (bgHours >= 11 && bgHours <= 17) {
  image = `img/${images[1]}`;
} else if (bgHours >= 18 && bgHours <= 21) {
  image = `img/${images[2]}`;
} else {
  image = `img/${images[3]}`;
}

const body = document.querySelector("body");
body.style.backgroundImage = "url(" + image + ")";
