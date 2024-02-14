import React, { useState, useEffect } from "react";
import Category from "./components/Category/index.jsx";
import Task from "./components/Task/index.jsx";
import Input from "./components/Input/index.jsx";
import initialData from "./utils/initialData.js";
import {
  handleAddTask,
  handleDeleteTask,
  handleMarkAsDone,
} from "./utils/functions.js";

function App() {
  const [tasks, setTasks] = useState(initialData);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div className="h-full flex items-center justify-center text-2xl text-[#525252]">
      <div className="box bg-[#EA5959] px-32 py-28">
        <div className="rounded-lg flex bg-white">
          <ul id="categories" className="flex gap-2 flex-col mt-40 px-12 mb-96">
            {["All", "Groceries", "College", "Payments"].map((category) => (
              <Category
                key={category}
                category={category}
                currentCategory={currentCategory}
                handleCategoryClick={handleCategoryClick}
              />
            ))}
          </ul>
          <div className="border-l-2 p-8">
            <div className="relative ">
              <h1 className="text-3xl font-bold mt-2 mb-6 text-black">
                {currentCategory} Tasks
              </h1>
              <Input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder={`Add a new task inside '${currentCategory}' category`}
                onClick={() =>
                  handleAddTask(
                    newTask,
                    currentCategory,
                    setTasks,
                    setNewTask,
                    tasks
                  )
                }
              />
              <ul id="tasks" className="mt-8 flex flex-col gap-3">
                {tasks
                  .filter((task) =>
                    currentCategory === "All"
                      ? true
                      : task.category === currentCategory
                  )
                  .map((task, index) => (
                    <Task
                      key={index}
                      task={task}
                      index={index}
                      handleMarkAsDone={() =>
                        handleMarkAsDone(index, tasks, setTasks)
                      }
                      handleDeleteTask={() =>
                        handleDeleteTask(index, tasks, setTasks)
                      }
                    />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
