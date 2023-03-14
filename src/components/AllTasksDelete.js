/* ./src/components/AllTasksDelete.js
This is the component that manages the deletion of all tasks
*/

import React, { useContext } from "react";
import DataContext from "../context/DataContext"; // Import the DataContext

import ConfirmationDialog from "./ConfirmationDialog";

const AllTasksDelete = () => {
  /* CONTEXT IMPORTS */
  const { deleteAllTask, setDeleteAllTask, clearAllTasks } =
    useContext(DataContext); // Import the necessary functions and values from DataContext

  return (
    <div className="delete-all-tasks">
      {/* Display the Delete button for the taskList */}
      {!deleteAllTask && (
        <button
          className="not-valid-button"
          onClick={() => {
            setDeleteAllTask(true);
          }} // Show confirmation dialog
        >
          TOUS SUPPRIMER
        </button>
      )}
      {/* Display the confirmation set for delete the taskList */}
      {deleteAllTask && (
        <ConfirmationDialog
          message="Voulez-vous vraiment supprimer toutes les tâches ?" // Message to display in confirmation dialog
          onConfirm={() => {
            clearAllTasks();
            setDeleteAllTask(false);
          }} // Function to be called when confirm button is clicked
          onCancel={() => setDeleteAllTask(false)} // Function to be called when cancel button is clicked
        />
      )}
    </div>
  );
};

export default AllTasksDelete;
