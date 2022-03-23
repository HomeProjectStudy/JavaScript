// Selecionando tags via JS atráves de classes;
const inputNewTasks = document.querySelector(".input-new-task");
const buttonAddNewTasks = document.querySelector(".add-new-task");
const ulListTask = document.querySelector(".tasks");

// Criando LI(LISTA);
function createElementDomLi() {
  const li = document.createElement("li");
  return li;
}

//Criando nova tafera
function newTask(inputText) {
  const li = createElementDomLi();
  li.innerText = inputText;
  ulListTask.appendChild(li);
  createButtonRemove(li);
  salvingTasks();
}

function salvingTasksInLocalStorage() {
  const liTasks = ulListTask.querySelectorAll("li");
  const tasks = [];

  for (let task of liTasks) {
    let taskText = task.innerText;
    taskText = taskText.replace("Apagar", "").trim();
    tasks.push(taskText);
  }

  const taskJSON = JSON.stringify(tasks);
  localStorage.setItem("task", taskJSON);
}

function getTasksSalve() {
  const tasks = localStorage.getItem("task");
  const taskParsed = JSON.parse(tasks);

  for (let task of taskParsed) {
    newTask(task);
  }
}

getTasksSalve();

function createButtonRemove(li) {
  li.innerText += " ";
  const buttonRemove = document.createElement("button");
  buttonRemove.innerText = "Apagar";
  buttonRemove.setAttribute("class", "remove");
  li.appendChild(buttonRemove);
}

document.addEventListener("click", function (event) {
  const element = event.target;

  if (element.classList.contains("remove")) {
    element.parentElement.remove();
    salvingTasks();
  }
});

buttonAddNewTasks.addEventListener("click", function () {
  if (!inputNewTasks.value) return;
  newTask(inputNewTasks.value);
  inputNewTasks.value = "";
});
