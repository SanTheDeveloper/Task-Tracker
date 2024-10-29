// Function to generate a unique ID for a new task
function generateUniqueId(tasks) {
  // Check if there are any tasks; if so, find the maximum ID and add 1
  return tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;
}

// Export generateUniqueId for use in other modules
export { generateUniqueId };
