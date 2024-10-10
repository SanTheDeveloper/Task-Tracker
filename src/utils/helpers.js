function generateUniqueId(tasks) {
  return tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;
}

export { generateUniqueId };
