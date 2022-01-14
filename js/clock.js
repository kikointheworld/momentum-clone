const clock = document.querySelector("h2#clock");

// 이걸로 숫자 만들지 말고 padStart로 이용하자 !
function numFormat(variable) {
  variable = Number(variable).toString();
  if (Number(variable) < 10 && variable.length == 1) variable = "0" + variable;
  return variable;
}

function getClock() {
  // console.log("hello");
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
  // clock.innerText = `${numFormat(date.getHours())}:${numFormat(date.getMinutes())}:${numFormat(date.getSeconds())}`;
}

getClock();
setInterval(getClock, 1000);
// setTimeout(sayHello, 5000);
