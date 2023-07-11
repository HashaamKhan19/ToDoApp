/* eslint-disable */
import React from "react";
import AllTasks from "./AllTasks";
import user from "/images/user.jpg";

export default function TodoList() {
  return (
    <div
      className="flex flex-col justify-start items-center h-screen bg-no-repeat object-fill"
      style={{
        backgroundImage: "url(/images/bg.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* User Image Here */}
      <div className="h-24 w-24 mt-[6%]">
        <img src={user} alt="u-image" className="rounded-full" />
      </div>

      {/* Tasks to do */}
      <AllTasks />
    </div>
  );
}
