/* ./src/components/ExpandButton.js
  This is the component to render either a REDUIRE or ETENDRE button depending on if the task is expanded
*/

import React, { useContext } from "react";
import DataContext from "../context/DataContext"; // Import the DataContext

const ExpandButton = (task, index) => {
  const { toggleTask } = useContext(DataContext); // Import the necessary functions and values from DataContext
  const taskIndex = task.index;

  //   console.log(task.expanded);

  return (
    <div className="expand-block">
      {task.task.expanded === true ? (
        <button className="valid-button" onClick={() => toggleTask(taskIndex)}>
          REDUIRE
        </button>
      ) : (
        <button
          className="expand-button valid-button"
          onClick={() => toggleTask(taskIndex)}
        >
          ETENDRE
        </button>
      )}
    </div>
  );
};

export default ExpandButton;
