/* ./src/components/Task.js
  This is the component to render a single task
*/

import React, { useContext } from "react";
import DataContext from "../context/DataContext"; // Import the DataContext

import TaskDate from "./TaskDate";
import ExpandButton from "./ExpandButton";

/* Render a single task */
const Task = ({ task, index }) => {
  /* CONTEXT IMPORTS */
  const { dateFormat, toggleTaskCompletion, deleteTask } =
    useContext(DataContext); // Import the necessary functions and values from DataContext
  const taskId = task.id; // Get the task's ID

  return (
    <div className="task-block" id={`block-task-${taskId}`}>
      <div className="title-task">
        <div>
          <h3>{task.title}</h3>
          <p>Tâche créé le {dateFormat(task.createdAt)}</p>
        </div>
        <div className="checkbox-block">
          <input
            type="checkbox"
            checked={task.isChecked}
            onChange={() => toggleTaskCompletion(taskId)}
          />
        </div>
      </div>

      <div className="task-info">
        <TaskDate task={task} index={index} />
        <div className="delete-block">
          <button
            className="not-valid-button"
            onClick={() => deleteTask(task.id)}
          >
            SUPPRIMER
          </button>
        </div>
      </div>

      {/* Render the task's description if it is expanded */}
      {task.expanded && (
        <div className="description-block">
          <h4>Description de la tâche : </h4>
          <p>{task.description}</p>
        </div>
      )}

      {/* Render either a REDUIRE or ETENDRE button depending on if the task is expanded */}
      {task.description && <ExpandButton task={task} index={index} />}
    </div>
  );
};

/* Export the component as default */
export default Task;
