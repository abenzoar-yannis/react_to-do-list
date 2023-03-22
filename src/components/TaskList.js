/* ./src/components/TaskList.js
this is the component to render the list of tasks
*/

import React, { useContext } from "react";
import DataContext from "../context/DataContext"; // Import the DataContext
import Task from "./Task"; // Import the Task component
import AllTasksDelete from "./AllTasksDelete"; // Import the Task component

/* Render the list of tasks */
const TaskList = () => {
  /* CONTEXT IMPORTS */
  const { tasks } = useContext(DataContext); // Import the tasks and clearAllTasks functions from DataContext

  return (
    <section id="tasks-list">
      <div className="secondary-header">
        <h2>Liste des tâches</h2>
      </div>
      <AllTasksDelete />
      {/* Render a button that clears all tasks */}
      {tasks.map((task, index) => (
        <Task key={index} task={task} index={index} />
      ))}
      {/* Render the Task component for each task in the tasks array */}
    </section>
  );
};

/* Export the component as default */
export default TaskList;
