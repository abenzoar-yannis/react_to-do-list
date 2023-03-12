/* ./src/components/TaskList.js
this is the component to render the list of tasks
*/

import React, { useContext } from "react";
import DataContext from "../context/DataContext"; // Import the DataContext
import Task from "./Task"; // Import the Task component

/* Render the list of tasks */
const TaskList = () => {
  /* CONTEXT IMPORTS */
  const { tasks, clearAllTasks } = useContext(DataContext); // Import the tasks and clearAllTasks functions from DataContext

  return (
    <div id="tasks-list">
      <h2>Liste des tâches</h2>
      <button className="not-valid-button" onClick={() => clearAllTasks()}>
        TOUS SUPPRIMER
      </button>
      {/* Render a button that clears all tasks */}
      {tasks.map((task, index) => (
        <Task key={index} task={task} index={index} />
      ))}
      {/* Render the Task component for each task in the tasks array */}
    </div>
  );
};

/* Export the component as default */
export default TaskList;
