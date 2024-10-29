# Task CLI

A command-line interface (CLI) for managing tasks. Use this tool to add, update, delete, mark, and list tasks with various statuses.

## Installation

Clone this repository and navigate to the project directory.

```bash
git clone https://github.com/yourusername/task-cli.git
cd task-cli

Usage

The task-cli allows you to manage tasks via the following commands:
1. Adding a New Task

To add a new task, use the add command followed by a task description in quotes.
bash
Copy

task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)

2. Updating a Task

To update an existing task, use the update command followed by the task ID and the new description in quotes.
bash
Copy

task-cli update 1 "Buy groceries and cook dinner"
# Output: Task updated successfully (ID: 1)

3. Deleting a Task

To delete a task, use the delete command followed by the task ID.
bash
Copy

task-cli delete 1
# Output: Task deleted successfully (ID: 1)

4. Marking a Task as In Progress or Done

To mark a task as "in-progress," use the mark-in-progress command followed by the task ID.
bash
Copy

task-cli mark-in-progress 1
# Output: Task marked as in-progress (ID: 1)

To mark a task as "done," use the mark-done command followed by the task ID.
bash
Copy

task-cli mark-done 1
# Output: Task marked as done (ID: 1)

5. Listing All Tasks

To list all tasks, simply use the list command.
bash
Copy

task-cli list
# Output: Lists all tasks with their IDs, descriptions, and statuses

6. Listing Tasks by Status

To list tasks by a specific status, use the list command followed by the desired status (done, todo, or in-progress).
bash
Copy

task-cli list done
# Output: Lists all tasks marked as done

task-cli list todo
# Output: Lists all tasks marked as todo

task-cli list in-progress
# Output: Lists all tasks marked as in-progress

Available Commands Summary
Command	Description
task-cli add "<desc>"	Adds a new task with the provided description.
task-cli update <id> "<desc>"	Updates the task description for the given ID.
task-cli delete <id>	Deletes the task with the specified ID.
task-cli mark-in-progress <id>	Marks the task with the specified ID as "in-progress".
task-cli mark-done <id>	Marks the task with the specified ID as "done".
task-cli list	Lists all tasks.
task-cli list <status>	Lists tasks by specified status (done, todo, in-progress).
Example Workflow
bash
Copy

# Adding a new task
task-cli add "Buy groceries"

# Updating a task
task-cli update 1 "Buy groceries and cook dinner"

# Deleting a task
task-cli delete 1

# Marking a task status
task-cli mark-in-progress 1
task-cli mark-done 1

# Listing all tasks
task-cli list

# Listing tasks by specific status
task-cli list done
task-cli list todo
task-cli list in-progress

Notes

    Ensure each command uses the correct task ID.

    Task descriptions should be enclosed in quotes if they contain spaces.
```
