const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const resetBtn = document.getElementById("reset-btn");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  event.target.parentElement.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("spane");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "X";

  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function resetList() {
  while (toDoList.lastElementChild) {
    toDoList.removeChild(toDoList.lastElementChild);
  }
}

resetBtn.addEventListener("click", resetList);
