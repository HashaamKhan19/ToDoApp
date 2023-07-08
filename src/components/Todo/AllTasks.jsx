/* eslint-disable */
import React from "react";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { ClipLoader } from "react-spinners";

const AllTasks = ({ errors, tasks, loading, showTasks }) => {
  return (
    <div
      className={`bg-white p-2 mt-[4%] max-h-[400px] overflow-y-auto rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
        showTasks
          ? "max-h-[1000px] opacity-100"
          : "max-h-0 opacity-0 pointer-events-none"
      }`}
    >
      {loading ? (
        <div className="flex justify-center">
          <ClipLoader color="red" size={50} />
        </div>
      ) : errors.length !== 0 ? (
        <div className="flex justify-center">
          <p>Network Error</p>
        </div>
      ) : tasks.length === 0 ? (
        <div className="flex justify-center">
          <p>No Tasks Yet</p>
        </div>
      ) : (
        tasks.map((task) => (
          <div
            className="flex flex-row justify-between px-2 py-4 border-b-2 border-gray-100 cursor-pointer"
            key={task._id}
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
        ))
      )}
    </div>
  );
};

export default AllTasks;
