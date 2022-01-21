const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings();
}

function paintGreetings() {
  const greetingDate = new Date();

  const greetingHours = greetingDate.getHours();
  // console.log(greetingHours);
  const username = localStorage.getItem(USERNAME_KEY);

  if (greetingHours >= 6 && greetingHours <= 10) {
    greeting.innerText = `Good morning ${username}!`;
  } else if (greetingHours >= 11 && greetingHours <= 17) {
    greeting.innerText = `Good afternoon ${username}!`;
  } else if (greetingHours >= 18 && greetingHours <= 21) {
    greeting.innerText = `Good evening ${username}!`;
  } else {
    greeting.innerText = `Good night ${username}!`;
  }

  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  // show the form
} else {
  paintGreetings();
  // show the greetings
}
