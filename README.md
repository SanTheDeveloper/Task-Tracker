# Task CLI

A command-line tool for managing tasks with commands to add, update, delete, mark, and list tasks. This CLI application is designed to streamline task management directly from the terminal.

## Project Page URL

[Task Tracker CLI Project](https://roadmap.sh/projects/task-tracker)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/task-cli.git
   ```

2. Navigate to the project directory:

   ```bash
   cd task-cli
   ```

3. Install dependencies (if applicable):
   ```bash
   npm install
   ```

## Usage

Run the task-cli commands directly from the terminal. Use the following command structure:

```bash
task-cli <command> [options]
```

## Available Commands

| Command                                | Description                                           |
| -------------------------------------- | ----------------------------------------------------- |
| `task-cli add "<description>"`         | Adds a new task with the specified description        |
| `task-cli update <id> "<description>"` | Updates the task description for the given ID         |
| `task-cli delete <id>`                 | Deletes the task with the specified ID                |
| `task-cli mark-in-progress <id>`       | Marks the task with the specified ID as "in-progress" |
| `task-cli mark-done <id>`              | Marks the task with the specified ID as "done"        |
| `task-cli list`                        | Lists all tasks                                       |
| `task-cli list <status>`               | Lists tasks by status (done, todo, in-progress)       |

## Examples

### Adding a New Task

```bash
task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)
```

### Updating a Task

```bash
task-cli update 1 "Buy groceries and cook dinner"
```

### Deleting a Task

```bash
task-cli delete 1
```

### Marking a Task as In-Progress or Done

```bash
task-cli mark-in-progress 1
task-cli mark-done 1
```

### Listing Tasks

```bash
task-cli list # Lists all tasks
task-cli list done # Lists tasks marked as done
task-cli list todo # Lists tasks to do
task-cli list in-progress # Lists tasks in-progress
```

## Notes

- Ensure each command uses the correct task ID.
- Task descriptions with spaces should be enclosed in quotes.
