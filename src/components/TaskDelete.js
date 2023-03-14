/* ./src/components/TaskDelete.js
  This is the component to manage a task deletion
*/

import React, { useContext } from "react";
import DataContext from "../context/DataContext"; // Import the DataContext

import ConfirmationDialog from "./ConfirmationDialog";

const TaskDelete = (taskId) => {
  /* CONTEXT IMPORTS */
  const {
    showConfirmation,
    setShowConfirmation,
    deleteTask,
    whatId,
    setWhatId,
  } = useContext(DataContext); // Import the necessary functions and values from DataContext

  return (
    <div className="delete-block">
      {/* Display the Delete button for a task */}
      {/* If confirmation dialog should not be displayed or the task ID does not match the one clicked */}
      {!showConfirmation || whatId.taskId !== taskId.taskId ? (
        <button
          className="not-valid-button"
          onClick={() => {
            setShowConfirmation(true); // Show confirmation dialog
            setWhatId(taskId); // Set the task clicked for deletion
          }}
        >
          SUPPRIMER
        </button>
      ) : (
        ""
      )}
      {/* Display the confirmation set for delete a task */}
      {/* If confirmation dialog should be displayed and the task ID matches the one clicked */}
      {showConfirmation && whatId.taskId === taskId.taskId ? (
        <ConfirmationDialog
          message="Voulez-vous vraiment supprimer cette tâche ?" // Message to display in confirmation dialog
          onConfirm={() => deleteTask(taskId)} // Function to be called when confirm button is clicked
          onCancel={() => setShowConfirmation(false)} // Function to be called when cancel button is clicked
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default TaskDelete;
