const h1 = document.querySelector("div.hello:first-child h1");
const link = doucument.querySelector("a");
function handleTitleClick() {
  const clickedClass = "active";
  h1.classList.toggle(clickedClass);
}

function handleLinkClick() {
  alert("clcickedd");
}

link.addEventListener("click", handleLinkClick);

h1.addEventListener("click", handleTitleClick);
