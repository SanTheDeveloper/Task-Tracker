import { readTasks, writeTasks } from "./utils/fileHandler.js";
import { generateUniqueId } from "./utils/helpers.js";

function addTask(description) {
  const tasks = readTasks();
  const newTask = {
    id: generateUniqueId(tasks),
    description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  writeTasks(tasks);
  console.log(`Task added successfully (ID: ${newTask.id})`);
}

function listTasks() {
  const tasks = readTasks();
  tasks.forEach((task) => {
    console.log(
      `ID: ${task.id}, Description: ${task.description}, Status: ${task.status}`
    );
  });
}

function listTasksByStatus(status) {
  const tasks = readTasks();
  const filteredTasks = status
    ? tasks.filter((task) => task.status === status)
    : tasks;

  filteredTasks.forEach((task) => {
    console.log(
      `ID: ${task.id}, Description: ${task.description}, Status: ${task.status}`
    );
  });
}

function updateTask(id, description) {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    console.log(`Task with ID ${id} not found.`);
    return;
  }

  tasks[taskIndex].description = description;
  tasks[taskIndex].updatedAt = new Date().toISOString();
  writeTasks(tasks);
  console.log(`Task with ID ${id} updated successfully.`);
}

function deleteTask(id) {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    console.log(`Task with ID ${id} not found.`);
    return;
  }

  tasks.splice(taskIndex, 1);
  writeTasks(tasks);
  console.log(`Task with ID ${id} deleted successfully.`);
}

function markTaskStatus(id, status) {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    console.log(`Task with ID ${id} not found.`);
    return;
  }

  tasks[taskIndex].status = status;
  tasks[taskIndex].updatedAt = new Date().toISOString();
  writeTasks(tasks);
  console.log(`Task with ID ${id} marked as ${status} successfully.`);
}

export {
  addTask,
  listTasks,
  updateTask,
  deleteTask,
  markTaskStatus,
  listTasksByStatus,
};
