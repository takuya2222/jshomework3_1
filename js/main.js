"use strict";

const onClickAdd = () => {
  const inputTodo = document.getElementById("input-todo").value;
  document.getElementById("input-todo").value = "";

  createTodo(inputTodo);
};

const todos = [];

const createTodo = (text) => {
  const todoRow = document.createElement("tr");
  const todoId = document.createElement("td");
  const todoComment = document.createElement("td");
  const todoState = document.createElement("td");

  const onProcessBtn = document.createElement("button");
  onProcessBtn.innerText = "作業中";

  const currentNum = 0;
  todoComment.innerText = text;

  todoRow.appendChild(todoId);
  todoRow.appendChild(todoComment);
  todoRow.appendChild(todoState);

  todoState.appendChild(onProcessBtn);

  document.getElementById("todo-lists").appendChild(todoRow);

  todos.push({
    id: currentNum,
    title:todoComment.innerText = text,
  });

};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());