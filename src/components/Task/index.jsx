import React from "react";

function Task({ task, handleMarkAsDone, handleDeleteTask }) {
  return (
    <li className={`flex justify-between ${task.done ? "line-through" : ""}`}>
      <div className="flex gap-4 items-center">
        <span>
          <svg
            className="w-[28px] cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(234,113,46,1)"
            onClick={handleMarkAsDone}
          >
            <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5Z"></path>
          </svg>
        </span>
        <span>{task.content}</span>
        <span className="px-8 py-1 rounded-lg text-xl text-white bg-[#EA5959]">
          {task.category}
        </span>
      </div>
      <svg
        className="w-[28px] cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="rgba(234,113,46,1)"
        onClick={handleDeleteTask}
      >
        <path d="M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9ZM9 12V18H11V12H9ZM13 12V18H15V12H13Z"></path>
      </svg>
    </li>
  );
}

export default Task;
