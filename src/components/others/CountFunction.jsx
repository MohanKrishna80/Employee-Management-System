export const CalculateTaskCount = (tasks) => {
  const count = {
    active: 0,
    newTask: 0,
    completed: 0,
    failed: 0,
  };

  tasks.forEach((task) => {
    if (task.active) count.active += 1;
    if (task.newTask) count.newTask += 1;
    if (task.completed) count.completed += 1;
    if (task.failed) count.failed += 1;
  });

  return count;
};
