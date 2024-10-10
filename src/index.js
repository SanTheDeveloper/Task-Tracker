#!/usr/bin/env node

import { addTask } from "./taskManager.js";

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
    default:
      console.log(
        "Invalid command. Available commands: add, list, update, delete, mark-in-progress, mark-done"
      );
  }
}

main();
