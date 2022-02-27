"use strict";

const todos = [];

const onClickAdd = () => {
  const inputTodo = document.getElementById("input-todo").value;
  document.getElementById("input-todo").value = "";
  
  createTodo(inputTodo);
};

const createTodo = (text) => {
  todos.forEach((index) => {
    const todo = {todoComment: inputTodo, onProcessBtn: '作業中' };
    const todoRow = document.createElement("tr");

    const todoId = document.createElement("td");
    const todoComment = document.createElement("td");
    const todoState = document.createElement("td");
    const todoDeleteBtn = document.createElement("td");
    
    const onProcessBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "削除";
    
    todoId.textContent = index;
    todoRow.appendChild(todoId);
    todoRow.appendChild(todoComment);
    todoRow.appendChild(todoState);
    todoRow.appendChild(todoDeleteBtn);
    
    todoState.appendChild(onProcessBtn);
    todoDeleteBtn.appendChild(deleteBtn);

    document.getElementById("todo-lists").appendChild(todoRow);

    todos.push(todo);
  });
};

document
.getElementById("add-btn")
.addEventListener("click", () => onClickAdd());

