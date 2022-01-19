const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const resetBtn = document.getElementById("reset-btn");
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function removeFilter(item, targetId) {
  return item.id !== parseInt(targetId);
}

function deleteToDo(event) {
  event.target.parentElement.parentElement.remove();
  const targetId = event.target.parentElement.parentElement.id;
  toDos = toDos.filter((item) => removeFilter(item, targetId));
  saveToDos();
}

function checkToDo(event) {
  const checked_li = event.target.parentElement.parentElement;
  checked_li.classList.toggle("checked_list");
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const btn_div = document.createElement("div");
  const button = document.createElement("button");
  button.innerText = "✘";
  const checkBtn = document.createElement("button");
  checkBtn.innerText = "✅";

  button.addEventListener("click", deleteToDo);

  checkBtn.addEventListener("click", checkToDo);

  li.appendChild(span);
  btn_div.append(checkBtn);
  btn_div.append(button);
  li.appendChild(btn_div);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function resetList() {
  while (toDoList.lastElementChild) {
    toDoList.removeChild(toDoList.lastElementChild);
  }
  toDos = [];
  saveToDos();
}

resetBtn.addEventListener("click", resetList);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
