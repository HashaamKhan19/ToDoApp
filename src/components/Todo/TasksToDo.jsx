/* eslint-disable */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { ClipLoader } from "react-spinners";
import AllTasks from "./AllTasks";

const TasksToDo = () => {
  const [showTasks, setShowTasks] = useState(true);
  const [loading, setLoading] = useState(false);

  const [tasks, setTasks] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const results = await axios.get("http://localhost:3000/tasks");
        setTasks(results?.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setErrors(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

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
      <AllTasks
        errors={errors}
        tasks={tasks}
        loading={loading}
        showTasks={showTasks}
      />
    </div>
  );
};

export default TasksToDo;
