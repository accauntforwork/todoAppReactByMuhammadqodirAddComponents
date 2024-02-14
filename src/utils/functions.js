export const handleAddTask = (
  newTask,
  currentCategory,
  setTasks,
  setNewTask,
  tasks
) => {
  if (newTask.trim() === "") {
    return;
  }

  const newTaskObj = {
    content: newTask,
    category: currentCategory === "All" ? "Uncategorized" : currentCategory,
    done: false,
  };

  const updatedTasks = [...tasks, newTaskObj];
  setTasks(updatedTasks);

  localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  setNewTask("");
};

export const handleDeleteTask = (index, tasks, setTasks) => {
  const updatedTasks = tasks.filter((_, i) => i !== index);
  setTasks(updatedTasks);

  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};

export const handleMarkAsDone = (index, tasks, setTasks) => {
  const updatedTasks = [...tasks];
  updatedTasks[index].done = !updatedTasks[index].done;
  setTasks(updatedTasks);

  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};
