let elForm = document.querySelector(".form");
let elFormInputName = document.querySelector(".form__input--name");
let elFormInputTodo = document.querySelector(".form__input--todo");
let elResult = document.querySelector(".todo__result");
let elResultTitle = document.querySelector(".list__title");
const todos = [];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let todoValue = elFormInputTodo.value;
  elResultTitle.textContent = `Salom ${elFormInputTodo.value} sizning rejalaringiz:`;

  let todo = {
    name: todoValue,
    id: todos.length,
  };
  todos.push(todo);

  elFormInputTodo.value = null;
  elResult.innerHTML = null;

  for (item of todos) {
    let nevLi = document.createElement("p");
    elResult.setAttribute("class", "list");
    nevLi.setAttribute("class", "list__item");
    nevLi.textContent = item.name;
    elResult.appendChild(nevLi);
  }
});
