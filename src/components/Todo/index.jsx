/* eslint-disable */
import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { PiDotsSixVerticalBold } from "react-icons/pi";

export default function TodoList() {
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
      id: 5,
      title: "Suffer again",
      completed: false,
    },
    {
      id: 6,
      title: "Sleep",
      completed: false,
    },
  ];

  return (
    <div
      className="flex flex-col justify-start items-center h-screen bg-no-repeat object-fill"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1602828889956-45ec6cee6758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* User Image Here */}
      <div className="h-24 w-24 mt-[6%]">
        <img
          src="https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/images/person/james-person-1.jpg"
          alt="u-image"
          className="rounded-full"
        />
      </div>

      <div className="p-2 sm:w-[400px] w-[300px]">
        {/* Tasks to do */}
        <div className="bg-orange-100 p-4 flex flex-row justify-between mt-[2%] rounded-lg shadow-2xl">
          <div className="flex items-center gap-2">
            <AiOutlineBars />
            <h3>To Do Today</h3>
          </div>
          <div className="self-center">
            <BsChevronDown />
          </div>
        </div>

        {/* Tasks Component Belows */}
        <div className="bg-white p-2 mt-[4%] rounded-lg">
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
    </div>
  );
}
