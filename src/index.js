// Import functions from taskManager module for task operations
import {
  addTask,
  listTasks,
  updateTask,
  deleteTask,
  markTaskStatus,
  listTasksByStatus,
} from "./taskManager.js";

// Main function to process command line arguments and execute appropriate tasks
function main() {
  // Destructure command line arguments to get the command and any additional arguments
  const [, , command, ...args] = process.argv;

  // Switch case to determine the command and call corresponding functions
  switch (command) {
    case "add":
      // Join the args as a single string for the task description
      const description = args.join(" ");
      // If a description is provided, call addTask to add it
      if (description) {
        addTask(description);
      } else {
        // Otherwise, prompt the user to provide a task description
        console.log("Please provide a description for the task.");
      }
      break;

    case "list":
      // If specific task status is provided, list tasks by that status
      if (args[0] === "done") {
        listTasksByStatus("done");
      } else if (args[0] === "todo") {
        listTasksByStatus("todo");
      } else if (args[0] === "in-progress") {
        listTasksByStatus("in-progress");
      } else {
        // Otherwise, list all tasks without filtering by status
        listTasks();
      }
      break;

    case "update":
      // Parse the first argument as the task ID, then join the rest as the updated description
      updateTask(parseInt(args[0]), args.slice(1).join(" "));
      break;

    case "delete":
      // Parse the first argument as the task ID and delete the specified task
      deleteTask(parseInt(args[0]));
      break;

    case "mark-in-progress":
      // Parse the first argument as the task ID and mark it as "in-progress"
      markTaskStatus(parseInt(args[0]), "in-progress");
      break;

    case "mark-done":
      // Parse the first argument as the task ID and mark it as "done"
      markTaskStatus(parseInt(args[0]), "done");
      break;

    default:
      // If command is unrecognized, display available commands
      console.log(
        "Invalid command. Available commands: add, list, update, delete, mark-in-progress, mark-done"
      );
  }
}

// Export the main function to make it accessible for external usage
export { main };
