/* eslint-disable */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { ClipLoader } from "react-spinners";
import DeleteTask from "./DeleteTask";

const AllTasks = () => {
  const [showTasks, setShowTasks] = useState(true);
  const [loading, setLoading] = useState(false);

  const [tasks, setTasks] = useState([]);
  const [errors, setErrors] = useState([]);

  const [taskToDelete, setTaskToDelete] = useState("");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const results = await axios.get(
          "https://todo-app-cowlar-11bfdfa6ca3a.herokuapp.com/tasks"
        );
        setTasks(results?.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setErrors(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const updateTask = async (id) => {
    try {
      console.log("id:", id);
      const results = await axios.put(
        `https://todo-app-cowlar-11bfdfa6ca3a.herokuapp.com/tasks/${id}`
      );
      console.log("Updated task:", results);
    } catch (error) {
      console.error("Error updating task", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const results = await axios.get(
          "https://todo-app-cowlar-11bfdfa6ca3a.herokuapp.com/tasks"
        );
        setTasks(results?.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setErrors(error);
      }
    };
    fetchData();
    setLoading(false);
  }, [taskToDelete, loading, errors, setTasks, updateTask]);

  return (
    <>
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
          className={`bg-white p-2 mt-[4%] max-h-[400px] overflow-y-auto rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
            showTasks
              ? "max-h-[1000px] opacity-100"
              : "h-0 opacity-0 pointer-events-none"
          }`}
        >
          {loading ? (
            <div className="flex justify-center">
              <ClipLoader color="red" size={50} />
            </div>
          ) : errors.length !== 0 ? (
            <div className="flex justify-center">
              <p>{errors.message}</p>
            </div>
          ) : tasks.length === 0 ? (
            <div className="flex justify-center">
              <p>No Tasks Yet</p>
            </div>
          ) : (
            tasks.map((task) => (
              <div
                className="flex flex-row justify-between px-2 py-4 border-b-2 border-gray-100 cursor-pointer"
                key={task?._id}
                onClick={() => {
                  console.log(task?._id);
                }}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={task?._id}
                    name={task?.title}
                    className="h-4 w-4 rounded-full"
                    checked={task?.completed === true ? "checked" : ""}
                    onChange={() => {
                      updateTask(task?._id);
                    }}
                  />
                  <label htmlFor="vehicle1">{task.title}</label>
                </div>
                <div
                  className="self-center transition-all ease-in duration-200 hover:bg-slate-100 p-2 rounded-md"
                  onClick={() => {
                    setOpen(!open);
                    setTaskToDelete(task._id);
                  }}
                >
                  <PiDotsSixVerticalBold />
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <DeleteTask open={open} setOpen={setOpen} taskToDelete={taskToDelete} />
    </>
  );
};

export default AllTasks;
