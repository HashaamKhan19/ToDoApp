/* eslint-disable */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const DeleteTask = ({ open, setOpen, taskToDelete }) => {
  const toggleModal = () => {
    setOpen(!open);
  };

  const [loading, setLoading] = useState(false);

  const deleteTask = async () => {
    try {
      setLoading(true);
      const results = await axios.delete(
        `http://localhost:3000/tasks/${taskToDelete}`
      );
      setLoading(false);
      console.log("Deleted task:", results);
      setOpen(false);
    } catch (error) {
      setLoading(false);
      console.error("Error deleting task", error);
      setOpen(false);
    }
  };

  return (
    <div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-bold mb-4 max-w-sm text-center">
              Are you sure you want to delete this task? This action is
              irreversable.
            </h2>
            <div className="flex justify-end gap-2">
              <button
                className="hover:bg-black text-white p-2 rounded-md bg-gray-800"
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button
                className="bg-red-700 text-white p-2 rounded-md hover:bg-red-800"
                onClick={deleteTask}
              >
                {loading ? (
                  <ClipLoader color="white" size={12} />
                ) : (
                  "Delete Task"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteTask;
