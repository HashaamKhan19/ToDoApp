/* eslint-disable */
import React from "react";
import AllTasks from "./AllTasks";

export default function TodoList() {
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

      {/* Tasks to do */}
      <AllTasks />
    </div>
  );
}
