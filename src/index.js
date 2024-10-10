import {
  addTask,
  listTasks,
  updateTask,
  deleteTask,
  markTaskStatus,
  listTasksByStatus,
} from "./taskManager.js";

function main() {
  const [, , command, ...args] = process.argv;

  switch (command) {
    case "add":
      const description = args.join(" ");
      if (description) {
        addTask(description);
      } else {
        console.log("Please provide a description for the task.");
      }
      break;
    case "list":
      if (args[0] === "done") {
        listTasksByStatus("done");
      } else if (args[0] === "todo") {
        listTasksByStatus("todo");
      } else if (args[0] === "in-progress") {
        listTasksByStatus("in-progress");
      } else {
        listTasks();
      }
      break;
    case "update":
      updateTask(parseInt(args[0]), args.slice(1).join(" "));
      break;
    case "delete":
      deleteTask(parseInt(args[0]));
      break;
    case "mark-in-progress":
      markTaskStatus(parseInt(args[0]), "in-progress");
      break;
    case "mark-done":
      markTaskStatus(parseInt(args[0]), "done");
      break;
    default:
      console.log(
        "Invalid command. Available commands: add, list, update, delete, mark-in-progress, mark-done"
      );
  }
}

export { main };
