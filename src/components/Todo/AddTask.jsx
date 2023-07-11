/* eslint-disable */
import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";

const AddTask = ({ addOpen, setAddOpen }) => {
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);

  const addTask = async () => {
    if (task === "") {
      alert("Please enter a task");
      return;
    }
    if (task.length < 3) {
      alert("Task must be at least 3 characters long");
      return;
    }

    try {
      setLoading(true);
      const results = await axios.post(
        "https://todo-app-cowlar-11bfdfa6ca3a.herokuapp.com/tasks/addTask",
        {
          title: task,
        }
      );
      console.log("Added task:", results);
      setLoading(false);
      setAddOpen(!addOpen);
    } catch (error) {
      console.error("Error adding task:", error);
      setLoading(false);
      setAddOpen(!addOpen);
    }
  };

  return (
    <div>
      {addOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute bg-white p-8 rounded-lg shadow-md w-[30%]">
            <h2 className="text-lg font-bold mb-4 text-center">Add Task</h2>

            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Task Title"
                className="border border-gray-300 p-2 rounded-md w-full"
                onChange={(e) => {
                  setTask(e.target.value);
                }}
                maxLength={24}
              />
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                className="hover:bg-black text-white p-2 rounded-md bg-gray-800"
                onClick={() => {
                  setAddOpen(!addOpen);
                }}
              >
                Cancel
              </button>
              <button className="bg-red-700 text-white p-2 rounded-md hover:bg-red-800">
                {loading ? (
                  <ClipLoader color="white" size={14} />
                ) : (
                  <span onClick={addTask}>Add</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTask;
