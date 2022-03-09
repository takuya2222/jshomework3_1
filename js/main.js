'use strict';

const inputTodo = document.getElementById('input-todo');
const addTaskTarget = document.getElementById('addTask-target');
const todos = [];

const onClickAdd = () => {
  const todo = {todoComment: inputTodo.value, onProcessBtn: '作業中' };
  todos.push(todo);
  
  createTodo(inputTodo);
  inputTodo.value = '';
};


const createTodo = (text) => {
  addTaskTarget.textContent = '';

  todos.forEach((todo,number) => {
    const todoRow = document.createElement('tr');

    const todoId = document.createElement('td');
    const todoComment = document.createElement('td');
    const status = document.createElement('td');
    const todoDeleteButton= document.createElement('td');
    
    const statusButton = document.createElement('button');
    statusButton.innerText = todo.onProcessBtn;
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '削除';
    
    todoComment.textContent = todo.todoComment;
    todoId.textContent = number;

    todoRow.appendChild(todoId);
    todoRow.appendChild(todoComment);
    todoRow.appendChild(status);
    todoRow.appendChild(todoDeleteButton);
    
    status.appendChild(statusButton);
    todoDeleteButton.appendChild(deleteButton);

    addTaskTarget.appendChild(todoRow);

    console.log(addTaskTarget);
  });
};

document
.getElementById('add-btn')
.addEventListener('click', () => onClickAdd());