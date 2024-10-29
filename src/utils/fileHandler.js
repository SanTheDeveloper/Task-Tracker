// Import the fs module to interact with the file system
import fs from "fs";
// Import the path module to work with file and directory paths
import path from "path";
// Import fileURLToPath utility to work with module paths in ES6
import { fileURLToPath } from "url";

// Determine the filename of the current module
const __filename = fileURLToPath(import.meta.url);
// Determine the directory name of the current module
const __dirname = path.dirname(__filename);

// Define the path to the tasks file where tasks data will be stored
const TASKS_FILE = path.join(__dirname, "tasks.json");

// Function to initialize the tasks file if it does not exist
function initializeTasksFile() {
  // Check if tasks file exists; if not, create it with an empty array
  if (!fs.existsSync(TASKS_FILE)) {
    fs.writeFileSync(TASKS_FILE, JSON.stringify([]), "utf-8");
  }
}

// Function to read and parse tasks from the tasks file
function readTasks() {
  // Ensure the tasks file is initialized before reading
  initializeTasksFile();
  // Read the contents of the tasks file and parse it as JSON
  return JSON.parse(fs.readFileSync(TASKS_FILE, "utf-8"));
}

// Function to write updated tasks to the tasks file
function writeTasks(tasks) {
  // Write the tasks array to the file, formatted with indentation for readability
  fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2), "utf-8");
}

// Export readTasks and writeTasks functions for use in other modules
export { readTasks, writeTasks };
