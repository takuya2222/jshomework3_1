"use strict";

const onClickAdd = () => {
  const inputTodo = document.getElementById("input-todo").value;
  document.getElementById("input-todo").value = "";
  
  createTodo(inputTodo);
 };

  const todos = [];

const createTodo = (text) => {
  todos.forEach((index) => {
    const todoRow = document.createElement("tr");
    const todoId = document.createElement("td");
    const todoComment = document.createElement("td");
    const todoState = document.createElement("td");
    const todoDeleteBtn = document.createElement("td");

    const onProcessBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    onProcessBtn.innerText = "作業中";
    deleteBtn.innerText = "削除";
  

    todoId.textContent = index;
    todoComment.textContent = text;
    todoRow.appendChild(todoId);
    todoRow.appendChild(todoComment);
    todoRow.appendChild(todoState);
    todoRow.appendChild(todoDeleteBtn);
    
    todoState.appendChild(onProcessBtn);
    todoDeleteBtn.appendChild(deleteBtn);
    
    document.getElementById("todo-lists").appendChild(todoRow);

  });
    
 };

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());

