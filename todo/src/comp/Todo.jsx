import React, { use, useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([""]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((el, i) => i !== index);
    setTasks(updatedTasks);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        [updatedTasks[index]],
      ];

      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index+1],
        [updatedTasks[index]],
      ];

      setTasks(updatedTasks);
    }
  }

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div class="input-container">
        <input
          type="text"
          placeholder="New task.."
          value={newTask}
          onChange={handleInputChange}
        />
        <button class="addbutton" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span class="text">{task}</span>
            <button class="deletebutton" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button class="movebutton" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button class="movebutton" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default Todo;
