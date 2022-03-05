"use strict";

const inputTodo = document.getElementById("input-todo");
const addTaskTarget = document.getElementById("addTask-target");
const todos = [];

const onClickAdd = () => {
  const todo = {todoComment: inputTodo.value, onProcessBtn: '作業中' };
  todos.push(todo);
  
  createTodo(inputTodo);
  inputTodo.value = "";
};


const createTodo = (text) => {
  while (addTaskTarget.firstChild) {
    addTaskTarget.removeChild(addTaskTarget.firstChild);
   }

  todos.forEach((todo,number) => {
    const todoRow = document.createElement("tr");

    const todoId = document.createElement("td");
    const todoComment = document.createElement("td");
    const todoState = document.createElement("td");
    const todoDeleteBtn = document.createElement("td");
    
    const onProcessBtn = document.createElement("button");
    onProcessBtn.innerText = todo.onProcessBtn;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "削除";
    
    todoComment.textContent = todo.todoComment;
    todoId.textContent = number;

    todoRow.appendChild(todoId);
    todoRow.appendChild(todoComment);
    todoRow.appendChild(todoState);
    todoRow.appendChild(todoDeleteBtn);
    
    todoState.appendChild(onProcessBtn);
    todoDeleteBtn.appendChild(deleteBtn);

    addTaskTarget.appendChild(todoRow);
  });
};

document
.getElementById("add-btn")
.addEventListener("click", () => onClickAdd());