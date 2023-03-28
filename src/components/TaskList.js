/* ./src/components/TaskList.js
this is the component to render the list of tasks
*/

import React, { useContext } from "react";
import DataContext from "../context/DataContext"; // Import the DataContext
import AllTasksDelete from "./AllTasksDelete"; // Import the Task component
import TaskListMapping from "./TaskListMapping"; // Import the Task component

/* Render the list of tasks */
const TaskList = () => {
  /* CONTEXT IMPORTS */
  const { tasks } = useContext(DataContext); // Import the tasks and clearAllTasks functions from DataContext
  console.log(tasks);
  return (
    <section id="tasks-list">
      <div className="secondary-header">
        <h2>Liste des tâches</h2>
      </div>

      {tasks.length === 0 ? (
        <div className="no-activity">Vous n'avez pas de Tâche en cours !</div>
      ) : (
        <>
          <AllTasksDelete />
          <TaskListMapping />
        </>
      )}
    </section>
  );
};

/* Export the component as default */
export default TaskList;
