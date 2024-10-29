// Import readTasks and writeTasks for file handling operations
import { readTasks, writeTasks } from "./utils/fileHandler.js";
// Import generateUniqueId to create unique IDs for tasks
import { generateUniqueId } from "./utils/helpers.js";

// Function to add a new task
function addTask(description) {
  // Read the current list of tasks
  const tasks = readTasks();
  // Create a new task object with a unique ID, description, default "todo" status, and timestamps
  const newTask = {
    id: generateUniqueId(tasks),
    description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  // Add the new task to the task list
  tasks.push(newTask);
  // Write the updated task list to storage
  writeTasks(tasks);
  // Log confirmation of successful task addition
  console.log(`Task added successfully (ID: ${newTask.id})`);
}

// Function to list all tasks
function listTasks() {
  // Read the current list of tasks
  const tasks = readTasks();
  // Iterate through each task and log its details
  tasks.forEach((task) => {
    console.log(
      `ID: ${task.id}, Description: ${task.description}, Status: ${task.status}`
    );
  });
}

// Function to list tasks by a specific status
function listTasksByStatus(status) {
  // Read the current list of tasks
  const tasks = readTasks();
  // Filter tasks based on the provided status, if any
  const filteredTasks = status
    ? tasks.filter((task) => task.status === status)
    : tasks;

  // Log details of each filtered task
  filteredTasks.forEach((task) => {
    console.log(
      `ID: ${task.id}, Description: ${task.description}, Status: ${task.status}`
    );
  });
}

// Function to update a task's description based on its ID
function updateTask(id, description) {
  // Read the current list of tasks
  const tasks = readTasks();
  // Find the index of the task with the specified ID
  const taskIndex = tasks.findIndex((task) => task.id === id);

  // If task not found, log an error message and exit
  if (taskIndex === -1) {
    console.log(`Task with ID ${id} not found.`);
    return;
  }

  // Update the task's description and update timestamp
  tasks[taskIndex].description = description;
  tasks[taskIndex].updatedAt = new Date().toISOString();
  // Write the updated task list to storage
  writeTasks(tasks);
  // Log confirmation of successful task update
  console.log(`Task with ID ${id} updated successfully.`);
}

// Function to delete a task based on its ID
function deleteTask(id) {
  // Read the current list of tasks
  const tasks = readTasks();
  // Find the index of the task with the specified ID
  const taskIndex = tasks.findIndex((task) => task.id === id);

  // If task not found, log an error message and exit
  if (taskIndex === -1) {
    console.log(`Task with ID ${id} not found.`);
    return;
  }

  // Remove the task from the list
  tasks.splice(taskIndex, 1);
  // Write the updated task list to storage
  writeTasks(tasks);
  // Log confirmation of successful task deletion
  console.log(`Task with ID ${id} deleted successfully.`);
}

// Function to mark a task with a specified status based on its ID
function markTaskStatus(id, status) {
  // Read the current list of tasks
  const tasks = readTasks();
  // Find the index of the task with the specified ID
  const taskIndex = tasks.findIndex((task) => task.id === id);

  // If task not found, log an error message and exit
  if (taskIndex === -1) {
    console.log(`Task with ID ${id} not found.`);
    return;
  }

  // Update the task's status and update timestamp
  tasks[taskIndex].status = status;
  tasks[taskIndex].updatedAt = new Date().toISOString();
  // Write the updated task list to storage
  writeTasks(tasks);
  // Log confirmation of successful status update
  console.log(`Task with ID ${id} marked as ${status} successfully.`);
}

// Export all task management functions for external usage
export {
  addTask,
  listTasks,
  updateTask,
  deleteTask,
  markTaskStatus,
  listTasksByStatus,
};
