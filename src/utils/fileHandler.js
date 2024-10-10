import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TASKS_FILE = path.join(__dirname, "tasks.json");

function initializeTasksFile() {
  if (!fs.existsSync(TASKS_FILE)) {
    fs.writeFileSync(TASKS_FILE, JSON.stringify([]), "utf-8");
  }
}

function readTasks() {
  initializeTasksFile();
  return JSON.parse(fs.readFileSync(TASKS_FILE, "utf-8"));
}

function writeTasks(tasks) {
  fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2), "utf-8");
}

export { readTasks, writeTasks };
