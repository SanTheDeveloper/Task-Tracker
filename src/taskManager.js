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

export { addTask };
