import React, { useContext } from "react";
import DataContext from "../context/DataContext"; // Import the DataContext
import Task from "./Task"; // Import the Task component

/* Render the list of tasks */
const TaskListMapping = () => {
  /* CONTEXT IMPORTS */
  const { tasks } = useContext(DataContext); // Import the tasks and clearAllTasks functions from DataContext

  return (
    <React.Fragment>
      {/* Render the Task component for each task in the tasks array */}
      {tasks.map((task, index) => (
        <Task key={index} task={task} index={index} />
      ))}
    </React.Fragment>
  );
};

/* Export the component as default */
export default TaskListMapping;
