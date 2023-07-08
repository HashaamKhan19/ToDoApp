/* eslint-disable */
import React from "react";

const DeleteTask = ({ open, setOpen }) => {
  const toggleModal = () => {
    setOpen(!open);
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
              <button className="bg-red-700 text-white p-2 rounded-md hover:bg-red-800">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteTask;
