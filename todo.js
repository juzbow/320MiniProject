"use strict";

const $ = selector => document.querySelector(selector);

const form = $("#new-task-form");
const input = $("#new-task-input");
const dateInput = $("#new-date-input");
const taskList = $("#tasks");

// Represent a to-do item as an object
function createTaskObject(text, date) {
    return {
        text: text,
        date: date,
    };
}
 
// Append a task to the list
function appendTask(text, date) {
    const task = createTaskElement(text, date);
    taskList.appendChild(task);
}

// Create an element for a task
function createTaskElement(text, date) {
  const task = document.createElement("li");

  const textElement = document.createElement("span");
  textElement.textContent = text;
  task.appendChild(textElement);

  if (date) {
      const dateSpan = document.createElement("span");
      dateSpan.textContent = " (Due: " + date + ")";
      task.appendChild(dateSpan);
  }

  // Add Edit and Delete buttons
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit-button");
  task.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");
  task.appendChild(deleteButton);

  return task;
}



// Add a new entry to the list
function addTask() {
    const taskText = input.value.trim();
    const taskDate = dateInput.value.trim();

    if (taskText !== "") {
        const task = createTaskObject(taskText, taskDate);
        appendTask(task.text, task.date);
        input.value = "";
        dateInput.value = "";
    }
}

// Edit an existing item in the list
taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit-button")) {
      const task = event.target.parentElement;
      const textElement = task.querySelector("span"); 
      const currentText = textElement.textContent;

      const newText = prompt("Edit the task:", currentText);

      if (newText !== null) {
          textElement.textContent = newText; // Update the task text
      }
  }
});

// Delete existing entries
taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-button")) {
        const task = event.target.parentElement;
        taskList.removeChild(task);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    form.addEventListener("click", (event) => {
        event.preventDefault();
    
        $("#add").addEventListener("click", addTask);
    })});

    
  
