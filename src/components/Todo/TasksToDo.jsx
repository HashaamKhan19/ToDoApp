/* eslint-disable */
import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { PiDotsSixVerticalBold } from "react-icons/pi";

const TasksToDo = () => {
  const [showTasks, setShowTasks] = useState(true);

  const tasks = [
    {
      id: 1,
      title: "Wake Up",
      completed: false,
    },

    {
      id: 2,
      title: "Suffer",
      completed: false,
    },
    {
      id: 3,
      title: "Suffer More",
      completed: false,
    },
    {
      id: 4,
      title: "Go to bed",
      completed: false,
    },
    {
      id: 6,
      title: "Sleep",
      completed: false,
    },
  ];
  return (
    <div className="p-2 sm:w-[400px] w-[300px]">
      {/* Tasks to do */}
      <div
        className="bg-orange-100 p-4 flex flex-row justify-between mt-[2%] rounded-lg shadow-2xl cursor-pointer ease-in-out duration-500 hover:bg-orange-200"
        onClick={() => setShowTasks(!showTasks)}
      >
        <div className="flex items-center gap-2">
          <AiOutlineBars />
          <h3>To Do Today</h3>
        </div>
        <div className="self-center">
          {showTasks ? <BsChevronDown /> : <BsChevronUp />}
        </div>
      </div>

      {/* Tasks Component Belows */}
      <div
        className={`bg-white p-2 mt-[4%] max-h-[400px] overflow-y-auto rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${
          showTasks ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {tasks.map((task) => (
          <div
            className="flex flex-row justify-between px-2 py-4 border-b-2 border-gray-100"
            key={task.id}
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id={task.id}
                name={task.title}
                className="h-4 w-4 rounded-full"
              />
              <label htmlFor="vehicle1">{task.title}</label>
            </div>
            <div className="self-center">
              <PiDotsSixVerticalBold />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksToDo;
